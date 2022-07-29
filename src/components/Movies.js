import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AppContext } from './Context';

const Movies = () => {

  const {movie, isLoading} = useContext(AppContext);

  if (isLoading){
    return(
      <div>
        <div className="loading">Loading...</div>
      </div>
    )
  }

  return (
    <section className='movie-page'>
      <div className='container grid grid-4-col'>
      {movie.map((currMovie) => {

          const {imdbID, Title, Poster} = currMovie;
          const movieName = Title.substring(0, 19);  //for short the movie name

          return <NavLink to={`/movie/${imdbID}`} key={imdbID}>
            <div className="card">
              <div className="card-info">
                <h2>{movieName.length >= 19 ? `${movieName}...` : movieName}</h2>
                <img src={Poster} alt="image"/>
              </div>
            </div>
          </NavLink>
        })}
      </div>
    </section>
  )
}

export default Movies
