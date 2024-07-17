import React from "react";
import UserInfoBox from "./UserInfoBox";
import UserInfoViewBox from "./UserInfoViewBox";
import '../../../css/user_settings_css/Info.css'



export default function UserInfo() {
    return (
        <div className="SettingViewDiv">
            <UserInfoBox />
            <UserInfoViewBox />
        </div>
    )
}