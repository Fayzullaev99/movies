import React from 'react'
import { FaFacebook, FaLinkedin, FaReact, FaTelegram, FaYoutube } from "react-icons/fa";
import classes from "./footer.module.scss";
function Footer() {
  return (
    <div className={classes['footer']}>
        <div className={classes["footer__media"]}>
            <a 
                href="https://t.me/Sanjar_FF" 
                target="_blank" rel="noopener noreferrer" 
                className={classes["footer__link"]}
            >
                <FaTelegram />
            </a>
            <a 
                href="https://www.facebook.com/SanjarFayzullaev99" 
                target="_blank" rel="noopener noreferrer" 
                className={classes["footer__link"]}
            >
                <FaFacebook />
            </a>
            <a 
                href="https://www.youtube.com/channel/UCYNqVnOAFn_RSJTQgV1HuXg" 
                target="_blank" rel="noopener noreferrer" 
                className={classes["footer__link"]}
            >
                <FaYoutube />
            </a>
            <a 
                href="https://www.linkedin.com/in/fayzullaev99" 
                target="_blank" rel="noopener noreferrer" 
                className={classes["footer__link"]}
            >
                <FaLinkedin />
            </a>
        </div>
        <p className={classes["footer__text"]}>© 2022 CINEPHILE. Может содержать информацию, не предназначенную для несовершеннолетних</p>
        <p className={classes["footer__text"]}>Данные получены с сайта themoviedb.org</p>
        <a 
            href="https://app.netlify.com/sites/meinfolio/overview" 
            target="_blank" 
            rel="noopener noreferrer"
            className={classes["footer__logo"]}
        >
            <FaReact className={classes['footer__icon']} />
            <span className={classes["footer__span"]}>Sanjar</span>
        </a>
    </div>
  )
}

export default Footer