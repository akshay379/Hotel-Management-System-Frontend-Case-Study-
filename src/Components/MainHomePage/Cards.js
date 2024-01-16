import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'><br/>
      <h1> Rooms Layout</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="https://images.wallpaperscraft.com/image/single/hotel_room_bed_stylish_modern_39745_1280x800.jpg"
              text='Explore the Comfort '
               to='/'
            />
            <CardItem
              src='https://w0.peakpx.com/wallpaper/240/377/HD-wallpaper-bedroom-hotel-room-light-design-modern-apartment-interior-idea-modern-design.jpg'
              text='The Deluxe Room'
              to='/'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://cdn.cnn.com/cnnnext/dam/assets/190816161527-hotel-views-intercontinental-hong-kong-full-169.jpg'
              text='The Single Room'
           
              to='/'
            />
            <CardItem
              src='https://c4.wallpaperflare.com/wallpaper/270/633/106/modern-king-size-bedroom-wallpaper-preview.jpg'
              text='Experience the Zone'
             
              to='/'
            />
            {/* <CardItem
              src='https://cdn.wallpapersafari.com/88/55/jf4tYK.jpg'
              text='The Best Place to A new world, Discover it '
              to='/'
            
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
