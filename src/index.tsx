import React from "react";
import ReactDOM from "react-dom/client";

import { unstable_HistoryRouter as BrowserRouter } from "react-router-dom";
// import {createBrowserHistory} from "history";
import { createBrowserHistory } from "@remix-run/router";

import { App } from "./App";
import "./fontawesome";

// const history = createBrowserHistory({ window });
const history = createBrowserHistory({ v5Compat: true });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
