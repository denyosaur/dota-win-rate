import { sortByHeroAttr } from "./sortByHeroAttr";

export const getHeroes = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/heroes/`, { method: 'GET' })
    const { data } = await res.json();

    const sortedHeroes = sortByHeroAttr(data);

    return sortedHeroes;
  } catch (err) {
    throw err;
  }
}