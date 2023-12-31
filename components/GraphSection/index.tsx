import { prisma } from '@/db';

import WinCountGraph from '@/components/GraphComponents/WinCountGraph';
import WinRateGraph from '@/components/GraphComponents/WinRateGraph';

const GraphSection: React.FC<GraphSectionProps> = async ({ heroId }) => {
  const res = await prisma.win_rates.findMany({
    where: {
      hero: +heroId,
    }
  })

  const sortedData = res.sort((a, b) => Number(a.day) - Number(b.day));

  return (
    <div className="flex flex-col justify-between h-full w-full">
      <div className="flex flex-col justify-around items-center h-full">
        <div className="w-[38rem]">
          <h3 className="text-center py-1">Win Count</h3>
          <WinCountGraph data={sortedData} />
        </div>
        <div className="w-[38rem]">
          <h3 className="text-center py-1">Win Rate</h3>
          <WinRateGraph data={sortedData} />
        </div>
      </div>
    </div>
  )
}

export default GraphSection;

interface GraphSectionProps {
  heroId: string;
}
