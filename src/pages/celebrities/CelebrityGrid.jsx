// CelebrityGrid.tsx
import React from 'react';
import { Grid, Container, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import BookNowButton from '../../Common/ui/Button';

const celebrities = [
    { name: 'Alia Bhatt', img: '/assert/Celebritiespage/item3.jpg', link: 'alia.php' },
    { name: 'Katrina Kaif', img: '/assert/Celebritiespage/item4.jpg', link: 'katrina.php' },
    { name: 'Ileana DCruz', img: '/assert/Celebritiespage/item5.jpg', link: 'ileana.php' },
    { name: 'Urvashi Rautela', img: '/assert/Celebritiespage/item6.jpg', link: 'urvasi.php' },
    { name: 'Shruti Hassan', img: '/assert/Celebritiespage/item7.jpg', link: 'shruti.php' },
    { name: 'Radhika Madan', img: '/assert/Celebritiespage/item8.jpg', link: 'radhika.php' },
    { name: 'Divyanka Tripathi', img: '/assert/Celebritiespage/item9.jpg', link: 'divyanka.php' },
    { name: 'Dia Mirza', img: '/assert/Celebritiespage/item10.jpg', link: 'dia-mirza.php' },
];

const CelebrityGrid = () => {
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
                                        <Typography variant="h6" gutterBottom>
                                            {celeb.name}
                                        </Typography>
                                        <BookNowButton/>
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

export default CelebrityGrid;
