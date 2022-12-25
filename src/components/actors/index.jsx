import React from 'react'
import useGetData from '../../hooks/useGetData';
import defaultImg from "../../images/default.jpg";
import classes from "./actors.module.scss";
function Actors({id}) {
    console.log(id);
const [data,loading] = useGetData(`/movie/${id}/casts`)
  const img_url = 'https://image.tmdb.org/t/p/w1280/'
  return data && (
    <div className={classes["actor"]}>
        {data.cast.slice(0,5).map((actor,i)=>{
            return (
            <div key={i} className={classes["actor__box"]}>
                <img src={`${actor.profile_path ? img_url+actor.profile_path : defaultImg}`} alt="" className={classes["actor__img"]} />
                <p className={classes["actor__name"]}>{actor.name}</p>
            </div>
              )
            }
          )}
    </div>
  )
}

export default Actors