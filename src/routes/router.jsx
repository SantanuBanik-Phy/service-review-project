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
        // loader: () => fetch('https://b10-a10-server-site.vercel.app/movies')
       
       
      },
      
    {
        path: '/add-service',
        element: <AddService></AddService>
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
        element: <MyReviews></MyReviews>
    },
    {
        path: '/my-services',
        element: <MyServices></MyServices>
    },
// {
//   path: "/about",
//   element: <AboutUs></AboutUs>
// }
   
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
  // {
  //   path: "*",
  //   element: <ErrorPage></ErrorPage>
  // },
]);

export default router;
