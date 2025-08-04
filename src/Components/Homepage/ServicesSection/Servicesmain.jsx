import React from 'react'
import ParallaxBackground from '../../../Common/ParallaxBackground'
import { Box } from '@mui/material'
import ServicesSection from './ServicesSection'

export default function Servicesmain() {
    return (
        <Box >

            <Box
                sx={{
                    position: 'relative', // Ensures services sit on top of overlay
                    // top: 0,
                    // left: 0,
                    // width: '100%',
                    // minHeight: '100vh',
                    // zIndex: 10,
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        zIndex: -1,
                        transform: 'translateZ(0)',
                    }}
                />
                <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>

                    <ParallaxBackground image={"/assert/team/background1.jpg"} />
                </Box>
                <ServicesSection />
            </Box>
        </Box>
    )
}
