import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { GoogleContextProvider, EmailContextProvider } from "./context/context";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { GoogleOAuthProvider } from "@react-oauth/google";

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <EmailContextProvider>
      <GoogleOAuthProvider clientId={googleClientId}>
        <GoogleContextProvider>
          <RouterProvider router={router} />
        </GoogleContextProvider>
      </GoogleOAuthProvider>
    </EmailContextProvider>
  </React.StrictMode>
);
