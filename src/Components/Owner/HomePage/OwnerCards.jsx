import React from 'react';
import './OwnerCards.css';
import CardItem from './CardItem';

import Time from './Time';

import Banner from './Banner';

function OwnerCards() {
  return (
       
    <div className='sidebar'>
  
      <br/>
    <Banner/>
    <div className='cards'>
  
      <h1>Welcome  </h1><Time/>
   
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          
            <CardItem
              src="https://thumbs.dreamstime.com/b/isometric-business-office-team-corporate-teamwork-meeting-employee-workplace-people-work-d-vector-illustration-career-strategy-148009201.jpg"
              text='Check Department Details '
               label='Department'
               path='/owner/department'
            />
          
            <CardItem
              src='https://thumbs.dreamstime.com/z/hotel-staff-waiter-bellhop-administrator-maid-hotel-themed-primitive-cartoon-illustration-part-inn-clients-employees-82751321.jpg'
              text='Check the Staff Details'
              label='Staff'
             path='/owner/staff'
            />
          
            
          </ul>
          <br/> <br/>
          <ul className='cards__items'>
            <CardItem
              src='https://preview.colorlib.com/theme/suites/images/ximg_1.jpg.pagespeed.ic.1H3zXpM6hU.webp'
              text='Check Room Details'
              label='Rooms'
              path='/owner/room'
            />
            <CardItem
            src='https://cdn.xlreporting.com/web/report.png'
            text='Check the Reports'
            
            label='Report'
              path='/owner/report'
            />
          
          </ul>
          
        </div>
      </div>
    </div>
    <div className="reports__footer">
     <span>Owner's Dashboard © 2022 !</span>
     </div>
    
    </div>
    
  );
}

export default OwnerCards;
