import React from 'react'
import ParallaxBackground from '../../Common/ParallaxBackground'
import { Box } from '@mui/material'

export default function Booknow() {
    return (
        <>
            <Box sx={{ position: 'relative', minHeight: '50vh', overflow: 'hidden' }}>
                <ParallaxBackground image={"/assert/book-now/deepika_bg.jpg"} />
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
                    ENQUIRY FORM
                </Box>
            </Box>
        </>
    )
}
