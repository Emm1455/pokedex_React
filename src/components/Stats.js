import React from 'react';
import "../styles/Info.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Stats({pokeData}){
    const GetStats = function (Data) {
    const stats = Data.stats.map((item) => item.base_stat);
    return stats;
  };

  let data = {
    labels: ["HP","Attack","Defense","Special Attack","Special Defense","Speed",],
    datasets: [
      {
        label: "Stats",
        data: GetStats(pokeData),
        backgroundColor: "rgba(32, 201, 77, 0.2)",
        borderColor: "rgba(32, 201, 77, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    aspectRatio: 3 / 2,
    plugins: {
      legend: {
        position: "bottom",
        display: false,
      },
      title: {
        display: true,
        text: "Stats",
        color: "rgb(10,10,10)",
        align: "start",
      },
    },
  };
  return(
    <div className='Stats'>
        <Bar data={data} options={options} />
    </div>
  );
}

export default Stats;