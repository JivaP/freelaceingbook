// // import {
// //     Box,
// //     Typography,
// //     Grid,
// //     useTheme,

// // } from '@mui/material';
// // import {
// //     Star,
// //     Smartphone,
// //     Campaign,
// //     RecordVoiceOver,
// // } from '@mui/icons-material';
// // import { motion } from 'framer-motion';

// // const fadeIn = {
// //     hidden: { opacity: 0, y: 30 },
// //     visible: (i) => ({
// //         opacity: 1,
// //         y: 0,
// //         transition: {
// //             delay: i * 0.15,
// //             duration: 0.6,
// //             ease: 'easeOut',
// //         },
// //     }),
// // };

// // const services = [
// //     {
// //         title: 'Celebrity Management',
// //         icon: Star,
// //         points: [
// //             'Bollywood Celebrities – Appearances, Performances, Endorsements',
// //             'Marathi, Gujarati, Tamil & Punjabi Celebs – Live Shows & Guest Appearances',
// //             'Celebrity Presence at Weddings & Private Events',
// //             'Red Carpet & Award Show Appearances',
// //         ],
// //     },
// //     {
// //         title: 'Influencer Marketing',
// //         icon: Smartphone,
// //         points: [
// //             'Instagram, YouTube, Moj & Josh Influencers',
// //             'Fashion, Lifestyle, Travel, Beauty, Food Creators',
// //             'Organic + Paid Influencer Campaigns',
// //         ],
// //     },
// //     {
// //         title: 'Public Relations (PR)',
// //         icon: Campaign,
// //         points: [
// //             'Celebrity PR & Image Management',
// //             'Media Coverage for Events, Films, and Campaigns',
// //             'Press Releases, Talk Shows & Interviews',
// //         ],
// //     },
// //     {
// //         title: 'Brand Collaborations',
// //         icon: RecordVoiceOver,
// //         points: [
// //             'Celebrity Brand Endorsements',
// //             'Product Launches with Celeb Appearances',
// //             'Digital Shoutouts & Reels Promotions',
// //         ],
// //     },
// // ];

// // const taglines = [
// //     '“Bollywood to Brands – We Make the Connection.”',
// //     '“Celebrities. Influencers. Impact. – That’s Celeb India Vision.”',
// //     '“Where Stars Align With Your Brand.”',
// // ];

// // export default function OurServices() {
// //     const theme = useTheme();

// //     return (
// //         <Box
// //             sx={{
// //                 py: 4,
// //                 px: { xs: 2, md: 8 },
// //                 backgroundColor: theme.palette.background.default,
// //             }}
// //         >
// //             <motion.div
// //                 variants={fadeIn}
// //                 initial="hidden"
// //                 whileInView="visible"
// //                 viewport={{ once: true }}
// //             >
// //                 <Typography
// //                     variant="h4"
// //                     sx={{
// //                         fontFamily: 'Montserrat',
// //                         fontWeight: 600,
// //                         color: theme.palette.dark,
// //                         mb: 4,
// //                         textAlign: 'start',
// //                     }}
// //                 >
// //                     Our Services
// //                 </Typography>
// //             </motion.div>

