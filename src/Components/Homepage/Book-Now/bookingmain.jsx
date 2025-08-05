// import React from 'react'

// import BookingSection from './BookingSection'
// import ParallaxBackground from '../../../Common/ParallaxBackground'
// import { Box } from '@mui/material'

// export default function Bookingmain() {
//     return (
//         <>
//             <Box
//                 sx={{
//                     position: 'relative', // Ensures services sit on top of overlay
//                     // top: 0,
//                     // left: 0,
//                     // width: '100%',
//                     // minHeight: '100vh',
//                     // zIndex: 10,
//                 }}
//             >
//                 <Box
//                     sx={{
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         width: '100%',
//                         height: '100%',
//                         backgroundColor: 'rgba(255, 255, 255, 0.8)',
//                         zIndex: -1,
//                         transform: 'translateZ(0)',
//                     }}
//                 />
//                 <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>

//                     <ParallaxBackground image={"/assert/Celebrities/background33.jpg"} />
//                 </Box>
//                 <BookingSection />
//             </Box>
//         </>
//     )
// }
import React from 'react';
import BookingSection from './BookingSection';

import { Box } from '@mui/material';
import ParallaxBackground from './ParallaxBackground';

export default function Bookingmain() {
    return (
        <Box sx={{ position: 'relative', minHeight: '20vh', overflowX: 'none' }}>
            {/* <ParallaxBackground image="/assert/Celebrities/background33.jpg" />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    zIndex: 1,
                }}
            /> */}
            <Box sx={{ position: 'relative', zIndex: 2 }}>
                <BookingSection />
            </Box>
        </Box>

    );
}
