import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import gm from "gm";
import fs from "node:fs/promises";
import os from "node:os";
import { v4 as uuidv4 } from "uuid";

const s3 = new S3Client({ region: "us-east-1" });
const im = gm.subClass({
  imageMagick: "7+",
  appPath: "../imagemagick/bin/",
});

const resizeImage = async (imgSrc, imgDst, width, height = undefined) => {
  return new Promise((resolve, reject) => {
    im(imgSrc)
      .resize(width, height)
      .write(imgDst, (err) => {
        if (err) {
          const errReason = `resizeImage operation failed: ${err}`;
          console.log(errReason);
          reject(errReason);
        } else {
          console.log(`resizeImage operation completed successfully`);
          resolve();
        }
      });
  });
};

export const handler = async (event) => {
  let filesProcessed = event.Records.map(async (record) => {
    let bucket = record.s3.bucket.name;
    let filename = record.s3.object.key;

    // Get file from S3
    let params = {
      Bucket: bucket,
      Key: filename,
    };
    const getObjectCommand = new GetObjectCommand(params);
    let inputData = await s3.send(getObjectCommand);

    // Resize the file
    let tempFile = os.tmpdir() + "/" + uuidv4() + ".png";
    await resizeImage(inputData.Body, tempFile, 150);

    // Read the resized file
    let resizedData = await fs.readFile(tempFile);

    // Upload the new file to s3
    let targetFilename =
      filename.substring(0, filename.lastIndexOf(".")) + "-small.png";
    params = {
      Bucket: bucket + "-dest",
      Key: targetFilename,
      Body: resizedData,
      ContentType: "image/png",
    };

    const putObjectCommand = new PutObjectCommand(params);
    await s3.send(putObjectCommand);

    return await fs.unlink(tempFile);
  });

  await Promise.all(filesProcessed);
  console.log("done");
  return "done";
};
