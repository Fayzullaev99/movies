import React from 'react'
import { BsPlayCircle } from "react-icons/bs";
import classes from "./movieCard.module.scss";
import { Link, useNavigate } from 'react-router-dom';
function MovieCard({item}) {
  const navigate = useNavigate()
  const {original_title,poster_path,vote_average,id} = item
  return (
    <div className={classes['card']}>
      <div className={classes['card__box']}>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} className={classes["card__image"]} />
        <div className={classes["card__watch"]}>
          <Link to={`/movie/${id}`} className={classes["card__view"]}>
            <BsPlayCircle className={classes['card__icon']} />
            <span className={classes["card__span"]}>Watch Now</span>
          </Link>
          <button className={classes["card__btn"]} onClick={()=>navigate(`/movie/${id}`)}>View Info</button>
        </div>
        <div className={classes['card__info']}>
          <h2 className={classes['card__title']}>
            {original_title.length < 15 
              ? original_title 
              : original_title.substring(0,14)+'...'
            }
            <span className={classes['card__rating']}>
              {Number(vote_average).toFixed(1)}
            </span>
          </h2>
          <Link to={"/"} className={classes['card__link']}>fantasy</Link>
          <Link to={"/"} className={classes['card__link']}>comedy</Link>
          <Link to={"/"} className={classes['card__link']}>adventure</Link>
        </div>
      </div>
    </div>
  )
}

export default MovieCard