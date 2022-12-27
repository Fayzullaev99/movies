import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import MovieCard from "../movieCard";
import RatingCard from '../ratingCard';
import 'swiper/css'
import 'swiper/css/navigation'
import './carousel.styles.scss'
import classes from './carousel.module.scss'
import { useNavigate } from 'react-router-dom';
const swiperOptions= {
  movieSlide: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1450: {
      slidesPerView: 5,
    },
  },
  ratingSlide: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1450: {
      slidesPerView: 4,
    },
  },
};

const CardCarousel = ({ data, title, rating }) => {
  const navigate = useNavigate()
  return (
    <div className={classes['carousel']}>
      <h2 className={classes['title']}>{title}</h2>
      {data && <Swiper 
        spaceBetween={25} 
        navigation={true} 
        modules={[Navigation]} 
        className={classes['carousel__slide']}
        breakpoints={swiperOptions.movieSlide}
        >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieCard item={item} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
            <h2 onClick={()=>navigate(`/movies`)} className={classes['last_slide']}>All movies</h2>
        </SwiperSlide>
      </Swiper>}
      {rating && <Swiper 
        spaceBetween={25} 
        navigation={true} 
        modules={[Navigation]} 
        className={classes['carousel__slide']}
        breakpoints={swiperOptions.ratingSlide}
      >
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