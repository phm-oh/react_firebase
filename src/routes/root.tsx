import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import RegisterPages from "../pages/register-page";

import routeDashboard from "./dashboard";


const router = createBrowserRouter([
   { 
    path : '/',
    element: <HomePage />
   },
   {
    path : '/register',
    element: <RegisterPages />
   },
   {
      path : '/login',
      element: <LoginPage/>
   },
   ...routeDashboard,

])

export default router;