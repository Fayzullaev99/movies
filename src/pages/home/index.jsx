import React from 'react'
import {Header,Loader,Movie,Serial,TopMovies} from '../../components'
import CardCarousel from '../../components/carousel'
import useGetData from '../../hooks/useGetData'

function Home() {
  const [movie,loading] = useGetData('/movie/popular')
  const [serial] = useGetData('/tv/popular')
  const [rating] = useGetData('/movie/top_rated')
  if (loading) {
    return <Loader />
  }else if (movie && serial && rating) {
    return (
      <>
        <Header data={movie}/>
        <CardCarousel data={movie} title="Popular Movies" />
        <CardCarousel data={serial} title="Popular Series" />
        <TopMovies data={rating} />
      </>
    )
  }
}

export default Home