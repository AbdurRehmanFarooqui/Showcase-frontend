import React from "react";



let ActionListTile = ({ heading, action }) => {
    return (
        <li className="User-Info-Action-List-Tile">
            <p className="User-Info-Action-List-Tile-Heading">{heading}</p>
            <p className="User-Info-Action-List-Tile-Action">{action}</p>
        </li>
    )
}

export default function UserInfoViewBox() {
    return (
        <div className="ViewBox">
            <h3 id="Info-Settings-Heading">Settings</h3>
            <ul>
                <ActionListTile heading="Clear Activity Log" action="Clear" />
                <ActionListTile heading="Update Username" action="Update" />
                <ActionListTile heading="Clear Favourites" action="Clear" />
                <ActionListTile heading="Unfollow All" action="Unfollow" />
                <ActionListTile heading="Delete Account" action="Delete" />
                <ActionListTile heading="Log out" action="Log out" />

            </ul>
        </div>
    )
}