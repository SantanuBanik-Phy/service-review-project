import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home";
import Register from "../Components/Register";
import Login from "../Components/Login";
import AddService from "../pages/AddService";
import ServiceDetails from "../pages/SerivceDetails";
import MyReviews from "../pages/MyReviews";
import Services from "../pages/Services";
import MyServices from "../pages/Myservices";
import CommunityForum from "../pages/CommunityForum";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
       
        <HomeLayout />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      
       
      },
      
    {
        path: '/add-service',
        element: <PrivateRoute><AddService></AddService></PrivateRoute> 
    },
    {
        path: '/services',
        element: <Services></Services>
    },
    {
        path: '/services/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`http://localhost:3000/api/services/${params.id}`)
    },
    {
        path: '/my-reviews',
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute> 
    },
    {
        path: '/my-services',
        element:<PrivateRoute><MyServices></MyServices></PrivateRoute> 
    },
{
  path: "/forum",
  element: <CommunityForum></CommunityForum>
}
   
    ],
  },
  {
    path: "auth",
    element: (
      <>
     
        <AuthLayout />
      </>
    ),
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  },
]);

export default router;
