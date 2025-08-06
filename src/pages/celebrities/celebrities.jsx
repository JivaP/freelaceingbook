import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import ParallaxBackground from '../../Common/ParallaxBackground';
import { ParallaxHero } from '../../Common/ParallaxHero/ParallaxHero';

export default function Celebrities() {
    const theme = useTheme();
    const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

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
                        {/* Centered Responsive Heading */}
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
                                ARTIST ROSTERS
                            </Typography>
                        </Box>
                    </Box>
                </ParallaxHero>
            </Box>
        </>
    );
}
