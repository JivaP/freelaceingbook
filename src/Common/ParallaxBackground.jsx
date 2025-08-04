import React from 'react';
import { Box } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = (image) => {
    console.log("Parallax Background Image:", image);

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]); // Adjust the range for speed

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                // height: '100vh',
                overflow: 'hidden',
                zIndex: -100,
            }}
        >
            {/* Parallax Background Image */}
            <motion.div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: '120vw',
                    height: '80vh',
                    backgroundImage: `url("${image?.image}")`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    marginLeft: '-10vw',
                    marginTop: '-10vh',
                    pointerEvents: 'none',
                    zIndex: -100,
                    backgroundPosition: "50% 50%",
                    transform: "translate3d(0px, -1.24752px, 0px)",
                    visibility: "visible",

                    y, // Parallax scroll effect
                }}
            />

            {/* White Overlay */}
            
        </Box>
    );
};

export default ParallaxBackground;
