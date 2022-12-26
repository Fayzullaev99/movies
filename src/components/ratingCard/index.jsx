import React from 'react'
import { Link } from 'react-router-dom';
import defaultImg from "../../images/default.jpg";
import classes from "./rating.module.scss";
function RatingCard({item,index}) {
    const {poster_path,original_title,id} = item
    const img_url = 'https://image.tmdb.org/t/p/w500/'
  return (
    <Link to={`/show/${id}`} className={classes['rating']}>
        <div className={classes['rating__num']}>{index}</div>
        <img src={`${poster_path ?img_url+poster_path : defaultImg}`} alt={original_title} className={classes["rating__image"]} />
    </Link>
  )
}

export default RatingCard