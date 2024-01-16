import React from 'react'
import ManagerSidebar from './ManagerSidebar'
import CardItem from './CardItem'
import BannerManager from './BannerManager'
import './ManagerHomePage.css'

function ManagerHomePage() {
    return (
        <div >
            <br/><br/>
         <ManagerSidebar/><br/><BannerManager/>
          

         <div className='Managercardslist'>

            <ul className='cards___item'>
                    <CardItem 
                    src="https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
                    text='Check Room Details '
                    label='Rooms'
                    to='/manager/room'
                    />

                    <CardItem 
                    src="https://www.kindpng.com/picc/m/695-6954619_staff-hotel-employee-transparent-png-clipart-free-hotel.png"
                    text='Check Staff Details '
                    label='Staff'
                    to='/manager/staff'
                    
                    /> 
                     <CardItem 
                    src="https://www.kindpng.com/picc/m/567-5675046_transparent-inventory-clipart-cartoon-inventory-png-png-download.png"
                    text='Check Inventory Details'
                    label='Inventory'
                    to='/manager/inventory'
                    />
                     
            </ul> 

{/* 
            <ul className='cards__items'>
                    <CardItem 
                    src="https://media.istockphoto.com/vectors/vector-cartoon-illustration-interior-orangeblue-bedroom-a-living-room-vector-id813176832?k=20&m=813176832&s=170667a&w=0&h=npp82VGp7auAOqbRV-MyfDw7W9vDH5MpVXVoZEyPCfY="
                    text='Rooms-Info'
                    to='/Guest'
                    />

                    <CardItem 
                    src="https://img.freepik.com/free-vector/data-report-illustration-concept_114360-883.jpg?size=338&ext=jpg"
                    text='Reports-Info'
                    to='/owner/report'
                    />  

            </ul> */} 

            
            

            



            </div>


        </div>
    )
}

export default ManagerHomePage
