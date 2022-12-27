import React from 'react'
import { BsPlayCircle } from "react-icons/bs";
import classes from "./movieCard.module.scss";
import { Link, useNavigate } from 'react-router-dom';
import defaultImg from "../../images/default.jpg";
import { FaClock, FaHeart } from 'react-icons/fa';
function MovieCard({ item }) {
  const navigate = useNavigate()
  const { original_title, poster_path, vote_average, id, original_name,first_air_date,release_date,vote_count } = item
  const img_url = 'https://image.tmdb.org/t/p/w500/'
  return (
    <>
      <div className={classes['card']}>
        <div className={classes['card__box']}>
          <img src={`${poster_path ? img_url + poster_path : defaultImg}`} alt={original_title || original_name} className={classes["card__image"]} />
          <div className={classes["card__watch"]}>
            <Link to={`/movie/${id}`} className={classes["card__view"]}>
              <BsPlayCircle className={classes['card__icon']} />
              <span className={classes["card__span"]}>Watch Now</span>
            </Link>
            <button className={classes["card__btn"]} onClick={() => navigate(`/show/${id}`)}>View Info</button>
          </div>
          <div className={classes['card__info']}>
            <h2 className={classes['card__title']}>
              {original_title && original_title.slice(0,12)}
              {original_name && original_name.slice(0,12)}
              <span className={classes['card__rating']}>
                {Number(vote_average).toFixed(1)}
              </span>
            </h2>
            <button className={classes['card__date']}><FaClock /> {first_air_date||release_date}</button>
            <button className={classes['card__like']}><FaHeart /> {vote_count}</button>
          </div>
        </div>
      </div>
    </>
  )
}


export default MovieCard