import React from 'react'
import { BsPlayCircle } from "react-icons/bs";
import classes from "./movieCard.module.scss";
import test from '../../images/test.png'
import { Link } from 'react-router-dom';
function MovieCard() {
  return (
    <div className={classes['card']}>
      <div className={classes['card__box']}>
        <img src={test} alt="" className={classes["card__image"]} />
        <div className={classes["card__watch"]}>
          <Link className={classes["card__view"]}>
            <BsPlayCircle className={classes['card__icon']} />
            <span className={classes["card__span"]}>Watch Now</span>
          </Link>
          <button className={classes["card__btn"]}>View Info</button>
        </div>
        <div className={classes['card__info']}>
          <h2 className={classes['card__title']}>ALice through th... <span className={classes['card__rating']}>4.6</span></h2>
          <Link to={"/"} className={classes['card__link']}>fantasy</Link>
          <Link to={"/"} className={classes['card__link']}>comedy</Link>
          <Link to={"/"} className={classes['card__link']}>adventure</Link>
        </div>
      </div>
    </div>
  )
}

export default MovieCard