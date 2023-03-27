import fetch from 'isomorphic-unfetch';

async function fetchCharacters() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();
  return data.results;
}

export const rickAndMortyMiddleware = async () => {
  const characters = await fetchCharacters();
  return { characters };
};
