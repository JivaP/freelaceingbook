
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
    {
        name: 'Rashmika Mandanna',
        image: '/assert/Celebrities/ras5.jpg',
        url: '/assert/Celebrities/ras5.jpg',
    },
    {
        name: 'Katrina Kaif',
        image: '/assert/Celebrities/Katrina.jpg',
        url: '/assert/Celebrities/Katrina.jpg',
    },
    {
        name: 'Alia Bhatt',
        image: '/assert/Celebrities/Alia.jpg',
        url: '/assert/Celebrities/alia.php',
    },
    {
        name: 'Shruti Hassan',
        image: '/assert/Celebrities/Shruti.jpg',
        url: '/assert/Celebrities/shruti.php',
    },
    {
        name: 'Ileana DCruz',
        image: '/assert/Celebrities/Ileana.jpg',
        url: '/assert/Celebrities/ileana.php',
    },
    {
        name: 'Radhika Madan',
        image: '/assert/Celebrities/Radhika.jpg',
        url: '/assert/Celebrities/radhika.php',
    },
    {
        name: 'Divyanka Tripathi',
        image: '/assert/Celebrities/Divyanka.jpg',
        url: '/assert/Celebrities/divyanka.php',
    },
    {
        name: 'Dia Mirza',
        image: '/assert/Celebrities/diyamirza.jpg',
        url: '/assert/Celebrities/dia-mirza.php',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6 },
    }),
};

const CelebrityProjects = () => {
    return (
        <Box sx={{ pt: { xs: 0, md: 4 } }}>
            <Container maxWidth="lg" >
                <AnimatedHeading name="Celebrities" />



                <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
                    {celebrities.map((celeb, index) => (
                        <Box
                            key={celeb.name}
                            component={motion.div}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            sx={{ cursor: 'pointer' }}
                        >
                            <a href={celeb.url} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                <Card
                                    sx={{
                                        overflow: 'hidden',
                                        boxShadow: 'none',
                                        borderRadius: 2,
                                        position: 'relative',
                                    }}
                                >
                                    <CardActionArea
                                        sx={{
                                            position: 'relative',
                                            '&:hover .nameOverlay': {
                                                backgroundColor: 'rgba(227, 15, 15, 0.65)', // pinkish overlay
                                                color: '#fff',
                                                display: 'flex',
                                            },
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={celeb.image}
                                            alt={celeb.name}
                                            loading="lazy"
                                            sx={{
                                                width: '100%',
                                                display: 'block',
                                                borderRadius: 2,
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
                                                display: 'none',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                transition: 'all 0.3s ease',
                                                borderRadius: 2,
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                fontWeight="bold"
                                                sx={{ textTransform: 'capitalize', textAlign: 'center'}}
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
