import '../styles/aboutMe.css';
import meImg from '../assets/me.JPG';
import meImg2 from '../assets/me2.JPG';
import { useState, useEffect, useMemo, useRef } from 'react';

const AboutMe = () => {

  const sections = useMemo(() => [
    {
      title: "About Me",
      content: "Hello, I'm Daniel! I'm currently a year 2 Information Technology Student at Ngee Ann Polytechnic. I'm an aspiring analyst who enjoys all things technology. I'm keen on learning new things and venturing into areas outside of my comfort zone.",
      imgSrc: meImg2
    },
    {
      title: "Future Endeavours",
      content: "As I approach the end of my Polytechnic journey, I am excited to embark on the next chapter of my professional development. Starting in February 2025, I am actively seeking FULL-TIME internship opportunities that will enable me to further hone my skills and apply the knowledge I have acquired throughout my studies.",
      imgSrc: meImg
    }
  ], []);

  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);  // Initialize to -1
  const sectionRefs = useRef([]);

  useEffect(() => {
    const refsCopy = sectionRefs.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = refsCopy.indexOf(entry.target);

        if (entry.isIntersecting) {
          // Section is in view, start or continue the animation
          setCurrentIndex(index);
        } else if (currentIndex === index) {
          // Section has left the viewport, reset animation
          setCurrentText('');
          setTextIndex(0);
          setCurrentIndex(-1);  // Reset to prevent animation from continuing
        }
      });
    }, { threshold: 1.0 }); // Full visibility of section

    refsCopy.forEach(section => observer.observe(section));

    return () => {
      refsCopy.forEach(section => observer.unobserve(section));
    };
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex >= 0 && textIndex < sections[currentIndex].content.length) {
      const textTimeoutId = setTimeout(() => {
        setCurrentText(prev => prev + sections[currentIndex].content.charAt(textIndex));
        setTextIndex(prev => prev + 1);
      }, 10);
      return () => clearTimeout(textTimeoutId);
    }
  }, [textIndex, sections, currentIndex]);

  useEffect(() => {
    if (currentIndex >= 0) {
      setCurrentText('');
      setTextIndex(0);
    }
  }, [currentIndex]);

  return (
    <div className="about-me-container">
      {sections.map((section, index) => (
        <div
          className={`section-container ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
          key={index}
          ref={(el) => sectionRefs.current[index] = el}
        >
          <div className="image-container">
            <img src={section.imgSrc} alt={section.title} />
          </div>
          <div className="text-container">
            <div className="about-me-section-content">
              <h2>{section.title}</h2>
              <p className="typing-text">{currentIndex === index ? currentText : ''}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutMe;
