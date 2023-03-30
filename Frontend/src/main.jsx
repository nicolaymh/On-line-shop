import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./sass/base/normalize.scss";
import "./sass/base/global.scss";
import "./sass/spinner/spinner.scss";

import Spinner from "./components/general-components/Spinner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Spinner />
  </React.StrictMode>
);
