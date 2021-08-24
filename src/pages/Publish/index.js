import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../App.js";
import { useHistory } from "react-router-dom";

import "./styles.css";
import Navbar from "../../commom/Navbar";
import FormPost from "../../commom/FormPost";

export default function Postar() {
  const { auth, setAuth } = useContext(AuthContext);
  const history = useHistory();

  if (auth.token === "undefined") {
    history.push("/login");
  }

  useEffect(() => {
    setAuth({
      token: auth.token,
      nome: auth.nome,
      path: "publish",
    });
  }, []);

  return (
    <div className="postar">
      <Navbar clicked="postar"></Navbar>
      <FormPost></FormPost>
    </div>
  );
}
