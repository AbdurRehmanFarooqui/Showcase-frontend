import React from 'react';
import ActivityTypeBox from './activity_type_box';
import FavouritesAndActivityLogViewBox from '../favourites/FavouritesViewBox';


export default function ActivityLog() {
    const dummyData = {
        publisher: "John Doe",
        items: [
            { leading: "Activity 1" },
            { leading: "Activity 2" },
            { leading: "Activity 3" },
            { leading: "Activity 4" },
            { leading: "Activity 5" },
            { leading: "Activity 6" },
            { leading: "Activity 7" },
            { leading: "Activity 8" },
            { leading: "Activity 9" },
            { leading: "Activity 10" }
        ]
    };
    return (
        <div className='SettingViewDiv'>
            <ActivityTypeBox />
            <FavouritesAndActivityLogViewBox favOrActivityLog={false} data={dummyData} />

        </div>
    );
}
