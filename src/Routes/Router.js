import AddService from "../Components/Page/AddService/AddService";
import Blog from "../Components/Page/Blog/Blog";
import Home from "../Components/Page/Home/Home";
import Login from "../Components/Page/Login/Login";
import MyReview from "../Components/Page/MyReview/MyReview";
import Register from "../Components/Page/Register/Register";
import ServicesAll from "../Components/Page/ServicesAll/ServicesAll";
import ServicesDetails from "../Components/Page/ServicesDetails/ServicesDetails";
import PrivateRouter from "./PrivateRouter";
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
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },{
        path:'services/:id',
        element:<PrivateRouter><ServicesDetails></ServicesDetails></PrivateRouter>,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },{
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/addservice',
        element:<PrivateRouter><AddService></AddService></PrivateRouter>
      },
      {
        path:'/reviews',
        element:<PrivateRouter><MyReview></MyReview></PrivateRouter>
      }
    ]
  },
]);
