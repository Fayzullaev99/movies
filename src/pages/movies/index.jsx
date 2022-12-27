import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Loader from '../../components/loader'
import MovieCard from '../../components/movieCard'
import useGetData from '../../hooks/useGetData'
import Container from '../../layout/Container';
import classes from "../page.module.scss";

function Movies() {
    const [pageNumber, setPageNumber] = useState(1)
    const [upcoming, loading,moreUpcoming] = useGetData('/movie/upcoming',pageNumber)
    const [popular, load,morePopular] = useGetData('/movie/popular',pageNumber)
    const { pathname } = useLocation()
  
    if (loading || load) {
        return <Loader />
    } else if (upcoming && popular) {
        return <Container className={classes['page']}>
            <h2 className={classes["title"]}>Все фильмы</h2>
            <div className={classes['block']}>
                {pathname === '/movies' && upcoming.map((item) => (
                    <MovieCard key={item.id} item={item} />
                ))}
                {pathname === '/popular' && popular.map((item) => (
                    <MovieCard key={item.id} item={item} />
                ))}
            </div>
        </Container>
    }
}

export default Movies