import AttackSection from './AttackSection';
import DefenseSection from './DefenseSection';
import MobilitySection from './MobilitySection';

const StatsList: React.FC<StatsListProps> = ({
  attackRange,
  attackRate,
  startingDamageMax,
  startingDamageMin,
  startingArmor,
  startingMagicArmor,
  moveTurnRate,
  moveSpeed,
  visionNighttimeRange,
  visionDaytimeRange,
}) => {
  return (
    <div className="flex flex-col justify-center items-center min-w-[300px] w-4/12 h-full px-5">
      <div className="flex flex-row flex-wrap items-center justify-between w-full">
        <AttackSection
          attackRange={attackRange}
          attackRate={attackRate}
          startingDamageMax={startingDamageMax}
          startingDamageMin={startingDamageMin}
        />
        <DefenseSection
          startingArmor={startingArmor}
          startingMagicArmor={startingMagicArmor}
        />
        <MobilitySection
          moveSpeed={moveSpeed}
          moveTurnRate={moveTurnRate}
          visionDaytimeRange={visionDaytimeRange}
          visionNighttimeRange={visionNighttimeRange}
        />
      </div>

      <div className="mt-5">
        <p className="tracking-widest font-light uppercase text-[#969696]">stats</p>
      </div>
    </div>
  )
}

export default StatsList;

interface StatsListProps {
  attackRange: number;
  attackRate: number;
  startingDamageMax: number;
  startingDamageMin: number;
  startingMagicArmor: number;
  startingArmor: number;
  moveSpeed: number;
  moveTurnRate: number;
  visionDaytimeRange: number;
  visionNighttimeRange: number;
}
