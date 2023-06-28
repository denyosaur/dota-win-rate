export interface HeroFromOpenDota {
  'attack_type': string;
  'id': string | number;
  'localized_name': string;
  'name': string;
  'primary_attr': string;
  'roles': string[];
}

export interface HeroesFromApi {
  hero_id: number;
  hero_name: string;
  hero_image: string;
  primary_attributes: string;
  roles: string[];
}

export type HeroByAttr = {
  agi: HeroesFromApi[];
  all: HeroesFromApi[];
  int: HeroesFromApi[];
  str: HeroesFromApi[];
}

export interface HeroIcon {
  heroId: string;
  heroImage: string;
  name: string;
  roles: string[];
  setSelectedHero: (hero: SelectedHero) => void;
  statAttr: string;
}

export interface HeroWinRate {
  day: bigint;
  wins: number;
  matches: number;
  hero: number;
}

export interface RoleSectionProps {
  heroes: HeroesFromApi[];
  role: 'agi' | 'all' | 'int' | 'str';
  setSelectedHero: (hero: SelectedHero) => void;
}

export interface Match {
  'hero_id': number,
  'match_id': number,
  'start_time': number,
  'win': boolean,
}

export interface SelectedHero {
  heroId: string;
  name: string;
}
