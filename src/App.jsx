import { useState } from "react";
import AuthPage from "./Pages/AuthPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./Pages/Welcome";

function App() {
  const [isAuth, setAuth] = useState(false);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: isAuth ? <Welcome /> : <AuthPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
