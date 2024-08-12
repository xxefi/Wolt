import React from "react";
import ReactDOM from "react-dom/client";
import App from "../other/App.jsx";
import "../../styles/MainStyle.css";
import { ChakraProvider } from "@chakra-ui/react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

const muiTheme = createTheme({});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MUIThemeProvider theme={muiTheme}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </MUIThemeProvider>
  </BrowserRouter>
);
