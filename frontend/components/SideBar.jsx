import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const baseClass = "block px-4 py-2 rounded hover:bg-black hover:text-white";
    const activeClass = "text-2xl";

    return (
        <>
            <aside className="w-48 bg-[#55D6C2] h-screen p-4 shadow">
                <nav className="flex flex-col space-y-2">
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? `${baseClass} ${activeClass}` : baseClass}>Dashboard</NavLink>
                    <NavLink to="/dashboard/newticket" className={({ isActive }) => isActive ? `${baseClass} ${activeClass}` : baseClass}>New Ticket</NavLink>
                    <NavLink to="/dashboard/myticket" className={({ isActive }) => isActive ? `${baseClass} ${activeClass}` : baseClass}>My Ticket</NavLink>
                    <NavLink to="/dashboard/settings" className={({ isActive }) => isActive ? `${baseClass} ${activeClass}` : baseClass}>Settings</NavLink>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
