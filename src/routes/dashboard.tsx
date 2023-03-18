import { RouteObject } from "react-router-dom";
import Authguard from "../guards/authguard";
import DHome from "../pages/dashboard/d-home";
import DLayout from "../pages/dashboard/d-layout";
import DLeave from "../pages/dashboard/d-leave";
import DManageLeave from "../pages/dashboard/d-manage-leave";


const routeDashboard: RouteObject[] = [
    {
        path: "/dashboard",
       // element: <DLayout />,
          element:<Authguard />,
        children: [
            {
                path:"",  // localhost:4000/dashboard
                element: <DHome />
            },
            {
                path: "leave",
                element:<DLeave/>
            },
            {
                path: "manage",
                element:<DManageLeave/>
            }
        ]
    }
]


export  default routeDashboard;