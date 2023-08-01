import Pip from './Pip';

const DiamondPips: React.FC<DiamondPipsProp> = ({ complexity }) => (
  <div className="flex flex-row mt-2">
    <Pip fill={complexity >= 1} />
    <Pip fill={complexity >= 2} />
    <Pip fill={complexity == 3} />
  </div>
);

export default DiamondPips;

interface DiamondPipsProp {
  complexity: number;
}
