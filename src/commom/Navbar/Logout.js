import React from "react";
import "./styles.css";
import Logo from "../../assets/logo.svg";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="logo"></img>

      <div className="content">
        <Link className="button" to="/cadastro">
          Cadastro
        </Link>
        <Link className="button" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}
