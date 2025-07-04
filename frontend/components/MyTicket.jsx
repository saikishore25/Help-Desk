import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useTicketStore from '../store/useTicketStore';

const MyTicket = () => {

    const [filtered, setFiltered] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const {backendURL, fetchTickets, tickets, setTickets} = useTicketStore()
    const { register, watch } = useForm({
        defaultValues: {
        search: '',
        entries: '5',
        },
    });

    const searchTerm = watch('search');
    const entriesPerPage = parseInt(watch('entries'));

    console.log(tickets)
    useEffect(() => {

        fetchTickets()
        
    }, []);

    useEffect(() => {
        setFiltered(tickets); // ✅ this runs *after* tickets are updated in the store
    }, [tickets]);

    useEffect(() => {
        const result = tickets.filter((ticket) =>
        ticket.ticketName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFiltered(result);
        setCurrentPage(1); // Reset to first page when filtering
    }, [searchTerm, tickets]);

    // Pagination logic
    const indexOfLast = currentPage * entriesPerPage;
    const indexOfFirst = indexOfLast - entriesPerPage;
    const currentTickets = filtered.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(filtered.length / entriesPerPage);
    console.log(currentTickets)
    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    return (

        <>
            <div className="max-w-5xl mx-auto p-6 bg-white rounded shadow space-y-4">
                <h2 className="text-2xl font-semibold">My Tickets</h2>

                {/* Form Controls */}
                <div className="flex justify-between items-center gap-4 flex-wrap">
                    <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium">Show</label>
                    <select
                        {...register('entries')}
                        className="border rounded px-2 py-1 text-sm"
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                    </select>
                    <span className="text-sm">entries</span>
                    </div>

                    <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium">Search:</label>
                    <input
                        {...register('search')}
                        type="text"
                        placeholder="Search by title"
                        className="border rounded px-2 py-1 text-sm w-48"
                    />
                    </div>
                </div>

                {/* Ticket List */}
                <ul className="divide-y">
                    {currentTickets.map((ticket) => (
                    <li key={ticket._id} className="py-4 flex justify-between text-sm text-black">
                        <span>{ticket.ticketNumber}</span>
                        <span className="font-medium">{ticket.ticketName}</span>
                        <span>{ticket.subject}</span>
                        <span>{ticket.category}</span>
                        <span
                        className={`font-semibold ${
                            ticket.status === 'Solved'
                            ? 'text-green-600'
                            : ticket.status === 'In Progress'
                            ? 'text-yellow-600'
                            : 'text-red-600'
                        }`}
                        >
                        {ticket.status}
                        </span>

                    </li>
                    ))}

                    {currentTickets.length === 0 && (
                    <li className="text-gray-500 py-4 text-center">No tickets found.</li>
                    )}
                </ul>

                {/* Pagination */}
                <div className="flex justify-between items-center pt-4 text-sm">
                    <span>
                    Showing {indexOfFirst + 1} to{' '}
                    {Math.min(indexOfLast, filtered.length)} of {filtered.length} entries
                    </span>
                    <div className="space-x-2">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages || totalPages === 0}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyTicket;
