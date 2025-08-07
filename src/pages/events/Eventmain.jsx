import React from 'react'
import Events from './events'
import EventCarousel from './EventCarusole'
import { Box } from '@mui/material'

export default function Eventmain() {
    return (
        <>
            <Events />
            <Box sx={{ background: "white" }}>

                <EventCarousel />
            </Box>

        </>
    )
}
