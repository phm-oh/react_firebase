import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/home-page";
import RegisterPages from "../pages/register-page";
import routeDashboard from "./dashboard";


const router = createBrowserRouter([
   { 
    path : '/',
    element: <HomePage />
   },
   {
    path : '/register',
    element: <RegisterPages/>
   },
   ...routeDashboard,

])

export default router;