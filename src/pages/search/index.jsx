import React, { useState } from 'react'
import useGetData from '../../hooks/useGetData'
import Container from '../../layout/Container';
import MovieCard from '../../components/movieCard';
import classes from "../page.module.scss";
function Search() {
  const [search, setValue] = useState('')
  const [data] = useGetData(`/search/movie?&query=${search}`)
  return <Container className={classes['page']}>
    <div className={classes['search']}>
      <input
        type="text"
        value={search}
        onChange={(e) => setValue(e.target.value)}
        className={classes['search__input']}
        placeholder="Найти фильм, сериал..."
      />
    </div>
    <div className={classes['block']}>
      {data && data.map((item) => (
        <MovieCard key={item.id} item={item} />
      ))}
    </div>
  </Container>
}

export default Search