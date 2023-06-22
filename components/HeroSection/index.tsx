import { getAndSortHeroes } from '@/lib/getAndSortHeroes';

import RoleSection from './RoleSection';

const HeroSection: React.FC<HeroSectionProps> = async ({ setSelectedHero }) => {
  const res = await getAndSortHeroes();

  return (
    <div className="flex flex-col justify-around w-full">
      {Object.entries(res).map(([role, heroes], index) => (
        <RoleSection
          key={`${role}-${index}`}
          heroes={heroes}
          role={role as 'agi' | 'all' | 'int' | 'str'}
          setSelectedHero={setSelectedHero}
        />
      ))}
    </div>
  )
}

export default HeroSection;

interface HeroSectionProps {
  setSelectedHero: (newHero: string | null) => void;
}
