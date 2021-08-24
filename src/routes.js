import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";

import Feed from "./pages/Feed";
import Publish from "./pages/Publish";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Feed} />
        <Route path="/postar" component={Publish} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
