import React, { useEffect, useRef, useCallback } from 'react';
import '../styles/certs.css';
import aws from '../assets/aws.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import node from '../assets/node.png';
import express from '../assets/express.png';
import react from '../assets/react.png';

const CertsList = () => {
  const containerRef = useRef(null);
  const scrollAmount = 1; // Pixels to scroll per interval
  const delay = 30; // Interval delay in milliseconds
  const scrollInterval = useRef(null);

  const startScroll = useCallback(() => {
    scrollInterval.current = setInterval(() => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

        containerRef.current.scrollLeft += scrollAmount;

        // Reset scroll position when reaching the duplicated content
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

  return (
    <section id="certs" className="certs-list">
      <h2>Proficiencies</h2>
      <div id="certContainer" className="scroll-container" ref={containerRef}>
        {/* Duplicate items to create the infinite scroll effect */}
        <div className="scroll-content">
          <div className="cert-item">
            <img src={aws} alt="Cert 1" className="cert-image" />
          </div>
          <div className="cert-item">
            <img src={html} alt="Cert 2" className="cert-image" />
          </div>
          <div className="cert-item">
            <img src={css} alt="Cert 3" className="cert-image" />
          </div>
          <div className="cert-item">
            <img src={js} alt="Cert 4" className="cert-image" />
          </div>
          <div className="cert-item">
            <img src={node} alt="Cert 5" className="cert-image" />
          </div>
          <div className="cert-item">
            <img src={express} alt="Cert 6" className="cert-image" />
          </div>
          <div className="cert-item">
            <img src={react} alt="Cert 7" className="cert-image" />
          </div>
        </div>
        {/* Duplicate the content for infinite scroll */}
        <div className="scroll-content">
          <div className="cert-item">
              <img src={aws} alt="Cert 1" className="cert-image" />
            </div>
            <div className="cert-item">
              <img src={html} alt="Cert 2" className="cert-image" />
            </div>
            <div className="cert-item">
              <img src={css} alt="Cert 3" className="cert-image" />
            </div>
            <div className="cert-item">
              <img src={js} alt="Cert 4" className="cert-image" />
            </div>
            <div className="cert-item">
              <img src={node} alt="Cert 5" className="cert-image" />
            </div>
            <div className="cert-item">
              <img src={express} alt="Cert 6" className="cert-image" />
            </div>
            <div className="cert-item">
              <img src={react} alt="Cert 7" className="cert-image" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default CertsList;
