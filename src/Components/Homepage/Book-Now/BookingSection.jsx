import React from 'react';
import { Grid, Typography, TextField, Button, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
    },
};

const BookingSection = () => {
    return (
        <Container>

            <Box
                sx={{
                    position: 'relative',
                    py: 8,
                    px: { xs: 2, md: 4 },
                    zIndex: 10,
                    // backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}
            >



                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <Grid container spacing={4} >
                        {/* Left Text Section */}
                        <Grid size={{ xs: 12, md: 7 }} >
                            <Box sx={{ px: { xs: 2, md: 4 }, }}>
                                <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'Montserrat', fontWeight: 500, color: "black" }}>
                                    Book Your Celebrities
                                </Typography>
                                <Typography paragraph sx={{ fontFamily: 'Lato', color: "black" }}>
                                    Some events are hosted just for the sake of hosting, some to show-off, some for the happiness of family, friends and self and some for setting a new mark. Let those events be more memorable and cherishable for ever.
                                </Typography>
                                <Typography paragraph sx={{ fontFamily: 'Lato', color: "black" }}>
                                    Celebrities, unlike any others are the one whose name and fame is always remembered and can be recalled throughout lifetime through multiple medias. Let the moment of real celebration begin. Let the paparazzi peep into your doors to see the gala time your event is enriched with the celebrities.
                                </Typography>
                                <Typography paragraph sx={{ fontFamily: 'Lato', color: "black" }}>
                                    Come on board, tap in the information and book the best celebrity for all your events.
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Right Form Section */}
                        <Grid size={{ xs: 12, md: 5 }} >
                            <Box
                                component="form"
                                noValidate
                                autoComplete="off"
                                sx={{ px: { xs: 2, md: 4 } }}
                            >
                                <Typography variant="h4" component="h3" gutterBottom>
                                    Book Now
                                </Typography>

                                <TextField
                                    fullWidth
                                    label="Name"
                                    name="name"
                                    margin="normal"
                                    variant="outlined"
                                />
                                <TextField
                                    fullWidth
                                    label="Mobile Number"
                                    name="mobile"
                                    margin="normal"
                                    variant="outlined"
                                    required
                                    type="tel"
                                />
                                <TextField
                                    fullWidth
                                    label="E-mail"
                                    name="email"
                                    margin="normal"
                                    variant="outlined"
                                    type="email"
                                />
                                <TextField
                                    fullWidth
                                    label="Comments"
                                    name="message"
                                    margin="normal"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    className="submit-btn"
                                    sx={{
                                        mt: 2,
                                        background: "#e30f5f",
                                        ":hover": { backgroundColor: "#888", border: "1px solid #888" },
                                        fontFamily: "Lato",
                                        fontWeight: 600
                                    }}
                                >
                                    Book Now
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </motion.div>
            </Box>
        </Container>
    );
};

export default BookingSection;