// //             <Grid container spacing={6}>
// //                 {services.map((service, index) => {
// //                     const IconComponent = service.icon;
// //                     return (
// //                         <Grid size={{ xs: 12, md: 6 }} key={index}>
// //                             <motion.div
// //                                 custom={index + 1}
// //                                 variants={fadeIn}
// //                                 initial="hidden"
// //                                 whileInView="visible"
// //                                 viewport={{ once: true }}
// //                             >
// //                                 <Box sx={{ mb: 3 }}>
// //                                     <Box
// //                                         sx={{
// //                                             display: 'flex',
// //                                             alignItems: 'center',
// //                                             gap: 1,
// //                                             mb: 1,
// //                                         }}
// //                                     >
// //                                         <IconComponent
// //                                             sx={{
// //                                                 color: theme.palette.primary.main,
// //                                                 fontSize: 28,
// //                                             }}
// //                                         />
// //                                         <Typography
// //                                             variant="h6"
// //                                             sx={{
// //                                                 fontWeight: 600,
// //                                                 fontFamily: 'Montserrat',
// //                                                 color: theme.palette.primary.main,
// //                                             }}
// //                                         >
// //                                             {service.title}
// //                                         </Typography>
// //                                     </Box>
// //                                     <Box
// //                                         component="ul"
// //                                         sx={{
// //                                             pl: 3,
// //                                             fontFamily: 'Lato',
// //                                             color: theme.palette.text.secondary,
// //                                             lineHeight: 1.8,
// //                                         }}
// //                                     >
// //                                         {service.points.map((point, i) => (
// //                                             <li key={i}>{point}</li>
// //                                         ))}
// //                                     </Box>
// //                                 </Box>
// //                             </motion.div>
// //                         </Grid>
// //                     );
// //                 })}
// //             </Grid>

// //             <motion.div
// //                 custom={services.length + 1}
// //                 variants={fadeIn}
// //                 initial="hidden"
// //                 whileInView="visible"
// //                 viewport={{ once: true }}
// //             >
// //                 <Box
// //                     sx={{
// //                         mt: 8,
// //                         borderTop: '1px solid #e0e0e0',
// //                         pt: 4,
// //                     }}
// //                 >
// //                     <Typography
// //                         variant="h5"
// //                         sx={{
// //                             fontFamily: 'Montserrat',
// //                             fontWeight: 500,
// //                             mb: 2,
// //                             color: theme.palette.text.primary,
// //                             textAlign: 'start',
// //                         }}
// //                     >
// //                         🌟 Suggested Taglines for Website / Social Media
// //                     </Typography>

// //                     <Box
// //                         component="ul"
// //                         sx={{
// //                             pl: 3,
// //                             maxWidth: 700,
// //                             ms: 'auto',
// //                             fontFamily: 'Lato',
// //                             color: theme.palette.text.secondary,
// //                             lineHeight: 1.8,
// //                         }}
// //                     >
// //                         {taglines.map((line, i) => (
// //                             <li key={i}>{line}</li>
// //                         ))}
// //                     </Box>
// //                 </Box>
// //             </motion.div>
// //         </Box>
// //     );
// // }
// import {
//     Box,
//     Typography,
//     Grid,
//     useTheme,
//     Container,
//     useMediaQuery
// } from '@mui/material';
// import {
//     Star,
//     Smartphone,
//     Campaign,
//     RecordVoiceOver,
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';

// // Enhanced animations
// const fadeIn = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//             delay: i * 0.2,
//             duration: 0.8,
//             ease: [0.17, 0.67, 0.83, 0.67],
//         },
//     }),
// };

// const cardHover = {
//     hover: {
//         y: -10,
//         boxShadow: "0 15px 30px -5px rgba(0,0,0,0.1)",
//         transition: {
//             duration: 0.3,
//             ease: "easeOut"
//         }
//     }
// };

// const iconFloat = {
//     hover: {
//         y: [0, -5, 0],
//         transition: {
//             duration: 2,
//             repeat: Infinity,
//             ease: "easeInOut"
//         }
//     }
// };

// const services = [
//     {
//         title: 'Celebrity Management',
//         icon: Star,
//         points: [
//             'Bollywood Celebrities – Appearances, Performances, Endorsements',
//             'Marathi, Gujarati, Tamil & Punjabi Celebs – Live Shows & Guest Appearances',
//             'Celebrity Presence at Weddings & Private Events',
//             'Red Carpet & Award Show Appearances',
//         ],
//         color: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
//     },
//     {
//         title: 'Influencer Marketing',
//         icon: Smartphone,
//         points: [
//             'Instagram, YouTube, Moj & Josh Influencers',
//             'Fashion, Lifestyle, Travel, Beauty, Food Creators',
//             'Organic + Paid Influencer Campaigns',
//         ],
//         color: 'linear-gradient(135deg, #4FC3F7 0%, #0288D1 100%)'
//     },
//     {
//         title: 'Public Relations (PR)',
//         icon: Campaign,
//         points: [
//             'Celebrity PR & Image Management',
//             'Media Coverage for Events, Films, and Campaigns',
//             'Press Releases, Talk Shows & Interviews',
//         ],
//         color: 'linear-gradient(135deg, #FF6B6B 0%, #C62828 100%)'
//     },
//     {
//         title: 'Brand Collaborations',
//         icon: RecordVoiceOver,
//         points: [
//             'Celebrity Brand Endorsements',
//             'Product Launches with Celeb Appearances',
//             'Digital Shoutouts & Reels Promotions',
//         ],
//         color: 'linear-gradient(135deg, #66BB6A 0%, #2E7D32 100%)'
//     },
// ];

