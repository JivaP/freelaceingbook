import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Container, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const celebrities = [
    { name: 'Dia Mirza', image: '/assert/CelebrityGrid/dia.jpg' },
    { name: 'Divyanka Tripathi', image: '/assert/CelebrityGrid/divyanka.jpg' },
    { name: 'Rashmika Mandana', image: '/assert/CelebrityGrid/ras9.jpg' },
    { name: 'Urvashi Rautela', image: '/assert/CelebrityGrid/urvasi.jpg' },
];

export default function CelebrityGrid() {
    return (
        <Box sx={{ bgcolor: '#ffffffff', py: 6 }}>


            <Container>
                <Typography variant="h4" align="start" gutterBottom sx={{ fontFamily: 'Montserrat', fontWeight: 600, mb: 4 }}>
                    Celebrity Grid
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {celebrities.map((celeb, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        paddingBottom: 2,
                                        borderRadius: 2,
                                        boxShadow: "none",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={celeb.image}
                                        alt={celeb.name}
                                        sx={{
                                            width: '100%',
                                            height: 300,
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                                            {celeb.name}
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            href="book-now.php"
                                            fullWidth
                                            sx={{
                                                border: '1px solid #e30f5f',
                                                color: '#e30f5f',
                                                overflow: 'hidden', p: 1,
                                                borderRadius: "12px",
                                                transition: 'all 0.4s ease-in-out',
                                                '&:hover': {
                                                    borderColor: '#888',
                                                    backgroundColor: '#888',
                                                    color: '#fff',
                                                },
                                            }}
                                        >
                                            BOOK NOW
                                        </Button>
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
