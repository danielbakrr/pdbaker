import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import personalWeb from '../assets/personalWeb.png';
import gihubbies from '../assets/githubbies-logo2.png';
import tycoon from '../assets/python.png';
import inflationAtlas from '../assets/inflation_atlas.png';
import error from '../assets/error404.jpg';
import fallSafe from '../assets/fallSafe.png';

const ProjectList = () => {
  const projects = [
    {
      name: "Website Portfolio",
      image: personalWeb,
      url: 'https://github.com/glizzygobblrr/pdbaker'
    },
    {
      name: "Ad distribution system",
      image: gihubbies,
      url: 'https://github.com/glizzygobblrr/fsdp'
    },
    {
      name: "City Tycoon Game",
      image: tycoon,
      url: 'https://github.com/glizzygobblrr/SPM-console-game'
    },
    {
      name: "Inflation Atlas",
      image: inflationAtlas,
      url: 'https://github.com/glizzygobblrr/FED_InflationApp'
    },
    {
      name: "SEAwareness",
      image: error,
      url: null
    },
    {
      name: "FallSafe",
      image: fallSafe,
      url: 'https://github.com/danielbakrr/FallSafe?tab=readme-ov-file'
    }
  ];

  const openLink = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <Card 
                className="h-100 shadow-sm transition-all hover-scale" 
                onClick={() => openLink(project.url)}
                style={{ cursor: project.url ? 'pointer' : 'default' }}
              >
                <Card.Img 
                  variant="top" 
                  src={project.image} 
                  alt={project.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center">
                  <Card.Title>{project.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectList;