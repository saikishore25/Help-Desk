import React from 'react';
import { useForm } from 'react-hook-form';

const SettingsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Updated settings:', data);
    // Call backend update user API here
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow mt-10 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">User Settings</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Username */}
        <div>
          <label className="block mb-1 font-medium">Username</label>
          <input
            type="text"
            {...register('username', { required: 'Username is required' })}
            placeholder="JohnDoe"
            className="w-full border px-3 py-2 rounded"
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
            placeholder="john@example.com"
            className="w-full border px-3 py-2 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Change Password */}
        <div>
          <label className="block mb-1 font-medium">New Password</label>
          <input
            type="password"
            {...register('password')}
            placeholder="Leave blank to keep current"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Access Level */}
        <div>
          <label className="block mb-1 font-medium">Access Level</label>
          <select
            {...register('accessLevel', { required: 'Select access level' })}
            className="w-full border px-3 py-2 rounded"
            defaultValue=""
          >
            <option value="" disabled>Select level</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="User">User</option>
          </select>
          {errors.accessLevel && <p className="text-red-500 text-sm">{errors.accessLevel.message}</p>}
        </div>

        {/* Project Level */}
        <div>
          <label className="block mb-1 font-medium">Project Level</label>
          <select
            {...register('projectLevel', { required: 'Select project level' })}
            className="w-full border px-3 py-2 rounded"
            defaultValue=""
          >
            <option value="" disabled>Select project level</option>
            <option value="All">All Projects</option>
            <option value="Assigned">Only Assigned Projects</option>
          </select>
          {errors.projectLevel && <p className="text-red-500 text-sm">{errors.projectLevel.message}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Update Settings
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
