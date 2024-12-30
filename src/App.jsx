import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Expenses from "./Pages/Dashboard/Partials/Expenses";
import Balances from "./Pages/Dashboard/Partials/Balances";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";


function App() {
    const { isLoggedIn } = useContext(AuthContext);

    const RequiredAuth = ({ children }) => {
        return isLoggedIn ? children : <Navigate to="/login" />
    }

    const routes = createBrowserRouter([
        {
            path: "/",
            element: (
                <RequiredAuth>
                    <Dashboard />
                </RequiredAuth>
            ),
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "/forgot/password",
            element: <ForgotPassword />,
        },
        {
            path: "/dashboard",
            element: (
                <RequiredAuth>
                    <Dashboard />
                </RequiredAuth>
            ),
        },
        {
            path: "/dashboard/expenses",
            element: (
                <RequiredAuth>
                    <Expenses />
                </RequiredAuth>
            )
        },
        {
            path: "/dashboard/balances",
            element: (
                <RequiredAuth>
                    <Balances />
                </RequiredAuth>
            )
        },
    ]);

    return (
        <>
            <RouterProvider router={routes} />
        </>
    );
}

export default App;
