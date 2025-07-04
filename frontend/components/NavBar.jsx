import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import useTicketStore from '../store/useTicketStore';

const Navbar = () => {
    
    const navigate = useNavigate();
    const {logoutUser} = useTicketStore();

    const logout = async()=>{

        logoutUser();
        console.log("User Logged Out Successfully")
        navigate("/")

    }

    return (
    
        <>
            <nav className="flex justify-between items-center bg-[#55D6C2] text-white px-6 py-4 shadow">
                <h1 className="text-xl font-bold">Helpdesk</h1>
                <div className="flex space-x-4 text-2xl cursor-pointer">
                <FontAwesomeIcon icon={faUserCircle} onClick={()=>navigate("/profile")}/>
                <FontAwesomeIcon icon={faSignOutAlt} onClick={logout}/>
                </div>
            </nav>
        </>

)};

export default Navbar;
