// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';

// const heroImages = [
//     '/assert/1.jpg',
//     '/assert/2.jpg',
//     '/assert/3.jpg',
//     '/assert/4.jpg',
//     '/assert/5.jpg',
// ];

// const HeroSection = () => {
//     return (
//         <Swiper
//             modules={[Autoplay]}
//             slidesPerView={1}
//             loop={true}
//             autoplay={{
//                 delay: 4000,
//                 disableOnInteraction: false,
//             }}
//             style={{ width: '100%', height: "auto", maxHeight: 'calc(100vh - 136px)' }}
//         >
//             {heroImages.map((src, index) => (
//                 <SwiperSlide key={index}>
//                     <img
//                         src={src}
//                         alt={`hero-${index}`}
//                         style={{
//                             width: '100%',
//                             height: '100vh',
//                             objectFit: 'cover',
//                         }}
//                     />
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     );
// };

// export default HeroSection;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const heroImages = [
    // "/assert/CIV Banner for print (2)_page-0001 (1).jpg",
    '/assert/1.jpeg',
    '/assert/2.jpeg',
    '/assert/3.jpeg',
    '/assert/4.jpeg',
    '/assert/5.jpeg',
    '/assert/6.jpeg',
    '/assert/7.jpeg',
    '/assert/8.jpeg',
    '/assert/9.jpeg',
    '/assert/10.jpeg',
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
            style={{
                width: '100%',
                // height: '100%',
                maxHeight: '100vh',
            }}
        >
            {heroImages.map((src, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={src}
                        alt={`hero-${index}`}
                        style={{
                            width: '100%',
                            // height: '100dvh', // safer height for mobile
                            objectFit: 'fill',
                        }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroSection;
