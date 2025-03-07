import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import aws from '../assets/aws.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import node from '../assets/node.png';
import express from '../assets/express.png';
import react from '../assets/react.png';
import github from '../assets/github.png';
import SMSS from '../assets/ssms.png';
import MySQL from '../assets/Mysql.png';
import Azure from '../assets/Azure.png';
import '../styles/certs.css';

const CertsList = () => {
  const skills = [
    { 
      name: "AWS", 
      image: aws,
      description: "Cloud infrastructure & services",
      level: 85
    },
    { 
      name: "HTML", 
      image: html,
      description: "Semantic markup & accessibility",
      level: 85
    },
    { 
      name: "CSS", 
      image: css,
      description: "Styling & responsive design",
      level: 85
    },
    { 
      name: "JavaScript", 
      image: js,
      description: "ES6+, DOM manipulation, async",
      level: 70
    },
    { 
      name: "Node.js", 
      image: node,
      description: "Server-side JavaScript runtime",
      level: 75
    },
    { 
      name: "Express", 
      image: express,
      description: "Web application framework",
      level: 70
    },
    { 
      name: "React", 
      image: react,
      description: "Frontend component library",
      level: 75
    },
    { 
      name: "GitHub", 
      image: github,
      description: "Version control & collaboration",
      level: 80
    },
    { 
      name: "SQL Server Management Studio", 
      image: SMSS,
      description: "Database management & query execution",
      level: 85
    },
    { 
      name: "MySQL", 
      image: MySQL,
      description: "Relational database design & optimization",
      level: 85
    },
    { 
      name: "Microsoft Azure", 
      image: Azure,
      description: "Cloud computing & deployment services",
      level: 70
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="certs" className="skills-section py-5">
      <Container>
        <h2 className="section-title text-center mb-5">Technical Proficiencies</h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          <Row className="justify-content-center">
            {skills.map((skill, index) => (
              <Col key={index} lg={3} md={4} sm={6} className="mb-4">
                <motion.div 
                  className="skill-card"
                  variants={item}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="skill-icon-container">
                    <img 
                      src={skill.image} 
                      alt={skill.name} 
                      className="skill-icon" 
                    />
                  </div>
                  <h4 className="skill-name">{skill.name}</h4>
                  <p className="skill-description">{skill.description}</p>
                  <div className="skill-level-container">
                    <div 
                      className="skill-level" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default CertsList;