
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import ParallaxBackground from '../../Common/ParallaxBackground';
import Servicesmain from '../../Components/Homepage/ServicesSection/Servicesmain';
import ServiceItem from "../../Common/Services/OurServices"
import { ParallaxHero } from '../../Common/ParallaxHero/ParallaxHero';
import BookNowButton from '../../Common/ui/Button';

export default function Services() {
    const theme = useTheme();
    const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const getHeadingVariant = () => {
        if (isSmallMobile) return 'h3';
        if (isTablet) return 'h2';
        return 'h1';
    };
    return (
        <>

            <Box sx={{ overflowX: 'hidden' }}>
                {/* Hero Section with Parallax */}
                <ParallaxHero image="/assert/team/background1.jpg">
                    <Box sx={{
                        textAlign: 'center',
                        color: 'white',
                        py: isSmallMobile ? 4 : 8
                    }}>

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
                            <Box pt={2}>

                                <BookNowButton fullWidth={false} />
                            </Box>
                        </Box>
                    </Box>
                </ParallaxHero>
            </Box>

            {/* Services Section */}
            <ServiceItem />
            <Servicesmain />
        </>
    );
}
