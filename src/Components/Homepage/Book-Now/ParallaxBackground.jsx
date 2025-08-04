import React from 'react';
import { Box } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
    // Get scroll position
    const { scrollY } = useScroll();

    // Map scrollY from [0, 500] to translateY [0, 120] px (adjust for speed)
    const y = useTransform(scrollY, [0, 500], [0, 120]);

    return (
        <Box
            id="jarallax-container-1"
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                pointerEvents: 'none',
                visibility: 'visible',
                zIndex: -100,
            }}
        >
            <motion.div
                style={{
                    backgroundImage: 'url("https://celebsbooking.com/img/backgrounds/background33.jpg")',
                    backgroundPosition: '50% 50%',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '3000px',      // slightly bigger to cover screen + parallax shift
                    height: '1700px',
                    marginLeft: '-990px', // center horizontally
                    marginTop: '-480px',  // center vertically
                    pointerEvents: 'none',
                    translateY: y,        // animate vertical translate on scroll
                    willChange: 'transform',
                    visibility: 'visible',
                }}
            />
        </Box>
    );
};

export default ParallaxBackground;
