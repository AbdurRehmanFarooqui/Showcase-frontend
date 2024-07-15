import React from "react";
import '../../../css/user_settings_css/info_list_tile.css'



export default function InfoListTile({ title, name }) {
    return (
        <li className="info-list-tile-item">
            <h3>{title}</h3>
            <h2>{name}</h2>
        </li>
    )
}