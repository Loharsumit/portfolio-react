import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Sumit Lohar</span>, Web Developer.</h1>
        <p>Experienced Web Developer | Proficient in HTML, CSS, JavaScript and React.js | Vue.js | 3+ Yrs | Bengaluru | Passionate about Creating Innovative and User-Friendly Websites.</p>
        <div className="hero-action">
            <a className="hero-connect" href='https://www.linkedin.com/in/sumit-lohar-6844a917a/' target="_blank" offset={50}>Connect me on LinkedIn</a>
            <a href='https://drive.google.com/file/d/1IJAgPNShKPzKVISAhTfT-AY6TQayi4qq/view?usp=sharing' target="_blank" className="hero-resume">My Resume</a>
        </div>
    </div>
  )
}

export default Hero
