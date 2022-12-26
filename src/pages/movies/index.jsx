import React from 'react'
import Loader from '../../components/loader'
import MovieCard from '../../components/movieCard'
import useGetData from '../../hooks/useGetData'
import Container from '../../layout/Container';
import classes from "../page.module.scss";
function Movies() {
  const [data, loading] = useGetData('/movie/upcoming')
  console.log(data);
  if (loading) {
    return <Loader />
  } else if (data) {
    return <Container className={classes['page']}>
      <h2 className={classes["title"]}>Все фильмы</h2>
      <div className={classes['block']}>
      {data.map((item)=>(
          <MovieCard key={item.id} item={item} />
      ))}
      </div>
    </Container>
  }
}

export default Movies
// import React from 'react'
// import Loader from '../../components/loader'
// import MovieCard from '../../components/movieCard'
// import useGetData from '../../hooks/useGetData'
// import Container from '../../layout/Container';
// import classes from "../page.module.scss";
// function Movies() {
//   const [data, loading] = useGetData('/movie/upcoming')
//   console.log(data);
//   if (loading) {
//     return <Loader />
//   } else if (data) {
//     return <Container className={classes['page']}>
//       <h2 className={classes["title"]}>Все фильмы</h2>
//       <div className={classes['block']}>
//       {data.map((item)=>(
//           <MovieCard key={item.id} item={item} />
//       ))}
//       </div>
//     </Container>
//   }
// }

// export default Movies