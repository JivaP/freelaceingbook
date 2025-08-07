// import React from 'react';
// import { Grid, Card, CardMedia, CardContent, Typography, Button, Container, Box } from '@mui/material';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import BookNowButton from '../../../Common/ui/Button';

// const celebrities = [
//     { name: 'Dia Mirza', image: '/assert/CelebrityGrid/dia.jpg' },
//     { name: 'Divyanka Tripathi', image: '/assert/CelebrityGrid/divyanka.jpg' },
//     { name: 'Rashmika Mandana', image: '/assert/CelebrityGrid/ras9.jpg' },
//     { name: 'Urvashi Rautela', image: '/assert/CelebrityGrid/urvasi.jpg' },
// ];

// export default function CelebrityGrid() {
//     return (
//         <Box sx={{ bgcolor: '#ffffffff', py: 6 }}>


//             <Container>
//                 <Typography variant="h4" align="start" gutterBottom sx={{ fontFamily: 'Montserrat', fontWeight: 600, mb: 4 }}>
//                     Celebrity Grid
//                 </Typography>

//                 <Grid container spacing={4} justifyContent="center">
//                     {celebrities.map((celeb, index) => (
//                         <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
//                             <motion.div
//                                 initial={{ opacity: 0, y: 50 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                             >
//                                 <Card
//                                     sx={{
//                                         height: '100%',
//                                         display: 'flex',
//                                         flexDirection: 'column',
//                                         alignItems: 'center',
//                                         textAlign: 'center',
//                                         paddingBottom: 2,
//                                         borderRadius: 2,
//                                         boxShadow: "none",
//                                     }}
//                                 >
//                                     <CardMedia
//                                         component="img"
//                                         image={celeb.image}
//                                         alt={celeb.name}
//                                         sx={{
//                                             width: '100%',
//                                             height: 300,
//                                             objectFit: 'cover',
//                                         }}
//                                     />
//                                     <CardContent>
//                                         <Typography variant="h6" fontWeight="bold" gutterBottom>
//                                             {celeb.name}
//                                         </Typography>
//                                         <BookNowButton />
//                                     </CardContent>
//                                 </Card>
//                             </motion.div>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Container>
//         </Box>
//     );
// }
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Container, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import BookNowButton from '../../../Common/ui/Button';
import AnimatedHeading from '../../../Common/ui/Heading/Heading';

const celebrities = [
    { name: 'Dia Mirza', image: '/assert/CelebrityGrid/dia.jpg' },
    { name: 'Divyanka Tripathi', image: '/assert/CelebrityGrid/divyanka.jpg' },
    { name: 'Rashmika Mandana', image: '/assert/CelebrityGrid/ras9.jpg' },
    { name: 'Urvashi Rautela', image: '/assert/CelebrityGrid/urvasi.jpg' },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.15,
            duration: 0.5,
            ease: "easeOut"
        }
    }),
    hover: {
        y: -10,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

export default function CelebrityGrid() {
    const theme = useTheme();

    return (
        <Box sx={{

            py: 8,

        }}>
            <Container maxWidth="lg">


                <AnimatedHeading name={"Featured Celebrities"} />

                <Grid container spacing={4} justifyContent="center">
                    {celebrities.map((celeb, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <motion.div
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                whileHover="hover"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={cardVariants}
                                style={{ height: '100%' }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            boxShadow: '0 12px 28px rgba(0,0,0,0.15)',
                                            transform: 'translateY(-5px)'
                                        },
                                        background: 'white',
                                        border: '1px solid rgba(0,0,0,0.03)'
                                    }}
                                >
                                    <Box sx={{
                                        width: '100%',
                                        height: '280px',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: '60%',
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)'
                                        }
                                    }}>
                                        <CardMedia
                                            component="img"
                                            image={celeb.image}
                                            alt={celeb.name}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.5s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.05)'
                                                }
                                            }}
                                        />
                                    </Box>
                                    <CardContent sx={{
                                        width: '100%',
                                        px: 3,
                                        py: 3,
                                        position: 'relative',
                                        zIndex: 1,
                                        // mt: '-40px'
                                    }}>
                                        <Typography
                                            variant="body1"
                                            fontWeight={500}
                                            gutterBottom
                                            sx={{
                                                color: 'black',
                                                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                                                mb: 2,
                                                // fontFamily: 'Montserrat'
                                            }}
                                        >
                                            {celeb.name}
                                        </Typography>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            // mt: 2
                                            px:2
                                        }}>
                                            <BookNowButton
                                            fullWidth={false}
                                                sx={{
                                                    // px: 3,
                                                    // py: 1,
                                                    borderRadius: '50px',
                                                    fontWeight: 600,
                                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                                    '&:hover': {
                                                        transform: 'translateY(-2px)',
                                                        boxShadow: '0 6px 16px rgba(0,0,0,0.15)'
                                                    }
                                                }}
                                            />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}