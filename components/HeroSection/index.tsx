import { getHeroes } from '@/lib/getHeroes';

import RoleSection from './RoleSection';

const HeroSection: React.FC = async () => {
  const res = await getHeroes();

  return (
    <div className="flex flex-col justify-around w-full">
      {Object.entries(res).map(([role, heroes], index) => (
        <RoleSection
          key={`${role}-${index}`}
          heroes={heroes}
        />
      ))}
    </div>
  )
}

export default HeroSection;
