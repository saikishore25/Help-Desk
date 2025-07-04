import React, { useEffect } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import DashBoardPage from '../pages/DashBoardPage';
import NewTicket from '../components/NewTicket';
import MyTicket from '../components/MyTicket';
import Navbar from '../components/NavBar';
import Sidebar from '../components/SideBar';
import Settings from '../components/Settings';
import useTicketStore from '../store/useTicketStore';
import Profile from '../components/Profile';
import PrivateRoute from '../components/PrivateRoute';

const DashboardLayout = () => (
  <div className="flex flex-col h-screen">
    <Navbar />
    <div className="flex flex-1 overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-auto bg-gray-50 p-4">
        <Outlet />
      </main>
    </div>
  </div>
);

const App = () => {
  const { isAuthenticated, checkAuth } = useTicketStore();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      {/* Protected Dashboard routes */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<DashBoardPage />} />
        <Route path="newticket" element={<NewTicket />} />
        <Route path="myticket" element={<MyTicket />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Protected Profile route */}
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
