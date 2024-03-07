import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [ isLogin, setIsLogin] = useState(false);

    const login = () => {
        // Perform login logic if needed
        setIsLogin(true);
    };

    const logout = () => {
        localStorage.clear();
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
