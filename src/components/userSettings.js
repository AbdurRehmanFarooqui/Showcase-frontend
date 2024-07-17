import React from 'react';
import car from '../car.jpeg';
import Favourites from './user settings/favourites/SettingFavourites';
import Following from './user settings/following/Following';
import UserInfo from './user settings/info/Info';
import ActivityLog from './user settings/activity log/ActivityLog';

export default function Settings() {
    const des = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic rem deserunt eos possimus, voluptates inventore nam suscipit impedit vero excepturi qui mollitia. Distinctio reiciendis repellendus ab aspernatur maxime quibusdam.";
    return (
        <div className='Settings'>
            <div className='SettingsRightSideNavigationBar'>
                <ul className='SettingsRightSideNavigationBarItemList'>
                    <li className='SettingRightSideNavigationBarItemMain'>
                        <div>
                            <img id='profilePic' src={car} alt='Profile' />
                            <p>Hamza Ahmed</p>
                        </div>
                    </li>
                    <hr class="solid" />
                    <li className='SettingRightSideNavigationBarItem'>Info</li>
                    <li className='SettingRightSideNavigationBarItem'>Following</li>
                    <li className='SettingRightSideNavigationBarItem'>Favourites</li>
                    <li className='SettingRightSideNavigationBarItem'>Activity Log</li>
                    <li className='SettingRightSideNavigationBarItem'>Publisher Profile</li>
                </ul>
            </div>


            {/* <Favourites /> */}
            {/* <Following /> */}
            {/* <UserInfo /> */}
            <ActivityLog />
        </div>
    );
}
