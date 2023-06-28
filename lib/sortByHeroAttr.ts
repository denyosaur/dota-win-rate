import { HeroesFromApi, HeroByAttr } from '@/interface';

export const sortByHeroAttr = (data: HeroesFromApi[]) => {
  const heroByAttr: HeroByAttr = {
    agi: [],
    str: [],
    int: [],
    all: [],
  };

  data.forEach((hero: HeroesFromApi) => {
    const { primary_attributes } = hero;
    heroByAttr[primary_attributes as keyof HeroByAttr].push(hero);
  })

  return heroByAttr;
}
