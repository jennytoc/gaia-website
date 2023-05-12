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
        <div className="carousel-main">
          <Image className="carousel-img" src="/images/carousel/main/carousel1.jpg" fill={true}/>
          <div className="carouseltxt-main">
            <h5>ETHICAL FASHION</h5>
            <p>Discover a world of sustainable fashion and luxury with Gaia - where style meets responsibility</p>
          </div>
        </div>
      </SwiperSlide>
        
      <SwiperSlide>
        <Image src="/images/carousel/main/homepagecarousel2@1x.jpg" width={500} height={500}/>
        <div className="carouseltxt-main">
          <h5>ETHICAL FASHION</h5>
          <p>Discover a world of sustainable fashion and luxury with Gaia - where style meets responsibility</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/carousel/main/homepagecarousel3@1x.jpg" width={500} height={500}/>
        <div className="carouseltxt-main">
          <h5>ETHICAL FASHION</h5>
          <p>Discover a world of sustainable fashion and luxury with Gaia - where style meets responsibility</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/carousel/main/carousel4.PNG" width={500} height={500}/>
        <div className="carouseltxt-main">
          <h5>ETHICAL FASHION</h5>
          <p>Discover a world of sustainable fashion and luxury with Gaia - where style meets responsibility</p>
        </div>
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
        <Image src="/images/carousel/categories/men@1x.png" width={100} height={100}/>
        <p>MEN</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/carousel/categories/women@1x.png" width={100} height={100}/>
        <p>WOMEN</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/carousel/categories/kids@1x.png" width={100} height={100}/>
        <p>KIDS</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/carousel/categories/sale@1x.png" width={100} height={100}/>
        <p>SALE</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/carousel/categories/tops@1x.png" width={100} height={100}/>
        <p>TOPS</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/carousel/categories/bottoms@1x.png" width={100} height={100}/>
        <p>BOTTOMS</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/carousel/categories/dresses@1x.png" width={100} height={100}/>
        <p>DRESSES</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/carousel/categories/coats@1x.png" width={100} height={100}/>
        <p>COATS</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/carousel/categories/shoes@1x.png" width={100} height={100}/>
        <p>SHOES</p>
      </SwiperSlide>
  </Swiper>
  )
}