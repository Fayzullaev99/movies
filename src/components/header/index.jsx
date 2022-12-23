import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiMenuAlt2 } from "react-icons/hi";
import useGetData from '../../hooks/useGetData'
import defaultImg from "../../images/default.jpg";
import classes from './header.module.scss'
function Header() {
    const navigate = useNavigate()
    const [data] = useGetData('/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2022-10-22')
    const img_url = 'https://image.tmdb.org/t/p/w1280/'
    return (
        data && (
            <div className={classes['header']}>
                <img src={`${data[0].backdrop_path ? img_url+data[0].backdrop_path : defaultImg}`} alt={data[0].original_title} className={classes["header__image"]} />
                <div className={classes["header__info"]}>
                    <h1 className={classes["header__title"]}>{data[0].original_title}</h1>
                    <p className={classes["header__text"]}>{data[0].overview}</p>
                    <button onClick={() => navigate(`/show/${data[0].id}`)} className={classes['header__button']}>
                        <HiMenuAlt2 className={classes['header__icon']} />
                        <span className={classes['header__span']}>Подробнее</span>
                    </button>
                </div>
                <Link to={`/movie/${data[1].id}`} className={classes["header__next-movie"]}>
                    <div className={classes["header__next-info"]}>
                        <img src={`https://image.tmdb.org/t/p/w1280/${data[1].backdrop_path}`} alt={data[1].original_title} className={classes["header__next-img"]} />
                        <p className={classes["header__next-text"]}>Следующий</p>
                        <h4 className={classes["header__next-title"]}>{data[1].original_title}</h4>
                    </div>
                </Link>
            </div>
        )
    )
}

export default Header