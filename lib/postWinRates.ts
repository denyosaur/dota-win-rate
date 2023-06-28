
export const postWinRates = async () => {
  try {
    const res = await fetch('api/winrate', { method: 'POST' })
    return res;
  } catch (err) {
    throw err;
  }
};
