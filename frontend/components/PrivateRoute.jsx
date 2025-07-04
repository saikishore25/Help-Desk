// components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import useTicketStore from '../store/useTicketStore';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useTicketStore();

  // Optional: add loading screen
  if (loading) return <div>Loading...</div>;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
