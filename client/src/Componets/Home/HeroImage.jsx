// Import Swiper React components
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import HeroImg from '../../Assets/Image/HeroImage.svg';
import HeroImg2 from '../../Assets/Image/HeroImage2.svg';
import HeroImg3 from '../../Assets/Image/HeroImage3.svg';
import '../../Css/HomeCss/HeroImage.css';

// Import Swiper style
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';

export default function HeroImage() {
  return (
    <div className="Hero-Image">

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="Image-Container">
            <div className="Image-overlay" />
            <img src={HeroImg} alt="First banner" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Image-Container">
            <div className="Image-overlay" />
            <img src={HeroImg2} alt="First banner" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Image-Container">
            <div className="Image-overlay" />
            <img src={HeroImg3} alt="First banner" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
