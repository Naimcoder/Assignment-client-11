import Home from "../Components/Page/Home/Home";
import Login from "../Components/Page/Login/Login";
import Register from "../Components/Page/Register/Register";
import Root from "../Layout/Root";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", 
       element: <Home></Home> },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/Order",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
