import React from 'react'
import Card from './cards/Card'
export default function Search() {
  return (
    <div className='Search'>
        <section>
            <div className="container"><span>Category</span><i className="fa fa-angle-down"></i></div>
            <div className="container"><span>Filter</span><i className="fa fa-angle-down"></i></div>
            <div className="container"><span>Sort by</span><i className="fa fa-angle-down"></i></div>
        </section>
        <Card />        
        <Card />        
        <Card />        
        <Card />        
        <Card />        
        <Card />        
        <Card />        
        <Card />
        <div className="pageNum">
        
        </div>              
    </div>
  )
}
