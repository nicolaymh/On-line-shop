import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./sass/base/normalize.scss";
import "./sass/base/global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
