import React, { useEffect } from 'react';
import car from '../car.jpeg';
import '../css/user_settings_css/publisher_profile.css';
import Card from './cards/Card';
export default function PublisherProfile() {
    const host = "http://localhost:5000"
    useEffect(() => {
        getHomedata()
        // eslint-disable-next-line
    }, [])
    let uid = 'bcclhs5w3cglzkrf6ud'
    // let uid = 'bcclhs5w3cglzl2we5x'
    const getHomedata = async () => {
        const response = await fetch(`${host}/publisher/profile/${uid}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
        const json = await response.json();
        console.log(json)

    }
    return (
        <div className='PublisherProfile'>
            <div className="UPBigContainer">
                <div className="PPUpperLayer">
                    <div className="Udata PPdata">
                        <div className="NameBioContainer">
                            <div className="PPPic">
                                <img src={car} alt="" />
                            </div>
                            <div className="PName">
                                <span>Hamza Noob</span>
                            </div>
                        </div>
                        <div className="PDetailsContainer">
                            <div className="PDetail PLikes">
                                <span className="TotalTitle">Total Likes</span>
                                <span className="TotalLikes">10</span>
                            </div>
                            <div className="PDetail PViews">
                                <span className="TotalTitle">Total Views</span>
                                <span className="TotalViews">10</span>
                            </div>
                            <div className="PDetail Pfavorites">
                                <span className="TotalTitle">Total Favorites</span>
                                <span className="TotalFavorites">10</span>
                            </div>
                            <div className="PDetail Pcomments">
                                <span className="TotalTitle">Total Comments</span>
                                <span className="TotalComments">10</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="UPDContainer">
                    <div className="UPPageDiv">
                        <h3>About</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ea doloribus magnam error reprehenderit eum amet laboriosam perferendis? Repellat, eaque repellendus! Est reprehenderit, similique illo at voluptate suscipit esse fugiat?
                            Voluptatum quos culpa modi dicta dolorem doloremque beatae consequuntur. Consequatur omnis eum a fuga atque quae dolorum itaque, necessitatibus error minima ad architecto quis molestias dolore provident quaerat, ullam debitis?
                            Sint cum hic itaque praesentium sequi a recusandae dolorem distinctio corporis accusantium harum quis molestiae totam maiores quas aliquid neque voluptatum dignissimos magni velit, id deleniti facilis! Deserunt, enim consequuntur.</p>
                    </div>

                    <div className="PCardsContainer">


                        <div className="addCard">
                            <div></div>
                            <span></span>
                            <section></section>
                        </div>

                        <Card />
                        <Card />
                        <Card />
                        <Card />



                    </div>


                </div>
            </div>
        </div>
    )
}
