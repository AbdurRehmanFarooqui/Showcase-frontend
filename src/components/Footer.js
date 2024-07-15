import React from 'react';
// import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <section>
                <div className='logo'>
                    <h1>Showcase</h1>
                    <p>Where dreams come</p>
                    <p> into reality</p>
                </div>
                <div className='pages'>
                    <span>Home</span>
                    <span>Profile</span>
                    <span>Settings</span>
                    <span>Contact Us</span>
                </div>
                <div className='socials'>
                    <i className="fa fa-brands fa-facebook"></i>
                    <i className="fa fa-brands fa-instagram"></i>
                    <i className="fa fa-brands fa-twitter"></i>
                </div>
                <div className='email'>
                    <span>Stay Connected</span>
                    <p>Join our email marketing list to get the latest updates</p>
                    <input type="email" name="email" id="" />
                    <button>Subscribe</button>
                </div>
            </section>
            <section className='links'>
                <li>Privacy Policy</li>
                <li>Terms and Condition</li>
                <li>Our Vision</li>
                <li>Our Story</li>
                <li>Comunity Guidelines</li>
                {/* <Link to="/">abc</Link> */}
            </section>
        </footer>
    )
}
