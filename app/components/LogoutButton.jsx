import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase'; // Assuming you have Firebase authentication set up

const LogoutButton = () => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      history.push('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default LogoutButton;
