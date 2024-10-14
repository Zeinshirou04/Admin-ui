import { useState, useEffect } from "react";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

const AuthPage = () => {
  const [page, setPage] = useState("signIn");

  let component;

  if (page == "signIn") component = <Login setPage={setPage} />;
  if (page == "signUp") component = <Register setPage={setPage} />;

  return component;
};

export default AuthPage;
