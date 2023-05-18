import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import FormSite from "../../Layout/formSite";
import Login from "../../Pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/appointment', 
        element: <Appointment></Appointment>
      }
    ]
  },
  {
    path: '/login',
    element:<FormSite></FormSite>,
    children:[
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])