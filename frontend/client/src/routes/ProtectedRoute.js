import React from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';
import { useContext } from 'react';
// import { AuthContext } from "../components/Context/AuthContext.js"
import { useAuth } from '../components/Context/AuthContext';


const ProtectedRoute = ({ element, ...rest }) => {
    const { checkUser } = useAuth()

    return checkUser ? (
        <Route {...rest} element={element} />
    ) : (
        <Navigate to="/login" replace />
    );

}

export default ProtectedRoute;


