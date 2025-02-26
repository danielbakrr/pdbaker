import React, {useEffect} from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import meImg from '../assets/professional_photo_2.jpg';
import meImg2 from '../assets/professional_photo.jpg';
import guitar from '../assets/guitar.jpg';
import '../styles/aboutMe.css';

const AboutMe = () => {
  const sections = [
    {
      title: "Who I Am",
      content: "Hello, I'm Daniel! I'm a year 2 Information Technology Student at Ngee Ann Polytechnic. I'm an aspiring data analyst and a Cloud enthusiast who enjoys all things technology!",
      imgSrc: meImg2,
    },
    {
      title: "What I Do",
      content: "As a strong advocate for continuous self-improvement, I'm keen on learning new things and venturing outside of my comfort zone. This application uses React.js - a framework I've taught myself!",
      imgSrc: meImg,
    },
    {
      title: "Beyond Tech",
      content: "Outside of my bustling academic life, I am an avid guitar geek and I enjoy the thrill of performing music live in front of an audience. Follow my band on <a href='https://www.instagram.com/sleep.analysis/' target='_blank' rel='noopener noreferrer' class='about-link'>Instagram</a>!",
      imgSrc: guitar,
    },
  ];

  return (
    <section id="about" className="about-section py-5">
      <Container>
        <h2 className="section-title text-center mb-5">About Me</h2>
        
        {sections.map((section, index) => (
          <AnimatedSection 
            key={index}
            section={section}
            index={index}
          />
        ))}
      </Container>
    </section>
  );
};

const AnimatedSection = ({ section, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const leftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };
  
  const rightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <Row 
      ref={ref}
      className={`about-row align-items-center mb-5 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
    >
      <Col lg={6} md={6} className="mb-4 mb-md-0">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={index % 2 === 1 ? leftVariant : rightVariant}
        >
          <Card className="about-card border-0 shadow h-100">
            <div className="card-img-overlay-wrapper">
              <Card.Img 
                variant="top" 
                src={section.imgSrc} 
                alt={`Daniel Baker - ${section.title}`}
                className="about-image"
              />
              <div className="card-img-overlay d-flex align-items-end">
                <div className="overlay-content">
                  <i className={`${section.icon} section-icon`}></i>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Col>
      
      <Col lg={6} md={6}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={index % 2 === 1 ? rightVariant : leftVariant}
          className="about-content"
        >
          <h3 className="about-title">{section.title}</h3>
          <div 
            className="about-text"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </motion.div>
      </Col>
    </Row>
  );
};

export default AboutMe;