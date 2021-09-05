import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Router,
  Redirect,
} from "react-router-dom";

import Home from "../pages/index";
import { Settings } from "../pages/Settings";
import { InputScreen } from "../pages/InputScreen";
import { SystemInfo } from "../pages/SystemInfo";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";

function AppNavigator(props) {
  return (
    <>
      <Switch>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/settings/SystemInfo">
          <SystemInfo />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <NavigationBar />
    </>
  );
}

export default AppNavigator;
