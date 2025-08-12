
// import React from 'react';
// import {
//     Card,
//     CardMedia,
//     CardActionArea,
//     Typography,
//     Box,
//     Container,
// } from '@mui/material';
// import { Masonry } from '@mui/lab';
// import { motion } from 'framer-motion';
// import AnimatedHeading from '../../../Common/ui/Heading/Heading';


// const celebrities = [
//     {
//         name: 'Hina Khan',
//         image: '/assert/Celebrities/HinaKhan.jpeg',
//         url: '/assert/Celebrities/HinaKhan.jpeg',
//         link: 'https://www.instagram.com/realhinakhan/',

//     },
//     {
//         name: 'Shivangi Joshi',
//         image: '/assert/Celebrities/ShivangiJoshi.jpeg',
//         url: '/assert/Celebrities/ShivangiJoshi.jpeg',
//         link: 'https://www.instagram.com/shivangijoshi18/',
//     },
//     {
//         name: 'Shruti Hassan',
//         image: '/assert/Celebrities/ShrutiHassan.jpeg',
//         url: '/assert/Celebrities/ShrutiHassan.jpeg',
//         link: 'https://www.instagram.com/shrutzhaasan/',
//     },
//     {
//         name: 'Shraddha Kapoor',
//         image: '/assert/Celebrities/ShraddhaKapoor.jpeg',
//         url: '/assert/Celebrities/ShraddhaKapoor.jpeg',
//         link: 'https://www.instagram.com/shraddhakapoor/',
//     },
//     {
//         name: 'Alia Bhatt',
//         image: '/assert/Celebrities/AliaBhatt.jpeg',
//         url: '/assert/Celebrities/AliaBhatt.jpeg',
//         link: 'https://www.instagram.com/ileana_official/',
//     },
//     {
//         name: 'Rashmika Mandanna',
//         image: '/assert/Celebrities/RashmikaMandanna.jpeg',
//         url: '/assert/Celebrities/RashmikaMandanna.jpeg',
//         link: 'https://www.instagram.com/rashmika_mandanna/',
//     },
//     {
//         name: 'Ankita Lokhande',
//         image: '/assert/Celebrities/AnkitaLokhande.jpeg',
//         url: '/assert/Celebrities/AnkitaLokhande.jpeg',
//         link: 'https://www.instagram.com/ankita_lokhande/',
//     },

// ];

// const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//         opacity: 1,
//         y: 0,
//         transition: { delay: i * 0.1, duration: 0.6 },
//     }),
// };

// const CelebrityProjects = () => {
//     return (
//         <Box sx={{ pt: { xs: 0, md: 4 } }}>
//             <Container maxWidth="lg" >
//                 <AnimatedHeading name="Celebrities" />



//                 <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
//                     {celebrities.map((celeb, index) => (
//                         <Box
//                             key={celeb.name}
//                             component={motion.div}
//                             custom={index}
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true }}
//                             variants={cardVariants}
//                             sx={{ cursor: 'pointer' }}
//                         >
//                             <a href={celeb.link} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
//                                 <Card
//                                     sx={{
//                                         overflow: 'hidden',
//                                         boxShadow: 'none',
//                                         borderRadius: 2,
//                                         position: 'relative',
//                                     }}
//                                 >
//                                     <CardActionArea
//                                         sx={{
//                                             position: 'relative',
//                                             '&:hover .nameOverlay': {
//                                                 backgroundColor: 'rgba(48, 48, 48, 0.44)', // pinkish overlay
//                                                 color: '#fff',
//                                                 display: 'flex',
//                                             },
//                                         }}
//                                     >
//                                         <CardMedia
//                                             component="img"
//                                             image={celeb.image}
//                                             alt={celeb.name}
//                                             loading="lazy"
//                                             sx={{
//                                                 width: '100%',
//                                                 display: 'block',
//                                                 borderRadius: 2,
//                                             }}
//                                         />
//                                         <Box
//                                             className="nameOverlay"
//                                             sx={{
//                                                 position: 'absolute',
//                                                 top: 0,
//                                                 left: 0,
//                                                 width: '100%',
//                                                 height: '100%',
//                                                 display: 'none',
//                                                 justifyContent: 'center',
//                                                 alignItems: 'center',
//                                                 transition: 'all 0.3s ease',
//                                                 borderRadius: 2,
//                                             }}
//                                         >
//                                             <Typography
//                                                 variant="h6"
//                                                 fontWeight="bold"
//                                                 sx={{ textTransform: 'capitalize', textAlign: 'center' }}
//                                             >
//                                                 {celeb.name}
//                                             </Typography>
//                                         </Box>
//                                     </CardActionArea>
//                                 </Card>
//                             </a>
//                         </Box>
//                     ))}
//                 </Masonry>
//             </Container>
//         </Box>
//     );
// };

