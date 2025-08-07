

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
// import AnimatedHeading from '../ui/Heading/Heading';

// // Enhanced animations
// const fadeIn = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//             delay: i * 0.15,
//             duration: 0.8,
//             ease: [0.17, 0.67, 0.83, 0.67],
//         },
//     }),
// };

// const cardHover = {
//     rest: { y: 0, boxShadow: "0 8px 20px -5px rgba(0,0,0,0.1)" },
//     hover: {
//         y: -10,
//         boxShadow: "0 15px 30px -5px rgba(254,0,0,0.15)",
//         transition: {
//             duration: 0.3,
//             ease: "easeOut"
//         }
//     }
// };

// const iconFloat = {
//     rest: { y: 0 },
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
//     'Bollywood to Brands – We Make the Connection.',
//     'Celebrities. Influencers. Impact. – That\'s Celeb India Vision.',
//     'Where Stars Align With Your Brand.',
// ];

// export default function OurServices() {
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//     return (
//         <Box
//             sx={{
//                 py: 10,
//                 px: { xs: 2, sm: 4, md: 8 },
//                 // backgroundColor: theme.palette.background.default,
//                 position: 'relative',
//                 overflow: 'hidden',
//                 '&:before': {
//                     content: '""',
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     height: '100%',
//                     background: `radial-gradient(circle at 20% 50%, ${theme.palette.primary.light}10 0%, transparent 70%)`,
//                     zIndex: 0
//                 }
//             }}
//             id="services"
//         >
//             <Container maxWidth="xl">
//                 {/* Header Section */}
//                 <motion.div
//                     variants={fadeIn}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, margin: isMobile ? "-100px" : "-200px" }}
//                     custom={0}
//                 >

//                     <AnimatedHeading name={"Our Services"} />
//                     <Typography
//                         variant="subtitle1"
//                         sx={{
//                             fontFamily: 'Poppins',
//                             fontWeight: 400,
//                             color: "white",
//                             mb: 6,
//                             textAlign: 'center',
//                             maxWidth: '700px',
//                             mx: 'auto',
//                             fontSize: { xs: '1rem', md: '1.1rem' }
//                         }}
//                     >
//                         Connecting brands with the perfect celebrity and influencer partnerships to create impactful campaigns
//                     </Typography>
//                 </motion.div>

//                 {/* Services Grid */}
//                 <Grid container spacing={isMobile ? 4 : 6} justifyContent="center" alignItems="stretch">
//                     {services.map((service, index) => {
//                         const IconComponent = service.icon;
//                         return (
//                             <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }} key={index} sx={{ display: 'flex' }}>
//                                 <motion.div
//                                     custom={index + 1}
//                                     variants={fadeIn}
//                                     initial="hidden"
//                                     whileInView="visible"
//                                     viewport={{ once: true, margin: isMobile ? "-100px" : "-200px" }}
//                                     whileHover="hover"
//                                     // variants={cardHover}
//                                     style={{ width: '100%', display: 'flex' }}
//                                 >
//                                     <Box
//                                         sx={{
//                                             width: '100%',
//                                             p: 4,
//                                             borderRadius: '16px',
//                                             backgroundColor: theme.palette.background.paper,
//                                             boxShadow: theme.shadows[2],
//                                             transition: 'all 0.3s ease',
//                                             borderBottom: `4px solid ${theme.palette.primary.main}`,
//                                             display: 'flex',
//                                             flexDirection: 'column',
//                                             height: '100%',
//                                             position: 'relative',
//                                             overflow: 'hidden',
//                                             '&:hover': {
//                                                 boxShadow: `0 15px 30px ${theme.palette.primary.light}30`
//                                             },
//                                             '&:before': {
//                                                 content: '""',
//                                                 position: 'absolute',
//                                                 top: 0,
//                                                 left: 0,
//                                                 right: 0,
//                                                 height: '4px',
//                                                 background: service.color,
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
//                                                         mb: 3,
//                                                         boxShadow: `0 4px 20px ${service.color.split('0%')[0]}80`
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
//                                                 component="h3"
//                                                 sx={{
//                                                     fontWeight: 700,
//                                                     fontFamily: 'Poppins',
//                                                     color: theme.palette.text.primary,
//                                                     textAlign: 'center',
//                                                     mb: 2,
//                                                     fontSize: { xs: '1.25rem', md: '1.5rem' }
//                                                 }}
//                                             >
//                                                 {service.title}
//                                             </Typography>
//                                         </Box>
//                                         <Box
//                                             component="ul"
//                                             sx={{
//                                                 pl: 0,
//                                                 fontFamily: 'Poppins',
//                                                 color: theme.palette.text.secondary,
//                                                 lineHeight: 1.8,
//                                                 flexGrow: 1,
//                                                 listStyle: "none",
//                                                 '& li': {
//                                                     position: 'relative',
//                                                     pl: '28px',
//                                                     mb: '12px',
//                                                     fontSize: { xs: '0.9rem', md: '1rem' },
//                                                     '&:before': {
//                                                         content: '""',
//                                                         position: 'absolute',
//                                                         left: 0,
//                                                         top: '12px',
//                                                         width: '10px',
//                                                         height: '10px',
//                                                         borderRadius: '50%',
//                                                         background: service.color,
//                                                         boxShadow: `0 0 8px ${service.color.split('0%')[0]}80`
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

