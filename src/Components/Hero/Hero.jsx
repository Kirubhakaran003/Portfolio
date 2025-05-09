import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Resume from '../../assets/Kirubhakaran-Resume.pdf';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <img src={profile_img} alt="Profile" className="hero-img" />
      <h1 className="hero-title">
        <span>I'm Kirubhakaran,</span> a passionate Java Full Stack Developer
      </h1>
      <p className="hero-description">
        With a Bachelor's degree in Computer Applications, I specialize in building dynamic and responsive web applications using Java, Spring Boot, React, and MySQL.
      </p>
      <div className="hero-action">
        <AnchorLink className="hero-connect" offset={50} href="#contact">
          Connect with Me
        </AnchorLink>
        <a href={Resume} className="hero-resume" download>
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
