import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthLayout({ children }) {
    const navigate = useNavigate();

    useEffect(() => {
        let isAuth = localStorage.getItem("user") ? true : false;
        console.log(localStorage.getItem("user"));
        
        if (!isAuth) navigate("/login");
    }, []);

    return (
        <main className="bg-main w-svw h-svh tracking-wide font-inter">
            {children}
        </main>
    );
}

export default AuthLayout;