// export default CelebrityProjects;
import React from 'react';
import {
    Card,
    CardMedia,
    CardActionArea,
    Typography,
    Box,
    Container,
} from '@mui/material';
import { Masonry } from '@mui/lab';
import { motion } from 'framer-motion';
import AnimatedHeading from '../../../Common/ui/Heading/Heading';

const celebrities = [
    { name: 'Ankita Lokhande', image: '/assert/Celebrities/AnkitaLokhande.jpeg', link: 'https://www.instagram.com/ankita_lokhande/' },
    { name: 'Shivangi Joshi', image: '/assert/Celebrities/ShivangiJoshi.jpeg', link: 'https://www.instagram.com/shivangijoshi18/' },
    { name: 'Shruti Hassan', image: '/assert/Celebrities/ShrutiHassan.jpeg', link: 'https://www.instagram.com/shrutzhaasan/' },
    { name: 'Shraddha Kapoor', image: '/assert/Celebrities/ShraddhaKapoor.jpeg', link: 'https://www.instagram.com/shraddhakapoor/' },
    { name: 'Rashmika Mandanna', image: '/assert/Celebrities/RashmikaMandanna.jpeg', link: 'https://www.instagram.com/rashmika_mandanna/' },
    { name: 'Hina Khan', image: '/assert/Celebrities/HinaKhan.jpeg', link: 'https://www.instagram.com/realhinakhan/' },
    { name: 'Alia Bhatt', image: '/assert/Celebrities/AliaBhatt.jpeg', link: 'https://www.instagram.com/ileana_official/' },
    { name: 'Varun Dhavan', image: '/assert/CelebrityZone/Varun-Dhavan2.jpeg', link: 'https://www.instagram.com/varundvn/' },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.5 },
    }),
};

const CelebrityProjects = () => {
    return (
        <Box sx={{ pt: { xs: 0, md: 4 } }}>
            <Container maxWidth="lg">
                <AnimatedHeading name="Celebrity Gallery" />

                <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
                    {celebrities.map((celeb, index) => (
                        <Box
                            key={celeb.name}
                            component={motion.div}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                        >
                            <a href={celeb.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <Card
                                    sx={{
                                        overflow: 'hidden',
                                        borderRadius: 2,
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': { transform: 'scale(1.02)' },
                                        ms: "auto"
                                    }}
                                >
                                    <CardActionArea
                                        sx={{
                                            position: 'relative',
                                            overflow: 'hidden',
                                            '&:hover .nameOverlay': {
                                                opacity: 1
                                            },
                                            '&:hover img': {
                                                transform: 'scale(1.05)'
                                            }
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={celeb.image}
                                            alt={celeb.name}
                                            loading="lazy"
                                            sx={{
                                                width: '100%',
                                                height: '400px',
                                                objectFit: 'fill',
                                                transition: 'transform 0.3s ease'
                                            }}
                                        />
                                        <Box
                                            className="nameOverlay"
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                bgcolor: 'rgba(0,0,0,0.5)',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                opacity: 0,
                                                transition: 'opacity 0.3s ease'
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                fontWeight="bold"
                                                sx={{ color: '#fff', textAlign: 'center' }}
                                            >
                                                {celeb.name}
                                            </Typography>
                                        </Box>
                                    </CardActionArea>
                                </Card>
                            </a>
                        </Box>
                    ))}
                </Masonry>
            </Container>
        </Box>
    );
};

export default CelebrityProjects;