//                 {/* Taglines Section */}
//                 <motion.div
//                     custom={services.length + 1}
//                     variants={fadeIn}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, margin: isMobile ? "-100px" : "-200px" }}
//                 >
//                     <Box
//                         sx={{
//                             mt: 12,
//                             pt: 8,
//                             position: 'relative',
//                             '&:before': {
//                                 content: '""',
//                                 position: 'absolute',
//                                 top: 0,
//                                 left: '50%',
//                                 transform: 'translateX(-50%)',
//                                 width: '150px',
//                                 height: '4px',
//                                 background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//                                 borderRadius: '2px'
//                             }
//                         }}
//                     >
//                         <Typography
//                             variant="h3"
//                             component="h3"
//                             sx={{
//                                 fontFamily: 'Poppins',
//                                 fontWeight: 700,
//                                 mb: 6,
//                                 color: theme.palette.text.primary,
//                                 textAlign: 'center',
//                                 fontSize: { xs: '1.5rem', md: '2rem' }
//                             }}
//                         >
//                             Our Brand Promise
//                         </Typography>

//                         <Grid container spacing={4} justifyContent="center" alignItems="stretch">
//                             {taglines.map((line, i) => (
//                                 <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i} sx={{ display: 'flex' }}>
//                                     <motion.div
//                                         whileHover={{ scale: 1.03 }}
//                                         whileTap={{ scale: 0.98 }}
//                                         style={{ width: '100%', display: 'flex' }}
//                                     >
//                                         <Box
//                                             sx={{
//                                                 p: 4,
//                                                 borderRadius: '12px',
//                                                 backgroundColor: theme.palette.background.paper,
//                                                 boxShadow: theme.shadows[2],
//                                                 textAlign: 'center',
//                                                 borderLeft: `4px solid ${theme.palette.primary.main}`,
//                                                 width: '100%',
//                                                 display: 'flex',
//                                                 alignItems: 'center',
//                                                 justifyContent: 'center',
//                                                 minHeight: '140px',
//                                                 position: 'relative',
//                                                 overflow: 'hidden',
//                                                 '&:before': {
//                                                     content: '""',
//                                                     position: 'absolute',
//                                                     top: 0,
//                                                     left: 0,
//                                                     right: 0,
//                                                     height: '4px',
//                                                     background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//                                                 }
//                                             }}
//                                         >
//                                             <Typography
//                                                 variant="h6"
//                                                 component="blockquote"
//                                                 sx={{
//                                                     fontFamily: 'Poppins',
//                                                     fontWeight: 500,
//                                                     fontStyle: 'italic',
//                                                     color: theme.palette.text.primary,
//                                                     lineHeight: 1.6,
//                                                     fontSize: { xs: '1rem', md: '1.1rem' },
//                                                     position: 'relative',
//                                                     '&:before, &:after': {
//                                                         content: '"\\201C"',
//                                                         fontSize: '3rem',
//                                                         color: theme.palette.primary.light,
//                                                         position: 'absolute',
//                                                         opacity: 0.3
//                                                     },
//                                                     '&:before': {
//                                                         top: '-1.5rem',
//                                                         left: '-1rem'
//                                                     },
//                                                     '&:after': {
//                                                         content: '"\\201D"',
//                                                         bottom: '-2.5rem',
//                                                         right: '-1rem'
//                                                     }
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
import AnimatedHeading from '../ui/Heading/Heading';

// Enhanced animations
const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: "easeOut"
        },
    }),
};

