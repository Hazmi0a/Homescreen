import "../style/index.css";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import { StatusBar } from "../components/StatusBar/StatusBar";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import { GlobalStyles } from "../global";

export default function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <>
        <StatusBar />
        <Component {...pageProps} />
        <NavigationBar />
      </>
    </I18nextProvider>
  );
}
