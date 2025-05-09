import React from "react";
import "./About.css";
import java_icon from "../../assets/java-icon.webp";
import SpringBoot_icon from "../../assets/SpringBoot_icon.webp";
import mysql_icon from "../../assets/mysql_icon.svg";
import html5_icon from "../../assets/html5_icon.svg";
import css3_icon from "../../assets/css3_icon.svg";
import React_icon from "../../assets/React_icon.webp";
import Javascript_icon from "../../assets/JavaScript_icon.webp";


const About = () => {
  return (
    <section id="about" className="about">
      <h1>About Me</h1>

      <div className="about-content">
        <div className="about-para">
          <p>
            I'm Kirubhakaran, a passionate Java Full Stack Developer with a Bachelor's degree in Computer Applications.
            I specialize in building responsive and efficient web applications using modern technologies like Java, Spring Boot, ReactJs, and MySQL.
          </p>
          <p>
            I enjoy solving problems, learning new tools, and collaborating on impactful projects. My goal is to continuously improve my skills and contribute to real-world solutions through software development.
          </p>
        </div>

        <h2 className="skills-heading">Skills</h2>

        <div className="about-skills">
          {[
            { img: java_icon, name: "Java" },
            { img: SpringBoot_icon, name: "Spring Boot" },
            { img: mysql_icon, name: "MySQL" },
            { img: html5_icon, name: "HTML" },
            { img: css3_icon, name: "CSS" },
            { img: Javascript_icon, name: "JavaScript" },
            { img: React_icon, name: "React JS" },
          ].map((skill, index) => (
            <div key={index} className="about-skill">
              <img src={skill.img} alt={`${skill.name} icon`} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
