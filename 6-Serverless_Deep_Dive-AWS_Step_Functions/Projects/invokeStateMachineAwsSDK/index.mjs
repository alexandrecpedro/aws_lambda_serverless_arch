import { SFNClient, StartExecutionCommand } from "@aws-sdk/client-sfn";

// SFN = Step Function
const sfnClient = new SFNClient({ region: "us-east-1" });

export const handler = async (event) => {
  const params = {
    stateMachineArn:
      "arn:aws:states:us-east-1:1234567890:stateMachine:Helloworld",
    input: JSON.stringify(event),
    // Name field is an unique string automatically generated by Step Function (each execution)
    // name: "functionName" (optional field to be set)
  };

  try {
    const startExecutionCommand = new StartExecutionCommand(params);

    const data = await sfnClient.send(startExecutionCommand);

    console.log(
      `StartExecutionCommand response: ${JSON.stringify(data, null, 2)}`
    );

    return data;
  } catch (error) {
    console.log(`Error occurred: ${error}`);
  }
};