import { Hero, HeroByAttr } from '@/interface';

export const sortByHeroAttr = (data: Hero[]) => {
  const heroByAttr: HeroByAttr = {
    agi: [],
    str: [],
    int: [],
    all: [],
  };

  data.forEach((hero: Hero) => {
    const { primary_attr } = hero;
    heroByAttr[primary_attr as keyof HeroByAttr].push(hero);
  })

  return heroByAttr;
}
