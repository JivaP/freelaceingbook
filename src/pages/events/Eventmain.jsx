import React from 'react'
import Events from './events'
import EventCarousel from './EventCarusole'
import { Box } from '@mui/material'

export default function Eventmain() {
    return (
        <>
            <Events />
            <Box sx={{ background: "white" }}>
                <Box sx={{ textAlign: "center", fontSize: 40, fontFamily: "Montserrat ", fontWeight: "600", padding: 4 }}>
                    CELEBSBOOKING PRESENTS <br />
                    Iconic Women of the Year Awards 2020 & 2022
                </Box>
                <EventCarousel />
            </Box>

        </>
    )
}
