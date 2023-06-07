import React from "react";
import ReactDOM from "react-dom/client";

// Component.
import App from "./App";

// Global Styles.
import "./sass/base/normalize.scss";
import "./sass/base/global.scss";

// Animate.css library for CSS animations.
import "animate.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