// const taglines = [
//     '“Bollywood to Brands – We Make the Connection.”',
//     '“Celebrities. Influencers. Impact. – That\'s Celeb India Vision.”',
//     '“Where Stars Align With Your Brand.”',
// ];

// export default function OurServices() {
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//     return (
//         <Box
//             sx={{
//                 py: 8,
//                 px: { xs: 2, sm: 4, md: 8 },
//                 backgroundColor: theme.palette.background.default,
//                 position: 'relative',
//                 overflow: 'hidden',
//                 '&:before': {
//                     content: '""',
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     height: '100%',
//                     background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
//                     zIndex: 0
//                 }
//             }}
//         >
//             <Container maxWidth="xl">
//                 <motion.div
//                     variants={fadeIn}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, margin: isMobile ? "-100px" : "-200px" }}
//                     custom={0}
//                 >
//                     <Typography
//                         variant="h3"
//                         sx={{
//                             fontFamily: 'Montserrat',
//                             fontWeight: 700,
//                             color: theme.palette.text.primary,
//                             mb: 2,
//                             textAlign: 'center',
//                             position: 'relative',
//                             '&:after': {
//                                 content: '""',
//                                 display: 'block',
//                                 width: '80px',
//                                 height: '4px',
//                                 background: theme.palette.primary.main,
//                                 margin: '16px auto 0',
//                                 borderRadius: '2px'
//                             }
//                         }}
//                     >
//                         Our Services
//                     </Typography>
//                     <Typography
//                         variant="subtitle1"
//                         sx={{
//                             fontFamily: 'Lato',
//                             fontWeight: 400,
//                             color: theme.palette.text.secondary,
//                             mb: 6,
//                             textAlign: 'center',
//                             maxWidth: '700px',
//                             mx: 'auto'
//                         }}
//                     >
//                         Connecting brands with the perfect celebrity and influencer partnerships to create impactful campaigns
//                     </Typography>
//                 </motion.div>

