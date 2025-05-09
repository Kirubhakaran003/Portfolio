import React from "react";
import "./Projects.css";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";



const Projects = () => {
  return (
    <div id="project" className="my_project">
      <h1>My Latest Projects</h1>
      <div className="myproject_container">
        {mywork_data.map((data, index) => (
          <div key={index}>
            <img
              src={data.w_img}
              alt={`Project ${index + 1}`}
              loading="lazy"
            />
            <div className="project-links">
              {data.demo_link && (
                <a href={data.demo_link} className="demo-link">
                  Live Demo
                </a>
              )}
              {data.github_link && (
                <a href={data.github_link} className="github-link">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="myproject-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
  );
};

export default Projects;
