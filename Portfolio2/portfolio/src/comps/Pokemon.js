import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Pokemon = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (pokemonName) {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
          setPokemonData(response.data);
        }
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        setPokemonData(null);
      }
    };

    fetchData(); // Initial data fetch
  }, [pokemonName]);

  const handleInputChange = (e) => {
    setPokemonName(e.target.value);
  };

  return (
    <div className='container p-5'>
      <h1 className='text-center text-danger'>PokeDex</h1>
      {pokemonData && (
        <div className='card mx-auto mt-4' style={{ maxWidth: '400px' }}>
          <div className='row g-0'>
            <div className='col-md'>
              <div className='card-body text-center'>
                <h2 style={{ textTransform: 'capitalize' }}>{pokemonData.name}</h2>
                <div className="d-flex flex-column">
                  <p><strong>Types:</strong> {pokemonData.types.map((type) => type.type.name).join(', ')}</p>
                  <p><strong>Height:</strong> {pokemonData.height}</p>
                  <p><strong>Weight:</strong> {pokemonData.weight}</p>
                </div>
              </div>
            </div>
            <div className='col-md'>
              <div className='card-footer'>
                <img src={pokemonData.sprites.front_default} alt={`${pokemonData.name} sprite`} className='img-fluid' style={{ width: '150%' }} />
              </div>
            </div>
          </div>
        </div>
      )}
  
      <div className='mt-4 d-flex justify-content-center'>
        <label className='form-label'>
          Enter Pokemon Name:
          <input type="text" value={pokemonName} onChange={handleInputChange} className='form-control mt-2' />
        </label>
      </div>
  
      <div className='text-center mt-4'>
        <Link to="/Projects" className="btn btn-danger" role="button">
          Exit
        </Link>
      </div>
    </div>
  );
  
  
};

export default Pokemon;
