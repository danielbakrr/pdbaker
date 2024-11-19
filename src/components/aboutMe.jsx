import '../styles/aboutMe.css';
import meImg from '../assets/professional_photo_2.jpg';
import meImg2 from '../assets/professional_photo.jpg';
import guitar from '../assets/guitar.jpg';
import { useState, useEffect, useMemo, useRef } from 'react';

const AboutMe = () => {
  const sections = useMemo(() => [
    {
      content: "Hello, I'm Daniel! I'm a year 2 Information Technology Student at Ngee Ann Polytechnic. I'm an aspiring data analyst and a Cloud enthusiast who enjoys all things technology!",
      imgSrc: meImg2,
    },
    {
      content: "As a strong advocator for continuous self-improvement, I'm keen on learning new things and venturing outside of my comfort zone. This application uses React.js - a framework I've taught myself!",
      imgSrc: meImg,
    },
    {
      content: `Outside of my bustling academic life, I am an avid guitar geek and I enjoy the thrill of performing music live in front of an audience. Follow my band on <a href="https://www.instagram.com/sleep.analysis/" target="_blank" rel="noopener noreferrer">Instagram</a>!`,
      imgSrc: guitar,
    },
  ], []);

  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [completedSections, setCompletedSections] = useState(new Set());
  const sectionRefs = useRef([]);

  useEffect(() => {
    const refsCopy = sectionRefs.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = refsCopy.indexOf(entry.target);

        if (entry.isIntersecting && !completedSections.has(index)) {
          setCurrentIndex(index);
        }
      });
    }, { threshold: 1.0 });

    refsCopy.forEach((section) => observer.observe(section));

    return () => {
      refsCopy.forEach((section) => observer.unobserve(section));
    };
  }, [completedSections]);

  useEffect(() => {
    if (currentIndex >= 0 && textIndex < sections[currentIndex].content.length) {
      const textTimeoutId = setTimeout(() => {
        setCurrentText((prev) => prev + sections[currentIndex].content.charAt(textIndex));
        setTextIndex((prev) => prev + 1);
      }, 10); // Adjust speed here
      return () => clearTimeout(textTimeoutId);
    } else if (currentIndex >= 0 && textIndex === sections[currentIndex].content.length) {
      setCompletedSections((prev) => new Set(prev).add(currentIndex));
    }
  }, [textIndex, sections, currentIndex]);

  useEffect(() => {
    if (currentIndex >= 0 && !completedSections.has(currentIndex)) {
      setCurrentText('');
      setTextIndex(0);
    }
  }, [currentIndex, completedSections]);

  return (
    <div className="about-me-container">
      <h3>About Me</h3>
      {sections.map((section, index) => (
        <div
          className={`section-container ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
        >
          <div className="image-container">
            <img src={section.imgSrc} alt="Section" />
          </div>
          <div className="text-container">
            <div className="about-me-section-content">
              <p
                className="typing-text"
                dangerouslySetInnerHTML={{
                  __html: completedSections.has(index)
                    ? section.content
                    : currentIndex === index
                    ? currentText
                    : '',
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutMe;
