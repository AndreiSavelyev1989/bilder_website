import ReactDOM from "react-dom/client";
import "./index.css";
import {
  GoogleContextProvider,
  EmailContextProvider,
  UserProfileContextProvider,
} from "./context/context";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { GoogleOAuthProvider } from "@react-oauth/google";

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <EmailContextProvider>
    <UserProfileContextProvider>
      <GoogleOAuthProvider clientId={googleClientId}>
        <GoogleContextProvider>
          <RouterProvider router={router} />
        </GoogleContextProvider>
      </GoogleOAuthProvider>
    </UserProfileContextProvider>
  </EmailContextProvider>
);
