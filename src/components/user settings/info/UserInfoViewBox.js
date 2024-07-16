import React from "react";
import '../../../css/user_settings_css/view_box.css'


let ActionListTile = ({ heading, action }) => {
    return (
        <li className="User-Info-Action-List-Tile">
            <p>{heading}</p>
            <p>{action}</p>
        </li>
    )
}

export default function UserInfoViewBox() {
    return (
        <div className="ViewBox">
            <h3>Settings</h3>
            <ul>
                <ActionListTile heading="Clear Activity Log" action="Clear" />
            </ul>
        </div>
    )
}