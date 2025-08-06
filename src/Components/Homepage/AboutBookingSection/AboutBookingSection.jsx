import { Box, Grid, Typography, TextField, Button, List, ListItem, Container, useTheme, useMediaQuery, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import "./about.css"

// const listItems = [
//     "Bollywood Celebrities - Appearance & Performance",
//     "Marathi Celebrities - Appearance & Performance",
//     "Brand Endorsements",
//     "Product Launch",
//     "Digital Shoutout",
//     "Awards Show",
// ];




const listItems = [
    "Celebrity appearances & performances",
    "Brand endorsements & promotions",
    "Corporate event hosting",
    "Social media collaborations",
    "Film & TV show casting",
    "Private party bookings"
];
export default function AboutUsSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ backgroundColor: "#ffffffff", }}>

            <Container >

                <Box className="about-us-section">
                    <Grid container spacing={4} alignItems="flex-start">
                        {/* About Us Content */}






                        <Grid size={{ xs: 12, md: 7 }} >
                            <Box sx={{
                                p: { xs: 3, md: 4 },
                                // background: 'linear-gradient(145deg, #ffffff, #f8f8f8)',
                                borderRadius: 4,
                                // boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                height: '100%'
                            }}>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    <Typography
                                        variant={isMobile ? "h5" : "h4"}
                                        sx={{
                                            fontFamily: 'Montserrat',
                                            fontWeight: 700,
                                            color: '#e30f5f',
                                            mb: 2,
                                            position: 'relative',
                                            '&:after': {
                                                content: '""',
                                                position: 'absolute',
                                                bottom: -8,
                                                left: 0,
                                                width: 60,
                                                height: 4,
                                                background: 'linear-gradient(to right, #e30f5f, #ff8e53)',
                                                borderRadius: 2
                                            }
                                        }}
                                    >
                                        About Us
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontFamily: 'Lato',
                                            color: '#333',
                                            fontSize: isMobile ? '1rem' : '1.1rem',
                                            mb: 3,
                                            lineHeight: 1.7
                                        }}
                                    >
                                        Celebsbooking is a Leading Celebrity Management & Artist Booking Interface.
                                    </Typography>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 600,
                                                fontFamily: 'Montserrat',
                                                color: '#222',
                                                mb: 2,
                                                fontSize: isMobile ? '1.1rem' : '1.25rem'
                                            }}
                                        >
                                            Our Services
                                        </Typography>

                                        <List sx={{ mb: 3 }}>
                                            {listItems.map((item, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <ListItem disablePadding sx={{ mb: 1 }}>
                                                        <Box sx={{
                                                            width: 8,
                                                            height: 8,
                                                            bgcolor: '#e30f5f',
                                                            borderRadius: '50%',
                                                            mr: 2,
                                                            mt: '6px'
                                                        }} />
                                                        <Typography
                                                            variant="body2"
                                                            sx={{
                                                                fontFamily: 'Lato',
                                                                color: '#444',
                                                                fontSize: isMobile ? '0.95rem' : '1rem'
                                                            }}
                                                        >
                                                            {item}
                                                        </Typography>
                                                    </ListItem>
                                                </motion.div>
                                            ))}
                                        </List>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6, duration: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontFamily: 'Lato',
                                                color: '#555',
                                                fontSize: isMobile ? '0.9rem' : '1rem',
                                                fontStyle: 'italic',
                                                mt: 3
                                            }}
                                        >
                                            India's Leading Celebrity Booking Agency. Call 8849104707 for Booking Bollywood Celebrities.
                                        </Typography>
                                    </motion.div>
                                </motion.div>
                            </Box>
                        </Grid>

                        {/* Booking Form */}
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
                </Box>
            </Container >
        </Box>
    );
}
