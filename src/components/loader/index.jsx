import React from 'react'
import load from "../../images/loading.svg";
import classes from "./loader.module.scss";
function Loader() {
  return (
    <div className={classes['loader']}>
      <img src={load} alt="" className={classes['loader__image']}/>
    </div>
  )
}

export default Loader