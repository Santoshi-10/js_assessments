import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale);

function LineChart() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div>
      <h2>Line Chart</h2>
      <Line data={data} />
    </div>
  );
}

export default LineChart;
