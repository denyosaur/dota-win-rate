import { prisma } from '@/db';

import GraphSection from '@/components/GraphSection';
import HeroBio from '@/components/HeroInfoSection/HeroBio';
import HeroDetails from '@/components/HeroInfoSection/HeroDetails';

const HeroInfoSection: React.FC<HeroInfoSection> = async ({ heroId }) => {
  const res = await prisma.heroes.findUnique({
    where: {
      'heroId': +heroId
    }
  })

  if (res === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row pl-56 pr-20 grow">
        <HeroBio
          attackType={res.attackType as "Ranged" | "Melee"}
          attributePrimary={res.attributePrimary as "agi" | "all" | "int" | "str"}
          complexity={res.complexity}
          displayName={res.displayName}
          hype={res.hype}
        />
        <GraphSection heroId={heroId} />
      </div>
      <HeroDetails stats={res} />
    </div>
  )
}

export default HeroInfoSection;

interface HeroInfoSection {
  heroId: string;
}
// heroId,
// shortName,
// displayName,
// heroImage,
// attributePrimary,
// roles,
// roleStats,
// startingDamageMin,
// startingDamageMax,
// attackRange,
// attackRate,
// startingArmor,
// startingMagicArmor,
// moveSpeed,
// moveTurnRate,
// visionDaytimeRange,
// visionNighttimeRange,
// strengthBase,
// strengthGain,
// intelligenceBase,
// intelligenceGain,
// agilityBase,
// agilityGain,
// complexity,
// hpRegen,
// mpRegen,
// attackType,
// hype,
// bio,
