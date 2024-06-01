import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import gm from "gm";
import fs from "node:fs/promises";
import os from "node:os";
import { v4 as uuidv4 } from "uuid";

const s3Client = new S3Client({ region: "us-east-1" });
const im = gm.subClass({ imageMagick: "7+", appPath: "./imagemagick/bin/" });

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
  const bucket = event.s3.bucket.name;
  const filename = event.s3.object.key;

  // Get file from S3
  let params = {
    Bucket: bucket,
    Key: filename,
  };
  const getObjectCmd = new GetObjectCommand(params);
  const imgSrcData = await s3Client.send(getObjectCmd);

  // Resize the file
  const tempFile = os.tmpdir() + "/" + uuidv4() + ".jpg";
  await resizeImage(imgSrcData.Body, tempFile, process.env.IMAGE_WIDTH_PX);

  // Read the resized file
  const imgResizedData = await fs.readFile(tempFile);

  // Upload the new file to s3
  const targetFilename =
    filename.substring(0, filename.lastIndexOf(".")) + "-small.jpg";
  params = {
    Bucket: process.env.DESTINATION_BUCKET,
    Key: targetFilename,
    Body: imgResizedData,
    ContentType: "image/jpeg",
  };

  const putObjectCmd = new PutObjectCommand(params);
  await s3Client.send(putObjectCmd);

  await fs.unlink(tempFile);

  return {
    region: "us-east-1",
    bucket: process.env.DESTINATION_BUCKET,
    key: targetFilename,
  };
};
