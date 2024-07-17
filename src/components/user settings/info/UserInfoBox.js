import React from "react";
import InfoListTile from "../reusables/InfoListTile";




export default function UserInfoBox() {
    return (
        <div className="UserInfoBox">
            <ul id="User-Info-List">
                <InfoListTile title="Username" name="Hamza Ahmed" />
                <InfoListTile title="Email" name="criticalhitter31@gmail.com" />
                <InfoListTile title="Total liked showcases" name="11" />
                <InfoListTile title="Total favourite showcases" name="7" />
                <InfoListTile title="Total artists following" name="3" />
                <InfoListTile title="Total comments made" name="15" />
                <InfoListTile title="Date joined" name="12 Feburary 2023" />
                <InfoListTile title="Publisher status" name="Joined" />
            </ul>
        </div>
    )
}