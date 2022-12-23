import React from 'react'
import { BsPlayCircle } from "react-icons/bs";
import classes from "./movieCard.module.scss";
import { Link, useNavigate } from 'react-router-dom';
import defaultImg from "../../images/default.jpg";
function MovieCard({item}) {
  const navigate = useNavigate()
  const {original_title,poster_path,vote_average,id} = item
  const img_url = 'https://image.tmdb.org/t/p/w500/'
  return (
    <div className={classes['card']}>
      <div className={classes['card__box']}>
        <img src={`${poster_path ?img_url+poster_path : defaultImg}`} alt={original_title} className={classes["card__image"]} />
        <div className={classes["card__watch"]}>
          <Link to={`/movie/${id}`} className={classes["card__view"]}>
            <BsPlayCircle className={classes['card__icon']} />
            <span className={classes["card__span"]}>Watch Now</span>
          </Link>
          <button className={classes["card__btn"]} onClick={()=>navigate(`/show/${id}`)}>View Info</button>
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
          <span className={classes['card__link']}>fantasy</span>
          <span className={classes['card__link']}>comedy</span>
          <span className={classes['card__link']}>adventure</span>
        </div>
      </div>
    </div>
  )
}


export default MovieCard