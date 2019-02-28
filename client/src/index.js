import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { MessageProvider } from "./MessageProvider";

const serverUrl =
  process.env.NODE_ENV === "production"
    ? "http://localhost:4000"
    : "http://localhost:4000";

ReactDOM.render(
  <MessageProvider serverUrl={serverUrl}>
    <App />
  </MessageProvider>,
  document.getElementById("root")
);
