import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [checkUser, setCheckUser] = useState(false);
    useEffect(() => {
        if (!user && user === null) {
            fetchUserData();
        }
        else {
            console.log("loggedin")
        }
    }, [user]);

    const fetchUserData = async () => {

        try {
            setCheckUser(true);
            const response = await axiosInstance.get("/auth/login-user");
            setUser(response.data.user);
        } catch (err) {
            setUser(null)
        } finally {
        }; setCheckUser(false);
    }

    const logout = async () => {
        await axios.post("http://localhost:5000/auth/logout");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, setCheckUser, fetchUserData, logout, setUser, checkUser }}>
            {children}
        </AuthContext.Provider>
    );
};


