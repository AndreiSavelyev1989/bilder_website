import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Login } from "../components/Login/Login";
import { NotFound } from "../components/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
