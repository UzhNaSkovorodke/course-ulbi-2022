import { render } from "react-dom";
import App from "./App";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./Theme/ThemeProvider";

render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