//                 <Grid container spacing={4} justifyContent="center">
//                     {services.map((service, index) => {
//                         const IconComponent = service.icon;
//                         return (
//                             <Grid size={{ xs: 12, sm: 6, lg: 6 }} key={index}>
//                                 <motion.div
//                                     custom={index + 1}
//                                     variants={fadeIn}
//                                     initial="hidden"
//                                     whileInView="visible"
//                                     viewport={{ once: true, margin: isMobile ? "-100px" : "-200px" }}
//                                     whileHover="hover"
//                                 // variants={cardHover}
//                                 >
//                                     <Box
//                                         sx={{
//                                             height: '100%',
//                                             p: 3,
//                                             borderRadius: '16px',
//                                             backgroundColor: theme.palette.background.paper,
//                                             boxShadow: theme.shadows[4],
//                                             transition: 'all 0.3s ease',
//                                             borderBottom: `4px solid ${theme.palette.primary.main}`,
//                                             '&:hover': {
//                                                 transform: 'translateY(-5px)'
//                                             }
//                                         }}
//                                     >
//                                         <Box
//                                             sx={{
//                                                 display: 'flex',
//                                                 flexDirection: 'column',
//                                                 alignItems: 'center',
//                                                 mb: 3
//                                             }}
//                                         >
//                                             <motion.div variants={iconFloat} whileHover="hover">
//                                                 <Box
//                                                     sx={{
//                                                         width: '80px',
//                                                         height: '80px',
//                                                         borderRadius: '50%',
//                                                         display: 'flex',
//                                                         alignItems: 'center',
//                                                         justifyContent: 'center',
//                                                         background: service.color,
//                                                         mb: 2
//                                                     }}
//                                                 >
//                                                     <IconComponent
//                                                         sx={{
//                                                             color: 'white',
//                                                             fontSize: 36,
//                                                         }}
//                                                     />
//                                                 </Box>
//                                             </motion.div>
//                                             <Typography
//                                                 variant="h5"
//                                                 sx={{
//                                                     fontWeight: 700,
//                                                     fontFamily: 'Montserrat',
//                                                     color: theme.palette.text.primary,
//                                                     textAlign: 'center',
//                                                     mb: 2
//                                                 }}
//                                             >
//                                                 {service.title}
//                                             </Typography>
//                                         </Box>
//                                         <Box
//                                             component="ul"
//                                             sx={{
//                                                 pl: 2,
//                                                 fontFamily: 'Lato',
//                                                 color: theme.palette.text.secondary,
//                                                 lineHeight: 1.8,
//                                                 listStyle: "none",
//                                                 '& li': {
//                                                     position: 'relative',
//                                                     pl: '24px',
//                                                     mb: '8px',
//                                                     '&:before': {
//                                                         content: '""',
//                                                         position: 'absolute',
//                                                         left: 0,
//                                                         top: '12px',
//                                                         width: '8px',
//                                                         height: '8px',
//                                                         borderRadius: '50%',
//                                                         background: theme.palette.primary.main
//                                                     }
//                                                 }
//                                             }}
//                                         >
//                                             {service.points.map((point, i) => (
//                                                 <motion.li
//                                                     key={i}
//                                                     initial={{ opacity: 0, x: -20 }}
//                                                     whileInView={{ opacity: 1, x: 0 }}
//                                                     transition={{ delay: 0.1 * i + (index * 0.3) }}
//                                                     viewport={{ once: true }}
//                                                 >
//                                                     {point}
//                                                 </motion.li>
//                                             ))}
//                                         </Box>
//                                     </Box>
//                                 </motion.div>
//                             </Grid>
//                         );
//                     })}
//                 </Grid>

//                 <motion.div
//                     custom={services.length + 1}
//                     variants={fadeIn}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, margin: isMobile ? "-100px" : "-200px" }}
//                 >
//                     <Box
//                         sx={{
//                             mt: 10,
//                             pt: 6,
//                             position: 'relative',
//                             '&:before': {
//                                 content: '""',
//                                 position: 'absolute',
//                                 top: 0,
//                                 left: '50%',
//                                 transform: 'translateX(-50%)',
//                                 width: '150px',
//                                 height: '4px',
//                                 background: theme.palette.primary.main,
//                                 borderRadius: '2px'
//                             }
//                         }}
//                     >
//                         <Typography
//                             variant="h4"
//                             sx={{
//                                 fontFamily: 'Montserrat',
//                                 fontWeight: 600,
//                                 mb: 4,
//                                 color: theme.palette.text.primary,
//                                 textAlign: 'center',
//                             }}
//                         >
//                             Creative Taglines
//                         </Typography>

