'use client'
import React, { useEffect, useState } from 'react';
import Chart from 'chart.js';
import { Line } from 'react-chartjs-2';

import { HeroWinRate } from '@/interface';

const WinRateGraph: React.FC<WinRateGraphProps> = ({ data, name }) => {
  const [dataToUse, setDataToUse] = useState<Chart.ChartData<"line", (number | null)[], string>>({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    setDataToUse({
      labels: data.map((data) => {
        const date = new Date(Number(data.day));

        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = String(date.getFullYear());
        return `${month}-${day}-${year}`
      }),
      datasets: [
        {
          label: 'Wins',
          data: data.map((data) => data.wins),
          borderColor: "black",
          borderWidth: 2,
        },
        {
          label: 'Losses',
          data: data.map((data) => data.matches - data.wins),
          borderColor: "black",
          borderWidth: 2,
        }
      ]
    });
  }, [data, setDataToUse])

  return (
    <Line
      datasetIdKey="linegraph"
      data={dataToUse}
    />
  )
}

export default WinRateGraph;

interface WinRateGraphProps {
  data: HeroWinRate[];
  name: string;
}