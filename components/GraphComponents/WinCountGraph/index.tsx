'use client'
import React, { useEffect, useState } from 'react';
import {
  CategoryScale,
  Chart,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { HeroWinRate } from '@/interface';

import { convertUnixTimestamp } from '@/lib/convertUnixTimestamp';

Chart.register(
  CategoryScale,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
);

const WinCountGraph: React.FC<WinRateGraphProps> = ({ data }) => {
  const [dataToUse, setDataToUse] = useState<WinRateData>({
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
          label: 'Losses',
          data: data.map((data) => data.matches - data.wins),
          borderColor: "#DC4C64",
          borderWidth: 2,
          pointRadius: 0,
        },
        {
          label: 'Wins',
          data: data.map((data) => data.wins),
          borderColor: "#3B71CA",
          borderWidth: 2,
          fill: {
            target: 'origin',
            above: '#3B71CA',
          },
          pointRadius: 0,
        },
      ]
    });
  }, [data, setDataToUse])

  return (
    <div className="h-64 w-[38rem]">
      <Line
        datasetIdKey="linegraph"
        data={dataToUse}
        options={options}
      />
    </div>

  )
}

export default WinCountGraph;

interface WinRateGraphProps {
  data: HeroWinRate[];
}

interface WinRateData {
  labels: string[];
  datasets: any[];
}
