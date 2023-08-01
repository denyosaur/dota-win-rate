import StatComponent from '../StatComponent';

const AttackSection: React.FC<AttackSectionProps> = ({
  attackRange,
  attackRate,
  startingDamageMax,
  startingDamageMin,
}) => (
  <div className="flex flex-col w-[30%] min-h-[118px]">
    <div className="tracking-wide font-light uppercase text-[#969696] ml-2 mb-1">
      attack
    </div>
    <StatComponent type={'attack'} stat={`${startingDamageMin}-${startingDamageMax}`} />
    <StatComponent type={'attackRate'} stat={attackRate} />
    <StatComponent type={'attackRange'} stat={attackRange} />
  </div>
);


export default AttackSection;

interface AttackSectionProps {
  attackRange: number;
  attackRate: number;
  startingDamageMax: number;
  startingDamageMin: number;
}
