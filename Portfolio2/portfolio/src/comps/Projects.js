import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../assets/style.css';

const Projects = () => {
  const projects = [
    { id: 1, name: 'Pokemon', link: '/comps/Pokemon' },
  ];
      
  const itemsPerPage = 5;  // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const calculateRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const { startIndex, endIndex } = calculateRange();
  const currentProjects = projects.slice(startIndex, endIndex);

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link to="/portfolio" className="navi">Home</Link>
            <Link to="/portfolio/#about" className="navi">About Me</Link>
            <Link to="/portfolio/#contact" className="navi">Contact</Link>
          </div>
        </nav>
      </header>

      <ul className="project-list">
        {currentProjects.map((project) => (
          <li key={project.id}>
            <Link to={project.link}>{project.name}</Link>
          </li>
        ))}
      </ul>

      <nav>
        <ul className="pagination" style={{ position: 'fixed', bottom: 50, width: '100%' }}>
          {Array.from({ length: Math.ceil(projects.length / itemsPerPage) }, (_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <footer style={{ position: 'fixed', bottom: 0, width: '100%' }}>-Portfolio-</footer>
    </div>
  );
}

export default Projects;
