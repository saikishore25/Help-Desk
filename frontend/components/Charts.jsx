import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
Chart.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);
import { FaTools, FaCogs } from 'react-icons/fa';
import { MdFeedback } from 'react-icons/md';

const Charts = ({ stats }) => {

    const data = {

        labels: ['Solved', 'In Progress', 'Waiting'],
        datasets: [{
        label: 'Tickets',
        data: [stats.solved, stats.inProgress, stats.waiting],
        backgroundColor: ['#22c55e', '#facc15', '#ef4444'],
        }],
    };

    const options = {

        responsive: true,
        plugins: {
        legend: { position: 'top' },
        tooltip: { enabled: true },
        },
    };

    return (

        <div className="space-y-10">

            <div className='flex flex-row w-full gap-10'>

                <div className='w-1/2'>
                    <h3 className="text-lg font-semibold mb-2">Tickets by Status (Bar Chart)</h3>
                    <Bar data={data} options={options} />
                </div>

                <div className="w-1/2 mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg space-y-8">

                    <div className="grid grid-cols-2 gap-8 text-center">
                    {/* Technical Support */}
                    <div className="flex flex-col items-center space-y-2">
                    <FaTools className="text-4xl text-blue-600" />
                    <p className="text-2xl font-semibold">24</p>
                    <p className="text-gray-600">Technical Support Tasks</p>
                    </div>

                    {/* Operations Team */}
                    <div className="flex flex-col items-center space-y-2">
                    <FaCogs className="text-4xl text-green-600" />
                    <p className="text-2xl font-semibold">18</p>
                    <p className="text-gray-600">Operations Team Tasks</p>
                    </div>
                <div/>
            </div>

                {/* Customer Feedback */}
                <div className="border-t pt-6 text-center">
                    <div className="flex justify-center items-center mb-2">
                    <MdFeedback className="text-3xl text-yellow-600 mr-2" />
                    <h3 className="text-xl font-semibold">Customer Feedback</h3>
                    </div>
                    <p className="text-gray-700">
                    "Great response from the technical team! My issue was resolved in no time."
                    </p>
                </div>
                </div>

            </div>

            <div className='w-full flex flex-col items-center '>
                <h3 className="text-lg font-semibold mb-2">Tickets by Status (Pie Chart)</h3>
                <div  className='w-1/2'>

                <Pie data={data} options={options} />

                </div>
            </div>
        </div>
    );
};

export default Charts;
