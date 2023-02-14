import { Navigate, Outlet } from "react-router-dom"
import React from 'react';

const useAuth = () => {
    if(localStorage.token){ return true; }
    else { return false; }
}

const HideIfLoggedInRoutes = () => {
    const isAuth = useAuth();
    console.log(isAuth)
    return isAuth ? <Navigate to="/" /> : <Outlet />
}

export default HideIfLoggedInRoutes;