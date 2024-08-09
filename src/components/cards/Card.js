import React from 'react';
import car from '../../car.jpeg';
export default function Card() {
  const  des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic rem deserunt eos possimus, voluptates inventore nam suscipit impedit vero excepturi qui mollitia. Distinctio reiciendis repellendus ab aspernatur maxime quibusdam."
  return (
    <div className='Card'>
        <img src={car} alt="" />
        <h3>Title</h3>
        <p>{des.length > 205 ? `${des.substring(0,205)}...` : des}</p>
        <div className="Card-lfc">
            <div className="Card-Container-lfc">
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                <span className='Card-lfc-value'>38</span>
            </div>
            <div className="Card-Container-lfc">
            <i className="fa fa-heart-o"></i>
                <span className='Card-lfc-value'>254</span>
            </div>
            <div className="Card-Container-lfc">
            <i className="fa fa-comments-o"></i>
                <span className='Card-lfc-value'>34</span>
            </div>
        </div>
    </div>
  )
}
