import moment from "moment";

const greeting = {
  en: "Hello",
  fr: "Bonjour",
  hi: "Namaste",
  es: "Hola",
  pt: "Olá",
  ur: "Assalamo aleikum",
  it: "Ciao",
  de: "Hallo",
};

export const handler = async (event) => {
  let name = event.pathParameters.name;
  let { lang, ...info } = event.queryStringParameters || {};

  let message = `${greeting[lang] ? greeting[lang] : greeting["en"]} ${name}`;
  let response = {
    message: message,
    info: info,
    timestamp: moment().unix(),
  };

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // accessible to all websites (set CORS)
    },
    body: JSON.stringify(response),
  };
};
