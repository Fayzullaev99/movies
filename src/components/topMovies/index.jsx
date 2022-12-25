import React from 'react'
import useGetData from '../../hooks/useGetData.js'
import CardCarousel from '../carousel';
import Loader from '../loader';
import classes from "./topMovie.module.scss";
function TopMovies() {
  const [data,loading] = useGetData('/movie/top_rated')
 if (!loading) {
  return data && (
    <div className={classes['top']}>
      <h2 className={classes['top__title']}>ТОП <span>10</span></h2>
      <CardCarousel rating={data.slice(0, 10)} />
    </div>
  )
 }else{
  return <Loader />
 }
}

export default TopMovies