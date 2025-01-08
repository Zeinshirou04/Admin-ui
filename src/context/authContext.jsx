import { createContext, useEffect, useState } from "react";

const INITIAL_STATE = localStorage.getItem("refreshToken") ? true : false;

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(INITIAL_STATE);
    const [name, setName] = useState(localStorage.getItem("name"));

    useEffect(() => {
        if(name != null) {
            localStorage.setItem("name", name);
        }
    }, [name])

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, name, setName }}>
            {children}
        </AuthContext.Provider>
    );
};
