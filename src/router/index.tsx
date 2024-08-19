import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Login } from "../components/Login/Login";
import { NotFound } from "../components/NotFound/NotFound";

export const baseUrl = "/bilder_website";

export const router = createBrowserRouter([
  {
    path: `${baseUrl}`,
    element: <App />,
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
