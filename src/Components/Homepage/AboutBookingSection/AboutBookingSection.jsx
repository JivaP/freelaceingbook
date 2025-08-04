import { Box, Grid, Typography, TextField, Button, List, ListItem, Container } from "@mui/material";
import { motion } from "framer-motion";
import "./about.css"

const listItems = [
    "Bollywood Celebrities - Appearance & Performance",
    "Marathi Celebrities - Appearance & Performance",
    "Brand Endorsements",
    "Product Launch",
    "Digital Shoutout",
    "Awards Show",
];

export default function AboutUsSection() {
    return (
        <Box sx={{ backgroundColor: "#ffffffff", }}>

            <Container >

                <Box className="about-us-section">
                    <Grid container spacing={4} alignItems="flex-start">
                        {/* About Us Content */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Typography variant="h4" className="about-title">
                                    About Us
                                </Typography>
                                <Typography variant="body1" className="about-description" gutterBottom sx={{ fontFamily: "Lato" }}>
                                    Celebsbooking is a Leading Celebrity Management & Artist Booking Interface.
                                </Typography>

                                <Typography variant="h5" className="services-title" sx={{ fontWeight: "600", fontFamily: "Lato", fontSize: "1rem", }}>
                                    Our Services
                                </Typography>
                                <List className="services-list">
                                    {listItems.map((item, index) => (
                                        <ListItem key={index} className="service-item" disablePadding>
                                            <Typography variant="body2" sx={{ fontFamily: "Lato" }}>▪ {item}</Typography>
                                        </ListItem>
                                    ))}
                                </List>

                                <Typography variant="body2" className="about-footer" sx={{ fontFamily: "Lato" }}>
                                    India's Leading Celebrity Booking Agency. Call 8849104707 for Booking Bollywood Celebrities.
                                </Typography>
                            </motion.div>
                        </Grid>

                        {/* Booking Form */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Typography variant="h4" className="form-heading" gutterBottom>
                                    Book Now
                                </Typography>
                                <Box component="form" className="booking-form">
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        name="name"
                                        variant="outlined"
                                        size="small"
                                        margin="normal"

                                    />
                                    <TextField
                                        fullWidth
                                        label="Mobile Number"
                                        name="mobile"
                                        type="tel"
                                        variant="outlined"
                                        size="small"
                                        margin="normal"
                                        required
                                    />
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        name="email"
                                        type="email"
                                        variant="outlined"
                                        size="small"
                                        margin="normal"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Comments"
                                        name="message"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        margin="normal"
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
                            </motion.div>
                        </Grid>
                    </Grid>
                </Box>
            </Container >
        </Box>
    );
}
