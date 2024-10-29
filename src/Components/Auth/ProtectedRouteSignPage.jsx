import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase';

function ProtectedRouteSignPage({ children }) {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((currentUser) => {
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

export default ProtectedRouteSignPage;
