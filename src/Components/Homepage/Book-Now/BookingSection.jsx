
import React from 'react';
import { Grid, Typography, TextField, Button, Box, Container, Card, CardContent, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CelebrityBookingSection from './CelebrityBookingSection';
import MyButton from '../../../Common/ui/Button/Button';
import SendIcon from '@mui/icons-material/Send';
const containerVariants = {
    hidden: { opacity: 1, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
    },
};

const BookingSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Container maxWidth="lg" sx={{ pt: 4 }}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <Grid container spacing={2} >
                    {/* Left Content Section */}

                    <CelebrityBookingSection />

                    {/* Right Form Section */}
                    <Grid size={{ xs: 12, md: 5 }} >
                        <Card sx={{
                            borderRadius: 4,
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            background: 'linear-gradient(to bottom right, #ffffff, #f8f8f8)',
                            overflow: 'hidden'
                        }}>
                            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                                <Typography
                                    variant={isMobile ? "h5" : "h4"}
                                    component="h3"
                                    gutterBottom
                                    sx={{
                                        fontFamily: 'Montserrat',
                                        fontWeight: 700,
                                        color: '#222',
                                        mb: 3,
                                        position: 'relative',
                                        '&:after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: -12,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: "100px !important",
                                            height: 2,
                                            background: 'linear-gradient(90deg, #FE0000 0%, #FF9A9E 50%, #FE0000 100%)',
                                            backgroundSize: '200% 200%',
                                            borderEndStartRadius: 4,
                                            borderStartEndRadius: 4,

                                            opacity: 0,
                                            boxShadow: '0 2px 8px rgba(254, 0, 0, 0.3)',
                                        },
                                    }}
                                >
                                    Book Now
                                </Typography>

                                <Box component="form" noValidate autoComplete="off">
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        name="name"
                                        margin="normal"
                                        variant="outlined"
                                        InputProps={{
                                            sx: { borderRadius: 2 }
                                        }}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Mobile Number"
                                        name="mobile"
                                        margin="normal"
                                        variant="outlined"
                                        required
                                        type="tel"
                                        InputProps={{
                                            sx: { borderRadius: 2 }
                                        }}
                                    />
                                    <TextField
                                        fullWidth
                                        label="E-mail"
                                        name="email"
                                        margin="normal"
                                        variant="outlined"
                                        type="email"
                                        InputProps={{
                                            sx: { borderRadius: 2 }
                                        }}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Comments"
                                        name="message"
                                        margin="normal"
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                        InputProps={{
                                            sx: { borderRadius: 2 }
                                        }}
                                    />

                                     <MyButton
                                            // fullWidth={true}
                                            // variant="contained"
                                            name="Submit Booking"
                                            icons={<SendIcon sx={{ fontSize: '1.2rem' }} />}
                                        />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </motion.div>
        </Container>
    );
};

export default BookingSection;