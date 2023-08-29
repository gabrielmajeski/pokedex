import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navbar';
import SearchBar from './components/searchBar';
import Pokedex from './components/pokedex';
import { getPokemonData, getPokemons } from './api';

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const itensPerPage = 25;


  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      });
      const result = await Promise.all(promises);
      setPokemons(result);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.log('fetch pokemons error: ', error);
    }
  };

  useEffect(() => {
    console.log('carregou');
    fetchPokemons();
  }, [page]);

  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <Pokedex pokemons={pokemons} loading={loading} page={page} totalPages={totalPages}  setPage={setPage} />
    </div>
  );
}

export default App;
