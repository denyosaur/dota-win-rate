import { getHeroes } from '@/lib/get_heroes';

import { sortByHeroAttr } from './sortByHeroAttr';

export const getAndSortHeroes = async () => {
  try {
    const res = await getHeroes();
    res.sort((a, b) => a.localized_name.localeCompare(b.localized_name));

    const sortedHeroes = sortByHeroAttr(res);

    return sortedHeroes;
  } catch (err) {
    console.error(`Error: ${err}`);
  }
};
