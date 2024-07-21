import React from 'react';
import car from '../car.jpeg';
import '../css/user_settings_css/publisher_profile.css';
import Card from './Card';
export default function PublisherProfile() {
    return (
        <div className='PublisherProfile'>
            <div class="UPBigContainer">
                <div class="PPUpperLayer">
                    <div class="Udata PPdata">
                        <div class="NameBioContainer">
                            <div class="PPPic">
                                <img src={car} alt="" />
                            </div>
                            <div class="PName">
                                <span>Hamza Noob</span>
                            </div>
                        </div>
                        <div class="PDetailsContainer">
                            <div class="PDetail PLikes">
                                <span class="TotalTitle">Total Likes</span>
                                <span class="TotalLikes">10</span>
                            </div>
                            <div class="PDetail PViews">
                                <span class="TotalTitle">Total Views</span>
                                <span class="TotalViews">10</span>
                            </div>
                            <div class="PDetail Pfavorites">
                                <span class="TotalTitle">Total Favorites</span>
                                <span class="TotalFavorites">10</span>
                            </div>
                            <div class="PDetail Pcomments">
                                <span class="TotalTitle">Total Comments</span>
                                <span class="TotalComments">10</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="UPDContainer">
                    <div class="UPPageDiv">
                        <h3>About</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ea doloribus magnam error reprehenderit eum amet laboriosam perferendis? Repellat, eaque repellendus! Est reprehenderit, similique illo at voluptate suscipit esse fugiat?
                            Voluptatum quos culpa modi dicta dolorem doloremque beatae consequuntur. Consequatur omnis eum a fuga atque quae dolorum itaque, necessitatibus error minima ad architecto quis molestias dolore provident quaerat, ullam debitis?
                            Sint cum hic itaque praesentium sequi a recusandae dolorem distinctio corporis accusantium harum quis molestiae totam maiores quas aliquid neque voluptatum dignissimos magni velit, id deleniti facilis! Deserunt, enim consequuntur.</p>
                    </div>

                    <div class="PCardsContainer">


                        <div class="addCard">
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
