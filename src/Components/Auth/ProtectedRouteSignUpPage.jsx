import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase'; 
import { onAuthStateChanged } from 'firebase/auth'; 

function ProtectedRouteSignUpPage({ children }) {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false); 
      });

      return () => unsubscribe();
   }, []);

   if (loading) {
      return <div>Loading...</div>;
   }

   if (user != null) {
      return <Navigate to="/home" />;
   }

   return children;
}

export default ProtectedRouteSignUpPage;
