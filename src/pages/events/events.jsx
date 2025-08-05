import { Box } from '@mui/material'
import React from 'react'
import ParallaxBackground from '../../Common/ParallaxBackground'
import EventCarousel from './EventCarusole'

export default function Events() {
    return (
        <>
            <Box sx={{ position: 'relative', minHeight: '50vh', overflow: 'hidden' }}>
                <ParallaxBackground image={"/assert/events/new_events50.jpg"} />
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
                <Box sx={{ position: 'relative', zIndex: 2, textAlign: "center", top: 100, bottom: 100, fontSize: 50, color: "rgb(227, 15, 95)", fontFamily: "Montserrat", fontWeight: 700 }}>
                    Event Gallery
                </Box>
            </Box>

        </>
    )
}
