import React from 'react'
import ParallaxBackground from '../../Common/ParallaxBackground'
import { Box } from '@mui/material'
import TeamMembers from '../../Components/Homepage/TeamMembers/TeamMembers'
import Bookingmain from '../../Components/Homepage/Book-Now/bookingmain'

export default function Aboutus() {
    return (
        <>
            <Box sx={{ position: 'relative', minHeight: '50vh', overflow: 'hidden' }}>

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
                <Box sx={{ position: 'relative', zIndex: 2, textAlign: "center", top: 100, bottom: 100, fontSize: 50, color: "rgb(227, 15, 95)", fontFamily: "Montserrat", fontWeight: 700, textTransform: "uppercase" }}>
                    Abouts
                </Box>


            </Box>
             <Bookingmain />
            <TeamMembers />
        </>
    )
}
