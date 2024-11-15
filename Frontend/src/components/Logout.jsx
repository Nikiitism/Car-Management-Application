import React from 'react';
import { useAuth } from '../context/AuthProvider';

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    setAuthUser(null);
    localStorage.removeItem("Users");
    alert("Logout Successfully");
    setTimeout(() => window.location.reload(), 1000);
  };

  return (
    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
  );
}

export default Logout;
