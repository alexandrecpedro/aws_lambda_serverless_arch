import {
  // CreateTableCommand,
  // DeleteTableCommand,
  // DescribeTableCommand,
  // UpdateTableCommand,
  DynamoDBClient,
  ListTablesCommand,
} from "@aws-sdk/client-dynamodb";
import "dotenv/config";

const dynamoDBClient = new DynamoDBClient({ region: process.env.AWS_REGION });

try {
  // TODO: LIST TABLES
  const listTablesCmd = new ListTablesCommand({});
  const response = await dynamoDBClient.send(listTablesCmd);
  console.log(
    `ListTablesCommand response: ${JSON.stringify(response, null, 2)}`
  );

  // TODO: RETRIEVE TABLE INFORMATION (structure, status and metadata)
  // const describeTableCmd = new DescribeTableCommand({
  //   TableName: "td_notes",
  // });
  // const response = await dynamoDBClient.send(describeTableCmd);
  // console.log(
  //   `DescribeTableCommand response: ${JSON.stringify(response, null, 2)}`
  // );

  // TODO: CREATE TABLE
  // const createTableCmd = new CreateTableCommand({
  //   TableName: "td_notes_sdk",
  //   AttributeDefinitions: [
  //     { AttributeName: "user_id", AttributeType: "S" },
  //     { AttributeName: "timestamp", AttributeType: "N" },
  //   ],
  //   KeySchema: [
  //     { AttributeName: "user_id", KeyType: "HASH" },
  //     { AttributeName: "timestamp", KeyType: "RANGE" },
  //   ],
  //   ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 1 },
  // });
  // const response = await dynamoDBClient.send(createTableCmd);
  // console.log(
  //   `CreateTableCommand response: ${JSON.stringify(response, null, 2)}`
  // );

  // TODO: UPDATE TABLE
  // const updateTableCmd = new UpdateTableCommand({
  //   TableName: "td_notes_sdk",
  //   ProvisionedThroughput: { ReadCapacityUnits: 2, WriteCapacityUnits: 1 },
  // });
  // const response = await dynamoDBClient.send(updateTableCmd);
  // console.log(
  //   `UpdateTableCommand response: ${JSON.stringify(response, null, 2)}`
  // );

  // TODO: DELETE TABLE
  // const deleteTableCmd = new DeleteTableCommand({ TableName: "td_notes_sdk" });
  // const response = await dynamoDBClient.send(deleteTableCmd);
  // console.log(
  //   `DeleteTableCommand response: ${JSON.stringify(response, null, 2)}`
  // );
} catch (error) {
  console.log(`Error occurred: ${error}`);
} finally {
  dynamoDBClient.destroy();
}

// dynamodb.deleteTable({
//     TableName: "td_notes_sdk"
// }, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });
