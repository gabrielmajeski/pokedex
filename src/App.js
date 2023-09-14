import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navbar';
import SearchBar from './components/searchBar';
import Pokedex from './components/pokedex';
import { getPokemonData, getPokemons, searchPokeApi } from './api';
import FavoriteContext, { FavoriteProvider } from './contexts/favoritesContext';
import HeaderContainer from './components/headerContainer';
const favoritesKey = "f"

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isFirstLoadPage, setIsFirstLoadPage] = useState(true);
  const itensPerPage = 25;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
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
    if(isFirstLoadPage === true) {
      fetchPokemons();
    }
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

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons(
        setPage(0),
        setIsFirstLoadPage(true)
      )
    }
    setLoading(true)
    setNotFound(false)
    const result = await searchPokeApi(pokemon)
    if(!result) {
      setNotFound(true)
    } else {
      setIsFirstLoadPage(false)
      setPokemons([result])
      setTotalPages(1)
      setPage(0)
    }
    setLoading(false)

  }

  const notFoundPage = () => {
    var pokemon = document.querySelector('.inputSearchPokemon');
    pokemon.value = "";
    setPage(0);
    fetchPokemons();
  }
  return (
    <FavoriteProvider value={{favoritePokemons: favorites, updateFavoritePokemons: updateFavoritePokemons}}>
      <HeaderContainer>
      <NavBar />
      <SearchBar onSearch={onSearchHandler}/>
      </HeaderContainer>
      {notFound ? (
        <div className='notFound'>
          <p>404</p>
          <p>Ditto don't know this shape... yet</p>
          <button className='button' onClick={notFoundPage}>Go back</button>
        </div>
      ) :
      (<Pokedex pokemons={pokemons} loading={loading} page={page} totalPages={totalPages}  setPage={setPage} />
    )}
    </FavoriteProvider>
  );
}
export default App;
