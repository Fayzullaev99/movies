import classNames from 'classnames';
import React from 'react'
import { FaReact } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';
import Container from '../../layout/Container';
import classes from "./navbar.module.scss";
const links = [
  {
    link:'/',
    text:'Home'
  },
  {
    link:'/movies',
    text:'Movies'
  },
  {
    link:'/serials',
    text:'Serials'
  },
  {
    link:'/search',
    text:'Search'
  },
]
function Navbar() {
  const [data] = useGetData('/discover/movie?sort_by=popularity.desc')
  const location = useLocation()
  return (
    <nav className={classes['navbar']}>
      <Container className={classes['navbar__container']}>
        <Link to={"/"} className={classes['navbar__logo']}>
          <FaReact className={classes['navbar__icon']} />
          <span className={classes['navbar__span']} >Sanjar</span>
        </Link>
        <ul className={classes["navbar__list"]}>
          {links.map(({link,text})=>(
            <li key={link}>
              <Link 
              to={link} 
              className={classNames(classes['navbar__link'],location.pathname === link && classes["navbar__link_active"])}
            >
              {text}
            </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar