// CelebrityGrid.tsx
import React from 'react';
import { Grid, Container, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import BookNowButton from '../../Common/ui/Button';

const celebrities = [
    { name: 'Shreya Ghoshal', img: '/assert/Singers/singer8.jpeg', link: '' },
    { name: ' Darshan Raval', img: '/assert/Singers/singer9.jpeg', link: '' },
    { name: ' Neha Kakkar', img: '/assert/Singers/singer10.jpeg', link: '' },


];

const SingersGrid = () => {
    return (
        <section className="page-section page-section-projects" style={{ padding: '4rem 0', background: "white" }}>
            <Container>
                <Grid container spacing={4}>
                    {celebrities.map((celeb, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} >
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card sx={{ textAlign: 'center', boxShadow: "none" }}>
                                    <CardMedia
                                        component="img"
                                        // height="340"
                                        image={celeb.img}
                                        alt={celeb.name}
                                        sx={{ objectFit: 'contain', height: '340px', width: '100%' }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom sx={{ fontFamily: "Montserrat" }}>
                                            {celeb.name}
                                        </Typography>
                                        <BookNowButton />
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default SingersGrid;
