import { Navigate, Outlet } from "react-router-dom";
import React from "react";

/* This function checks if the user is logged in by checking if the token is saved in the local storage 
which controls access to protected pages. */
const useAuth = () => {
    if(localStorage.token){ return true; }
    else { return false; }
};

const ProtectRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="login/" />;
};

export default ProtectRoutes;