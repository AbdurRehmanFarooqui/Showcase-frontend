import React from 'react';
import '../../../css/user_settings_css/artist_box.css'

export default function ActivityTypeBox() {
    return (
        <div className='ArtistBox'>
            <h2>Activities</h2>
            <hr className="solid" />
            <ul id='ArtistsList'>

                <li className='ArtistListItem'>Likes</li>

                <li className='ArtistListItem'>Favourite</li>

                <li className='ArtistListItem'>Comment</li>

            </ul>
        </div>
    );
}
