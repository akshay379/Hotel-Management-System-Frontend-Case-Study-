import React from 'react';
import {Link} from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HotelIcon from '@mui/icons-material/Hotel';
import PeopleIcon from '@mui/icons-material/People';
function OwnerSidebarComponent() {
  
    return (
     <>
     
     <div className='sidebar__' >   
     
     <nav className='sidebar__ '>

    
<br/>
     <Link to="/owner" className='sidebar__text'> <DashboardIcon/>DashBoard</Link>
         <br/>
         <br/>
                
 <Link to="/owner/department" className='sidebar__text'><span>Department</span></Link><ApartmentIcon/>
              
                <br/>
                <br/>
                <Link to="/owner/staff" className='sidebar__text'><span>Staff</span></Link> <PeopleIcon/>
                <br/>
                <br/>
                <Link to="/owner/room" className='sidebar__text'><span>Room</span></Link> <HotelIcon/>
                <br/>
                <br/>
                {/* <Link to="/owner/report" className='sidebar__text'><span>Report</span></Link> */}
              
              
        </nav>
         
        </div>
       
        </>
    )
}

export default OwnerSidebarComponent
