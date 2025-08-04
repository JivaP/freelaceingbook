import React from 'react';

import { Outlet } from 'react-router-dom';
import CustomHeader from './Header/Header';
import Footer from './Footer/Footer';

export default function Layout() {
    return (
        <>
            <CustomHeader />
            <Outlet />
            <Footer />
        </>
    );
}
