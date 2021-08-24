import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../App.js";
import { useHistory } from "react-router-dom";

import "./styles.css";
import Navbar from "../../commom/Navbar";
import TimeLine from "../../commom/TimeLine";

export default function Feed() {
  const { auth, setAuth } = useContext(AuthContext);
  const history = useHistory();

  if (auth.token === "undefined") {
    history.push("/login");
  }

  useEffect(() => {
    setAuth({
      token: auth.token,
      nome: auth.nome,
      path: "feed",
    });
  }, []);

  return (
    <div className="feed">
      <Navbar clicked="feed"></Navbar>
      <TimeLine></TimeLine>
    </div>
  );
}
