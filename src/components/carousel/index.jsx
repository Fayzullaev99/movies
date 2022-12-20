import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import MovieCard from "../movieCard";
import classes from './carousel.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import './carousel.styles.scss'


const CardCarousel = ({data}) => {
    return (
    <>
      <h2>Special Discount</h2>
        <Swiper slidesPerView={6} navigation={true} modules={[Navigation]} className={classes['movie']} >
            {data.map((item)=>(
            <SwiperSlide key={item.id}>
                 <MovieCard item={item}/>
            </SwiperSlide>
            ))}
        </Swiper>
    </>
  )
}

export default CardCarousel