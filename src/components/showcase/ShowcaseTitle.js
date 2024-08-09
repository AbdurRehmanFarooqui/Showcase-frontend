import React from 'react'

export default function ShowcaseTitle() {
  return (
    <div className='ShowcaseTitle'>
        <h1>Cool Car</h1>
        <div className="Showcase-Container-lfc">
            <div className="ShowcaseTitle-Container-like ShowcaseTitle-lfc">
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                <span className='ShowcaseTitle-lfc-value'>38</span>
            </div>
            <div className="ShowcaseTitle-Container-favorite ShowcaseTitle-lfc">
            <i className="fa fa-heart"></i>
                <span className='ShowcaseTitle-lfc-value'>254</span>
            </div>
            <div className="ShowcaseTitle-Container-comment ShowcaseTitle-lfc">
            <i className="fa fa-comments-o"></i>
                <span className='ShowcaseTitle-lfc-value'>34</span>
            </div>
        </div>
    </div>
  )
}
