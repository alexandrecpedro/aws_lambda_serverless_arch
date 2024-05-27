import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda";
import "dotenv/config";

const lambdaClient = new LambdaClient({ region: process.env.AWS_REGION });

export const handler = async (event) => {
  const number = event.number;
  const payload = JSON.stringify({
    operation: process.env.OPERATION,
    input: {
      operand1: number,
      operand2: number,
    },
  });

  let params = {
    FunctionName: process.env.LAMBDA_NAME,
    InvocationType: process.env.INVOCATION_TYPE,
    Payload: payload,
  };

  try {
    const invokeCmd = new InvokeCommand(params);

    const calculatorResponse = await lambdaClient.send(invokeCmd);

    console.log(
      `InvokeCommand response: ${JSON.stringify(calculatorResponse, null, 2)}`
    );

    const result = JSON.parse(
      Buffer.from(calculatorResponse.Payload).toString()
    );

    return result.body;
  } catch (error) {
    console.log(`Error occurred: ${error}`);
  }
};
