import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { initFireBase } from "./firebase/config";
import { IsLoadingContextProvider } from "./contexts/IsLoadingContextProvider";
import App from "./App";
import "./index.css";

initFireBase();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <IsLoadingContextProvider>
        <App />
      </IsLoadingContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
