import React from 'react';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import ProjectList from './components/ProjectList';
import ContactForm from './components/Contact';
import Footer from './components/footer';
import CertsList from './components/certs';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Keep your custom styles
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
        <section id="projects" className="py-5 bg-light">
          <div className="container">
            <ProjectList />
          </div>
        </section>
        <section id="cert" className="py-5">
          <div className="container">
            <CertsList />
          </div>
        </section>
        <section id="contact" className="py-5 bg-light">
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