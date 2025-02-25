import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import aws from '../assets/aws.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import node from '../assets/node.png';
import express from '../assets/express.png';
import react from '../assets/react.png';
import github from '../assets/github.png';

const CertsList = () => {
  const skills = [
    { name: "AWS", image: aws },
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: js },
    { name: "Node.js", image: node },
    { name: "Express", image: express },
    { name: "React", image: react },
    { name: "GitHub", image: github }
  ];

  return (
    <section id="certs" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Proficiencies</h2>
        <Row className="justify-content-center">
          {skills.map((skill, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={3} className="mb-4">
              <Card className="border-0 shadow-sm h-100 text-center">
                <Card.Body className="d-flex align-items-center justify-content-center">
                  <img 
                    src={skill.image} 
                    alt={skill.name} 
                    className="img-fluid" 
                    style={{ maxHeight: '80px', maxWidth: '80px' }}
                  />
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                  <small className="text-muted">{skill.name}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CertsList;