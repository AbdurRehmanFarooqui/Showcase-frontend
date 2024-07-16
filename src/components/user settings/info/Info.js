import React from "react";
import UserInfoBox from "./UserInfoBox";
import UserInfoViewBox from "./UserInfoViewBox";




export default function UserInfo() {
    return (
        <div className="SettingViewDiv">
            <UserInfoBox />
            <UserInfoViewBox />
        </div>
    )
}