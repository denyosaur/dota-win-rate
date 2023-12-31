'use client'
import React, { useEffect, useState } from 'react';
import {
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineController,
  LineElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { HeroWinRate } from '@/interface';

import { convertUnixTimestamp } from '@/lib/convertUnixTimestamp';

Chart.register(
  CategoryScale,
  Filler,
  LinearScale,
  LineController,
  LineElement,
  Tooltip,
);

const WinRateGraph: React.FC<WinCountGraphProps> = ({ data }) => {
  const [dataToUse, setDataToUse] = useState<WinCountData>({
    labels: [],
    datasets: []
  });

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: '#eee',
        },
      },
      y: {
        ticks: {
          color: '#eee',
        },
      },
    }
  };

  useEffect(() => {
    setDataToUse({
      labels: data.map((data) => {
        return convertUnixTimestamp(data.day.toString())
      }),
      datasets: [
        {
          label: 'Win Rate',
          data: data.map((data) => (data.wins / data.matches) * 100),
          borderColor: "#3B71CA",
          borderWidth: 2,
        },
      ]
    });
  }, [data, setDataToUse])

  return (
    <div className="h-64 w-[38rem]" >
      <Line
        datasetIdKey="linegraph"
        data={dataToUse}
        options={options}
      />
    </div>

  )
}

export default WinRateGraph;

interface WinCountGraphProps {
  data: HeroWinRate[];
}

interface WinCountData {
  labels: string[];
  datasets: any[];
}
