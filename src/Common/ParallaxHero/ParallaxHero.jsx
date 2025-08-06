import { Box, useMediaQuery } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';


export const ParallaxHero = ({ image, children }) => {
    const { scrollY } = useScroll();
    const isMobile = useMediaQuery('(max-width:600px)');
    const y = useTransform(scrollY, [0, 300], [0, isMobile ? 50 : 100]);

    return (
        <Box sx={{
            position: 'relative',
            height: isMobile ? '70vh' : '80vh',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* Parallax Background Image */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '120%',
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: isMobile ? 'scroll' : 'fixed',
                    y,
                    zIndex: 0,
                    willChange: 'transform'
                }}
            />

            {/* Dark Overlay */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
            }} />

            {/* Content Container */}
            <Box sx={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                px: isMobile ? 2 : 4,
                maxWidth: 1200,
                mx: 'auto'
            }}>
                {children}
            </Box>
        </Box>
    );
};
