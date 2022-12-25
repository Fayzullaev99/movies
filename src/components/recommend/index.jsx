import React from 'react'
import { useParams } from 'react-router-dom'
import useGetData from '../../hooks/useGetData'
import Loader from '../loader'
import MovieCard from '../movieCard'
import classes from './recommend.module.scss'
function Recommend({title}) {
    const params = useParams()
    const [data,loading] = useGetData(`/movie/${params.id}/${title}`)
    if (loading) {
        return <Loader />
      } else if (data) {
    return (
        <div>
            <h3 className={classes["recommend__title"]}>{title}</h3>
            <div className={classes["recommend"]}>
                {data.map((item) => (
                    <MovieCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    )}
}

export default Recommend