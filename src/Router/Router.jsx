import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Pages/Home/Home";
import BDNews from "../Pages/BDNews/BDNews";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/category/:tag',
            element:<BDNews></BDNews>
        }
      ]
    },
  ]);