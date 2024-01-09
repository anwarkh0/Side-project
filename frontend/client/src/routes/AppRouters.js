import Dashboard from '../pages/dashboard/Dashboard';
import NotFound from '../pages/NotFound/NotFound.js';
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Meme from "../pages/Meme/Meme"
import Notfound from '../pages/NotFound/Not-found.js';
import Signup from '../pages/Signup/Signup'
import { AuthProvider } from '../components/Context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';


const AppRoutes = () => {
    return (
            

                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/meme/:id" element={<Meme />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path="/notfound/" element={<Notfound />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
    );
};

export default AppRoutes;