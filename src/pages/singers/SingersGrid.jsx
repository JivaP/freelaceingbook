// CelebrityGrid.tsx
import React from 'react';
import { Grid, Container, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import BookNowButton from '../../Common/ui/Button';

const celebrities = [
    { name: 'Mauli Dave', img: '/assert/Singers/singer1.jpg', link: 'alia.php' },
    { name: ' Himani Kapoor', img: '/assert/Singers/singer2.jpg', link: 'katrina.php' },
    { name: 'Kanika Kapoor', img: '/assert/Singers/singer3.jpg', link: 'ileana.php' },
    { name: 'Neha Kakkar', img: '/assert/Singers/singer4.jpg', link: 'urvasi.php' },
    { name: 'Neha Chauhan', img: '/assert/Singers/singer5.jpg', link: 'shruti.php' },
    { name: 'Yutika Verma', img: '/assert/Singers/singer6.jpg', link: 'radhika.php' },

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
                                        sx={{ objectFit: 'cover' }}
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
