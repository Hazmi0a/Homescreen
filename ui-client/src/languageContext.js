import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// const { Provider } = React.createContext();

// export const LanguageContextProvider = () => {
//   const { t, i18n } = useTranslation();

//   const state = {
//     language: "ar",
//   };
//   const toggleLanguage = () => {
//     this.setState((prevState) => {
//       return {
//         language: prevState.language === "ar" ? "en" : "ar",
//       };
//     });
//   };

//   return (
//     <Provider
//       value={{
//         language: state.language,
//         toggleLanguage: toggleLanguage,
//       }}
//     >
//       {this.props.children}
//     </Provider>
//   );
// };

// export default { LanguageContextProvider };
export const context = {
  pad: "pad RTL",
  lang: "ar",
};
export const LangContext = React.createContext();
