import { React } from 'react';
import Pokemon from './pokemon';
import Pagination from './pagination';

const Pokedex = (props) => {
  const { pokemons, loading , page , totalPages, setPage} = props;
  const previousClickHandler = () => {
    if(page > 0 ) {
      setPage(page-1)
    }
  }

  const nextClickHandler = () => {
    if(page+1 !== totalPages) {
      setPage(page+1)
    }
  }
  return (
    <div  className='resultContainer'>

      {loading ? (
          <div className="card-loading is-loading">
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
           <div className="loading"></div>
          </div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return (<Pokemon key={index} pokemon={pokemon} />);
            })}
        </div>
      )}
            <div className="pokedex-header">
  
              <Pagination
          page={page+1}
          totalPages={totalPages}
          previousClick={previousClickHandler}
          nextClick={nextClickHandler}
        />
            </div>
    </div>
  );
};

export default Pokedex;
