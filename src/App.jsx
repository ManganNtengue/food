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
          element: <LoginPage />,
        },
        {
          path: "/order/:userName",
          element: <OrderPage />,
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

//*******OPTION 2 */
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import LoginPage from "./components/pages/login/LoginPage";
// import {
//   createBrowserRouter,
//   Outlet,
//   Router,
//   RouterProvider,
// } from "react-router-dom";
// import ErrorPage from "./components/pages/ErrorPage";
// import OrderPage from "./components/pages/OrderPage";

// function App() {
//   const [userName, setUserName] = useState("");
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <div>
//           {" "}
//           <Outlet />{" "}
//         </div>
//       ),
//       errorElement: <ErrorPage />,
//       children: [
//         {
//           index: true,
//           element: <LoginPage userName={userName} setUserName={setUserName} />,
//         },
//         {
//           path: "/order/" + userName,
//           element: <OrderPage userName={userName} setUserName={setUserName} />,
//         },
//       ],
//     },
//   ]);

//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;
