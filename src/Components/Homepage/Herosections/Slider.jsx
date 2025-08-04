import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const heroImages = [
    '/assert/1.jpg',
    '/assert/2.jpg',
    '/assert/3.jpg',
    '/assert/4.jpg',
    '/assert/5.jpg',
];

const HeroSection = () => {
    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            style={{ width: '100%', height: "auto", maxHeight: 'calc(100vh - 136px)' }}
        >
            {heroImages.map((src, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={src}
                        alt={`hero-${index}`}
                        style={{
                            width: '100%',
                            height: '100vh',
                            objectFit: 'cover',
                        }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroSection;
