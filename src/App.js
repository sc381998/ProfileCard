import React from "react";
import "./styles.css";
import Card from "./components/Card";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/useDarkMode";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import Toggle from "./components/Toggler";
import { Container, Box } from "@material-ui/core";
export default function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Container>
          <Toggle theme={theme} toggleTheme={themeToggler} />

          {/* <ToggleButton
          className="header"
          darkTheme={darkTheme}
          onChangeTheme={handleChange}
        /> */}
          <Card />
        </Container>
      </>
    </ThemeProvider>
  );
}
