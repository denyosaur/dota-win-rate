export interface Hero {
  'id': string | number;
  'name': string;
  'localized_name': string;
  'primary_attr': string;
  'attack_type': string;
  'roles': string[];
}

export type HeroByAttr = {
  agi: Hero[];
  str: Hero[];
  int: Hero[];
  all: Hero[];
}

export interface HeroIcon {
  name: string;
  roles: string[];
  setSelectedHero: (newHero: string | null) => void;
  statAttr: string;
}

export interface RoleSectionProps {
  heroes: Hero[];
  role: 'agi' | 'all' | 'int' | 'str';
  setSelectedHero: (newHero: string | null) => void;
}

export interface Match {
  'match_id': number,
  'start_time': number,
  'win': boolean,
  'hero_id': number,
}

export interface Matches {

}
