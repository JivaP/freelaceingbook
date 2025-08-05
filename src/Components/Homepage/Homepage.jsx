import React from 'react'
import FiveImageSwiper from './Herosections/Slider'
import AboutBookingSection from './AboutBookingSection/AboutBookingSection'
import CelebrityCardsSection from './CelebrityCardsSection/CelebrityCardsSection'
import TeamMembers from './TeamMembers/TeamMembers'
import Servicesmain from './ServicesSection/Servicesmain'
import { Box } from '@mui/material'
import CelebrityProjects from './Celebrities/CelebrityProjects'
import Bookingmain from './Book-Now/bookingmain'
import CelebrityGrid from './CelebrityGrid/CelebrityGrid'


export default function Homepage() {
    return (
        <>
            <FiveImageSwiper />


            <AboutBookingSection />
            <CelebrityCardsSection />
            <TeamMembers />

            <Servicesmain />
            <CelebrityProjects />
            <Bookingmain />
            <CelebrityGrid />

        </>
    )
}
