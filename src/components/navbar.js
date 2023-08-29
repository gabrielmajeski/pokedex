import { React } from 'react';

const NavBar = () => {
  return (
    <header className="pokeHeader">
      <nav>
        <img
          className="pokeLogo"
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="PokeAPI Logo"
        />
      </nav>
    </header>
  );
};

export default NavBar;
