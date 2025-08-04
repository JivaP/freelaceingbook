// CelebrityCardsSection.tsx
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

const cardData = [
    {
        image: '/assert/services/Celebrity Ribbon Cutting-1.jpg',
        title: 'Ribbon Cutting',
        text: 'Celebrities at Ribbon Cutting Ceremony',
    },
    {
        image: '/assert/services/Celebrity at college-4.jpg',
        title: 'College Events',
        text: 'Celebrities hooting and cheering with students in their fest',
    },
    {
        image: '/assert/services/Celebrity Speaking@events-4.jpg',
        title: 'Guest Speeches',
        text: 'Inspiring celebrity guest speeches will encourage students and corporate companies in their special events',
    },
    {
        image: '/assert/services/Brand Endorsement-3.jpg',
        title: 'Brand Endorsement',
        text: 'Celebrities create meaning for the consumer through their interactions with products in advertising.',
    },
    {
        image: '/assert/services/Celebrity@festival events-3.jpg',
        title: 'Celebrities Hungama  @ Festival Events',
        text: 'Celebrities add excitement and glamour to your festival celebrations with their stunning presence.',
    },
    {
        image: '/assert/services/Celebrity Singer@Private Celebrations-2.jpg',
        title: 'Celebrity Singers  @ Private Parties',
        text: 'Celebrity singers perform at private parties and contribute to private albums for memorable experiences.',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2 },
    }),
};

const CelebrityCardsSection = () => {
    return (
        <Box sx={{ backgroundColor: "#ffffffff", }}>

            <Container>
                <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'start', marginBottom: 4, fontFamily: 'Montserrat', fontWeight: 500 }}>
                    Our Services
                </Typography>

                <Grid container spacing={4} padding={1}>
                    {cardData.map((card, i) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                            <motion.div
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={cardVariants}
                            >
                                <Card
                                    sx={{
                                        height: '483px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        boxShadow: 3,
                                        borderRadius: 3,
                                        overflow: 'hidden',
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        width="100%"
                                        height="351px"
                                        image={card.image}
                                        alt={`${card.title} Image`}
                                    />
                                    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
                                        <Typography variant="h6" component="h4" gutterBottom fontWeight={700} color='#e30f5f' sx={{ fontFamily: 'Montserrat', mb: 1 }}>
                                            {card.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Lato', flexGrow: 1 }}>
                                            {card.text}
                                        </Typography>
                                    </Box>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default CelebrityCardsSection;
