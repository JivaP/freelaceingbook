
// import React from 'react';
// import { Box } from '@mui/material';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// const ParallaxBackground = ({ image }) => {
//     const { scrollY } = useScroll();

//     // Parallax vertical movement
//     const y = useTransform(scrollY, [0, 500], [0, 150]);

//     // Opacity changes from 0 when scrollY=0 to 1 when scrollY >= 50px
//     const opacityRaw = useTransform(scrollY, [0, 50], [0, 1]);

//     // Use spring to smooth opacity transition
//     const opacity = useSpring(opacityRaw, { stiffness: 100, damping: 20 });

//     return (
//         <Box
//             sx={{
//                 position: 'fixed',
//                 top: 0,
//                 left: 0,
//                 width: '100vw',
//                 height: '100vh',
//                 overflow: 'hidden',
//                 zIndex: -100,
//                 pointerEvents: 'none',
//             }}
//         >
//             <motion.div
//                 style={{
//                     width: '120vw',
//                     height: '120vh',
//                     marginLeft: '-10vw',
//                     marginTop: '-10vh',
//                     backgroundImage: `url("${image}")`,
//                     backgroundSize: 'cover',
//                     backgroundRepeat: 'no-repeat',
//                     backgroundPosition: 'center center',
//                     y,
//                     // opacity,       // Animate opacity based on scroll
//                     willChange: 'transform, opacity',
//                     pointerEvents: 'none',
//                     userSelect: 'none',
//                     zIndex: -100,
//                 }}
//             />
//         </Box>
//     );
// };

// export default ParallaxBackground;
import React from 'react';
import { Box } from '@mui/material';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ParallaxBackground = ({ image }) => {
    const { scrollY } = useScroll();

    // Smooth vertical parallax movement
    const y = useTransform(scrollY, [0, 500], [0, 150]);

    // Fade in as you scroll down slightly
    // const opacityRaw = useTransform(scrollY, [0, 50], [0, 1]);
    const opacity = useSpring({ stiffness: 100, damping: 10 });

    return (
        <Box
            sx={{
                position: 'absolute', // Scoped to parent section
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                zIndex: -1,
                pointerEvents: 'none',
            }}
        >
            <motion.div
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url("${image}")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    y,
                    opacity,
                    willChange: 'transform, opacity',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    position: "absolute",
                    bottom: "30px",
                }}
            />
        </Box>
    );
};

export default ParallaxBackground;
