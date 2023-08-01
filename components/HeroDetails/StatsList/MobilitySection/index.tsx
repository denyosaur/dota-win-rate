import StatComponent from '../StatComponent';

const MobilitySection: React.FC<MobilitySectionProps> = ({
  moveTurnRate,
  moveSpeed,
  visionNighttimeRange,
  visionDaytimeRange,
}) => (
  <div className="flex flex-col w-[30%] min-h-[118px]">
    <div className="tracking-wide font-light uppercase text-[#969696] ml-2 mb-1">
      mobility
    </div>
    <StatComponent type={'moveSpeed'} stat={moveSpeed} />
    <StatComponent type={'turnRate'} stat={moveTurnRate} />
    <StatComponent type={'vision'} stat={`${visionDaytimeRange}/${visionNighttimeRange}`} />
  </div>
);


export default MobilitySection;

interface MobilitySectionProps {
  moveSpeed: number;
  moveTurnRate: number;
  visionDaytimeRange: number;
  visionNighttimeRange: number;
}
