import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';
import personalWeb from '../assets/personalWeb.png';
import gihubbies from '../assets/githubbies-logo2.png';
import tycoon from '../assets/python.png';
import inflationAtlas from '../assets/inflation_atlas.png';
import error from '../assets/error404.jpg';
import fallSafe from '../assets/fallSafe.png';
import '../styles/ProjectList.css';

const ProjectList = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      name: "Website Portfolio",
      image: personalWeb,
      url: 'https://github.com/glizzygobblrr/pdbaker',
      description: "A personal portfolio website built with React to showcase my projects and skills. Features responsive design and modern UI elements.",
      technologies: ["React", "Bootstrap", "CSS", "Framer Motion"]
    },
    {
      name: "Ad Distribution System",
      image: gihubbies,
      url: 'https://github.com/glizzygobblrr/fsdp',
      description: "A platform for creating, managing and distributing digital advertisements across various locations. Implements role-based authentication and engagement features",
      technologies: ["React", "CSS", "AWS DynamoDB", "AWS S3", "Web Socket"]
    },
    {
      name: "City Tycoon Game",
      image: tycoon,
      url: 'https://github.com/glizzygobblrr/SPM-console-game',
      description: "A console-based simulation game where players build and manage their own city. Features resource management and economy simulation.",
      technologies: ["Python"]
    },
    {
      name: "Inflation Atlas",
      image: inflationAtlas,
      url: 'https://github.com/glizzygobblrr/FED_InflationApp',
      description: "An interactive visualization tool that maps inflation rates across different regions. Provides insightful data on Consumer Price Index (CPI) on a few countries.",
      technologies: ["JavaScript", "HTML", "CSS"]
    },
    {
      name: "SEAwareness",
      image: error,
      url: null,
      description: "A platform raising awareness about Southeast Asian environmental challenges. Currently in development.",
      technologies: ["Coming Soon"]
    },
    {
      name: "FallSafe",
      image: fallSafe,
      url: 'https://github.com/danielbakrr/FallSafe?tab=readme-ov-file',
      description: "A fall risk self-assessment application that implements IoT for more accurate data, with regression analysis and detailed results for estimating fall risk.",
      technologies: ["IoT", "Go", "HTML", "CSS", "Javascript", "MYSQL", "Docker", "Kubernetes"]
    }
  ];

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const openLink = (url, e) => {
    e.stopPropagation();
    if (url) {
      window.open(url, '_blank');
    }
  };

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
    <section id="projects" className="projects-section py-5">
      <Container>
        <h2 className="section-title text-center mb-5">Projects</h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          <Row>
            {projects.map((project, index) => (
              <Col key={index} lg={4} md={6} className="mb-4">
                <motion.div variants={item}>
                  <Card 
                    className="project-card h-100 shadow" 
                    onClick={() => openProject(project)}
                  >
                    <div className="project-img-container">
                      <Card.Img 
                        variant="top" 
                        src={project.image} 
                        alt={project.name}
                        className="project-img"
                      />
                      <div className="project-overlay">
                        <div className="project-overlay-content">
                          <i className="fas fa-search-plus"></i>
                          <p>View Details</p>
                        </div>
                      </div>
                    </div>
                    <Card.Body className="project-body">
                      <Card.Title className="project-title">{project.name}</Card.Title>
                      <div className="tech-stack">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span key={i} className="tech-badge">{tech}</span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="tech-badge tech-more">+{project.technologies.length - 3}</span>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>

      <Modal 
        show={selectedProject !== null} 
        onHide={closeProject} 
        centered
        size="lg"
        className="project-modal"
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.name} 
                    className="img-fluid rounded mb-3"
                  />
                </Col>
                <Col md={6}>
                  <h5>Description</h5>
                  <p>{selectedProject.description}</p>
                  
                  <h5>Technologies</h5>
                  <div className="tech-stack-modal">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeProject}>
                Close
              </Button>
              {selectedProject.url && (
                <Button 
                  variant="primary" 
                  onClick={(e) => openLink(selectedProject.url, e)}
                >
                  View on GitHub
                </Button>
              )}
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
};

export default ProjectList;