import React, { useEffect, useState } from 'react';
import car from '../car.jpeg';
import Favourites from './user settings/favourites/SettingFavourites';
import Following from './user settings/following/Following';
import UserInfo from './user settings/info/Info';
import ActivityLog from './user settings/activity log/ActivityLog';
import LoginInput from './login_signup/LoginInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../state/index';
import { bindActionCreators } from 'redux';

export default function Settings() {
    const des = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic rem deserunt eos possimus, voluptates inventore nam suscipit impedit vero excepturi qui mollitia. Distinctio reiciendis repellendus ab aspernatur maxime quibusdam.";
    const [pubData, setPubData] = useState({ name: "", description: "" })
    const { name, description } = pubData;
    const [style, setStyle] = useState("show")
    let navigate = useNavigate();

    const onChange = (e) => {
        setPubData({ ...pubData, [e.target.name]: e.target.value })
    }

    const createPublisher = () => {
        if (style !== "hide") setStyle("hide");
        else setStyle("show");
    }
    const handleCancel = () => {
        setPubData({ name: "", description: "" })
        if (style !== "hide") setStyle("hide");
        else setStyle("show");
    }
    const host = "http://localhost:5000"
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(pubData)
        const response = await fetch(`${host}/user/publisher/signup`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ pub_name: name, pub_description: description })
        })
        // const json = await response.json();
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        else {
            console.log(response)
            navigate('/pubprofile')

        }

        // if (json.jwt) {
        // Save auth-token & Redirect
        // localStorage.setItem("token", json.jwt)
        // navigate('/')

        // } else {
        // console.log("error")
        // }
    }
    const user = useSelector(state => state.amount)
    const dispatch = useDispatch();
    const actions = bindActionCreators(actionCreators, dispatch)
    // useEffect(() => {
    //     getHomedata()
    //     // eslint-disable-next-line
    // }, [])
    // let uid = 'bcclhs5w3cglzkrf6ud'
    // let uid = 'bcclhs5w3cglzl2we5x'
    // const getHomedata = async () => {
    //     const response = await fetch(`${host}/user/profile`, {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'authorization': `Bearer ${localStorage.getItem('token')}`
    //         },
    //     })
    //     const json = await response.json();
    //     console.log(json)
    // }
    return (
        <div className='Settings'>
            <div className='SettingsRightSideNavigationBar'>
                <ul className='SettingsRightSideNavigationBarItemList'>
                    <li className='SettingRightSideNavigationBarItemMain'>
                        <div>
                            <img id='profilePic' src={car} alt='Profile' />
                            <p>Hamza Ahmed</p>
                        </div>
                    </li>
                    <hr className="solid" />
                    <li className='SettingRightSideNavigationBarItem'>Info</li>
                    <li className='SettingRightSideNavigationBarItem'>Following</li>
                    <li className='SettingRightSideNavigationBarItem'>Favourites</li>
                    <li className='SettingRightSideNavigationBarItem'>Activity Log</li>
                    <li className='SettingRightSideNavigationBarItem' onClick={createPublisher}>Publisher Profile</li>
                </ul>
            </div>
            <div className={`modal-container ${style}`}>
                <form onSubmit={handleSubmit} className="modal">
                    <h3>Become A Publisher</h3>
                    <LoginInput label="Name" value={name} name="name" type="text" onChange={onChange}></LoginInput>
                    <label className="loginInputLabel" htmlFor='description'>Description</label>
                    <textarea value={description} name="description" type="text" onChange={onChange} rows="5" cols="50">
                    </textarea>
                    <div className='center-container'>
                        <button type="button" className='but Secondary-but' onClick={handleCancel}>Cancel</button>
                        <button type="submit" className='but Primary-but'>Proceed</button>
                    </div>
                </form>
            </div>

            {/* <Favourites /> */}
            {/* <Following /> */}
            {/* <UserInfo /> */}
            <ActivityLog />
        </div>
    );
}
