import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import DiamondIcon from '@mui/icons-material/Diamond';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const services = [
    {
        icon: <DiamondIcon sx={{ color: "#E31261", fontSize: "4.28571rem" }} />,
        title: 'Celebrity Management',
        description: 'Instantly Book Your Favourite Celebs on celebsbooking.com',
    },
    {
        icon: <CelebrationIcon sx={{ color: "#E31261", fontSize: "4.28571rem" }} />,
        title: 'Digital Promotions',
        description: 'We promote young aspiring actors on digital platform.',
    },
    {
        icon: <CameraAltIcon sx={{ color: "#E31261", fontSize: "4.28571rem" }} />,
        title: 'Film Promotions',
        description: 'We undertake Film Promotions in various cities.',
    },
    {
        icon: <EmojiPeopleIcon sx={{ color: "#E31261", fontSize: "4.28571rem" }} />,
        title: 'Special Events',
        description: 'For Privileged Fans We arrange 1 to 1 meeting with Celebs.',
    },
];

const ServicesSection = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                py: 20,
                // px: 2,
                zIndex: 10,
            }}
        >
            <Container>

                <Typography variant="h2" align="start" gutterBottom sx={{ fontFamily: 'Montserrat', fontWeight: 500, mb: 4 }}>
                    Services
                </Typography>

                <Grid container spacing={1} justifyContent="center">
                    {services.map((service, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                style={{
                                    // background: '#fff',
                                    padding: '2px',
                                    borderRadius: '12px',
                                    // boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                    textAlign: 'center',
                                    height: '100%',
                                }}
                            >
                                <Box mb={2}>{service.icon}</Box>
                                <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: "1.40rem", lineHeight: "2.14286rem" }}>
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {service.description}
                                </Typography>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ServicesSection;
