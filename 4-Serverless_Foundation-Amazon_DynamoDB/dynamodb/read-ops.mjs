import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  // GetCommand,
  // QueryCommand,
  // ScanCommand,
  BatchGetCommand,
  DynamoDBDocumentClient,
} from "@aws-sdk/lib-dynamodb";
import "dotenv/config";

const ddbClient = new DynamoDBClient({ region: process.env.AWS_REGION });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

try {
  // TODO: GET ITEM
  // const getCmd = new GetCommand({
  //   TableName: "td_notes",
  //   Key: { user_id: "usrX", timestamp: 1694161790 },
  // });
  // const response = await ddbDocClient.send(getCmd);
  // console.log(`GetCommand response: ${JSON.stringify(response, null, 2)}`);

  // TODO: QUERY ITEM
  // const queryCmd = new QueryCommand({
  //   TableName: "td_notes",
  //   KeyConditionExpression: "user_id = :uid",
  //   FilterExpression: "#c = :cat and #un = :uname",
  //   ExpressionAttributeNames: { "#c": "cat", "#un": "user_name" },
  //   ExpressionAttributeValues: {
  //     ":uid": "usrX",
  //     ":cat": "news",
  //     ":uname": "Bob",
  //   },
  // });
  // const response = await ddbDocClient.send(queryCmd);
  // console.log(`QueryCommand response: ${JSON.stringify(response, null, 2)}`);

  // TODO: SCAN ITEM
  // const scanCmd = new ScanCommand({
  //   TableName: "td_notes",
  //   FilterExpression: "cat = :cat",
  //   ExpressionAttributeValues: { ":cat": "general" },
  // });
  // const response = await ddbDocClient.send(scanCmd);
  // console.log(`ScanCommand response: ${JSON.stringify(response, null, 2)}`);

  // TODO: BATCH GET ITEMS
  const batchGetCmd = new BatchGetCommand({
    RequestItems: {
      td_notes: {
        Keys: [
          { user_id: "usr1", timestamp: 1694162036 },
          { user_id: "usrX", timestamp: 1694161790 },
        ],
      },
      td_notes_sdk: { Keys: [{ user_id: "usr2", timestamp: 1694586991 }] },
    },
  });
  const response = await ddbDocClient.send(batchGetCmd);
  console.log(`BatchGetCommand response: ${JSON.stringify(response, null, 2)}`);
} catch (error) {
  console.log(`Error occurred: ${error}`);
} finally {
  ddbDocClient.destroy();
  ddbClient.destroy();
}
