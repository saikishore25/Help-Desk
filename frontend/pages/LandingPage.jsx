import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="h-screen bg-[#55D6C2] flex flex-col justify-center items-center text-white text-center px-5">
                <h1 className="text-4xl  mb-4 font-bold">Welcome to Help Desk</h1>
                <p className="text-xl mb-8">Your support starts here.</p>
                <button
                    onClick={() => navigate('/login')}
                    className="bg-white text-[#55D6C2] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#47b3a5] hover:text-white transition duration-300 ease-in-out cursor-pointer"
                >
                    Continue
                </button>
            </div>
        </>
    );
};

export default LandingPage;
