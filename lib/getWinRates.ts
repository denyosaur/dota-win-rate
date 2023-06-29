export const getWinRates = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/winrates/${id}`)

    const { data } = await res.json();

    return data;
  } catch (err) {
    getWinRates(id);
    throw err;
  }
}
