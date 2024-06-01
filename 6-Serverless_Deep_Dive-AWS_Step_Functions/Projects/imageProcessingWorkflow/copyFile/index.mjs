import { CopyObjectCommand, S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({ region: "us-east-1" });

export const handler = async (event) => {
  const params = {
    Bucket: process.env.DESTINATION_BUCKET,
    CopySource: encodeURI(
      "/" + event.s3.bucket.name + "/" + event.s3.object.key
      // `/${event.s3.bucket.name}/${event.s3.object.key}`
    ),
    Key: event.s3.object.key,
  };

  try {
    const copyObjectCmd = new CopyObjectCommand(params);

    const response = await s3Client.send(copyObjectCmd);

    console.log(
      `CopyObjectCommand response: ${JSON.stringify(response, null, 2)}`
    );

    return {
      region: "us-east-1",
      bucket: process.env.DESTINATION_BUCKET,
      key: event.s3.object.key,
    };
  } catch (error) {
    console.log(`Error occurred: ${error}`);
  }
};
