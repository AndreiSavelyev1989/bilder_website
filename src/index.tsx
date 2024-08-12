import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ResponseContextProvider } from "./context/context";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ResponseContextProvider>
      <RouterProvider router={router} />
    </ResponseContextProvider>
  </React.StrictMode>
);
