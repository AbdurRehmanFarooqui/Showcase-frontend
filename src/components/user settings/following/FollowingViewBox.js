import React from "react";
import Button from "../reusables/SettingsButton";
import InfoListTile from "../reusables/InfoListTile";


export default function FollowingViewBox() {
    const des = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic rem deserunt eos possimus, voluptates inventore nam suscipit impedit vero excepturi qui mollitia. Distinctio reiciendis repellendus ab aspernatur maxime quibusdam.";
    return (
        <div className="ViewBox">
            <div id="Following-ViewBox-Main-Div">
                <div id="following-screen-information">
                    <div id="following-screen-information-left">
                        <ul>
                            <InfoListTile title="Name" name="Hamza Ahmed" />
                            <InfoListTile title="Started following on" name="22nd September 2023" />
                            <InfoListTile title="Total showcases" name="11" />
                            <InfoListTile title="Total favourites" name="6652" />
                            <InfoListTile title="Total likes" name="11124" />
                            <InfoListTile title="Total followers" name="3325" />
                            <InfoListTile title="Joined" name="12 Feburary 2023" />
                        </ul>
                    </div>
                    <div id="following-screen-information-right">
                        <h3>Description</h3>
                        <p>{des}</p>
                    </div>
                </div>
                <div id="following-screen-buttons">
                    <Button label="Unfollow" onClick={() => { }} color='#221F1F' />
                    <Button label="View Profile" onClick={() => { }} />
                </div>
            </div>
        </div>
    )
}