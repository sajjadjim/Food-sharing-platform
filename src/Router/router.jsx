import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import FoodDetails from "../Pages/Home/FoodDetails";
import PrivateRoute from "../Routes/PrivateRoute";
import AddFood from "../Pages/AddFood/AddFood";
import AvailableFood from "../Pages/AvailableFood/AvailableFood";
import RequestFood from "../Pages/RequestFood/RequestFood";
import ManageFood from "../Pages/ManageFood/ManageFood";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Error from "../Pages/Error/Error";


const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
          path:'signUp',
          Component:SignUp
        },
        {
          path:'login',
          Component:Login
        },
        {
          path:'/foods/:id',
          Component:FoodDetails,
          loader:({params})=>fetch(`https://food-server-sajjadjim.vercel.app/foods/${params.id}`)
        },
        {
          path:'/addFood',
          element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        {
          path:'/availableFood',
          Component:AvailableFood,

        },
        
        {
          path:'/myFood',
          element: <PrivateRoute><RequestFood></RequestFood></PrivateRoute>
        },
        {
          path:'manageFood',
          element:<PrivateRoute><ManageFood></ManageFood></PrivateRoute>
        },
        {
          path:'about',
          Component:AboutUs
        },
        {
          path:'*',
          Component:Error
        }


    ]
  },
]);

export default router;