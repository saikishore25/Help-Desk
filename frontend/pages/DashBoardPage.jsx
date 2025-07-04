import React, { useEffect, useState } from 'react';
import ChartComponent from '../components/Charts';
import useTicketStore from '../store/useTicketStore';

const DashboardPage = () => {

    const { tickets, fetchTickets } = useTicketStore();
    const [stats, setStats] = useState({ total: 0, solved: 0, inProgress: 0, waiting: 0 });

    useEffect(() => {

        fetchTickets();
        
    }, []);

    useEffect(() => {
        const total = tickets.length;
        const solved = tickets.filter(t => t.status === 'Solved').length;
        const inProgress = tickets.filter(t => t.status === 'In Progress').length;
        const waiting = tickets.filter(t => t.status === 'Open' || t.status === 'Waiting' || t.status === 'Pending').length;

        setStats({ total, solved, inProgress, waiting });
    }, [tickets]);

    return (
        <div className="p-6 flex flex-col space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-4 rounded shadow text-center">
                    <h2 className="text-gray-500 uppercase text-sm">Total Tickets</h2>
                    <p className="text-2xl font-bold">{stats.total}</p>
                </div>
                <div className="bg-white p-4 rounded shadow text-center">
                    <h2 className="text-green-600 uppercase text-sm">Solved</h2>
                    <p className="text-2xl font-bold">{stats.solved}</p>
                </div>
                <div className="bg-white p-4 rounded shadow text-center">
                    <h2 className="text-yellow-600 uppercase text-sm">In Progress</h2>
                    <p className="text-2xl font-bold">{stats.inProgress}</p>
                </div>
                <div className="bg-white p-4 rounded shadow text-center">
                    <h2 className="text-red-600 uppercase text-sm">Waiting for Approval</h2>
                    <p className="text-2xl font-bold">{stats.waiting}</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded shadow">
                <ChartComponent stats={stats} />
            </div>
        </div>
    );
};

export default DashboardPage;
