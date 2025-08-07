import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import MovieIcon from '@mui/icons-material/Movie';
import PeopleIcon from '@mui/icons-material/People';
import CampaignIcon from '@mui/icons-material/Campaign';
import StarIcon from '@mui/icons-material/Star';
import AnimatedHeading from '../ui/Heading/Heading';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

const services = [
    {
        icon: <MovieIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
        title: 'Bollywood Celebs',
        description: 'Management, Appearances, Endorsements and Red-Carpet Events',
    },
    {
        icon: <PeopleIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
        title: 'Influencer Network',
        description: 'Instagram, YouTube, Moj & Josh influencers across niches',
    },
    {
        icon: <CampaignIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
        title: 'PR & Campaigns',
        description: 'Celebrity PR, Media Coverage, Interviews, Talk Shows & More',
    },
    {
        icon: <StarIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
        title: 'Brand Collaborations',
        description: 'Brand Endorsements, Launch Events, and Digital Shoutouts',
    },
];

export default function AboutUs() {
    return (
        <Box sx={{ pt: 8 }}>
            <Container>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    custom={0}
                >
                    <AnimatedHeading name={"About Us – Celeb India Vision"} />



                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    custom={1}
                >
                    <Typography variant="body1" align="center" color="white" maxWidth={800} mx="auto" mb={5}>
                        Celeb India Vision is a leading Bollywood Celebrity Management, Influencer Marketing, and PR Agency
                        based in India. <br />
                        We specialize in connecting brands, events, and audiences with top Bollywood Celebrities, Regional
                        Stars, and Influencers — creating unforgettable, star-studded experiences both online and offline. <br /> <br />
                        From red carpets to digital shoutouts, we turn your brand vision into celebrity-powered impact.
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    {services.map((service, index) => (
                        <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
                            <motion.div
                                custom={index + 2}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                <Paper elevation={3} sx={{ p: 2, textAlign: 'center', height: '100%', borderRadius: 4 }}>
                                    <Box mb={2}>{service.icon}</Box>
                                    <Typography variant="body1" fontWeight={600} gutterBottom>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: 12 }}>
                                        {service.description}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
