import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Register } from "../components/Register/Register";
import { NotFound } from "../components/NotFound/NotFound";
import { Login } from "../components/Login/Login";

export const baseUrl = "/bilder_website";

export const router = createBrowserRouter([
  {
    path: `${baseUrl}`,
    element: <App />,
  },
  {
    path: `${baseUrl}/register`,
    element: <Register />,
  },
  {
    path: `${baseUrl}/login`,
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
