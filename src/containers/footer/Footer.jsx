import React from 'react'
import gpt3Logo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className='gradient__text'>Step into the future.</h1>
      </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="Logo" />
          <p>Made By Amlake Tadesse</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Settings</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Home</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in Touch</h4>
        <p>Los Angeles, California</p>
        <p>818-588-7852</p>
        <p>info@gpt3.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>© 2023 GPT-3 by Amlake Tadesse</p>
    </div>

    </div>
  )
}

export default Footer