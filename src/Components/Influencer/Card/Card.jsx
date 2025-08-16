
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Container, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import BookNowButton from '../../../Common/ui/Button';
import AnimatedHeading from '../../../Common/ui/Heading/Heading';

const celebrities = [

    { name: 'Jannat Zubair', image: '/assert/Influencer/Jannat Zubair.jpeg' },
    { name: 'Faizal Shaikh', image: '/assert/Influencer/Faizal Shaikh.jpeg' },
    { name: 'Anushka Sen', image: '/assert/Influencer/Anushka Sen.jpeg' },
    { name: 'Bhuvan Bam', image: '/assert/Influencer/Bhuvan Bam.jpeg' },
    { name: 'Kusha Kapila', image: '/assert/Influencer/Kusha Kapila.jpeg' },
    { name: 'Ajay Nagar', image: '/assert/Influencer/Ajay Nagar.jpeg' },
    { name: 'Arishfa Khan', image: '/assert/Influencer/Arishfa Khan.jpeg' },
    { name: 'Elvish Yadav', image: '/assert/Influencer/Elvish Yadav.jpeg' },
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

export default function InfluencerGrid() {
    const theme = useTheme();

    return (
        <Box sx={{

            py: 8,

        }}>
            <Container maxWidth="lg">


                <AnimatedHeading name={"Influencer Zone"} />

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
                                                objectFit: 'contain',
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
                                            px: 2
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