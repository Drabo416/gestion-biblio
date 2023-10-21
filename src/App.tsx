import { useState } from "react";
import HomePage from "./page/home.page";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./theme/color.theme";
import LivrePage from "./page/livre.page";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: "100vh", width: "100vw" }}>
        <HomePage></HomePage>
      </div>
    </ThemeProvider>
  );
}

export default App;
