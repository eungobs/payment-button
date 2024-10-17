import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './logout.css';

function Logout({ onLogout, isLoading }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    // Show the loader
    setTimeout(() => {
      navigate('/');
    }, 2000); // Adjust timeout as needed
  };

  return (
    <div className="logout-container">
      {isLoading ? (
        <div className="loader">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      ) : (
        <>
          <h2>Are you sure you want to logout?</h2>
          <Button variant="contained" color="primary" onClick={handleLogout}>Logout</Button>
        </>
      )}
    </div>
  );
}

export default Logout;
