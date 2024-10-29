import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase';
import { onAuthStateChanged } from 'firebase/auth';

function ProtectedRoute({ children }) {
  const user = auth.currentUser;
  if (user === null) {
    return <Navigate to="/signin" />;
  }

  return children;
}

export default ProtectedRoute;
