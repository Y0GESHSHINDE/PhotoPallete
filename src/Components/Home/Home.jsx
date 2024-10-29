import { useState } from 'react';
import React from 'react';
import { auth } from '../../Firebase/Firebase';
import { signOut } from 'firebase/auth';
import { Navigate } from 'react-router-dom';

function Home() {
  const user = auth.currentUser;
  const [isLogout, setIsLogout] = useState(false);

  const logout = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      setIsLogout(true);
      localStorage.removeItem("isUserLogin")
    } catch (error) {
      console.log(error.code);
    }
  };

  if (isLogout) {
    return <Navigate to="/signin" />;
  }

  return (
    <div>
      <div>{user?.email}</div>
      <button className="btn btn-danger" onClick={logout}>signOut</button>
    </div>
  );
}

export default Home;
