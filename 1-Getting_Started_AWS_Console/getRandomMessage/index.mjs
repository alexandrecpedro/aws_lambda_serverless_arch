var messages = [
  "Hello World!",
  "Hello Serverless!",
  "It's a great day today!",
  "Yay, I'm learning something new today!",
  "On cloud nine!",
  "Over the moon!",
  "Shooting for the stars!",
  "On top of the World!",
  "World at my feet!",
  "Doing everything I love!",
];

// // TODO: Export a function that generates a random message - Node 6
// exports.handler = (event, context, callback) => {
//   let message = messages[Math.floor(Math.random() * 10)];
//   callback(null, message);
// };

export const handler = (event, context, callback) => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  callback(null, message);
};
