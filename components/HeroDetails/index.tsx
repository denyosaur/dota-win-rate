import Image from 'next/image';

import Attributes from '@/components/HeroDetails/Attributes';
import Divider from '@/components/HeroDetails/Divider';
import RolesList from '@/components/HeroDetails/RolesList';
import StatsList from '@/components/HeroDetails/StatsList';

const HeroDetails: React.FC<HeroDetailsProps> = ({
  stats: {
    heroId,
    shortName,
    displayName,
    heroImage,
    attributePrimary,
    roles,
    roleStats,
    startingDamageMin,
    startingDamageMax,
    attackRange,
    attackRate,
    startingArmor,
    startingMagicArmor,
    moveSpeed,
    moveTurnRate,
    visionDaytimeRange,
    visionNighttimeRange,
    strengthBase,
    strengthGain,
    intelligenceBase,
    intelligenceGain,
    agilityBase,
    agilityGain,
    complexity,
    hpRegen,
    mpRegen,
    attackType, }
}) => {

  return (
    <div
      className="
        flex flex-row justify-center items-center
        absolute bottom-0 left-0
        min-h-[212px] h-[212px] w-full
        bg-gradient-to-r from-[#252728] to-[#101415]
        border-t-2 border-solid border-[#282828]
        pl-36
      "
    >
      <div className="flex flex-row justify-center items-center h-full max-width-[1600px]">
        <Attributes
          agilityBase={agilityBase}
          agilityGain={agilityGain}
          heroImage={heroImage}
          intelligenceBase={intelligenceBase}
          intelligenceGain={intelligenceGain}
          shortName={shortName}
          strengthBase={strengthBase}
          strengthGain={strengthGain}
          hpRegen={hpRegen}
          mpRegen={mpRegen}
        />
        <Divider />
        <RolesList
          roleStats={roleStats}
        />
        <Divider />
        <StatsList
          attackRange={attackRange}
          attackRate={attackRate}
          startingDamageMax={startingDamageMax}
          startingDamageMin={startingDamageMin}
          startingArmor={startingArmor}
          startingMagicArmor={startingMagicArmor}
          moveTurnRate={moveTurnRate}
          moveSpeed={moveSpeed}
          visionNighttimeRange={visionNighttimeRange}
          visionDaytimeRange={visionDaytimeRange}
        />
      </div>
    </div>
  )
}

export default HeroDetails;

interface HeroDetailsProps {
  stats: {
    heroId: number;
    shortName: string;
    displayName: string;
    heroImage: string;
    attributePrimary: string;
    roles: string[];
    roleStats: any[];
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
}
