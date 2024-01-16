import React from 'react'
import ReceptionistSidebar from '../ReceptionistRoom/ReceptionistSidebar'
import CardItem from './CardItem'
import BannerRecep from './BannerRecep'
import './ReceptionistHomePage.css'

function ReceptionistHomePage() {
    return (
        <div >
            <br/><br/>
         <ReceptionistSidebar/><br/><BannerRecep/>
          

         <div className='Receptionistcardslist'>

            <ul className='cards___item'>
                    <CardItem 
                    src="https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
                    text='Check Available Rooms '
                    to='/receptionist/room'
                    />

                    <CardItem 
                    src="https://cdn3.vectorstock.com/i/1000x1000/94/02/reception-service-receptionist-and-customer-vector-26089402.jpg"
                    text='Check Reservations'
                    to='/receptionist/reservation'
                    
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

export default ReceptionistHomePage
