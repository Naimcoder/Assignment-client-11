import Home from "../Components/Page/Home/Home";
import ServicesAll from "../Components/Page/ServicesAll/ServicesAll";
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
        path:'/services',
        element:<ServicesAll></ServicesAll>,
        loader:()=>fetch('http://localhost:5000/servicesAll')

      }
    ]
  },
]);
