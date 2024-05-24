import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import "dotenv/config";

const ddbClient = new DynamoDBClient({ region: process.env.AWS_REGION });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

try {
  const putCmd = new PutCommand({
    TableName: "td_notes_sdk",
    Item: {
      user_id: "usrX",
      timestamp: 12345,
      title: "Happy programmer day! (changed)",
      content: "Today we celebrate programmer day 2023! (changed)",
    },
    ConditionExpression: "#t <> :t",
    ExpressionAttributeNames: {
      "#t": "timestamp",
    },
    ExpressionAttributeValues: {
      ":t": 12345,
    },
  });
  const response = await ddbDocClient.send(putCmd);
  console.log(`PutCommand response: ${JSON.stringify(response, null, 2)}`);
} catch (error) {
  console.log(`Error occurred: ${error}`);
} finally {
  ddbDocClient.destroy();
  ddbClient.destroy();
}

// docClient.put(
//   {
//     TableName: "td_notes_sdk",
//     Item: {
//       user_id: "ABC",
//       timestamp: 1,
//       title: "New Title",
//       content: "New Content",
//     },
//     ConditionExpression: "#t <> :t",
//     ExpressionAttributeNames: {
//       "#t": "timestamp",
//     },
//     ExpressionAttributeValues: {
//       ":t": 1,
//     },
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//   }
// );
