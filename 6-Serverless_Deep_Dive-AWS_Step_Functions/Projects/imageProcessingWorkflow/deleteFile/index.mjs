import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({ region: "us-east-1" });

export const handler = async (event) => {
  const params = {
    Bucket: event.s3.bucket.name,
    Key: event.s3.object.key,
  };

  try {
    const deleteObjectCmd = new DeleteObjectCommand(params);
    const response = await s3Client.send(deleteObjectCmd);

    console.log(
      `DeleteObjectCommand response: ${JSON.stringify(response, null, 2)}`
    );

    return true;
  } catch (error) {
    console.log(`Error occurred: ${error}`);
  }
};
