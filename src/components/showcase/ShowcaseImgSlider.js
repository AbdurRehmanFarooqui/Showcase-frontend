import React from 'react'
import car from '../../car.jpeg';
export default function ShowcaseImgSlider() {
    return (
        <div className='ShowcaseImgSlider'>
            <button className='backwardbut arrowbut'><i className="fa fa-angle-left"></i></button>

            <div className="Showcase-Container-img">
                <img src={car} alt="" className="Showcase-img" />
            </div>
            <div className="Showcase-Container-img">
                <img src={car} alt="" className="Showcase-img main" />
            </div>
            <div className="Showcase-Container-img">
                <img src={car} alt="" className="Showcase-img" />
            </div>

            <button className='forwardbut arrowbut'><i className="fa fa-angle-right"></i></button>
        </div>
    )
}
