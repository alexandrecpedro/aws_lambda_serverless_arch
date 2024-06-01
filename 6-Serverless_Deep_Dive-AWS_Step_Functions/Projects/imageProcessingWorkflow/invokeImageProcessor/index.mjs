import { SFNClient, StartExecutionCommand } from "@aws-sdk/client-sfn";

const sfnClient = new SFNClient({ region: "us-east-1" });

export const handler = async (event) => {
  console.log(JSON.stringify(event));

  try {
    const filesProcessed = event.Records.map(async (record) => {
      const params = {
        stateMachineArn: process.env.STATE_MACHINE_ARN,
        input: JSON.stringify(record),
      };

      const startExecutionCommand = new StartExecutionCommand(params);

      const data = await sfnClient.send(startExecutionCommand);

      console.log(
        `StartExecutionCommand response: ${JSON.stringify(data, null, 2)}`
      );

      return data;
    });

    const results = await Promise.all(filesProcessed);
    return results;
  } catch (error) {
    console.log(`Error occurred: ${error}`);
  }
};
