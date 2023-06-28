export const getWinRates = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/winrates/${id}`, { method: 'GET' })
    const { data } = await res.json();

    return data;
  } catch (err) {
    throw err;
  }
}
