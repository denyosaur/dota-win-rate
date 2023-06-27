
export const postWinRates = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/winrate', { method: 'POST' })
    console.log(res);
    return res;
  } catch (err) {
    console.error(`Error: ${err}`);
  }
};
