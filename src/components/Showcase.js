import React from 'react'
import ShowcaseMainPic from './ShowcaseMainPic'
import ShowcaseImgSlider from './ShowcaseImgSlider'
import ShowcaseTitle from './ShowcaseTitle'
import ShowcaseCommentSection from './ShowcaseCommentSection'
import Card from './Card'

export default function Showcase() {
  return (
    <div className='Showcase'>
      <ShowcaseMainPic />
      <ShowcaseImgSlider />
      <ShowcaseTitle />
      <div className='Showcase_des-pub_container'>
        <div className='Showcase_des_container'>
          <h3 className='Showcase_des-heading'>Description</h3>
          <p className='Showcase_des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quia hic, eius ea ad, magni cumque repellat totam vero autem, consectetur soluta iure sed? Quasi vel suscipit dicta porro aliquid!
            Consectetur ipsum adipisci ullam, eius beatae libero, nobis deserunt inventore distinctio nulla sit fuga, accusantium ducimus animi quam maxime quas eaque nostrum! Earum dolorem quibusdam veritatis quia nostrum tenetur obcaecati!
          </p>
        </div>
        <div className="Showcase_pub_container">
          <span>Publisher</span>
          <div>
            <h4>Hamza Ahmed</h4>
            <button type="button">Follow</button>
          </div>
          <p className='Showcase_pub_info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quia hic, eius ea ad, magni cumque repellat totam vero autem, consectetur soluta iure sed? Quasi vel suscipit dicta porro aliquid!
          </p>
        </div>
      </div>
      <ShowcaseCommentSection />
      <div className='CardContainer'>
        <h3>More Like This</h3>
        <div>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}
