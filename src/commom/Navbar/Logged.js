import React, { useContext } from "react";
import "./styles.css";
import Logo from "../../assets/logo.svg";

import { Link } from "react-router-dom";
import { AuthContext } from "../../App.js";

export default function Navbar() {
  const { auth, setAuth } = useContext(AuthContext);

  function renderButtons() {
    if (auth.path === "feed") {
      return (
        <>
          <Link className="button-active" to="/">
            Feed
          </Link>
          <Link className="button" to="/postar">
            Post
          </Link>
          <Link
            className="button"
            to="/login"
            onClick={() => {
              setAuth({ token: "null", nome: "null", path: "null" });
            }}
          >
            Logout
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link className="button" to="/">
            Feed
          </Link>
          <Link className="button-active" to="/postar">
            Post
          </Link>
          <Link
            className="button"
            to="/login"
            onClick={() => {
              setAuth({ token: "null", nome: "null", path: "null" });
            }}
          >
            Logout
          </Link>
        </>
      );
    }
  }
  return (
    <div className="navbar">
      <img src={Logo} alt="logo"></img>

      <div className="content">
        {renderButtons()}
        <h2>
          <strong>{auth.nome}</strong>
        </h2>
      </div>
    </div>
  );
}
