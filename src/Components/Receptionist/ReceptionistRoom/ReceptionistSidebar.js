import React from 'react';
import {Link} from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import HotelIcon from '@mui/icons-material/Hotel';
function ReceptionistSidebar() {
  
    return (
     <>
     
     <div className='sidebar__' >   
     
     <nav className='sidebar__ '>

<br/>
     <Link to="/receptionist" className='sidebar__text'> <DashboardIcon/>DashBoard</Link>
         <br/>
         <br/>
            
              
                <Link to="/receptionist/room" className='sidebar__text'><span>Room</span></Link> <HotelIcon/>
                <br/>
                <br/>
                <Link to="/receptionist/reservation" className='sidebar__text'><span>Reservation</span></Link> 
              
              
        </nav>
         
        </div>
       
        </>
    )
}

export default ReceptionistSidebar
