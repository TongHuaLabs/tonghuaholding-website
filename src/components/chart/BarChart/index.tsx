import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

type BarChartProps = {
  data: ChartData<'bar', number[], string>;
  options?: ChartOptions;
  className?: string;
};

const BarChart: React.FC<BarChartProps> = ({ data, options, className }) => {
  return <Bar options={options} data={data} className={className} />;
};

export default BarChart;
