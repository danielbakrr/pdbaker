// ExperienceTimeline.jsx
import React from 'react';
import '../styles/timeline.css';

const ExperienceTimeline = () => {
  const experiences = [
    {
      id: 1,
      title: "Information Technology student",
      company: "Ngee Ann Polytechnic, School of ICT",
      period: "Apr 2023 - present",
      description: "Diploma in Information Technology, specializing in Cloud Computing.",
      type: "education"
    },
    {
        id: 2,
        title: "Data Analyst Intern",
        company: "Public Utilities Board, Singapore's National Water Agency",
        period: "Mar 2025 - present",
        description: "To analyse meter data (e.g. water consumption, meter metadata such as meter size, meter location) and provide statistical assessments on the problems statements along with proposed solutions.",
        type: "work"
      }
  ];

  return (
    <div className="timeline-container">
      <h1 className="timeline-heading">Experience</h1>
      
      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <div className={`timeline-icon ${exp.type}`}>
              <span className="icon-inner"></span>
            </div>
            
            <div className="timeline-content">
              <div className="content-header">
                <h3 className="content-title">{exp.title}</h3>
                <div className="content-period">
                  <span className="period-text">{exp.period}</span>
                </div>
              </div>
              
              <h4 className="content-company">{exp.company}</h4>
              
              <p className="content-description">{exp.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;