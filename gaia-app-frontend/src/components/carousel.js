import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Image from 'next/image'

import 'swiper/css';
import "swiper/css/pagination";

export default function Carousel() {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={true}
    >
      <SwiperSlide>
        <Image src="/images/grey.png" width={500} height={500}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/pula.png" width={500} height={500}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/grey.png" width={500} height={500}/>
      </SwiperSlide>
    </Swiper>
  );
}

export function Categories() {
  return (
    <Swiper
      slidesPerView={4}
    >
      <SwiperSlide>
        <Image src="/images/grey.png" width={100} height={100}/>
        <p>MEN</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/grey.png" width={100} height={100}/>
        <p>WOMEN</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/grey.png" width={100} height={100}/>
        <p>SALE</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/grey.png" width={100} height={100}/>
        <p>TOPS</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/grey.png" width={100} height={100}/>
        <p>BOTTOMS</p>
      </SwiperSlide>
  </Swiper>
  )
}