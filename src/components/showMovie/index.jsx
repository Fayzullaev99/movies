import classNames from 'classnames'
import React from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'
import useGetData from '../../hooks/useGetData'
import Loader from '../loader'
import Container from '../../layout/Container'
import classes from "./showMovie.module.scss";
import Recommend from '../recommend'
function ShowMovie() {
  const params = useParams()
  const [data,loading] = useGetData(`/movie/${params.id}/videos`)
  if (loading) {
    return <Loader />
  }else{
    
    return (
      <Container className={classNames(classes['show'])}>
        {data && (
          <YouTube videoId={data[0].key} controls opts={{width:"100%",height:"100%"}} style={{height:"calc(100vh - 65px)"}} className={classes['show__movie']}/>
        )}
        <Recommend title="similar" />
      </Container>
    )
  }
}

export default ShowMovie