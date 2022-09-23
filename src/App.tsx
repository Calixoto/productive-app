import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { CyclesContextProvider } from "./contexts/CyclesContext";
import { TasksContextProvider } from "./contexts/TasksContext";
import { Router } from "./Router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <TasksContextProvider>
          <CyclesContextProvider>
            <Header />
            <Router />
          </CyclesContextProvider>
        </TasksContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
