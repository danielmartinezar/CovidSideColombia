import React from 'react'
import { Chart as ChartJS, CategoryScale, BarElement, LinearScale, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend

)

export default function Generalchart(dataReceived) {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10'],
        datasets: [{
            label: '# casos',
            data:dataReceived.data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    }
    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        Plugins: {
            position: 'left'
        },
        legend: {
            labels: {
                fontSize: 26
            }
        }
    }


    return (
        <div>
            <Bar
                data={data}
                options={options} />
        </div>
    )
}
