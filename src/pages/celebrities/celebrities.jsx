import { Box, Typography } from '@mui/material';
import React from 'react';
import ParallaxBackground from '../../Common/ParallaxBackground';

export default function Celebrities() {
    return (
        <>
            <Box sx={{ position: 'relative', minHeight: '50vh', overflow: 'hidden' }}>
                {/* Parallax Background Image */}
                <ParallaxBackground image={"/assert/team/background1.jpg"} />

                {/* Overlay */}
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
        </>
    );
}
