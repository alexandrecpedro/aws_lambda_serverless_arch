import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const ddbClient = new DynamoDBClient({ region: "us-east-1" });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

const processImageMeta = (images) => {
  let original, thumbnail;

  images.map((image) => {
    for (let key in image) {
      switch (key) {
        case "original":
          original = `${image.original.region}|${image.original.bucket}|${image.original.key}`;
          break;

        case "resized":
          thumbnail = `${image.resized.region}|${image.resized.bucket}|${image.resized.key}`;
          break;

        default:
      }
    }
  });

  return {
    original: original,
    thumbnail: thumbnail,
  };
};

export const handler = async (event) => {
  const images = processImageMeta(event.results.images);

  const params = {
    TableName: "thumbnails",
    Item: {
      original: images.original,
      thumbnail: images.thumbnail,
      timestamp: new Date().getTime(),
    },
  };

  try {
    const putCmd = new PutCommand(params);
    const response = await ddbDocClient.send(putCmd);
    console.log(`PutCommand response: ${JSON.stringify(response, null, 2)}`);
    return true;
  } catch (error) {
    console.log(`Error occurred: ${error}`);
  }
};
