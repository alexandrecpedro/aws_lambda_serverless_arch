import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  // PutCommand,
  // UpdateCommand,
  // DeleteCommand,
  BatchWriteCommand,
  DynamoDBDocumentClient,
} from "@aws-sdk/lib-dynamodb";
import "dotenv/config";

const ddbClient = new DynamoDBClient({ region: process.env.AWS_REGION });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

try {
  // TODO: PUT ITEM
  /* const putCmd = new PutCommand({
    TableName: "td_notes_sdk",
    Item: {
      user_id: "usr1",
      timestamp: 1694502522,
      title: "2-nd note",
      content: "Changed content of 2nd note",
    },
  });
  const response = await ddbDocClient.send(putCmd);
  console.log(`PutCommand response: ${JSON.stringify(response, null, 2)}`); */

  // TODO: UPDATE ITEM
  /* const updateCmd = new UpdateCommand({
    TableName: "td_notes_sdk",
    Key: { user_id: "usr1", timestamp: 1694502522 },
    UpdateExpression: "set #t = :t",
    ExpressionAttributeNames: {
      "#t": "title",
    },
    ExpressionAttributeValues: {
      ":t": "2-nd note (updated!)",
    },
  });
  const response = await ddbDocClient.send(updateCmd);
  console.log(`UpdateCommand response: ${JSON.stringify(response, null, 2)}`); */

  // TODO: DELETE ITEM
  /* const deleteCmd = new DeleteCommand({
    TableName: "td_notes_sdk",
    Key: { user_id: "usr1", timestamp: 1694502502 },
  });
  const response = await ddbDocClient.send(deleteCmd);
  console.log(`DeleteCommand response: ${JSON.stringify(response, null, 2)}`); */

  // TODO: BATCH PUT ITEM
  const batchWriteCmd = new BatchWriteCommand({
    RequestItems: {
      td_notes_sdk: [
        { DeleteRequest: { Key: { user_id: "usr1", timestamp: 1694502522 } } },
        {
          PutRequest: {
            Item: {
              user_id: "usr2",
              timestamp: 1694586991,
              title: "Note #1",
              content: "Content of note #1",
            },
          },
        },
        {
          PutRequest: {
            Item: {
              user_id: "usr3",
              timestamp: 1694586991 + 100,
              title: "My first note",
              content: "Content of my first note",
            },
          },
        },
      ],
    },
  });
  const response = await ddbDocClient.send(batchWriteCmd);
  console.log(
    `BatchWriteCommand response: ${JSON.stringify(response, null, 2)}`
  );
} catch (error) {
  console.log(`Error occurred: ${error}`);
} finally {
  ddbDocClient.destroy();
  ddbClient.destroy();
}
