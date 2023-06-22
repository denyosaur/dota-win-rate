import { getHeroes } from '@/lib/get_heroes';
import { Hero } from '@/interface';

import { sortByHeroAttr } from './sortByHeroAttr';

export const postWinRates = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/winrate-update', { method: 'POST' })
    console.log(res);
    return res;
  } catch (err) {
    console.error(`Error: ${err}`);
  }
};
