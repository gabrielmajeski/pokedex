import React from 'react';

const Pokemon = (props) => {
  const { pokemon } = props;
  const onHeartClick = () => {
    console.log("favoritado");
  }
  const heart = "❤"
  return <div>
    <div className='pokemon-card'>
      <div className="pokemon-image">
        <img className='pokemon-image-container' src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <span>#{pokemon.id}</span>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, index) => {
              return (<div key={index} className="pokemon-type-text">{type.type.name}</div>)
            })}
          </div>
          <button className='pokemon-heart-btn' onClick={onHeartClick}>{heart}</button>
        </div>
      </div>
    </div>
  </div>;
};

export default Pokemon;
