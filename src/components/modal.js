import React from "react";
import Popup from 'reactjs-popup';


const PopupPokemon = ({pokemon})  => (
  <Popup
    trigger={<div className="pokemon-image">
    <img className='pokemon-image-container' src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}
    />
  </div>}
    modal
    nested
  >
    {close => (
   
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="content">
          <div className="modal-img-content">
            <h1>{pokemon.name}</h1>
            <img className="modal-img" src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}/>
          </div>
            <div className="modal-infos">
            <h2>Infos</h2>
              <div>№: {pokemon.id}</div>
              <div>Height: {pokemon.height}</div>
              <div>Weight: {pokemon.weight}</div>
              <div className="modal-abilities">Abilities:{pokemon.abilities.map((ability, index) => {
              return (<p key={index}>{ability.ability.name}</p>)
            })}</div>
            </div>
            <div className="modal-type">
              <h2>Type</h2>
              <div className="pokemon-type type-modal">
              {pokemon.types.map((type, index) => {
                return (<div key={index} className={"type-"+type.type.name}>{type.type.name}</div>)
              })}
              </div>
            </div>
            <div  className="modal-stats-content">
            <h2>Stats</h2>
            <table>
              {pokemon.stats.map((stat, index)=> {
                return(<div className="modal-stats" key={index} >
                  <div>{stat.stat.name}: </div>
                  <div> {stat.base_stat} </div>
                  <div><progress value={stat.base_stat} max="200"> {stat.base_stat}</progress></div>
                </div>)
              })}
            </table>
          </div>
        </div>
      </div>
    )}
  </Popup>
);

export default PopupPokemon