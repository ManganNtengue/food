import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./components/pages/login/LoginPage";
import {
  createBrowserRouter,
  Outlet,
  Router,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/pages/ErrorPage";
import OrderPage from "./components/pages/OrderPage";

function App() {
  const [name, setName] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          {" "}
          <Outlet />{" "}
        </div>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <LoginPage name={name} setName={setName} />,
        },
        {
          path: "/order/" + name,
          element: <OrderPage name={name} setName={setName} />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
