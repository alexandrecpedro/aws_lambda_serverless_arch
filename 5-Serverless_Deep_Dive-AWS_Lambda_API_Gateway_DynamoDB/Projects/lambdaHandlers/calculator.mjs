export const handler = async (event) => {
  let { operand1, operand2 } = event.input;

  let result;

  switch (event.operation) {
    case "add":
      result = operand1 + operand2;
      break;

    case "subtract":
      result = operand1 - operand2;
      break;

    case "multiply":
      result = operand1 * operand2;
      break;

    case "divide":
      result = operand1 / operand2;
      break;

    default:
      result = null;
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify(result),
  };

  return response;
};
