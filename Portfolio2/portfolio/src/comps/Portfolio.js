import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css';
import pfp from '../assets/Balongo, Harold Jay S-1006 - Copy.jpg';

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <ScrollLink to="intro" smooth={true} duration={500} className="navbar-brand">Home</ScrollLink>
      <ScrollLink to="about" smooth={true} duration={500} className="navbar-brand">About Me</ScrollLink>
      <ScrollLink to="contact" smooth={true} duration={500} className="navbar-brand">Contact</ScrollLink>
    </div>
  </nav>
);

const Intro = () => (
  <section id="intro" className="intro">
    <div className="intwrd">
      <p>Hey, welcome to my portfolio! I'm Harold Jay S. Balongo, but most folks just call me Bogart or Bogzz for short. Feel free to explore, and if you have any questions, I'm all ears. Thanks for stopping by!</p>
    </div>

    <div className="rounded-image">
      <img src={pfp} alt="pfp"/>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="about">
    <h2>About Me</h2>
    <p>I graduated from Saint Mary's University Bayombong, Nueva Vizcaya, Philippines with a Bachelor's Degree in Information Technology and am an aspiring Software Engineer with a keen interest in Quality Assurance. My interests include technology, anime, manga, and Japanese culture in general.</p>
  </section>
);

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Links & Contact</h2>
    <div className="con">
      <p>Email: <a href="mailto:hbalongo221@gmail.com">hbalongo221@gmail.com</a></p>
    </div>
    <div className="con">
      <p>Facebook: <a href="https://www.facebook.com/haroldjay.balongo/">Harold Balongo</a></p>
    </div>
    <div className="con">
      <p>LinkedIn: <a href="www.linkedin.com/in/harold-balongo-059012191">www.linkedin.com/in/harold-balongo-059012191</a></p>
    </div>
    <div className="con">
      <p>GitHub: <a href="https://github.com/BoGhART">github.com/BoGhART</a></p>
    </div>

    <div className="mb-2">
      <label htmlFor="txt" className="form-label">Send me a message</label>
      <textarea className="form-control" id="txt" rows="4" placeholder="Please Don't"></textarea>
    </div>

    <button type="button" className="btn btn-success" id="grn">Send</button>
  </section>
);

const Portfolio = () => (
  <div className="content-wrapper">
    <header>
      <Navigation />
    </header>

    <Intro />

    <About />

    <Link to="/Travels" className="btp btn-primary" role="button">
    Travel Journal
    </Link>
    <Link to="/Projects" className="btp btn-primary" role="button">
      Projects
    </Link>


    <Contact />

    <Link to="/" className="ext btn-danger" role="button">
      Exit
    </Link>

    <footer className="text-center mt-5">
      Portfolio
    </footer>
  </div>
);

export default Portfolio;
