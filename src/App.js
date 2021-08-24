import "./global.css";

import Routes from "./routes";
import React, { useState, createContext } from "react";

export const AuthContext = createContext(null);

export default function App() {
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token"),
    nome: localStorage.getItem("nome"),
  });

  const setAuthLS = (newAuth) => {
    setAuth(newAuth);
    localStorage.setItem("token", newAuth.token);
    localStorage.setItem("nome", newAuth.nome);
  };

  return (
    <AuthContext.Provider value={{ auth: auth, setAuth: setAuthLS }}>
      <div className="App">
        <Routes></Routes>
      </div>
    </AuthContext.Provider>
  );
}
