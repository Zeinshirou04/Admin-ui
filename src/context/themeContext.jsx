import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

    const getTheme = () => {
        let temp = localStorage.getItem("theme");
        if(temp != null) return JSON.parse(temp);
        return { name: "theme-green", color: "#299D91" };
    }

    const [theme, setTheme] = useState(getTheme);

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};