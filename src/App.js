import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navbar';
import SearchBar from './components/searchBar';
import Pokedex from './components/pokedex';
import { getPokemonData, getPokemons } from './api';
import FavoriteContext, { FavoriteProvider } from './contexts/favoritesContext';

const favoritesKey = "f"

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);
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

  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
  }

  useEffect(() => {
    loadFavoritePokemons();
  }, []);


  useEffect(() => {
    fetchPokemons();
  }, [page]);


  const updateFavoritePokemons = (name) => {
    const updateFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if(favoriteIndex >= 0) {
      updateFavorites.splice(favoriteIndex, 1);
    } else {
      updateFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updateFavorites));
    setFavorites(updateFavorites);

  }
  return (
    <FavoriteProvider value={{favoritePokemons: favorites, updateFavoritePokemons: updateFavoritePokemons}}>
    <div className="App">
      <NavBar />
      <SearchBar />
      <Pokedex pokemons={pokemons} loading={loading} page={page} totalPages={totalPages}  setPage={setPage} />
    </div>
    </FavoriteProvider>
   
  );
}

export default App;
