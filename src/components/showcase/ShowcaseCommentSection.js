import React from 'react'
import ShowcaseComments from './ShowcaseComments'
import car from '../../car.jpeg';
export default function ShowcaseCommentSection() {
  return (
    <div className='ShowcaseCommentSection'>
      <h3>Comments</h3>
      <section className='mycmnt'>
        <img src={car} alt="" />
        <input type="text" name="" id="" placeholder='Add a comment...' />
      </section>
      <div>
        <ShowcaseComments />
        <ShowcaseComments />
        <ShowcaseComments />

      </div>
    </div>
  )
}
