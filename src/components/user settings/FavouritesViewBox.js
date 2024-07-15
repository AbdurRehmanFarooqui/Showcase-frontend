import React from "react";
import '../../css/user_settings_css/view_box.css'
import Button from "./SettingsButton";


export default function FavouritesViewBox() {
    return (
        <div className='ViewBox'>
            <p id='FavouritesArtistHeading'>Your Favourite showcases by <b>pen_!0</b></p>
            <ul id='FavouriteList'>
                {[...Array(10)].map((_, index) => (
                    <li key={index} className='FavouriteListItem'>
                        <div className='FavouriteListTile'>
                            <p>My homemade car using scraps</p>
                            <i className="fa fa-heart"></i>
                        </div>
                    </li>
                ))}
            </ul>
            <Button label='View Profile' onClick={() => { }} />
        </div>
    )
}