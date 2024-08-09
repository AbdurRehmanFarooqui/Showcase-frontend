import React from 'react'
import car from '../../car.jpeg';

export default function ArtistCard(props) {
      const  des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic rem deserunt eos possimus, voluptates inventore nam suscipit impedit vero excepturi qui mollitia. Distinctio reiciendis repellendus ab aspernatur maxime quibusdam."
  return (
    <div className='ArtistCard'>
        <img src={car} alt="" />
        <h3>{props.name}</h3>
        {/* <p>{props.des.length > 205 ? `${props.des.substring(0,205)}...` : props.des}</p> */}
        <p>{props.des}</p>
        <div className="Card-lfc">
            <div className="Card-Container-lfc">
            <span className='sff'>Showcases</span>
                <span className='Card-lfc-value'>{props.showcases}</span>
            </div>
            <div className="Card-Container-lfc">
            <span className='sff'>Followers</span>
                <span className='Card-lfc-value'>{props.followers}</span>
            </div>
            <div className="Card-Container-lfc">
                <span className='sff'>Favorites</span>
                <span className='Card-lfc-value'>{props.favorites}</span>
            </div>
        </div>
    </div>
  )
}
