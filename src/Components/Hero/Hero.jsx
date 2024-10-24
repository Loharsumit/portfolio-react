import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Sumit Lohar</span>, frontend developer.</h1>
        <p>Aspiring Web Developer | HTML, CSS, JavaScript, React.js | Passionate About Creating Responsive & User-Friendly Websites</p>
        <div className="hero-action">
            <div className="hero-connect"><a className='anchor-link' offset={50} href='https://www.linkedin.com/in/sumit-lohar-6844a917a/'>Connect me on LinkedIn</a></div>
            <div className="hero-resume"><a href='https://sumitloharresume.tiiny.site/'>My resume</a></div>
        </div>
    </div>
  )
}

export default Hero