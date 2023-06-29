export const convertUnixTimestamp = (timestamp: string) => {
  const date = new Date(Number(timestamp) * 1000);

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${month}-${day}-${year}`
};
