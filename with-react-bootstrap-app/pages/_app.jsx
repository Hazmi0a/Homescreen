import React, {useEffect } from "react";

import "../style/index.css";
import "../style/keyboard.css";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import { StatusBar } from "../components/StatusBar/StatusBar";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import { GlobalStyles } from "../global";
import { ConfirmationDialogProvider, useConfirmationDialog } from "../components/ConfirmationDialogProvider/ConfirmationDialogProvider"

let socket; 

export default function MyApp({ Component, pageProps }) {
  // const ENDPOINT = process.env.API_ENDPOINT;
  // const { getConfirmation } = useConfirmationDialog();
  // useEffect(() => {

  //   socket = io(ENDPOINT);
  //   socket.on("new message", data => {
  //      getConfirmation({
  //       title: data.title,
  //       message: data.message,
  //       type: data.type
  //     });
  //     console.log(data.type);
  //   });
  //   // CLEAN UP THE EFFECT
  //   return () => socket.disconnect();
  //   //
    
  // }, [ENDPOINT]);
  return (
    
    <I18nextProvider i18n={i18n}>
      <ConfirmationDialogProvider>
      <>
        <StatusBar />
        <Component {...pageProps} />
        {/* <NavigationBar /> */}
      </>
      </ConfirmationDialogProvider>
    </I18nextProvider>
  );
}
