import { Box, Button } from '@mui/material'
import React from 'react'
import ParallaxBackground from '../../Common/ParallaxBackground'
import Servicesmain from '../../Components/Homepage/ServicesSection/Servicesmain'

export default function Services() {
    return (
        <>
            <Box sx={{ position: 'relative', minHeight: '70vh', overflow: 'hidden' }}>

                <ParallaxBackground image={"/assert/team/background1.jpg"} />
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
                <Box sx={{ position: 'relative', zIndex: 2, textAlign: "center", top: 100, bottom: 100, }}>
                    <Box sx={{ fontSize: 50, color: "rgb(227, 15, 95)", fontFamily: "Montserrat", fontWeight: 600, textTransform: "uppercase" }}>

                        CELEBSBOOKING
                    </Box>
                    <Box sx={{ fontSize: 18, color: "rgba(255, 255, 255, 1)", fontFamily: "Montserrat", fontWeight: 500, textTransform: "uppercase" }}>
                        " CELEBSBOOKING A LEADING CELEBRITY <br /> MANAGEMENT & ARTIST BOOKING INTERFACE. "
                    </Box>
                    <Box>

                        <Button
                            variant="outlined"
                            href="book-now.php"
                            // fullWidth
                            sx={{
                                mt: 3,
                                border: '1px solid #e30f5f',
                                color: '#e30f5f',
                                overflow: 'hidden', p: 2,
                                borderRadius: "12px",
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


            </Box>
            <Servicesmain />
        </>
    )
}
