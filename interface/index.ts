export interface HeroFromOpenDota {
  'attack_type': string;
  'id': string | number;
  'localized_name': string;
  'name': string;
  'primary_attr': string;
  'roles': string[];
}

export interface HeroFromStratz {
  'id': number;
  'shortName': string;
  'displayName': string;
  'abilities': {
    'slot': number;
    'abilityId': number;
  }
  'roles': {
    'roleId': number,
    'level': number,
  }[];
  'stat': {
    'AttributePrimary': string;
    'startingDamageMin': number;
    'startingDamageMax': number;
    'attackRange': number;
    'attackRate': number;
    'startingArmor': number;
    'startingMagicArmor': number;
    'moveSpeed': number;
    'moveTurnRate': number;
    'visionDaytimeRange': number;
    'visionNighttimeRange': number;
    'strengthBase': number;
    'strengthGain': number;
    'intelligenceBase': number;
    'intelligenceGain': number;
    'agilityBase': number;
    'agilityGain': number;
    'complexity': number;
    'attackType': string;
    'hpRegen': number;
    'mpRegen': number;
  }
  'language': {
    'hype': string;
    'bio': string;
  }
}

export interface HeroFromOpenDota {
  'attack_type': string;
  'id': string | number;
  'localized_name': string;
  'name': string;
  'primary_attr': string;
  'roles': string[];
}

export interface HeroesFromApi {
  heroId: number;
  shortName: string;
  displayName: string;
  heroImage: string;
  attributePrimary: string;
  roles: string[];
  roleStats: any;
  startingDamageMin: number;
  startingDamageMax: number;
  attackRange: number;
  attackRate: number;
  startingArmor: number;
  startingMagicArmor: number;
  moveSpeed: number;
  moveTurnRate: number;
  visionDaytimeRange: number;
  visionNighttimeRange: number;
  strengthBase: number;
  strengthGain: number;
  intelligenceBase: number;
  intelligenceGain: number;
  agilityBase: number;
  agilityGain: number;
  complexity: number;
  hpRegen: number;
  mpRegen: number;
  attackType: string;
  hype: string;
  bio: string;
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
  shortName: string;
  attributePrimary: string;
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
