export const handler = async (event, context) => {
  let log = event;

  log.lambdaFunction = context.functionName;
  log.lambdaVersion = context.functionVersion;

  log.appName = process.env.APP_NAME;
  log.appSecret = process.env.APP_SECRET;

  // one more comment
  return log;
};
