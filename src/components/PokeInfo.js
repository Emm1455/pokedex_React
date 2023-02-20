import React from "react";
import { v4 as uuid } from "uuid";
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

function PokeInfo({ pokeData, weaknesses }) {
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

  return (
    <div className="Info">
      <div className="Stats">
        <Bar data={data} options={options} />
      </div>
      <div className="Details">
        <SingleData label="Weight:" info={`${pokeData.weight / 10} Kg`} />
        <SingleData label="Height:" info={`${pokeData.height / 10} m`} />
        <AbilitiesData label="Abilities:" info={pokeData.abilities} />
      </div>
      <div>Type</div>
      <WeaknessesData label="Weaknesses:" info={weaknesses} />
    </div>
  );
}

function SingleData({ label, info }) {
  return (
    <div className="DataContainer">
      <p className="Label">{label}</p>
      <p>{info}</p>
    </div>
  );
}

function AbilitiesData({ label, info }) {
  const data = info.map((item) => <p key={item.slot}>{item.ability.name}</p>);
  return (
    <div className="DataContainer">
      <p className="Label">{label}</p>
      {data}
    </div>
  );
}

function WeaknessesData({ label, info }) {
  const data = info.map((item) => (
    <p className="Box" key={uuid()}>
      {item}
    </p>
  ));
  return (
    <div className="DataContainer DataBox">
      <div className="Label">
        {label}
      </div>
      <div className="Details">{data}</div>
    </div>
  );
}

export default PokeInfo;
