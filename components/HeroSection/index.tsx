import { prisma } from '@/db';

import { sortByHeroAttr } from "@/lib/sortByHeroAttr";
import RoleSection from '@/components/RoleSection';

const HeroSection: React.FC = async () => {
  const res = await prisma.heroes.findMany();
  const sortedHeroes = sortByHeroAttr(res);

  return (
    <div className="flex flex-col justify-around h-full w-full px-14">
      {Object.entries(sortedHeroes).map(([role, heroes], index) => (
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
