import React, { useState } from 'react';

const AdminSettings = () => {
    const [language, setLanguage] = useState('en');
    const [dataBackup, setDataBackup] = useState(false);
    const [goDash, setGoDash] = useState(false);
    const [superController, setSuperController] = useState(false);
    const [enableSMTP, setEnableSMTP] = useState(false);
    const [notificationEnabled, setNotificationEnabled] = useState(true);
    const [authLevel, setAuthLevel] = useState('user');

    const handleEditAuthorization = () => {
        alert('Edit Authorization Clicked');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow space-y-8">

        {/* GENERAL */}
        <div>
            <h2 className="text-xl font-semibold mb-2">General</h2>
            <div className="space-y-4">
            <div>
                <label className="block font-medium mb-1">Language</label>
                <select
                className="border px-3 py-2 rounded w-full"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
                </select>
            </div>
            <div className="flex items-center space-x-2">
                <input
                type="checkbox"
                id="backup"
                checked={dataBackup}
                onChange={(e) => setDataBackup(e.target.checked)}
                />
                <label htmlFor="backup" className="font-medium">Enable Data Backup</label>
            </div>
            </div>
        </div>

        {/* CONNECT TO */}
        <div>
            <h2 className="text-xl font-semibold mb-2">Connect To</h2>
            <div className="space-y-2">
            <div className="flex items-center space-x-2">
                <input
                type="checkbox"
                id="godash"
                checked={goDash}
                onChange={(e) => setGoDash(e.target.checked)}
                />
                <label htmlFor="godash">Go Dash</label>
            </div>
            <div className="flex items-center space-x-2">
                <input
                type="checkbox"
                id="supercontroller"
                checked={superController}
                onChange={(e) => setSuperController(e.target.checked)}
                />
                <label htmlFor="supercontroller">SuperController</label>
            </div>
            </div>
        </div>

        {/* EMAIL */}
        <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <div className="flex items-center space-x-2">
            <input
                type="checkbox"
                id="smtp"
                checked={enableSMTP}
                onChange={(e) => setEnableSMTP(e.target.checked)}
            />
            <label htmlFor="smtp">Enable SMTP</label>
            </div>
        </div>

        {/* NOTIFICATION */}
        <div>
            <h2 className="text-xl font-semibold mb-2">Notification</h2>
            <div className="flex items-center space-x-4">
            <label className="inline-flex items-center cursor-pointer">
                <span className="mr-2">Enable Notifications</span>
                <input
                type="checkbox"
                className="sr-only"
                checked={notificationEnabled}
                onChange={(e) => setNotificationEnabled(e.target.checked)}
                />
                <div className="w-10 h-5 bg-gray-300 rounded-full p-1 flex items-center transition-colors duration-300 ease-in-out"
                    style={{ backgroundColor: notificationEnabled ? '#4f46e5' : '#d1d5db' }}>
                <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out ${notificationEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
                </div>
            </label>
            </div>
        </div>

        {/* AUTHORIZATION */}
        <div>
            <h2 className="text-xl font-semibold mb-2">Authorization</h2>
            <div className="space-y-4">
            <button
                onClick={handleEditAuthorization}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Edit Authorization
            </button>
            <div>
                <label className="block mb-1 font-medium">Authorization Level</label>
                <select
                value={authLevel}
                onChange={(e) => setAuthLevel(e.target.value)}
                className="border px-3 py-2 rounded w-full"
                >
                <option value="user">User</option>
                <option value="moderator">Moderator</option>
                <option value="admin">Admin</option>
                <option value="superadmin">Super Admin</option>
                </select>
            </div>
            </div>
        </div>

        </div>
    );
};

export default AdminSettings;
