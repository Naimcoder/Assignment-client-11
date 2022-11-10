import AddService from "../Components/Page/AddService/AddService";
import Blog from "../Components/Page/Blog/Blog";
import Home from "../Components/Page/Home/Home";
import Login from "../Components/Page/Login/Login";
import MyReview from "../Components/Page/MyReview/MyReview";
import Update from "../Components/Page/MyReview/Update";
import Register from "../Components/Page/Register/Register";
import ServicesAll from "../Components/Page/ServicesAll/ServicesAll";
import ServicesDetails from "../Components/Page/ServicesDetails/ServicesDetails";
import Root from "../Layout/Root";
import PrivateRouter from "./PrivateRouter";

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
        loader:()=>fetch('https://assignment-review-server-one.vercel.app/servicesAll')
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
        loader:({params})=>fetch(`https://assignment-review-server-one.vercel.app/services/${params.id}`)
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
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`https://assignment-review-server-one.vercel.app/reviews/${params.id}`)
      }
    ]
  },
]);
