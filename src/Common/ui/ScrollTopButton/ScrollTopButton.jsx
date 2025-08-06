// import React, { useState, useEffect } from 'react';
// import { Box, Fab, Fade, useScrollTrigger, Zoom } from '@mui/material';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// const ScrollTopButton = () => {
//     const [visible, setVisible] = useState(false);

//     const handleScroll = () => {
//         const offset = window.pageYOffset;
//         setVisible(offset > 300); // Show button after scrolling 300px
//     };

//     const scrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <Zoom in={visible}>
//             <Box
//                 onClick={scrollToTop}
//                 role="presentation"
//                 sx={{
//                     position: 'fixed',
//                     bottom: 32,
//                     right: 32,
//                     zIndex: 1000,
//                 }}
//             >
//                 <Fab
//                     color="primary"
//                     size="medium"
//                     aria-label="scroll back to top"
//                     sx={{
//                         backgroundColor: '#e30f5f',
//                         color: 'white',
//                         '&:hover': {
//                             backgroundColor: '#c00d52',
//                         },
//                         boxShadow: '0px 4px 10px rgba(227, 15, 95, 0.3)',
//                     }}
//                 >
//                     <KeyboardArrowUpIcon />
//                 </Fab>
//             </Box>
//         </Zoom>
//     );
// };

// export default ScrollTopButton;

import React, { useState, useEffect } from 'react';
import { Box, Fab, Zoom, IconButton, Tooltip } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ScrollTopButton = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        setVisible(window.pageYOffset > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Social Media Icons at Top Right */}
            <Box sx={{
                position: 'fixed',
                top: "50%",
                right: 16,
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                gap: 1
            }}>
                <Tooltip title="Follow us on Instagram" arrow>
                    <IconButton
                        color="primary"
                        href="https://www.instagram.com/celebsbooking/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            backgroundColor: '#e30f5f',
                            color: 'white',
                            '&:hover': { backgroundColor: '#c00d52' },
                            boxShadow: '0px 2px 8px rgba(227, 15, 95, 0.3)',
                        }}
                    >
                        <InstagramIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Chat on WhatsApp" arrow>
                    <IconButton
                        color="primary"
                        href="https://api.whatsapp.com/send?phone=+918849104707&text=Welcome%20to%20Celebs%20Booking"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            backgroundColor: '#25D366',
                            color: 'white',
                            '&:hover': { backgroundColor: '#128C7E' },
                            boxShadow: '0px 2px 8px rgba(37, 211, 102, 0.3)',
                        }}
                    >
                        <WhatsAppIcon />
                    </IconButton>
                </Tooltip>
            </Box>

            {/* Scroll to Top Button at Bottom Right */}
            <Zoom in={visible}>
                <Box
                    onClick={scrollToTop}
                    role="presentation"
                    sx={{
                        position: 'fixed',
                        bottom: 32,
                        right: 32,
                        zIndex: 1000,
                    }}
                >
                    <Fab
                        color="primary"
                        size="medium"
                        aria-label="scroll back to top"
                        sx={{
                            backgroundColor: '#e30f5f',
                            color: 'white',
                            '&:hover': { backgroundColor: '#c00d52' },
                            boxShadow: '0px 4px 10px rgba(227, 15, 95, 0.3)',
                        }}
                    >
                        <KeyboardArrowUpIcon />
                    </Fab>
                </Box>
            </Zoom>
        </>
    );
};

export default ScrollTopButton;