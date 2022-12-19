import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import MovieCard from "../movieCard";
// import { useSelector } from 'react-redux'

// import useGetData from '../../hooks/useGetData'
// import Container from '../../layout/Container'
// import ProductCard from '../ProductCard'

import classes from './carousel.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import './carousel.styles.scss'


const CardCarousel = () => {
  return (
    <>
      <h2>Special Discount</h2>
        <Swiper slidesPerView={4} navigation={true} modules={[Navigation]} className={classes['movie']} >
            <SwiperSlide>
                <MovieCard />
            </SwiperSlide>
            <SwiperSlide>
                <MovieCard />
            </SwiperSlide>
            <SwiperSlide>
                <MovieCard />
            </SwiperSlide>
            <SwiperSlide>
                <MovieCard />
            </SwiperSlide>
            <SwiperSlide>
                <MovieCard />
            </SwiperSlide>
            <SwiperSlide>
                <MovieCard />
            </SwiperSlide>
            <SwiperSlide>
                <MovieCard />
            </SwiperSlide>
            <SwiperSlide>
                <MovieCard />
            </SwiperSlide>
            <SwiperSlide>
                <MovieCard />
            </SwiperSlide>
            <SwiperSlide>
                <MovieCard />
            </SwiperSlide>
        </Swiper>
    </>
  )
}

export default CardCarousel