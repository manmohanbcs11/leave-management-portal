import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const handleLogout = () => {
  localStorage.removeItem('token');
};

export const Logout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    handleLogout();
    navigate('/login');
  }, [navigate]);

  return <div>Logging out...</div>;
};
