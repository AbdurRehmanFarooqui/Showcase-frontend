import React, {useState} from 'react'

export default function Navbar() {
    
    const [searchtext, setsearchtext]=useState("");

    const handleSearchOnChange=(event)=>{
        setsearchtext(event.target.value)
    }

  return (
    <nav className='Navbar'>
        <div className='Navbar-Container-logo'>
            Showcase
        </div>
        <ul className='Navbar-ul'>
            <li className="Navbar-li">Home</li>
            <li className="Navbar-li">Profile</li>
            <li className="Navbar-li" id='Navbar-searchbar'><span id='Navbar-searchbar-icon'>
            <i className="fa fa-search"></i>
                </span>
                <input type="search" value={searchtext} name="search" onChange={handleSearchOnChange} placeholder='Search' id="Navbar-searchbar-input" />
            </li>
        </ul>
    </nav>
  )
}
