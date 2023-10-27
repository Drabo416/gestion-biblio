import { useState } from "react";
import HomePage from "./page/home.page";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./theme/color.theme";
import LivrePage from "./page/livre.page";
import MainComponent from "./component/main-componant/main-component";
import { Provider } from "react-redux";
import Store from "./Rethinktecture/Store/configStore";

function App() {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <div style={{ height: "100vh", width: "100vw" }}>
          <MainComponent></MainComponent>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