//                         <Grid container spacing={3} justifyContent="center">
//                             {taglines.map((line, i) => (
//                                 <Grid size={{ xs: 12, md: 4 }} key={i}>
//                                     <motion.div
//                                         whileHover={{ scale: 1.03 }}
//                                         whileTap={{ scale: 0.98 }}
//                                     >
//                                         <Box
//                                             sx={{
//                                                 p: 3,
//                                                 borderRadius: '12px',
//                                                 backgroundColor: theme.palette.background.paper,
//                                                 boxShadow: theme.shadows[2],
//                                                 textAlign: 'center',
//                                                 borderLeft: `4px solid ${theme.palette.primary.main}`,
//                                                 height: '100%',
//                                                 display: 'flex',
//                                                 alignItems: 'center',
//                                                 justifyContent: 'center'
//                                             }}
//                                         >
//                                             <Typography
//                                                 variant="h6"
//                                                 sx={{
//                                                     fontFamily: 'Lato',
//                                                     fontWeight: 500,
//                                                     fontStyle: 'italic',
//                                                     color: theme.palette.text.primary,
//                                                     lineHeight: 1.6
//                                                 }}
//                                             >
//                                                 {line}
//                                             </Typography>
//                                         </Box>
//                                     </motion.div>
//                                 </Grid>
//                             ))}
//                         </Grid>
//                     </Box>
//                 </motion.div>
//             </Container>
//         </Box>
//     );
// }

import {
    Box,
    Typography,
    Grid,
    useTheme,
    Container,
    useMediaQuery
} from '@mui/material';
import {
    Star,
    Smartphone,
    Campaign,
    RecordVoiceOver,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Enhanced animations
const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.8,
            ease: [0.17, 0.67, 0.83, 0.67],
        },
    }),
};

