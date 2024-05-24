export const handler = async (event, context) => {
  let log = event;

  log.lambdaFunction = context.functionName;
  log.lambdaVersion = context.functionVersion;

  // one more comment
  return log;
};
