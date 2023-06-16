export interface Hero {
  'id': string | number,
  'name': string,
  'localized_name': string,
  'primary_attr': string,
  'attack_type': string,
  'roles': string[],
}

export type HeroByAttr = {
  agi: Hero[],
  str: Hero[],
  int: Hero[],
  all: Hero[],
}

export interface HeroIcon {
  name: string,
  statAttr: string,
  roles: string[],
}
