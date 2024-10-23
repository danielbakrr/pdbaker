import React from 'react';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import ProjectList from './components/ProjectList';
import ContactForm from './components/Contact';
import Footer from './components/footer';
import './index.css';
import CertsList from './components/certs';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <section id="about">
          <AboutMe />
        </section>
        <section id="projects">
          <ProjectList />
        </section>
        <section id="cert">
          <CertsList />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
