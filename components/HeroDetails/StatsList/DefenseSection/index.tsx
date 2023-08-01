import StatComponent from '../StatComponent';

const DefenseSection: React.FC<DefenseSectionProps> = ({
  startingMagicArmor,
  startingArmor,
}) => (
  <div className="flex flex-col w-[30%] min-h-[118px]">
    <div className="tracking-wide font-light uppercase text-[#969696] ml-2 mb-1">
      defense
    </div>
    <StatComponent type={'armor'} stat={startingArmor} />
    <StatComponent type={'magicResist'} stat={`${startingMagicArmor}%`} />
  </div>
);


export default DefenseSection;

interface DefenseSectionProps {
  startingMagicArmor: number;
  startingArmor: number;
}
