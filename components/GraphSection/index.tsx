import Chart from 'chart.js';

import WinRateGraph from '@/components/WinRateGraph';
import { fetchHeroWinRate } from '@/lib/fetchHeroWinRate';

const GraphSection: React.FC<GraphSectionProps> = async ({ selectedHero: { heroId, name } }) => {
  const res = await fetchHeroWinRate(heroId);

  return (
    <div className="flex flex-col justify-around w-full">
      <WinRateGraph name={name} data={res} />
    </div>
  )
}

export default GraphSection;

interface GraphSectionProps {
  selectedHero: {
    heroId: string,
    name: string,
  };
}
