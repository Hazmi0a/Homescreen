import "./App.css";
import React, { useEffect, useState } from "react";
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
import { SystemInfo } from "./pages/SystemInfo";
import history from "./history";
import { LangContext } from "./languageContext";
import "./components/NavigationBar/nav-size.css";

function App() {
  const [Side, setSide] = useState("pad RTL");
  const [context, setContext] = useState({
    pad: "pad RTL",
    lang: "ar",
  });
  return (
    <LangContext.Provider value={[context, setContext]}>
      <LangContext.Consumer value={[context, setContext]}>
        {(context) =>
          i18n.changeLanguage(context.lang) && (
            <I18nextProvider i18n={i18n}>
              <ConfirmationDialogProvider>
                <Router history={history}>
                  <BrowserRouter>
                    <StatusBar />
                    <Switch>
                      <Route exact path="/settings">
                        <Settings />
                      </Route>
                      <Route exact path="/">
                        <Home />
                      </Route>
                      <Route path="/password">
                        <InputScreen />
                      </Route>
                      <Route path="/settings/SystemInfo">
                        <SystemInfo />
                      </Route>
                    </Switch>
                    <NavigationBar />
                  </BrowserRouter>
                </Router>
              </ConfirmationDialogProvider>
            </I18nextProvider>
          )
        }
      </LangContext.Consumer>
    </LangContext.Provider>
  );
}

export default App;
