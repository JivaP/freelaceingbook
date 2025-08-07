// import React from 'react';
// import { Grid, Typography, TextField, Button, Box, Container } from '@mui/material';
// import { motion } from 'framer-motion';
// import CelebrityBookingSection from './CelebrityBookingSection';

// const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.8, ease: 'easeOut' }
//     },
// };

// const BookingSection = () => {
//     return (
//         <Container>

//             <Box
//                 sx={{
//                     position: 'relative',
//                     py: 8,
//                     px: { xs: 2, md: 4 },
//                     zIndex: 10,
//                     // backgroundColor: 'rgba(255, 255, 255, 0.8)',
//                 }}
//             >



//                 <motion.div
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                     variants={containerVariants}
//                 >
//                     <Grid container spacing={4} >
//                         {/* Left Text Section */}
//                         <CelebrityBookingSection />


//                         {/* Right Form Section */}
//                         <Grid size={{ xs: 12, md: 5 }} >
//                             <Box
//                                 component="form"
//                                 noValidate
//                                 autoComplete="off"
//                                 sx={{ px: { xs: 2, md: 4 } }}
//                             >
//                                 <Typography variant="h4" component="h3" gutterBottom>
//                                     Book Now
//                                 </Typography>

//                                 <TextField
//                                     fullWidth
//                                     label="Name"
//                                     name="name"
//                                     margin="normal"
//                                     variant="outlined"
//                                 />
//                                 <TextField
//                                     fullWidth
//                                     label="Mobile Number"
//                                     name="mobile"
//                                     margin="normal"
//                                     variant="outlined"
//                                     required
//                                     type="tel"
//                                 />
//                                 <TextField
//                                     fullWidth
//                                     label="E-mail"
//                                     name="email"
//                                     margin="normal"
//                                     variant="outlined"
//                                     type="email"
//                                 />
//                                 <TextField
//                                     fullWidth
//                                     label="Comments"
//                                     name="message"
//                                     margin="normal"
//                                     variant="outlined"
//                                     multiline
//                                     rows={4}
//                                 />

//                                 <Button
//                                     type="submit"
//                                     variant="contained"
//                                     fullWidth
//                                     className="submit-btn"
//                                     sx={{
//                                         mt: 2,
//                                         background: "#e30f5f",
//                                         ":hover": { backgroundColor: "#888", border: "1px solid #888" },
//                                         fontFamily: "Lato",
//                                         fontWeight: 600
//                                     }}
//                                 >
//                                     Book Now
//                                 </Button>
//                             </Box>
//                         </Grid>
//                     </Grid>
//                 </motion.div>
//             </Box>
//         </Container>
//     );
// };

// export default BookingSection;
import React from 'react';
import { Grid, Typography, TextField, Button, Box, Container, Card, CardContent, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CelebrityBookingSection from './CelebrityBookingSection';

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
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
                                            bottom: -8,
                                            left: 0,
                                            width: 60,
                                            height: 4,
                                            background: 'linear-gradient(to right, #e30f5f, #ff4d4d)',
                                            borderRadius: 2
                                        }
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

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            mt: 3,
                                            py: 1.5,
                                            borderRadius: 2,
                                            background: 'linear-gradient(to right, #e30f5f, #ff4d4d)',
                                            '&:hover': {
                                                background: 'linear-gradient(to right, #c00d52, #e30f5f)',
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 4px 12px rgba(227, 15, 95, 0.3)'
                                            },
                                            fontFamily: 'Montserrat',
                                            fontWeight: 600,
                                            fontSize: '1rem',
                                            transition: 'all 0.3s ease',
                                            textTransform: 'uppercase'
                                        }}
                                    >
                                        Submit Booking
                                    </Button>
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