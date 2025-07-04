import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import useTicketStore from '../store/useTicketStore';
import axios from 'axios';
const LoginPage = () => {

    const {register, handleSubmit, formState: { errors }} = useForm();
    const navigate = useNavigate()

    const {isAuthenticated,backendURL, user, userID, loginUser} = useTicketStore()
    console.log(backendURL)

    const onSubmit = async(data) => {

        const success = await loginUser(data);
        if (success) {
            alert("Login successful!");
            navigate('/dashboard');
        } else {
            alert("Login failed. Please check your credentials.");
        }
        
    };

    return (
        <>
            <div className="min-h-screen bg-[#55D6C2] flex items-center justify-center px-4">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
                    <h2 className="text-3xl font-bold text-center text-[#55D6C2] mb-6">
                    Login to Help Desk
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">UserName</label>
                            <input
                                type="text"
                                placeholder="Jane Doe"
                                {...register('userName', { required: 'Full name is required' })}
                                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                                    errors.name ? 'border-red-500 focus:ring-red-500' : 'focus:ring-[#55D6C2]'
                                }`}
                                />
                                {errors.userName && <p className="text-sm text-red-500 mt-1">{errors.userName.message}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Password</label>
                            <input
                            type="password"
                            placeholder="********"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                value: 6,
                                message: 'Minimum 6 characters',
                                },
                            })}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                                errors.password ? 'border-red-500 focus:ring-red-500' : 'focus:ring-[#55D6C2]'
                            }`}
                            />
                            {errors.password && (
                            <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#55D6C2] text-white py-2 rounded-md font-semibold hover:bg-[#47b3a5] transition"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account?{' '}
                    <NavLink to="/signup" className="text-[#55D6C2] cursor-pointer hover:underline">Sign up</NavLink>
                    </p>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