const cardHover = {
    hover: {
        y: -10,
        boxShadow: "0 15px 30px -5px rgba(0,0,0,0.1)",
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

const iconFloat = {
    hover: {
        y: [0, -5, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const services = [
    {
        title: 'Celebrity Management',
        icon: Star,
        points: [
            'Bollywood Celebrities – Appearances, Performances, Endorsements',
            'Marathi, Gujarati, Tamil & Punjabi Celebs – Live Shows & Guest Appearances',
            'Celebrity Presence at Weddings & Private Events',
            'Red Carpet & Award Show Appearances',
        ],
        color: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
    },
    {
        title: 'Influencer Marketing',
        icon: Smartphone,
        points: [
            'Instagram, YouTube, Moj & Josh Influencers',
            'Fashion, Lifestyle, Travel, Beauty, Food Creators',
            'Organic + Paid Influencer Campaigns',
        ],
        color: 'linear-gradient(135deg, #4FC3F7 0%, #0288D1 100%)'
    },
    {
        title: 'Public Relations (PR)',
        icon: Campaign,
        points: [
            'Celebrity PR & Image Management',
            'Media Coverage for Events, Films, and Campaigns',
            'Press Releases, Talk Shows & Interviews',
        ],
        color: 'linear-gradient(135deg, #FF6B6B 0%, #C62828 100%)'
    },
    {
        title: 'Brand Collaborations',
        icon: RecordVoiceOver,
        points: [
            'Celebrity Brand Endorsements',
            'Product Launches with Celeb Appearances',
            'Digital Shoutouts & Reels Promotions',
        ],
        color: 'linear-gradient(135deg, #66BB6A 0%, #2E7D32 100%)'
    },
];

const taglines = [
    '“Bollywood to Brands – We Make the Connection.”',
    '“Celebrities. Influencers. Impact. – That\'s Celeb India Vision.”',
    '“Where Stars Align With Your Brand.”',
];

export default function OurServices() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                py: 8,
                px: { xs: 2, sm: 4, md: 8 },
                backgroundColor: theme.palette.background.default,
                position: 'relative',
                overflow: 'hidden',
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
                    zIndex: 0
                }
            }}
        >
            <Container maxWidth="xl">
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: isMobile ? "-100px" : "-200px" }}
                    custom={0}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            mb: 2,
                            textAlign: 'center',
                            position: 'relative',
                            '&:after': {
                                content: '""',
                                display: 'block',
                                width: '80px',
                                height: '4px',
                                background: theme.palette.primary.main,
                                margin: '16px auto 0',
                                borderRadius: '2px'
                            }
                        }}
                    >
                        Our Services
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontFamily: 'Lato',
                            fontWeight: 400,
                            color: theme.palette.text.secondary,
                            mb: 6,
                            textAlign: 'center',
                            maxWidth: '700px',
                            mx: 'auto'
                        }}
                    >
                        Connecting brands with the perfect celebrity and influencer partnerships to create impactful campaigns
                    </Typography>
                </motion.div>

                <Grid container spacing={isMobile ? 10 : 4} justifyContent="center" alignItems="stretch">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index} sx={{ display: 'flex' }}>
                                <motion.div
                                    custom={index + 1}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: isMobile ? "-100px" : "-200px" }}
                                    whileHover="hover"
                                    // variants={cardHover}
                                    style={{ width: '100%', display: 'flex' }}
                                >
                                    <Box
                                        sx={{
                                            width: '100%',
                                            p: 3,
                                            borderRadius: '16px',
                                            backgroundColor: theme.palette.background.paper,
                                            boxShadow: theme.shadows[4],
                                            transition: 'all 0.3s ease',
                                            borderBottom: `4px solid ${theme.palette.primary.main}`,
                                            '&:hover': {
                                                transform: 'translateY(-5px)'
                                            },
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: '100%'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                mb: 3
                                            }}
                                        >
                                            <motion.div variants={iconFloat} whileHover="hover">
                                                <Box
                                                    sx={{
                                                        width: '80px',
                                                        height: '80px',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        background: service.color,
                                                        mb: 2
                                                    }}
                                                >
                                                    <IconComponent
                                                        sx={{
                                                            color: 'white',
                                                            fontSize: 36,
                                                        }}
                                                    />
                                                </Box>
                                            </motion.div>
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    fontWeight: 700,
                                                    fontFamily: 'Montserrat',
                                                    color: theme.palette.text.primary,
                                                    textAlign: 'center',
                                                    mb: 2
                                                }}
                                            >
                                                {service.title}
                                            </Typography>
                                        </Box>
                                        <Box
                                            component="ul"
                                            sx={{
                                                pl: 2,
                                                fontFamily: 'Lato',
                                                color: theme.palette.text.secondary,
                                                lineHeight: 1.8,
                                                flexGrow: 1,
                                                listStyle: "none",
                                                '& li': {
                                                    position: 'relative',
                                                    pl: '24px',
                                                    mb: '8px',
                                                    '&:before': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        left: 0,
                                                        top: '12px',
                                                        width: '8px',
                                                        height: '8px',
                                                        borderRadius: '50%',
                                                        background: theme.palette.primary.main
                                                    }
                                                }
                                            }}
                                        >
                                            {service.points.map((point, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 * i + (index * 0.3) }}
                                                    viewport={{ once: true }}
                                                >
                                                    {point}
                                                </motion.li>
                                            ))}
                                        </Box>
                                    </Box>
                                </motion.div>
                            </Grid>
                        );
                    })}
                </Grid>

                <motion.div
                    custom={services.length + 1}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: isMobile ? "-100px" : "-200px" }}
                >
                    <Box
                        sx={{
                            mt: 10,
                            pt: 6,
                            position: 'relative',
                            '&:before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '150px',
                                height: '4px',
                                background: theme.palette.primary.main,
                                borderRadius: '2px'
                            }
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontFamily: 'Montserrat',
                                fontWeight: 600,
                                mb: 4,
                                color: theme.palette.text.primary,
                                textAlign: 'center',
                            }}
                        >
                            Creative Taglines
                        </Typography>

                        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
                            {taglines.map((line, i) => (
                                <Grid size={{ xs: 12, sm: 4, }} key={i} sx={{ display: 'flex' }}>
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                        style={{ width: '100%', display: 'flex' }}
                                    >
                                        <Box
                                            sx={{
                                                p: 3,
                                                borderRadius: '12px',
                                                backgroundColor: theme.palette.background.paper,
                                                boxShadow: theme.shadows[2],
                                                textAlign: 'center',
                                                borderLeft: `4px solid ${theme.palette.primary.main}`,
                                                width: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontFamily: 'Lato',
                                                    fontWeight: 500,
                                                    fontStyle: 'italic',
                                                    color: theme.palette.text.primary,
                                                    lineHeight: 1.6
                                                }}
                                            >
                                                {line}
                                            </Typography>
                                        </Box>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}