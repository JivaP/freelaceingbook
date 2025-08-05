// import { Box, Button } from '@mui/material'
// import React from 'react'
// import ParallaxBackground from '../../Common/ParallaxBackground'
// import Servicesmain from '../../Components/Homepage/ServicesSection/Servicesmain'

// export default function Services() {
//     return (
//         <>
//             <Box sx={{ position: 'relative', minHeight: '70vh', overflow: 'hidden' }}>

//                 <ParallaxBackground image={"/assert/team/background1.jpg"} />
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
//                 <Box sx={{ position: 'relative', zIndex: 2, textAlign: "center", top: 100, bottom: 100, }}>
//                     <Box sx={{ fontSize: 50, color: "rgb(227, 15, 95)", fontFamily: "Montserrat", fontWeight: 600, textTransform: "uppercase" }}>

//                         CELEBSBOOKING
//                     </Box>
//                     <Box sx={{ fontSize: 18, color: "rgba(255, 255, 255, 1)", fontFamily: "Montserrat", fontWeight: 500, textTransform: "uppercase" }}>
//                         " CELEBSBOOKING A LEADING CELEBRITY <br /> MANAGEMENT & ARTIST BOOKING INTERFACE. "
//                     </Box>
//                     <Box>

//                         <Button
//                             variant="outlined"
//                             href="book-now.php"
//                             // fullWidth
//                             sx={{
//                                 mt: 3,
//                                 border: '1px solid #e30f5f',
//                                 color: '#e30f5f',
//                                 overflow: 'hidden', p: 2,
//                                 borderRadius: "12px",
//                                 transition: 'all 0.4s ease-in-out',
//                                 '&:hover': {
//                                     borderColor: '#888',
//                                     backgroundColor: '#888',
//                                     color: '#fff',
//                                 },
//                             }}
//                         >
//                             BOOK NOW
//                         </Button>
//                     </Box>
//                 </Box>


//             </Box>
//             <Servicesmain />
//         </>
//     )
// }
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import ParallaxBackground from '../../Common/ParallaxBackground';
import Servicesmain from '../../Components/Homepage/ServicesSection/Servicesmain';

export default function Services() {
    return (
        <>
            {/* Hero Section */}
            <Box sx={{ position: 'relative', minHeight: '70vh', overflow: 'hidden' }}>
                {/* Parallax Background */}
                <ParallaxBackground image={"/assert/team/background1.jpg"} />

                {/* Dark Overlay */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#0202017e',
                        zIndex: 1,
                    }}
                />

                {/* Hero Content */}
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
                                xs: '2rem',
                                sm: '2.8rem',
                                md: '3.5rem',
                                lg: '3rem',
                            },
                            color: 'rgb(227, 15, 95)',
                            fontFamily: 'Montserrat',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                        }}
                    >
                        Celebsbooking
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            mt: 2,
                            fontSize: {
                                xs: '0.9rem',
                                sm: '1rem',
                                md: '1.2rem',
                            },
                            color: 'rgba(255, 255, 255, 1)',
                            fontFamily: 'Montserrat',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            lineHeight: 1.5,
                        }}
                    >
                        " Celebsbooking a leading celebrity <br />
                        management & artist booking interface. "
                    </Typography>

                    <Button
                        variant="outlined"
                        href="book-now.php"
                        sx={{
                            mt: 4,
                            px: 4,
                            py: 1.5,
                            fontWeight: 600,
                            border: '1px solid #e30f5f',
                            color: '#e30f5f',
                            borderRadius: '12px',
                            transition: 'all 0.4s ease-in-out',
                            '&:hover': {
                                borderColor: '#888',
                                backgroundColor: '#888',
                                color: '#fff',
                            },
                        }}
                    >
                        BOOK NOW
                    </Button>
                </Box>
            </Box>

            {/* Services Section */}
            <Servicesmain />
        </>
    );
}
