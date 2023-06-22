import { Hero, HeroByAttr } from '@/interface';
import { sortByHeroAttr } from '@/lib/sortByHeroAttr';

export const getHeroes = async (): Promise<Hero[]> => {
  try {
    const apiUrl = 'https://api.opendota.com/api/heroes';
    const res = await fetch(apiUrl);
    const data: Hero[] = await res.json();

    if (data && data.length > 0) {
      return data;
    }
    throw new Error('No heroes found.');
  } catch (err) {
    throw (err);
  }
};
