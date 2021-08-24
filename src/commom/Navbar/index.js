import React, { useContext } from "react";
import { AuthContext } from "../../App.js";
import Logged from "./Logged";
import Logout from "./Logout";

export default function Navbar() {
  const { auth } = useContext(AuthContext);

  function renderNavbar() {
    if (auth.token === "null") {
      return <Logout />;
    } else {
      return <Logged />;
    }
  }

  return <>{renderNavbar()}</>;
}
