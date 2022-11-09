import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UseContext';

const PrivateRouter = ({children}) => {
    const {loader,user}=useContext(AuthContext)

    const location= useLocation()
    if (loader) {
     return <h2>Loading....</h2>
    }
    
    if (user) {
      return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
   
};

export default PrivateRouter;