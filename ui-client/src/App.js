import "./App.css";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import { StatusBar } from "./components/StatusBar/StatusBar";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import {
  ConfirmationDialogProvider,
  useConfirmationDialog,
} from "./components/ConfirmationDialogProvider/ConfirmationDialogProvider";
import { BrowserRouter, Router } from "react-router-dom";
// import { Settings } from "./pages/Settings";
// import { InputScreen } from "./pages/InputScreen";
// import { SystemInfo } from "./pages/SystemInfo";
import history from "./history";
import { LangContext } from "./languageContext";
import "./components/NavigationBar/nav-size.css";
import AppNavigator from "./Navigation/AppNavigator";
import AuthNavigator from "./Navigation/AuthNavigator";
import AuthContext from "./Auth/Context";

const ENDPOINT = process.env.REACT_APP_API_ENDPOINT || "http://localhost:4001/";

function App() {
  let socket = io(ENDPOINT);
  const [Side, setSide] = useState("pad RTL");
  const [user, setUser] = useState();

  const [context, setContext] = useState({
    pad: "pad RTL",
    lang: "ar",
  });
  const { getConfirmation } = useConfirmationDialog();
  useEffect(() => {
    socket.on("new message", (data) => {
      getConfirmation({
        title: data.title,
        message: data.message,
        type: data.type,
      });
      console.log(data.type);
    });
    socket.on("Authenticated", (data) => {
      console.log(data);
      setUser(data);
    });
    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
    //
  }, []);
  return (
    <LangContext.Provider value={[context, setContext]}>
      <LangContext.Consumer value={[context, setContext]}>
        {(context) =>
          i18n.changeLanguage(context.lang) && (
            <I18nextProvider i18n={i18n}>
              <AuthContext.Provider>
                <ConfirmationDialogProvider value={{ user, setUser }}>
                  <Router history={history}>
                    <BrowserRouter>
                      <StatusBar />
                      {user ? <AppNavigator /> : <AuthNavigator />}
                    </BrowserRouter>
                  </Router>
                </ConfirmationDialogProvider>
              </AuthContext.Provider>
            </I18nextProvider>
          )
        }
      </LangContext.Consumer>
    </LangContext.Provider>
  );
}

export default App;
