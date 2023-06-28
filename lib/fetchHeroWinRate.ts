export const fetchHeroWinRate = async (heroId: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/winrates/${heroId}`, { method: 'GET' })

    return res;
  } catch (err) {
    throw err;
  }
}
