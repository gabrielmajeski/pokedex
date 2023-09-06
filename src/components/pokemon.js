import React from 'react';
import { useContext } from 'react';
import FavoriteContext from '../contexts/favoritesContext';
import PopupExample from './modal';


const Pokemon = (props) => {
  const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext);
  const { pokemon } = props;
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name)
  }
  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🤍"
  
  return <div className='pokemons'>  
    <div className='pokemon-card'> 
    <PopupExample pokemon={pokemon}/>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <span className='pokemon-name'>#{pokemon.id}</span>
        </div>    
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, index) => {
              return (<div key={index} className={"type-"+type.type.name}>{type.type.name}</div>)
            })}
          </div>
          <button className='pokemon-heart-btn' onClick={onHeartClick}>{heart}</button>
        </div>
      </div>
    </div>
  </div>;
};

export default Pokemon;
