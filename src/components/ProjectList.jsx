import React, { useEffect, useRef, useCallback } from 'react';
import '../styles/ProjectList.css';
import personalWeb from '../assets/personalWeb.png';
import gihubbies from '../assets/githubbies.png';
import tycoon from '../assets/python.png';
import inflationAtlas from '../assets/inflation_atlas.png';
import error from '../assets/error404.jpg';

const ProjectList = () => {
  const containerRef = useRef(null);
  const scrollAmount = 1; // Pixels to scroll per interval
  const delay = 30; // Interval delay in milliseconds
  const scrollInterval = useRef(null);

  const startScroll = useCallback(() => {
    scrollInterval.current = setInterval(() => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

        containerRef.current.scrollLeft += scrollAmount;

        // Reset scroll position when reaching the end of the duplicated content
        if (scrollLeft >= scrollWidth / 2) {
          containerRef.current.scrollLeft = 0;
        }
      }
    }, delay);
  }, [scrollAmount, delay]);

  const stopScroll = useCallback(() => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      startScroll();
      container.addEventListener('mouseenter', stopScroll);
      container.addEventListener('mouseleave', startScroll);

      // Cleanup on unmount
      return () => {
        stopScroll();
        container.removeEventListener('mouseenter', stopScroll);
        container.removeEventListener('mouseleave', startScroll);
      };
    }
  }, [startScroll, stopScroll]);

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="projects-list">
      <h2>Projects & Events</h2>
      <div className="scroll-container">
        <div id="projectContainer" className="project-container" ref={containerRef}>
          {/* Duplicate the content for infinite scroll */}
          <div className="scroll-content">
            <div className="project-item" onClick={() => openLink('https://github.com/glizzygobblrr/pdbaker')}>
              <img src={personalWeb} alt="Project 1" className="project-image" />
              <div className="project-name">Website Portfolio</div>
            </div>
            <div className="project-item" onClick={() => openLink('https://github.com/glizzygobblrr/fsdp')}>
              <img src={gihubbies} alt="Project 2" className="project-image" />
              <div className="project-name">Ad distribution system</div>
            </div>
            <div className="project-item" onClick={() => openLink('https://github.com/glizzygobblrr/SPM-console-game')}>
              <img src={tycoon} alt="Project 3" className="project-image" />
              <div className="project-name">City Tycoon Game</div>
            </div>
            <div className="project-item" onClick={() => openLink('https://github.com/glizzygobblrr/FED_InflationApp')}>
              <img src={inflationAtlas} alt="Project 4" className="project-image" />
              <div className="project-name">Inflation Atlas</div>
            </div>
            <div className="project-item" onClick={() => openLink()}>
              <img src={error} alt="Project 5" className="project-image" />
              <div className="project-name">SEAwareness</div>
            </div>
          </div>
          <div className="scroll-content">
            <div className="project-item" onClick={() => openLink('https://github.com/glizzygobblrr/pdbaker')}>
              <img src={personalWeb} alt="Project 1" className="project-image" />
              <div className="project-name">Website Portfolio</div>
            </div>
            <div className="project-item" onClick={() => openLink('https://github.com/glizzygobblrr/fsdp')}>
              <img src={gihubbies} alt="Project 2" className="project-image" />
              <div className="project-name">Ad distribution system</div>
            </div>
            <div className="project-item" onClick={() => openLink('https://github.com/glizzygobblrr/SPM-console-game')}>
              <img src={tycoon} alt="Project 3" className="project-image" />
              <div className="project-name">City Tycoon Game</div>
            </div>
            <div className="project-item" onClick={() => openLink('https://github.com/glizzygobblrr/FED_InflationApp')}>
              <img src={inflationAtlas} alt="Project 4" className="project-image" />
              <div className="project-name">Inflation Atlas</div>
            </div>
            <div className="project-item" onClick={() => openLink()}>
              <img src={error} alt="Project 5" className="project-image" />
              <div className="project-name">SEAwareness</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
