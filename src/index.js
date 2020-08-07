import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { ExpenseProvider } from "./store/ExpenseContext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ExpenseProvider>
      <App />
    </ExpenseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
