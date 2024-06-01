export const handler = async (event) => {
  const filename = event.s3.object.key;
  const index = filename.lastIndexOf(".");

  if (index > 0) return filename.substring(index + 1);
  return null;
};
