import classNames from 'classnames'
import React from 'react'
import { useParams } from 'react-router-dom'
import {FaPlay} from 'react-icons/fa'
import useGetData from '../../hooks/useGetData'
import Loader from '../loader'
import defaultImg from "../../images/default.jpg";
import classes from "./movieDetails.module.scss";
import Actors from '../actors'
function MovieDetails() {
  const params = useParams()
  const [data,loading] = useGetData(`/movie/${params.id}`)
  const img_url = 'https://image.tmdb.org/t/p/w1280/'
  
  console.log(data);
  if (loading) {
    return <Loader />
  }else if (data) {
    const {backdrop_path,original_title,original_language,overview,poster_path,release_date,genres} = data
    return (
      <div className={classNames(classes['details'])}>
        <img src={`${backdrop_path ? img_url+backdrop_path : defaultImg}`} alt={original_title} className={classes["details__bg"]} />
        <div className={classes["details__block"]}>
          <div className={classes["details__info"]}>
            <h2 className={classes["details__title"]}>{original_title}</h2>
            <p className={classes["details__text"]}>{overview}</p>
            <div className="">
            <span className={classes["details__history"]}>{release_date} </span>
            <span className={classes["details__history"]}>
            {genres.map((genre)=>(`${genre.name} `))}
            </span>
            <span className={classes["details__history"]}>{original_language}</span>
            </div>
            <button className={classes["details__trailer"]}><FaPlay />Смотерть трейлер</button>
            <p className={classes['details__actors-info']}>В главных ролях</p>
          </div>
          <div className={classes["details__image"]}>
            <img src={`${poster_path ? img_url+poster_path : defaultImg}`} alt={original_title} />
          </div>
        </div>
        <Actors id={params.id}/>
      </div>
    )
  }
}

export default MovieDetails