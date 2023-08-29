import React, { useState } from 'react';
import { searchPokeApi } from '../api';

const SearchBar = () => {
  const [search, setSearch] = useState('ditto');
  const [pokemon, setPokemon] = useState();

  // Seta o valor que será buscado
  const onChangePokemon = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  // Dispara a função ao clicar no botão
  const onClickButtonHandler = () => {
    onSearchHandler(search);
  };

  //Chama a função searchPokeApi passando como paramêtro o valor digitado no input
  //e seta o resultado na variavel pokemon sendo assim possível acessar os valores do json
  const onSearchHandler = async (pokemon) => {
    const result = await searchPokeApi(pokemon);
    setPokemon(result);
  };

  return (
    <div className="pokeSearchContainer">
      <div className="searchPokemon">
        <input placeholder="Buscar Pokemon" onChange={onChangePokemon} />
      </div>
      <div className="searchPokemonButton">
        <button onClick={onClickButtonHandler}>Buscar</button>
      </div>
      {pokemon ? (
        <div>
          <div>{pokemon.name}</div>
          <div>#{pokemon.order}</div>
          <img src={pokemon.sprites.front_default} alt="" />
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
