import React from 'react'
import useGetData from '../../hooks/useGetData.js'
import CardCarousel from '../carousel';
import Loader from '../loader';
import classes from "./movie.module.scss";
function Movie() {
  const [data,loading] = useGetData('/discover/movie?sort_by=popularity.desc')
 if (!loading) {
  return data && (
    <div className={classes['movie']}>
      <CardCarousel data={data} />
    </div>
  )
 }else{
  return <Loader />
 }
}

export default Movie