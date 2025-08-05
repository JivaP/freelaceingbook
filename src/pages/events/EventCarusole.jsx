// EventCarousel.tsx
import React from 'react';
import { Box, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const images = [
    '/assert/events/new_events3.jpg',
    '/assert/events/new_events84.jpg',
    // '/assert/events/new_events50.jpg',
    '/assert/events/new_events90.jpg',
    '/assert/events/new_events92.jpg',
    '/assert/events/new_events56.jpg',
];

const EventCarousel = () => {
    return (
        <Box sx={{ background: "white", p: 2 }}>

            <Box sx={{ width: '100%', mx: 'auto', overflow: 'hidden', background: "#fffff" }}>
                <Swiper
                    modules={[ Autoplay]}
                    pagination={{ clickable: true }}
                    loop
                    autoplay={{ delay: 3000 }}
                    className="event-carousel"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <motion.img
                                src={src}
                                alt={`Event ${index + 1}`}
                                className="peopleCarouselImg"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8 }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>


            </Box>
        </Box>
    );
};

export default EventCarousel;
