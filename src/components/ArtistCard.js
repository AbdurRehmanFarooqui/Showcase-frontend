import React from 'react'
import car from '../car.jpeg'

export default function ArtistCard() {
      const  des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic rem deserunt eos possimus, voluptates inventore nam suscipit impedit vero excepturi qui mollitia. Distinctio reiciendis repellendus ab aspernatur maxime quibusdam."
  return (
    <div className='ArtistCard'>
        <img src={car} alt="" />
        <h3>Hamza Ahmed</h3>
        <p>{des.length > 205 ? `${des.substring(0,205)}...` : des}</p>
        <div className="Card-lfc">
            <div className="Card-Container-lfc">
            <span className='sff'>Showcases</span>
                <span className='Card-lfc-value'>38</span>
            </div>
            <div className="Card-Container-lfc">
            <span className='sff'>Followers</span>
                <span className='Card-lfc-value'>254</span>
            </div>
            <div className="Card-Container-lfc">
                <span className='sff'>Favorites</span>
                <span className='Card-lfc-value'>34</span>
            </div>
        </div>
    </div>
  )
}
