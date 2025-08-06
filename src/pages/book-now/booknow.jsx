// import React from 'react'
// import ParallaxBackground from '../../Common/ParallaxBackground'
// import { Box } from '@mui/material'

// export default function Booknow() {
//     return (
//         <>
//             <Box sx={{ position: 'relative', minHeight: '50vh', overflow: 'hidden' }}>
//                 <ParallaxBackground image={"/assert/book-now/deepika_bg.jpg"} />
//                 <Box
//                     sx={{
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         width: '100%',
//                         height: '100%',
//                         backgroundColor: '#0202017e',
//                         zIndex: 1,
//                     }}
//                 />
//                 <Box sx={{ position: 'relative', zIndex: 2, textAlign: "center", top: 100, bottom: 100, fontSize: 50, color: "rgb(227, 15, 95)", fontFamily: "Montserrat", fontWeight: 700 }}>
//                     ENQUIRY FORM
//                 </Box>
//             </Box>
//         </>
//     )
// }
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ParallaxHero } from '../../Common/ParallaxHero/ParallaxHero';

export default function Booknow() {
    const theme = useTheme();
    const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <>

            <Box sx={{ overflowX: 'hidden' }}>
                {/* Hero Section with Parallax */}
                <ParallaxHero image="/assert/book-now/deepika_bg.jpg">
                    <Box sx={{
                        textAlign: 'center',
                        color: 'white',
                        py: isSmallMobile ? 4 : 8
                    }}>

                        {/* Centered Text */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 2,
                                width: '100%',
                                px: 2,
                                textAlign: 'center',
                            }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: {
                                        xs: '1.8rem',
                                        sm: '2.5rem',
                                        md: '3.5rem',
                                        lg: '3rem',
                                    },
                                    color: 'rgb(227, 15, 95)',
                                    fontFamily: 'Montserrat',
                                    fontWeight: 700,
                                }}
                            >
                                ENQUIRY FORM
                            </Typography>
                        </Box>
                    </Box>
                </ParallaxHero>
            </Box>
        </>
    );
}
