import React from 'react'
import car from '../car.jpeg'
export default function ShowcaseComments() {
  return (
    <div className='ShowcaseComments'>
        <img src={car} alt="" />
        <div className="ShowcaseComents_container">
            <span className="Name">@Kino</span><span className="Date">12/12/12</span>
            <p className="ShowcaseComents_comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi illo, accusantium at dicta pariatur, voluptatum animi voluptate perspiciatis dolore fuga assumenda, quia totam. Ea ipsum quo sunt neque nisi.</p>
            <span className='ShowcaseComments_reply'>Reply</span><span className="numreply"><i className="fa fa-angle-down"></i>2 Replies</span>
        </div>
    </div>
  )
}
