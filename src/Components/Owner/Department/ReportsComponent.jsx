import React from 'react'
import './ReportsComponent.css'
import ReportCard from './ReportCard';
import {Link} from "react-router-dom";
import OwnerSidebarComponent from '../HomePage/OwnerSidebarComponent'

function ReportsComponent() {
    return (
        
        <div><br/><br/>
            {/* <SidebarComponent/> */} <OwnerSidebarComponent/>
           
            <div className='reports__'>
                <br/>
            <h1>*Reports page is under Development</h1>
                <div className="reports__header">
                    
                    {/* <div className="reports__image">
                        <img src="https://www.clicdata.com/wp-content/uploads/2018/08/conseils-pour-rendre-vos-tableaux-de-gestion-de-projet-plus-performants.jpg"/>
                    </div> */}
                    
                </div>
                

                {/* Create cards to show different Reports */}
                {/* 
                list of reports:
                1.Reservation Details 
                2.Staff Income total
                3.Inventory expenses
                */}
<br/>
<br/>
<br/>
<br/>
<br/>
                <div className='reports__row'>
                    <ReportCard title = 'Resevation Details' result='20' image="https://5.imimg.com/data5/EF/GO/MY-17287433/hotel-bookings-1000x1000.jpg"/>
                   
                    <ReportCard title = 'Monthly Reservation Details' image="https://www.revinate.com/wp-content/uploads/image-3-1024x633.png"/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className='reports__row'>
                    <ReportCard title = 'Income Details'  image="https://png.pngtree.com/png-clipart/20200226/original/pngtree-business-people-work-together-in-increasing-their-business-income-modern-vector-png-image_5326494.jpg"/>

                <ReportCard title = 'Reservation' image="https://www.revinate.com/wp-content/uploads/image-3-1024x633.png"/>
                     </div>  
                     <br/>  <br/>  
                     <div className='reports__row'>           
                <ReportCard title = 'Inventory Details'  image="https://www.kindpng.com/picc/m/567-5675046_transparent-inventory-clipart-cartoon-inventory-png-png-download.png"/>
                    </div>
                   
                  
            
                    
                    
             
               

                    
                {/* Card two Staff total Income */}

                {/* Card three Inventory Expenses */}

                <div className="reports__footer">
                    <span>Owner's Dashboard © 2022 !</span>
                </div>
            </div>
            </div>
     
    )
}

export default ReportsComponent
