import React, { useEffect, useRef } from 'react';
import car from '../car.jpeg';

export default function ExploreItem2() {

    return (
        <div className='ExploreItem2'>
            <img src={car} alt="Car" />
            <span>
                <h4>Car</h4>
            </span>
        </div>
    );
}
