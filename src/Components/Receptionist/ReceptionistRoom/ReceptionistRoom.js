
import React, { Component } from 'react'
import RoomService from "./RoomService"
import "./ReceptionistRoom.css";
import ReceptionistSidebar from './ReceptionistSidebar';
// import RoomComp from './RoomComp';
import DynamicRooms from './DynamicRooms';




export default class ReceptionistRoom extends Component {
    constructor(props){
        super(props)

        this.state= {
            rooms: []
        }

       
       
        this.deleteRoom=this.deleteRoom.bind(this);
    }

    componentDidMount(){
    //    RoomService.getRoom().then((res)=>{
    //        this.setState({rooms:res.data.allRoom});
             
    //     });
        RoomService.getRoomAvl().then((res)=>{
           this.setState({rooms:res.data.allRoom});
              
          });
    }

        deleteRoom(Id){
        RoomService.deleteRoom(Id).then( res => {
             this.setState({rooms: this.state.rooms.filter(room => room.roomId !== Id)});
         });
         }


         
    render() {
        return (
            <div className='room'> 
            <br/><br/>n
           <ReceptionistSidebar/>
         
            

                <div className='content'>
                   <br/>
                <h1>Available Rooms Details</h1>
                {/* <RoomComp/> */}<br/>
                <DynamicRooms/> 
                    <br/>
               
               
                   
                   <br/>
                    <div className="row">
                        <table className="table table-hover table-bordered table-success">
                            <thead className='thead'>
                                <tr>
                                    <th>Room Id</th>
                                    <th>Room Charges</th>
                                    <th>Room Type</th>
                                    <th>Room Description</th>
                                    {/* <th>Room Available</th>  */}
                                    <th>Actions</th>
                                   
                                </tr>
                            </thead>


                            <tbody>
                                {
                                    this.state.rooms.map(
                                        room => 
                                        <tr key={room.roomId}>
                                             <td>{room.roomId}</td>
                                            <td>{room.roomCharges}</td>
                                            <td>{room.roomType}</td>
                                            <td>{room.roomDesc}</td>
                                            {/* <td>{room.roomAvl}</td>  */}
                                            
                                            <td>
                                                 
                                            <button className='btn btn-success' onClick={this.addReservation}>Book</button>
                                               
                                                </td>
                                        </tr>
                                    )
                                }
                            </tbody>


                        </table>
                    </div>

                </div>
                <br/>
                <div className="reports__footer">
               <span>Receptionist's Dashboard © 2022 !</span>
               </div>

               
            </div>
        )
    }
}