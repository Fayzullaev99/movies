import React from 'react'
import { Header, Loader, Movie, Serial, TopMovies } from '../../components'
import CardCarousel from '../../components/carousel'
import useGetData from '../../hooks/useGetData'
import classes from "../page.module.scss";

function Home() {
  const [movie, loading] = useGetData('/movie/popular')
  const [serial] = useGetData('/tv/popular')
  const [rating] = useGetData('/movie/top_rated')
  if (loading) {
    return <Loader />
  } else if (movie && serial && rating) {
    console.log(serial);
    return (
      <>
        <Header data={movie} />
        <CardCarousel data={movie} title="Popular Movies" />
        <CardCarousel data={serial} title="Popular Series" />
        <div className={classes['top']}>
          <h2 className={classes['top__title']}>ТОП <span>10</span></h2>
          <CardCarousel rating={rating.slice(0, 10)} />
        </div>
      </>
    )
  }
}

export default Home