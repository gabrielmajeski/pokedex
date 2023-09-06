import  React , {useContext} from 'react';
import favoriteContext from '../contexts/favoritesContext';

const NavBar = () => {
  const { favoritePokemons } = useContext(favoriteContext);
  return (
    <header className="pokeHeader">
      <nav>
        <img
          className="pokeLogo"
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="PokeAPI Logo"
        />
        <div><p>Favorites: {favoritePokemons.length} ❤️</p></div>
      </nav>
    </header>
  );
};

export default NavBar;
