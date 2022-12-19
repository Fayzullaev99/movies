import React from 'react'
import MovieCard from '../movieCard';
import classes from "./movie.module.scss";
function Movie() {
  return (
    <div className={classes['movie']}>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  )
}

export default Movie