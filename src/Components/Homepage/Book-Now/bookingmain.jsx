
import React from 'react';
import BookingSection from './BookingSection';

import { Box } from '@mui/material';
import ParallaxBackground from './ParallaxBackground';

export default function Bookingmain() {
    return (
        <Box sx={{ position: 'relative', minHeight: '20vh', overflowX: 'none' }}>
            {/* <ParallaxBackground image="/assert/Celebrities/background33.jpg" />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    zIndex: 1,
                }}
            /> */}
            <Box sx={{ position: 'relative', zIndex: 2 }}>
                <BookingSection />
            </Box>
        </Box>

    );
}
