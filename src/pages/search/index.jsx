import React, { useState } from 'react'
import SearchBar from '../../components/searchBar'
import Loader from '../../components/loader'
import useGetData from '../../hooks/useGetData'
import Container from '../../layout/Container';
import MovieCard from '../../components/movieCard';
import classes from "../page.module.scss";
function Search() {
  const [url, setUrl] = useState('/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc')
  const [data,loading] = useGetData(url)
  const getMovie = (search_url)=>{
    setUrl(search_url);
  }
  if (loading) {
    return <Loader />
  } else if (data) {
    return <Container className={classes['page']}>
      <SearchBar getUrl={getMovie}/>
      <h2 className={classes["title"]}>The most popular kids movies</h2>
      <div className={classes['block']}>
      {data.slice(0,4).map((item)=>(
          <MovieCard key={item.id} item={item} />
      ))}
      </div>
    </Container>
  }
}

export default Search
// import React from 'react'
// import SearchBar from '../../components/searchBar'
// import Loader from '../../components/loader'
// import useGetData from '../../hooks/useGetData'
// import Container from '../../layout/Container';
// import MovieCard from '../../components/movieCard';
// import classes from "../page.module.scss";
// function Search() {
//   const [data, loading] = useGetData('/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc')
//   console.log(data);
//   if (loading) {
//     return <Loader />
//   } else if (data) {
//     return <Container className={classes['page']}>
//       <SearchBar />
//       <h2 className={classes["title"]}>The most popular kids movies</h2>
//       <div className={classes['block']}>
//       {data.slice(0,4).map((item)=>(
//           <MovieCard key={item.id} item={item} />
//       ))}
//       </div>
//     </Container>
//   }
// }

// export default Search