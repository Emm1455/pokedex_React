import '../../styles/Stats.css'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function Stats ({ pokeData, color }) {
  const GetStats = function (Data) {
    const stats = Data.stats.map((item) => item.base_stat)
    return stats
  }

  const data = {
    labels: [
      'HP',
      'Attack',
      'Defense',
      'Special Attack',
      'Special Defense',
      'Speed'
    ],
    datasets: [
      {
        label: 'Stats',
        data: GetStats(pokeData),
        backgroundColor: `rgba(${color}, 0.2)`,
        borderColor: `rgba(${color}, 1)`,
        borderWidth: 1
      }
    ]
  }

  const options = {
    responsive: true,
    // aspectRatio: 3 / 2,
    devicePixelRatio: 2,
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#263238',
          font: {
            size: 12
          }
        }
      },
      y: {
        ticks: {
          color: '#263238'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
  return (
    <div className='Stats'>
      <Bar data={data} options={options} />
    </div>
  )
}

export default Stats
