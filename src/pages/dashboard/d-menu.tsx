import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

type MenuItem = {
  label: string;
  icon: any;
  href: string;
}

export const MainListItems =() =>{

   const menuItem: Array<MenuItem> = [
      { label: "หน้าหลัก", icon: <DashboardIcon/>, href: "/dashboard"},
      { label: "ยื่นใบลา", icon: <PeopleIcon/>, href: "/dashboard"},
      { label: "จัดการข้อมูลการลา", icon: <BarChartIcon/>, href: "/dashboard"},
   ];

   return (
    <React.Fragment>

   {
      menuItem.map((item) =>(
        <ListItemButton key={item.label}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary={item.label} />
      </ListItemButton>
      ))
   }
    
  </React.Fragment>

   );
  
  

}
