import { Navigate, Outlet } from "react-router-dom"
import React from 'react';

const useAuth = () => {
    if(localStorage.token){ return true; }
    else { return false; }
}

const ProtectRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="login/" />
}

export default ProtectRoutes;