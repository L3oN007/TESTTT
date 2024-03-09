import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        // Check if user is logged in from localStorage on component mount
        const isLoggedIn = localStorage.getItem('isLogin') === 'true';
        setIsLogin(isLoggedIn);
    }, []);

    const login = () => {
        // Perform login logic if needed
        setIsLogin(true);
        localStorage.setItem('isLogin', 'true'); // Store login state in localStorage
    };

    const logout = () => {
        localStorage.removeItem('isLogin'); // Remove login state from localStorage
        setIsLogin(false);
        navigate('/Đăng_nhập');
    };

    return (
        <AuthContext.Provider value={{ isLogin, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
