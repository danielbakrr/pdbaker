import React, { useEffect, useRef, useCallback } from 'react';
import '../styles/certs.css';

const CertsList = () => {
  const containerRef = useRef(null);
  const scrollAmount = 1;
  const delay = 50;
  const scrollInterval = useRef(null);

  // Memoize the startScroll function
  const startScroll = useCallback(() => {
    scrollInterval.current = setInterval(() => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        
        containerRef.current.scrollLeft += scrollAmount;
  
        // Check if we've scrolled past the end of the container
        if (scrollLeft >= scrollWidth - clientWidth) {
          const firstChild = containerRef.current.firstElementChild;
  
          // Clone the first child and append it to the end
          const clone = firstChild.cloneNode(true);
          containerRef.current.appendChild(clone);
          
          // Remove the first child
          containerRef.current.removeChild(firstChild);
  
          // Adjust scroll position
          containerRef.current.scrollLeft -= firstChild.offsetWidth;
        }
      }
    }, delay);
  }, [scrollAmount, delay]);
  

  // Memoize the stopScroll function
  const stopScroll = useCallback(() => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
    }
  }, []);

  // Effect to set up and clean up event listeners
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      startScroll(); // Start scrolling when the component mounts
      container.addEventListener('mouseenter', stopScroll); // Stop scrolling on mouse enter
      container.addEventListener('mouseleave', startScroll); // Resume scrolling on mouse leave
      
      // Clean up event listeners and stop scrolling on component unmount
      return () => {
        container.removeEventListener('mouseenter', stopScroll);
        container.removeEventListener('mouseleave', startScroll);
        stopScroll(); // Ensure scrolling is stopped
      };
    }
  }, [startScroll, stopScroll]); // Include memoized functions in the dependency array

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="certs" className="certs-list">
      <h2>Proficiencies</h2>
      <div id="certContainer" className="scroll-container" ref={containerRef}>
        <div className="cert-item" onClick={() => openLink('https://example.com/project1')}>
          <img src="https://via.placeholder.com/200x150" alt="Cert 1" className="project-image" />
          <div className="cert-name">Python</div>
        </div>
        <div className="cert-item" onClick={() => openLink('https://example.com/project2')}>
          <img src="https://via.placeholder.com/200x150" alt="Cert 2" className="project-image" />
          <div className="cert-name">C#</div>
        </div>
        <div className="cert-item" onClick={() => openLink('https://example.com/project3')}>
          <img src="https://via.placeholder.com/200x150" alt="Cert 3" className="project-image" />
          <div className="cert-name">HTML</div>
        </div>
        <div className="cert-item" onClick={() => openLink('https://example.com/project4')}>
          <img src="https://via.placeholder.com/200x150" alt="Cert 4" className="project-image" />
          <div className="cert-name">CSS</div>
        </div>
        <div className="cert-item" onClick={() => openLink('https://example.com/project5')}>
          <img src="https://via.placeholder.com/200x150" alt="Cert 5" className="project-image" />
          <div className="cert-name">Javascript</div>
        </div>
        <div className="cert-item" onClick={() => openLink('https://example.com/project6')}>
          <img src="https://via.placeholder.com/200x150" alt="Cert 6" className="project-image" />
          <div className="cert-name">React.js</div>
        </div>
        <div className="cert-item" onClick={() => openLink('https://example.com/project7')}>
          <img src="https://via.placeholder.com/200x150" alt="Cert 7" className="project-image" />
          <div className="cert-name">Node.js</div>
        </div>
      </div>
    </section>
  );
};

export default CertsList;