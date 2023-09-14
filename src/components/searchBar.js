import React, { useState } from 'react';

const SearchBar = (props) => {
  const [search, setSearch] = useState('ditto');
  const {onSearch} = props

  // Seta o valor que será buscado
  const onChangePokemon = (e) => {
    setSearch(e.target.value.toLowerCase());
    if(e.target.value.length === 0) {
      onSearch(undefined)
    }
  };

  // Dispara a função ao clicar no botão
  const onClickButtonHandler = () => {
    onSearch(search);
  };

  return (
    <div className="pokeSearchContainer">
      <div className="searchPokemon">
        <input className='inputSearchPokemon' type='search' placeholder="Search Pokemon" onChange={onChangePokemon}/>
      </div>
      <div className="searchPokemonButton">
        <button className='button' onClick={onClickButtonHandler}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
