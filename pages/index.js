import { useState, useEffect } from "react";


const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container" style={{ 'max-width': '800px', 'margin': '0 auto' }}>
      <h1>Characters</h1>
      <div className="grid" style={{ 'display': 'grid', 'grid-template-columns': 'repeat(auto-fit, minmax(200px, 1fr))', 'gap': '20px' }}>
        {characters.map((character) => (
          <div key={character.id} className="card" style={{
            'background-color': '#fff',
            'padding': '20px',
            'border-radius': '10px',
            'box-shadow': '0 2px 4px rgba(0, 0, 0, 0.1)',
            'text-align': 'center'
          }}>
            <img src={character.image} alt={character.name} style={{
              'display': 'block',
              'width': '100%',
              'border-radius': '5px',
              'margin-bottom': '10px'
            }} />
            <h2 style={{
              'font-size': '1.5rem',
              'margin': '0 0 10px'
            }}>{character.name}</h2>
            <p style={{ 'margin': '0' }}>Status: {character.status}</p>
            <p style={{ 'margin': '0' }}>Species: {character.species}</p>
            <p style={{ 'margin': '0' }}>Gender: {character.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
