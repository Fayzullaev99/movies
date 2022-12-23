import React from 'react'
import useGetData from '../../hooks/useGetData.js'
import CardCarousel from '../carousel';
import Loader from '../loader';
// import classes from "./movie.module.scss";
function Serial() {
  const [data,loading] = useGetData('/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10')
 if (!loading) {
  return data && (
    <>
      <CardCarousel data={data} title="Сереалы" />
    </>
  )
 }else{
  return <Loader />
 }
}

export default Serial