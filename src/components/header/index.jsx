import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiMenuAlt2 } from "react-icons/hi";
import defaultImg from "../../images/default.jpg";
import classes from './header.module.scss'
function Header({ data }) {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        const timeout = setTimeout(() => {count===data.length-2?setCount(0):setCount(count+1)}, 15000);
        return () => clearTimeout(timeout);
    },[count])
    const handleClick = (e)=>{
        e.preventDefault()
    }
    const navigate = useNavigate()
    const img_url = 'https://image.tmdb.org/t/p/w1280/'
    return (
        <div className={classes['header']}>
            <img src={`${data[count].backdrop_path ? img_url + data[count].backdrop_path : defaultImg}`} alt={data[count].original_title} className={classes["header__image"]} />
            <div className={classes["header__info"]}>
                <h1 className={classes["header__title"]}>{data[count].original_title.slice(0,25)}</h1>
                <p className={classes["header__text"]}>{data[count].overview}</p>
                <button onClick={() => navigate(`/show/${data[count].id}`)} className={classes['header__button']}>
                    <HiMenuAlt2 className={classes['header__icon']} />
                    <span className={classes['header__span']}>Подробнее</span>
                </button>
            </div>
            <button onClick={()=>handleClick()} className={classes["header__next-movie"]}>
                <div className={classes["header__next-info"]}>
                    <img src={`${data[count+1].backdrop_path ? img_url + data[count+1].backdrop_path : defaultImg}`} alt={data[count+1].original_title} className={classes["header__next-img"]} />
                    <p className={classes["header__next-text"]}>Следующий</p>
                    <h4 className={classes["header__next-title"]}>{data[count+1].original_title}</h4>
                </div>
            </button>
        </div>
    )
}
export default Header