import React, { useRef } from 'react';
import '../styles/ProjectList.css';

const ProjectList = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -200, // Adjust the scroll amount as needed
        behavior: 'smooth' // Smooth scrolling
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 200, // Adjust the scroll amount as needed
        behavior: 'smooth' // Smooth scrolling
      });
    }
  };

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="projects-list">
      <h2>Projects & Events</h2>
      <div className="scroll-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          &lt; {/* Left arrow */}
        </button>
        <div id="projectContainer" className="project-container" ref={containerRef}>
          <div className="project-item" onClick={() => openLink('https://example.com/project1')}>
            <img src="https://via.placeholder.com/200x150" alt="Project 1" className="project-image" />
            <div className="project-name">Revamped Led Zeppelin website</div>
          </div>
          <div className="project-item" onClick={() => openLink('https://example.com/project2')}>
            <img src="https://via.placeholder.com/200x150" alt="Project 2" className="project-image" />
            <div className="project-name">Personal website</div>
          </div>
          <div className="project-item" onClick={() => openLink('https://example.com/project3')}>
            <img src="https://via.placeholder.com/200x150" alt="Project 3" className="project-image" />
            <div className="project-name">Building tycoon game</div>
          </div>
          <div className="project-item" onClick={() => openLink('https://example.com/project4')}>
            <img src="https://via.placeholder.com/200x150" alt="Project 4" className="project-image" />
            <div className="project-name">Project Pixel Perfect</div>
          </div>
          <div className="project-item" onClick={() => openLink('https://example.com/project5')}>
            <img src="https://via.placeholder.com/200x150" alt="Project 5" className="project-image" />
            <div className="project-name">Datascience X Govtech</div>
          </div>
          <div className="project-item" onClick={() => openLink('https://example.com/project6')}>
            <img src="https://via.placeholder.com/200x150" alt="Project 6" className="project-image" />
            <div className="project-name">Project 6</div>
          </div>
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          &gt; {/* Right arrow */}
        </button>
      </div>
    </section>
  );
};

export default ProjectList;



