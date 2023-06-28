
export const getAndPostMatches = async () => {
  try {
    const res = await fetch('/api/matches', { method: 'POST' })

  } catch (err) {
    throw err;
  }
};
