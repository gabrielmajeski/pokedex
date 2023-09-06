import React from "react";
import Popup from 'reactjs-popup';


const PopupExample = (pokemon) => (
  <Popup
    trigger={<div className="pokemon-image">
    <img className='pokemon-image-container' src={pokemon.pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.pokemon.name} />
  </div>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> {pokemon.pokemon.name} </div>
        <div className="content">
         
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
      </div>
    )}
  </Popup>
);

export default PopupExample