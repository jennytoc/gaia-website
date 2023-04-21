import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Carousel() {
  return (
    <Swiper>
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
    </Swiper>
  );
}

export function Categories() {
  return (
    <Swiper>
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
  </Swiper>
  )
}