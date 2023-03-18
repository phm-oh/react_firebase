import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { NavLink, useLocation } from 'react-router-dom';

type MenuItem = {
  label: string;
  icon: any;
  href: string;
}

export const MainListItems =() =>{

   const location = useLocation();

   const menuItem: Array<MenuItem> = [
      { label: "หน้าหลัก", icon: <DashboardIcon/>, href: "/dashboard"},
      { label: "ยื่นใบลา", icon: <ReceiptLongIcon/>, href: "/dashboard/leave"},
      { label: "จัดการข้อมูลการลา", icon: <AddAlarmIcon/>, href: "/dashboard/manage"},
   ];

   return (
    <React.Fragment>

   {
      menuItem.map((item) =>(
        <ListItemButton key={item.label}    component={NavLink} to={item.href} sx={{backgroundColor: location.pathname ===item.href?  'grey.300' : ''}}>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.label} />
      </ListItemButton>
      ))
   }
    
  </React.Fragment>

   );
  
  

}
