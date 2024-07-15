import React from 'react';
import ArtistBox from '../reusables/ArtistBox';
import FollowingViewBox from './FollowingViewBox';


export default function Following() {
    const des = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic rem deserunt eos possimus, voluptates inventore nam suscipit impedit vero excepturi qui mollitia. Distinctio reiciendis repellendus ab aspernatur maxime quibusdam.";
    return (
        <div className='SettingViewDiv'>
            <ArtistBox />
            <FollowingViewBox />
        </div>
    );
}
