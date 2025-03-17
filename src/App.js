import React from 'react';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Timeline from './components/timeline';
import ProjectList from './components/ProjectList';
import ContactForm from './components/Contact';
import Footer from './components/footer';
import SkillsList from './components/skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <section id="about" className="py-5">
          <div className="container">
            <AboutMe />
          </div>
        </section>
        <section>
          <div classname="container">
            <Timeline/>
          </div>
        </section>
        <section id="projects" className="py-5">
          <div className="container">
            <ProjectList />
          </div>
        </section>
        <section id="skill" className="py-5">
          <div className="container">
            <SkillsList />
          </div>
        </section>
        <section id="contact" className="py-5">
          <div className="container">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;