const cardHover = {
    hover: {
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(254, 0, 0, 0.1), 0 10px 10px -5px rgba(254, 0, 0, 0.04)",
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

const iconPulse = {
    hover: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 1.5,
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
    'Bollywood to Brands – We Make the Connection.',
    'Celebrities. Influencers. Impact. – That\'s Celeb India Vision.',
    'Where Stars Align With Your Brand.',
];

export default function OurServices() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                pt: 8,
            }}
            id="services"
        >
            <Container maxWidth="lg">
                {/* Header Section */}
                <Box position="relative" zIndex={1}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        custom={0}
                    >
                        <AnimatedHeading name="Our Premium Services" />
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontFamily: 'Poppins',
                                fontWeight: 400,
                                color: theme.palette.text.secondary,
                                mb: 8,
                                textAlign: 'center',
                                maxWidth: 700,
                                mx: 'auto',
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                lineHeight: 1.7
                            }}
                        >
                            Connecting brands with the perfect celebrity and influencer partnerships to create impactful campaigns
                        </Typography>
                    </motion.div>

                    {/* Services Grid */}
                    <Grid container spacing={isMobile ? 4 : 6} justifyContent="center">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }} key={index}>
                                    <motion.div
                                        custom={index + 1}
                                        variants={fadeIn}
                                        initial="hidden"
                                        whileInView="visible"
                                        // viewport={{ once: true, margin: "-50px" }}
                                        whileHover="hover"
                                    // variants={cardHover}
                                    >
                                        <Box
                                            sx={{
                                                p: 2,
                                                borderRadius: 4,
                                                backgroundColor: theme.palette.background.paper,
                                                boxShadow: 3,
                                                height: '400px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                border: `1px solid ${theme.palette.divider}`,
                                                '&:before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    height: 4,
                                                    background: service.color,
                                                }
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    // mb: 3
                                                }}
                                            >
                                                <motion.div variants={iconPulse} whileHover="hover">
                                                    <Box
                                                        sx={{
                                                            width: 80,
                                                            height: 80,
                                                            borderRadius: '50%',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            background: service.color,
                                                            mb: 3,
                                                            boxShadow: `0 8px 24px ${service.color.split('0%')[0]}80`
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
                                                    component="h3"
                                                    sx={{
                                                        fontWeight: 700,
                                                        fontFamily: 'Poppins',
                                                        color: theme.palette.text.primary,
                                                        textAlign: 'center',
                                                        mb: 3,
                                                        position: 'relative',
                                                        '&:after': {
                                                            content: '""',
                                                            display: 'block',
                                                            width: 40,
                                                            height: 2,
                                                            background: theme.palette.divider,
                                                            mx: 'auto',
                                                            mt: 2
                                                        }
                                                    }}
                                                >
                                                    {service.title}
                                                </Typography>
                                            </Box>
                                            <Box
                                                component="ul"
                                                sx={{
                                                    pl: 0,
                                                    fontFamily: 'Poppins',
                                                    color: theme.palette.text.secondary,
                                                    lineHeight: 1.8,
                                                    flexGrow: 1,
                                                    listStyle: "none",
                                                    '& li': {
                                                        position: 'relative',
                                                        pl: '28px',
                                                        mb: '12px',
                                                        fontSize: '0.95rem',
                                                        '&:before': {
                                                            content: '""',
                                                            position: 'absolute',
                                                            left: 0,
                                                            top: '12px',
                                                            width: '10px',
                                                            height: '10px',
                                                            borderRadius: '50%',
                                                            background: service.color,
                                                            boxShadow: `0 0 8px ${service.color.split('0%')[0]}80`
                                                        }
                                                    }
                                                }}
                                            >
                                                {service.points.map((point, i) => (
                                                    <motion.li
                                                        key={i}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.1 * i }}
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

                    {/* Taglines Section */}
                    <motion.div
                        custom={5}
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <Box
                            sx={{
                                // mt: 12,
                                pt: 8,
                            }}
                        >

                            <AnimatedHeading name={"Our Brand Promise"} />



                            <Grid container spacing={4} justifyContent="center">
                                {taglines.map((line, i) => (
                                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Box
                                                sx={{
                                                    p: 2,
                                                    borderRadius: 3,
                                                    backgroundColor: theme.palette.background.paper,
                                                    boxShadow: 2,
                                                    textAlign: 'center',
                                                    height: '100%',
                                                    // border: `1px solid ${theme.palette.divider}`,
                                                    position: 'relative',
                                                    overflow: 'hidden',

                                                }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    component="blockquote"
                                                    sx={{
                                                        fontFamily: 'Poppins',
                                                        fontWeight: 400,
                                                        fontStyle: 'italic',
                                                        color: theme.palette.text.primary,
                                                        lineHeight: 1.6,

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
                </Box>
            </Container>
        </Box>
    );
}