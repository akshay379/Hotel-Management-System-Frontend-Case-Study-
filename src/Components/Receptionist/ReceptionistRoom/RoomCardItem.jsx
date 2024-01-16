import React from 'react'
import { Link } from 'react-router-dom';
import './RoomCardItem.css'

function RoomCardItem(props) {
    return (
        <div className='long__carditem'>
            <div className='long__cards__wrapper'>
            
            <Link className='long__carditem__link' to={props.path}>
                <div className="long__carditem__img">
                    <img src={props.src} alt="" />
                </div>

                <div className="long__carditem__info">
                    <span>{props.infoheader}</span>
                    <p>{props.info}</p>
                </div>
            
            </Link>

            </div>
        </div>
    )
}

export default RoomCardItem