import React from 'react';
import Navbar from './NavBar';
import Sidebar from './SideBar';

const Profile = () => {

    return (

        <>
            <div className="flex flex-col h-screen">
                <Navbar />
                <div className="flex flex-1 overflow-hidden">
                    <Sidebar />
                    <main className="flex-1 overflow-auto bg-gray-50 p-6">
                        <div className="max-w-6xl mx-auto h-3/4 bg-white rounded-lg shadow-md p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            
                            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="User"
                                className="w-32 h-32 rounded-full object-cover border-4 border-[#55D6C2] mb-4"
                            />
                            <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
                            <p className="text-gray-600 mt-2"><strong>Email:</strong> johndoe@example.com</p>
                            <p className="text-gray-600"><strong>Contact:</strong> +91 9876543210</p>
                            <p className="text-gray-600"><strong>Department:</strong> IT</p>
                            </div>

                            
                            <div className="flex flex-col items-center justify-center">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Feedback</h3>
                                <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                                <p className="text-gray-700 italic mb-3">
                                    “John has been very prompt and professional in resolving our issues. He is extremely helpful and knowledgeable.”
                                </p>
                                <p className="text-right text-sm text-gray-500">– Feedback from Support Team</p>
                                </div>
                            </div>

                            {/* Star Rating & Submit */}
                            <div className="mt-6">
                                <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                    key={star}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#facc15"
                                    viewBox="0 0 24 24"
                                    stroke="#facc15"
                                    className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.48 3.5a.75.75 0 011.04 0l2.34 2.34 3.29.48a.75.75 0 01.42 1.28l-2.38 2.32.56 3.27a.75.75 0 01-1.09.79L12 12.35l-2.94 1.55a.75.75 0 01-1.09-.79l.56-3.27-2.38-2.32a.75.75 0 01.42-1.28l3.29-.48 2.34-2.34z"
                                    />
                                    </svg>
                                ))}
                                </div>
                                <button className="bg-[#55D6C2] hover:bg-[#47b3a5] text-white font-semibold py-2 px-4 rounded transition">
                                Submit Feedback
                                </button>
                            </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Profile;
