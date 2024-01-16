import React from 'react';
import {Link} from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import InventoryIcon from '@mui/icons-material/Inventory';
function ManagerSidebar() {
  
    return (
     <>
     
     <div className='sidebar__' >   
     
     <nav className='sidebar__ '>

<br/>
     <Link to="/manager" className='sidebar__text'>  <DashboardIcon/> DashBoard</Link>
         <br/>
         <br/>
            
              
                <Link to="/manager/room" className='sidebar__text'><span>Room</span></Link> <LocalHotelIcon/>
                <br/>
                <br/>
                <Link to="/manager/staff" className='sidebar__text'><span>Staff</span></Link> <PeopleIcon/>
                <br/>
                <br/>
                <Link to="/manager/inventory" className='sidebar__text'><span>Inventory</span></Link> <InventoryIcon/>
              
        </nav>
         
        </div>
       
        </>
    )
}

export default ManagerSidebar
