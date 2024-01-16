import React,{useState, useEffect} from 'react'
import RoomService from './RoomService'
import CardItem from '../../Owner/HomePage/CardItem';
import './DynamicRooms.css'


function DynamicRooms() {
    const [avlRooms, setroomAvl] = useState([]);
    // const [loading, setLoading] = useState(true);

    const getRoomAvl= async () =>{
        // const res=await fetch("http://localhost:8086/rooms/findRoomAvl");
        // setAvlRooms(await res.json());
        RoomService.getRoomAvl().then((resp)=>{
            setroomAvl(resp.data.allRoom);
        });
        // console.log(roomAvl);
    }

    useEffect(() => {
        getRoomAvl();
    }, []);



    return (
        <div className='dyn__card__grid'>
            {
                avlRooms.map((room)=>{
                    return(
                        <div>
                            <CardItem 
                                src={room.imgsrc} 
                                label={room.roomType}
                               text={room.roomDesc}
                                path='#'
                            />
                        </div>
                    );
                })
            }
        </div>
    )
}

export default DynamicRooms
