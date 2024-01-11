import React from 'react'
import './footer.scss'

function Footer() {
  return (
    <section id='footer'>
    <div className='footer'>
      <div className="leftArea_footer">
        <div className="image_footer">
        <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />
        </div>
        <div className="input_btn">
        <input type="text" placeholder='Your Email' />
        <button className='send'>Send</button>
        </div>
      </div>
      <div className="rightArea_footer">
        <div className="aboutUs_part">
          <h4>About</h4>
          <div className="text_aboutUs_part">
            <p>About Us </p>
            <p>Our Pattern</p>
            <p>Our Services</p>
          </div>
        </div>
        <div className="aboutUs_part">
          <h4>About</h4>
          <div className="text_aboutUs_part">
            <p>About Us </p>
            <p>Our Pattern</p>
            <p>Our Services</p>
          </div>
        </div>
        <div className="aboutUs_part">
          <h4>About</h4>
          <div className="text_aboutUs_part">
            <p>About Us </p>
            <p>Our Pattern</p>
            <p>Our Services</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Footer