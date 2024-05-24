import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";
import async from "async";
import "dotenv/config";
import _ from "underscore";

const ddbClient = new DynamoDBClient({ region: process.env.AWS_REGION });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

let startKey = [];
let results = [];
let pages = 0;

try {
  async.doWhilst(
    // iteratee function - executed when truth test returns true
    async (callback) => {
      let params = {
        TableName: "td_notes",
        Limit: 2,
      };

      if (!_.isEmpty(startKey)) {
        params.ExclusiveStartKey = startKey;
      }

      try {
        const scanCmd = new ScanCommand(params);
        const response = await ddbDocClient.send(scanCmd);

        startKey =
          typeof response.LastEvaluatedKey !== "undefined"
            ? response.LastEvaluatedKey
            : [];

        if (!_.isEmpty(response.Items)) {
          results = _.union(results, response.Items);
        }

        pages++;

        console.log(`***`);
        console.log(`async.doWhilst iteratee, page=${pages}`);
        console.log(
          `async.doWhilst iteratee, results=${JSON.stringify(
            response.Items,
            null,
            2
          )}`
        );

        return results;
      } catch (error) {
        throw error;
      }
    },

    // truth test
    (results, callback) => {
      if (_.isEmpty(startKey)) {
        return callback(null, false);
      }
      return callback(null, true);
    },

    // callback - runs only when the truth test returns false
    (error, data) => {
      if (error) {
        console.log(`async.doWhilst callback, error occurred: ${error}`);
        return;
      }
      console.log(`=======`);
      console.log(`Final data: ${JSON.stringify(data, null, 2)}`);
      console.log(`Number of items: ${data.length}`);
      console.log(`Number of pages: ${pages}`);
    }
  );
} catch (error) {
  console.log(`Error occurred: ${error}`);
} finally {
  ddbDocClient.destroy();
  ddbClient.destroy();
}
