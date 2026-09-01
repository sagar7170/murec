"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

function Associations() {
    return (
        <div className="association">
            <h2>Association</h2>

            <Swiper
                modules={[Autoplay, FreeMode]}
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                freeMode={{
                    enabled: true,
                    momentum: false,
                }}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                speed={5000}
                breakpoints={{
                    320: {
                        slidesPerView: 1.5,
                        spaceBetween: 15,
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                className="association-swiper"
            >
                <SwiperSlide>
                    <img src="/images/o6.webp" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/images/o5.webp" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/images/tq.webp" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/images/bjaja.webp" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/images/02.webp" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Associations