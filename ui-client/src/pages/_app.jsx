import React, { useEffect } from "react";

import "../style/index.css";
import "../style/keyboard.css";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import { StatusBar } from "../components/StatusBar/StatusBar";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import { GlobalStyles } from "../global";
import {
  ConfirmationDialogProvider,
  useConfirmationDialog,
} from "../components/ConfirmationDialogProvider/ConfirmationDialogProvider";

export default function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <ConfirmationDialogProvider>
        <>
          <StatusBar />
          <Component {...pageProps} />
          <NavigationBar />
        </>
      </ConfirmationDialogProvider>
    </I18nextProvider>
  );
}
