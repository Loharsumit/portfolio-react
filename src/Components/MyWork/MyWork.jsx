import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import Projects from '../Projects/Projects';

const MyWork = () => {
  const [showProjects, setShowProjects] = useState(false); // State to toggle Projects component

  const handleToggleProjects = () => {
    setShowProjects(!showProjects); // Toggle the visibility
  };

  return (
    <div id="projects" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer">
              <img src={work.w_img} alt={work.w_name} />
            </a>
          );
        })}
      </div>

      <div className="mywork-showmore">
        <p onClick={handleToggleProjects} style={{ cursor: 'pointer' }}>
          {showProjects ? 'Show Less' : 'Show More'}
        </p>
        <img
          src={arrow_icon}
          alt=""
          style={{
            transform: showProjects ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
          }}
          onClick={handleToggleProjects}
        />
      </div>
      {showProjects && <Projects />}
    </div>
  );
};

export default MyWork;

