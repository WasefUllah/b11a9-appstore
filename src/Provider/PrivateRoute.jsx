import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';
import Loading from '../Components/Loading';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    // console.log(location);
    
    const {userInfo, loading} = use(AuthContext);
    if(loading){
      return <Loading></Loading>
    }
    if(userInfo && userInfo?.email){
        return children;
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
  
  };
  
  export default PrivateRoute;