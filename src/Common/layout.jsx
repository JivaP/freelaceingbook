import React from 'react';

import { Outlet } from 'react-router-dom';
import CustomHeader from './Header/Header';
import { Box } from '@mui/material';
import Footer from './Footer/Footer';

export default function Layout() {
    return (
        <>
            <CustomHeader />
            <Box sx={{ pt: { xs: "82px", sm: 4 } }} >

                <Outlet />
            </Box >
            <Footer />
        </>
    );
}
