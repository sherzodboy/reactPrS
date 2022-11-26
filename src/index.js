import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import Provider from "./context";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
