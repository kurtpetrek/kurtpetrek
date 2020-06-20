import React from "react";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import styleTheme from "./constants/styles/styleTheme";
import GlobalStyles from "./constants/styles/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={styleTheme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
