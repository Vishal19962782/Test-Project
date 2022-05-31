import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CodeProvider } from "./Context/CodeContext";
import { TableProvider } from "./Context/tableContext";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({

});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <TableProvider>
        <CodeProvider>
          <App />
        </CodeProvider>
      </TableProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
