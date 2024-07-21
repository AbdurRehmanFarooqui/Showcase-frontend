import React from 'react'
import Card from './Card'
import car from '../car.jpeg'
import ArtistCard from './ArtistCard'

export default function Home() {
    const des = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic rem deserunt eos possimus, voluptates inventore nam suscipit impedit vero excepturi qui mollitia. Distinctio reiciendis repellendus ab aspernatur maxime quibusdam."
    return (
        <div className='Home'>
            <section className="top">
                <div className="Home-left">
                    <h1>SHOWCASE</h1>
                    <h3>Where dreams come into reality</h3>
                    <span>
                        <button className='Secondary-but but'>Signup</button>
                        <button className='Primary-but but'>Login</button>
                    </span>
                </div>
                <div className="Home-right">
                    <div className='Card homecard1 homecard'>
                        <img src={car} alt="" />
                        <h3>Title1</h3>
                        <p>{des.length > 205 ? `${des.substring(0, 205)}...` : des}</p>
                        <div className="Card-lfc">
                            <div className="Card-Container-lfc">
                                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                <span className='Card-lfc-value'>38</span>
                            </div>
                            <div className="Card-Container-lfc">
                                <i className="fa fa-heart-o"></i>
                                <span className='Card-lfc-value'>254</span>
                            </div>
                            <div className="Card-Container-lfc">
                                <i className="fa fa-comments-o"></i>
                                <span className='Card-lfc-value'>34</span>
                            </div>
                        </div>
                    </div>
                    <div className='Card homecard2 homecard'>
                        <img src={car} alt="" />
                        <h3>Title2</h3>
                        <p>{des.length > 205 ? `${des.substring(0, 205)}...` : des}</p>
                        <div className="Card-lfc">
                            <div className="Card-Container-lfc">
                                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                <span className='Card-lfc-value'>38</span>
                            </div>
                            <div className="Card-Container-lfc">
                                <i className="fa fa-heart-o"></i>
                                <span className='Card-lfc-value'>254</span>
                            </div>
                            <div className="Card-Container-lfc">
                                <i className="fa fa-comments-o"></i>
                                <span className='Card-lfc-value'>34</span>
                            </div>
                        </div>
                    </div>
                    <div className='Card homecard3 homecard'>
                        <img src={car} alt="" />
                        <h3>Title3</h3>
                        <p>{des.length > 205 ? `${des.substring(0, 205)}...` : des}</p>
                        <div className="Card-lfc">
                            <div className="Card-Container-lfc">
                                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                <span className='Card-lfc-value'>38</span>
                            </div>
                            <div className="Card-Container-lfc">
                                <i className="fa fa-heart-o"></i>
                                <span className='Card-lfc-value'>254</span>
                            </div>
                            <div className="Card-Container-lfc">
                                <i className="fa fa-comments-o"></i>
                                <span className='Card-lfc-value'>34</span>
                            </div>
                        </div>
                    </div>
                    <div className='Card homecard4 homecard'>
                        <img src={car} alt="" />
                        <h3>Title4</h3>
                        <p>{des.length > 205 ? `${des.substring(0, 205)}...` : des}</p>
                        <div className="Card-lfc">
                            <div className="Card-Container-lfc">
                                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                <span className='Card-lfc-value'>38</span>
                            </div>
                            <div className="Card-Container-lfc">
                                <i className="fa fa-heart-o"></i>
                                <span className='Card-lfc-value'>254</span>
                            </div>
                            <div className="Card-Container-lfc">
                                <i className="fa fa-comments-o"></i>
                                <span className='Card-lfc-value'>34</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Trending'>
                <h2>Trending Showcases</h2>
                <div className='Trending-div'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className='Trending-div'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
            <section className='MostFollowed'>
                <h2>Most Followed Artists</h2>
                <div className='MostFollowed-div'>
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                </div>
            </section>
            <section className='Aboutus'>
                <div className='container'>
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti maiores temporibus itaque tempore placeat velit minima incidunt tempora dolor quidem recusandae nulla voluptatum libero nobis similique sapiente nihil, quas perspiciatis.<br></br>
                        Modi quibusdam debitis eum animi fugiat ad veritatis, corrupti nobis unde id neque, optio eos commodi minima qui perferendis. Et rerum debitis ex porro distinctio. Dolor fugiat ratione velit soluta?</p>
                </div>

                <div className='span-container'>
                    <span className='one'></span>
                    <span className='two'></span>
                    <div className='img-container'>
                        <img src={car} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}
