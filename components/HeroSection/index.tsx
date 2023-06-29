import { getHeroes } from '@/lib/getHeroes';

import { HeroByAttr, SelectedHero } from '@/interface';

import RoleSection from './RoleSection';

const HeroSection: React.FC = async () => {
  const res = await getHeroes();

  return (
    <div className="flex flex-col justify-around w-3/5">
      {Object.entries(res).map(([role, heroes], index) => (
        <RoleSection
          key={`${role}-${index}`}
          heroes={heroes}
          role={role as 'agi' | 'all' | 'int' | 'str'}
        />
      ))}
    </div>
  )
}

export default HeroSection;
