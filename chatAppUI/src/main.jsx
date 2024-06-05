import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import Home from "./components/Home.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { SocketContextProvider } from "./context/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </AuthContextProvider>
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);
