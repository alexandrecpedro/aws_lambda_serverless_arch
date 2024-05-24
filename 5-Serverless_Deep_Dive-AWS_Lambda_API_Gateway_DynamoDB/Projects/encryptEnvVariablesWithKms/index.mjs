import { DecryptCommand, KMSClient } from "@aws-sdk/client-kms";

const kmsClient = new KMSClient({ region: "us-east-1" });

const lambdaFuncName = process.env.AWS_LAMBDA_FUNCTION_NAME;
const encrypted = process.env["APP_SECRET"];
let decrypted;

async function decryptSecret() {
  // Decrypt code should run once
  // and variables stored outside of the function
  // handler so that these are decrypted once per container
  try {
    const decryptCmd = new DecryptCommand({
      CiphertextBlob: Buffer.from(encrypted, "base64"),
      EncryptionContext: { LambdaFunctionName: lambdaFuncName },
    });
    const data = await kmsClient.send(decryptCmd);
    decrypted = Buffer.from(data.Plaintext).toString();

    console.log(`DecryptCommand response: ${JSON.stringify(data, null, 2)}`);
  } catch (error) {
    console.log(`Error occurred: ${error}`);
  } finally {
    kmsClient.destroy();
  }
}

async function processEvent(event, context) {
  let log = event;

  log.lambdaFunction = context.functionName;
  log.lambdaVersion = context.functionVersion;

  log.appName = process.env.APP_NAME;
  log.appSecret = process.env.APP_SECRET;
  log.appSecretDecrypted = decrypted;

  return log;
}

export const handler = async (event, context) => {
  if (!decrypted) {
    await decryptSecret();
  }

  return processEvent(event, context);
};
