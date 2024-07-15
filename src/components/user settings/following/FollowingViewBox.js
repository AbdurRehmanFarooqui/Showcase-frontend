import React from "react";
import Button from "../SettingsButton";

const ListItem = ({ title, name }) => (
    <li className="following-screen-information-left-item">
        <h3>{title}</h3>
        <h2>{name}</h2>
    </li>
);


export default function FollowingViewBox() {
    const des = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic rem deserunt eos possimus, voluptates inventore nam suscipit impedit vero excepturi qui mollitia. Distinctio reiciendis repellendus ab aspernatur maxime quibusdam.";
    return (
        <div className="ViewBox">
            <div id="Following-ViewBox-Main-Div">
                <div id="following-screen-information">
                    <div id="following-screen-information-left">
                        <ul>
                            <ListItem title="Name" name="Hamza Ahmed" />
                            <ListItem title="Started following on" name="22nd September 2023" />
                            <ListItem title="Total showcases" name="11" />
                            <ListItem title="Total favourites" name="6652" />
                            <ListItem title="Total likes" name="11124" />
                            <ListItem title="Total followers" name="3325" />
                            <ListItem title="Joined" name="12 Feburary 2023" />
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