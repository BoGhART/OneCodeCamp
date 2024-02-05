// src/App.js
import React, { useState, useEffect } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import axios from 'axios';

function App() {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);

  useEffect(() => {
    // Fetch Star Wars films from SWAPI
    axios.get('https://swapi.dev/api/films/')
      .then(response => {
        const filmsWithImages = response.data.results.map((film, index) => ({
          ...film,
          image: `https://picfiles.alphacoders.com/349/thumb-1920-349095.jpg${index + 1}.jpg`,
        }));
        setFilms(filmsWithImages);
      })
      .catch(error => {
        console.error('Error fetching films:', error);
      });
  }, []);

  const handleFilmClick = (film) => {
    setSelectedFilm(film);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {films.map(film => (
          <div key={film.episode_id} className="col-md-4 mb-4">
            <Card
              className="film-card"
              onClick={() => handleFilmClick(film)}
            >
              <Card.Img variant="top" src={film.image} alt={film.title} className="img-fluid film-img" />
              <Card.Body>
                <Card.Title>{film.title}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <Modal show={selectedFilm !== null} onHide={() => setSelectedFilm(null)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedFilm?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedFilm?.opening_crawl}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelectedFilm(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
