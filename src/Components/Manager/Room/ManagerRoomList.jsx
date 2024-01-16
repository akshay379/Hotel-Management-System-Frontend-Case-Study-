
import React, { Component } from 'react'
import RoomService from './RoomService'
import "./ManagerRoomList.css";
import ManagerSidebar from '../HomePage/ManagerSidebar';



export default class ManagerRoomList extends Component {
    constructor(props){
        super(props)

        this.state= {
            rooms: []
        }

       
       
        this.deleteRoom=this.deleteRoom.bind(this);
    }

    componentDidMount(){
       RoomService.getRoom().then((res)=>{
           this.setState({rooms:res.data.allRoom});
             
        });
        // RoomService.getRoomAvl().then((res)=>{
        //     this.setState({rooms:res.data.findRoomAvl});
              
        //  });
    }

        deleteRoom(Id){
        RoomService.deleteRoom(Id).then( res => {
             this.setState({rooms: this.state.rooms.filter(room => room.roomId !== Id)});
         });
         }


         
    render() {
        return (
            <div className='room'>
                <br/><br/>
<ManagerSidebar/>
                <div className='content'>
                    <br/>
                <h1>Room Details</h1>
                   
                   
                   <br/>
                    <div className="row">
                        <table className="table table-hover table-bordered">
                            <thead className='table_header'>
                                <tr>
                                    <th>Room Id</th>
                                    <th>Room Charges</th>
                                    <th>Room Type</th>
                                    <th>Room Description</th>
                                    <th>Actions</th>
                                     {/* <th>Room Available</th> */}
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
                                            {/* <td>{room.roomAvl}</td> */}
                                            
                                            <td>
                                                 
                                                <button style={{marginLeft: "10px"}}onClick={ () => this.deleteRoom(room.roomId)} className="btn btn-outline-danger">Delete </button>
                                               
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
               <span>Manager's Dashboard © 2022 !</span>
               </div>

               </div>
            
        )
    }
}