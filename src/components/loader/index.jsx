import React from 'react'
import load from "../../images/loading.gif";
import classes from "./loader.module.scss";
function Loader() {
  return (
    <div className={classes['loader']}>
      <img src={load} alt="" className="loader__image" />
    </div>
  )
}

export default Loader