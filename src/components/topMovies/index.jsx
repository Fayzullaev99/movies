import React from 'react'
import useGetData from '../../hooks/useGetData.js'
import CardCarousel from '../carousel';
import Loader from '../loader';
import classes from "./topMovie.module.scss";
function TopMovies() {
  const [data,loading] = useGetData('/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc')
 if (!loading) {
  return data && (
    <div className={classes['top']}>
      <CardCarousel data={data} />
    </div>
  )
 }else{
  return <Loader />
 }
}

export default TopMovies