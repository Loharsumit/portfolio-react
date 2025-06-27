import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Sumit Lohar</span>, frontend developer.</h1>
        <p>Aspiring Web Developer | HTML, CSS, JavaScript, React.js | Passionate About Creating Responsive & User-Friendly Websites</p>
        <div className="hero-action">
            <a className="hero-connect" href='https://www.linkedin.com/in/sumit-lohar-6844a917a/' offset={50}>Connect me on LinkedIn</a>
            <a href='https://drive.google.com/file/d/1GPq1r6gwR-QKFbKjC4meBcfp8yXIW2LV/view?usp=sharing' className="hero-resume">My Resume</a>
        </div>
    </div>
  )
}

export default Hero
