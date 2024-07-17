import React from "react";
import '../../../css/user_settings_css/view_box.css'
import Button from "../reusables/SettingsButton";

let Tile = ({ leading, favOrActivityLog }) => {
    return (
        <li className='FavouriteListItem'>
            <div className='FavouriteListTile'>
                <p>{leading}</p>
                {favOrActivityLog && <i className="fa fa-heart"></i>}
            </div>
        </li>
    );
}

export default function FavouritesAndActivityLogViewBox({ favOrActivityLog, data }) {
    return (
        <div className='ViewBox'>
            {favOrActivityLog ? (
                <p id='FavouritesArtistHeading'>Your Favourite showcases by <b>{data.publisher}</b></p>
            ) : (
                <p id='FavouritesArtistHeading'>Your Activities</p>
            )}
            <ul id='FavouriteList'>
                {data.items.map((item, index) => (
                    <Tile key={index} leading={item.leading} favOrActivityLog={favOrActivityLog} />
                ))}
            </ul>
            {/* <Button label='View Profile' onClick={() => { }} className='Favourite-View-Profile' /> */}
        </div>
    );
}


// export default function FavouritesViewBox() {
//     return (
//         <div className='ViewBox'>
//             <p id='FavouritesArtistHeading'>Your Favourite showcases by <b>pen_!0</b></p>
//             <ul id='FavouriteList'>
//                 {[...Array(10)].map((_, index) => (
//                     <li key={index} className='FavouriteListItem'>
//                         <div className='FavouriteListTile'>
//                             <p>My homemade car using scraps</p>
//                             <i className="fa fa-heart"></i>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//             {/* <Button label='View Profile' onClick={() => { }} className='Favourite-View-Profile' /> */}
//         </div>
//     )
// }