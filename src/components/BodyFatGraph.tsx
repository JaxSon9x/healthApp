import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import * as _ from 'lodash';
import color from '../themes/color';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

export type BodyFatGraphProps = {
  datasets: {
    label: string;
    data: number[];
    borderColor?: string;
    backgroundColor?: string;
    pointRadius?: number;
    borderWidth?: number;
  }[];
  labels: string[];
};

const BodyFatGraph: React.FC<BodyFatGraphProps> = ({ datasets, labels }) => {
  return (
    <Line
      data={{
        labels: labels,
        datasets: _.map(datasets, (row) => ({
          pointRadius: 8 - 3, // {design pointRadius} - {borderWidth}
          borderWidth: 3,
          ...row,
        })),
      }}
      options={{
        // animation: {
        //   duration: 0,
        // },
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: false,
            text: '',
          },
        },
        scales: {
          x: {
            grid: {
              color: '#777777',
              borderWidth: 0,
            },
            ticks: {
              color: color.light,
            },
          },
          y: {
            grid: {
              display: false,
              color: '#777777',
            },
            ticks: {
              display: false,
            },
          },
        },
      }}
    />
  );
};

export default BodyFatGraph;
