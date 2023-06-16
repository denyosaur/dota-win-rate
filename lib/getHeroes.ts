import { heroesApiRequest } from '@/api/heroesApiRequest';
import { Hero } from '@/interface';

import { sortByHeroAttr } from './sortByHeroAttr';

export const getHeroes = async () => {
  const res = await heroesApiRequest();
  res.sort((a, b) => a.localized_name.localeCompare(b.localized_name));

  const sortedHeroes = sortByHeroAttr(res);

  return sortedHeroes;
}
