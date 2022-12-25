import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import MovieCard from "../movieCard";
import classes from './carousel.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import './carousel.styles.scss'
import RatingCard from '../ratingCard';


const CardCarousel = ({ data, title, rating }) => {
  return (
    <div className={classes['carousel']}>
      <h2 className={classes['title']}>{title}</h2>
      {data && <Swiper slidesPerView={6.2} navigation={true} modules={[Navigation]} className={classes['carousel__slide']} >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>}
      {rating && <Swiper slidesPerView={3.8} navigation={true} modules={[Navigation]} className={classes['carousel__slide']} >
        {rating.map((item, i) => (
          <SwiperSlide key={item.id}>
            <RatingCard item={item} index={i + 1} />
          </SwiperSlide>
        ))}
      </Swiper>}
    </div>
  )
}

export default CardCarousel