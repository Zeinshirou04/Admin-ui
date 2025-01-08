import { createContext, useEffect, useState } from "react";

export const PageThemeContext = createContext();

export const PageThemeContextProvider = ({ children }) => {

    const getDarkValue = () => {
        let temp = localStorage.getItem("dark");
        if(temp == null) return false;
        if(temp == "false") return false;
        if(temp == "true") return true;
    }

    const [dark, setDark] = useState(getDarkValue);

    useEffect(() => {
        localStorage.setItem("dark", dark);
    }, [dark]);

    return (
        <PageThemeContext.Provider value={{ dark, setDark }}>
            {children}
        </PageThemeContext.Provider>
    );
};