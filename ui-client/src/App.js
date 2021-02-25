import "./App.css";
import React, { useEffect } from "react";
import "./style/index.css";
import "./style/keyboard.css";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { StatusBar } from "./components/StatusBar/StatusBar";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import {
  ConfirmationDialogProvider,
  useConfirmationDialog,
} from "./components/ConfirmationDialogProvider/ConfirmationDialogProvider";
import Home from "./pages/index";
import { BrowserRouter, Switch, Route, Link, Router } from "react-router-dom";
import { Settings } from "./pages/Settings";
import { InputScreen } from "./pages/InputScreen";
import history from "./history";
function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ConfirmationDialogProvider>
        <Router history={history}>
          <BrowserRouter>
            <StatusBar />
            <Switch>
              <Route path="/settings">
                <Settings />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/password">
                <InputScreen />
              </Route>
            </Switch>
            <NavigationBar />
          </BrowserRouter>
        </Router>
      </ConfirmationDialogProvider>
    </I18nextProvider>
  );
}

export default App;
