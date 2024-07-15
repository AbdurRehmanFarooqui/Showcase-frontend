import React from "react";
import InfoListTile from "../reusables/InfoListTile";


export default function UserInfoBox() {
    return (
        <div className="UserInfoBox">
            <ul id="User-Info-List">
                <InfoListTile title="Name" name="Hamza Ahmed" />
                <InfoListTile title="Started following on" name="22nd September 2023" />
                <InfoListTile title="Total showcases" name="11" />
                <InfoListTile title="Total favourites" name="6652" />
                <InfoListTile title="Total likes" name="11124" />
                <InfoListTile title="Total followers" name="3325" />
                <InfoListTile title="Joined" name="12 Feburary 2023" />
            </ul>
        </div>
    )
}