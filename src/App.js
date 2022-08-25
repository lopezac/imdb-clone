import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./Assets/Styles/GlobalStyle";
import { appTheme } from "./Assets/Styles/Theme";
import RouteSwitch from "./RouteSwitch";

export default function App() {
  return (
    <>
      <ThemeProvider theme={appTheme}>
        <GlobalStyles />
        <RouteSwitch />
      </ThemeProvider>
    </>
  );
}
