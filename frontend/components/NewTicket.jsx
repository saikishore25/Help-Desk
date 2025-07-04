import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useTicketStore from '../store/useTicketStore';

const departments = ['IT', 'HR', 'Finance', 'Operations'];
const categories = ['Software', 'Hardware', 'Network', 'Other'];
const types = ['Issue', 'Request', 'Inquiry'];
const priorities = ['Low', 'Medium', 'High', 'Critical'];


const NewTicket = () => {

    const {register, handleSubmit, reset, formState: { errors, isSubmitting }} = useForm();

    const {loading, ticketNumber, error, submitTicket, resetState} = useTicketStore();

    const onSubmit = (data) => {
        
        submitTicket(data);
        reset();
    };

    return (

        <>
            <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-6xl mx-auto p-6 bg-white rounded shadow space-y-6"
            >
            <h2 className="text-2xl font-semibold mb-4">Create New Ticket</h2>

            <div className='flex flex-row items-center justify-center gap-10'>

                <div className='flex flex-col w-full'>

                    <div>
                        <label className="block mb-1 font-medium" htmlFor="ticketName">
                        Ticket Name
                        </label>
                        <input
                        id="ticketName"
                        type="text"
                        placeholder="Enter ticket name"
                        className={`w-full border rounded px-3 py-2 ${
                            errors.ticketName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        {...register('ticketName', { required: 'Ticket name is required' })}
                        />
                        {errors.ticketName && (
                        <p className="text-red-500 text-sm mt-1">{errors.ticketName.message}</p>
                        )}
                    </div>
                    
                    <div>
                        <label className="block mb-1 font-medium" htmlFor="date">
                        Date
                        </label>
                        <input
                        id="date"
                        type="date"
                        className={`w-full border rounded px-3 py-2 ${
                            errors.date ? 'border-red-500' : 'border-gray-300'
                        }`}
                        {...register('date', { required: 'Date is required' })}
                        />
                        {errors.date && (
                        <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                        )}
                    </div>

                </div>

                <div className='flex flex-col w-full'>

                    <div>
                        <label className="block mb-1 font-medium" htmlFor="department">
                        Department
                        </label>
                        <select
                        id="department"
                        className={`w-full border rounded px-3 py-2 ${
                            errors.department ? 'border-red-500' : 'border-gray-300'
                        }`}
                        {...register('department', { required: 'Department is required' })}
                        defaultValue=""
                        >
                        <option value="" disabled>
                            Select department
                        </option>
                        {departments.map((dep) => (
                            <option key={dep} value={dep}>
                            {dep}
                            </option>
                        ))}
                        </select>
                        {errors.department && (
                        <p className="text-red-500 text-sm mt-1">{errors.department.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block mb-1 font-medium" htmlFor="subject">
                        Subject
                        </label>
                        <input
                        id="subject"
                        type="text"
                        placeholder="Enter subject"
                        className={`w-full border rounded px-3 py-2 ${
                            errors.subject ? 'border-red-500' : 'border-gray-300'
                        }`}
                        {...register('subject', { required: 'Subject is required' })}
                        />
                        {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                        )}
                    </div>

                </div>


            </div>
            

            {/* Category */}
            <div>
                <label className="block mb-1 font-medium" htmlFor="category">
                Category
                </label>
                <select
                id="category"
                className={`w-full border rounded px-3 py-2 ${
                    errors.category ? 'border-red-500' : 'border-gray-300'
                }`}
                {...register('category', { required: 'Category is required' })}
                defaultValue=""
                >
                <option value="" disabled>
                    Select category
                </option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                    {cat}
                    </option>
                ))}
                </select>
                {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
                )}
            </div>

            {/* Type */}
            <div>
                <label className="block mb-1 font-medium" htmlFor="type">
                Type
                </label>
                <select
                id="type"
                className={`w-full border rounded px-3 py-2 ${
                    errors.type ? 'border-red-500' : 'border-gray-300'
                }`}
                {...register('type', { required: 'Type is required' })}
                defaultValue=""
                >
                <option value="" disabled>
                    Select type
                </option>
                {types.map((type) => (
                    <option key={type} value={type}>
                    {type}
                    </option>
                ))}
                </select>
                {errors.type && (
                <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
                )}
            </div>

            {/* Priority */}
            <div>
                <label className="block mb-1 font-medium" htmlFor="priority">
                Priority
                </label>
                <select
                id="priority"
                className={`w-full border rounded px-3 py-2 ${
                    errors.priority ? 'border-red-500' : 'border-gray-300'
                }`}
                {...register('priority', { required: 'Priority is required' })}
                defaultValue=""
                >
                <option value="" disabled>
                    Select priority
                </option>
                {priorities.map((pri) => (
                    <option key={pri} value={pri}>
                    {pri}
                    </option>
                ))}
                </select>
                {errors.priority && (
                <p className="text-red-500 text-sm mt-1">{errors.priority.message}</p>
                )}
            </div>

            {/* Description */}
            <div>
                <label className="block mb-1 font-medium" htmlFor="description">
                Description
                </label>
                <textarea
                id="description"
                placeholder="Enter detailed description"
                className={`w-full border rounded px-3 py-2 h-32 resize-none ${
                    errors.description ? 'border-red-500' : 'border-gray-300'
                }`}
                {...register('description', { required: 'Description is required' })}
                />
                {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                )}
            </div>

            {/* Submit button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            </form>
        </>
    );
};

export default NewTicket;
