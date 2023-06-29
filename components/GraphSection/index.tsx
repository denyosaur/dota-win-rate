import Chart from 'chart.js';

import WinCountGraph from '@/components/GraphComponents/WinCountGraph';
import WinRateGraph from '@/components/GraphComponents/WinRateGraph';

import { getWinRates } from '@/lib/getWinRates';

const GraphSection: React.FC<GraphSectionProps> = async ({ heroId, heroName }) => {
  const res = await getWinRates(heroId);

  return (
    <div className="flex flex-col justify-between h-full w-full">
      <h2 className="text-gray-400 text-center pt-10 text-3xl">{heroName}</h2>
      <div className="flex flex-col justify-around items-center h-full">
        <div className="bg-zinc-800 w-[38rem]">
          <h3 className="text-center py-1 text-gray-400">Win Count</h3>
          <WinCountGraph data={res} />
        </div>
        <div className="bg-zinc-800 w-[38rem]">
          <h3 className="text-center py-1 text-gray-400">Win Rate</h3>
          <WinRateGraph data={res} />
        </div>
      </div>
    </div>
  )
}

export default GraphSection;

interface GraphSectionProps {
  heroId: string;
  heroName: string;
}
