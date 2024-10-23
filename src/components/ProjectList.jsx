import React, { useRef } from 'react';
import '../styles/ProjectList.css';
import personalWeb from '../assets/personalWeb.png'; // Correctly importing the image

const ProjectList = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
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
          <div className="project-item" onClick={() => openLink('https://pdbaker.vercel.app/')}>
            <img src={personalWeb} alt="Project 1" className="project-image" /> {/* Corrected src */}
            <div className="project-name">Website Portfolio</div>
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
