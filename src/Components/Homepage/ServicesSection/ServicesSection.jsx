import React from 'react';
import { Box, Grid, Typography, Paper, useTheme, Container } from '@mui/material';
import { styled } from '@mui/system';
import {
    WorkOutline,
    Group,
    Tag,
    Celebration,
    Star,
    Campaign,
    MovieFilter,
    Event
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
    { icon: <WorkOutline fontSize="large" />, label: 'Years in Business', count: 2 },
    { icon: <Group fontSize="large" />, label: 'Talent Coordinated', count: 50 },
    { icon: <Tag fontSize="large" />, label: 'Brands Associated', count: 24 },
    { icon: <Celebration fontSize="large" />, label: 'Past Events', count: 80 },
];

const services = [
    { icon: <Star fontSize="large" />, title: 'Celebrity Management', desc: 'Instantly Book Your Favourite Celebs on celebsbooking.com' },
    { icon: <Campaign fontSize="large" />, title: 'Digital Promotions', desc: 'We promote young aspiring actors on digital platforms.' },
    { icon: <MovieFilter fontSize="large" />, title: 'Film Promotions', desc: 'We undertake Film Promotions in various cities.' },
    { icon: <Event fontSize="large" />, title: 'Special Events', desc: 'We arrange 1 to 1 meetings with Celebs for privileged fans.' },
];

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    textAlign: 'center',
    borderRadius: '16px',
    boxShadow: '0px 6px 20px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0px 12px 24px rgba(0,0,0,0.15)',
    },
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}));

const ServicePaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: '16px',
    boxShadow: '0px 6px 20px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0px 12px 24px rgba(0,0,0,0.15)',
    },
    height: '100%',
    background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[50]} 100%)`,
}));

const ColatchStatsSection = () => {
    const theme = useTheme();

    return (
        <Container>

            <Box sx={{
                py: 10,
                // background: 'linear-gradient(to bottom, #f9f9ff 0%, #ffffff 100%)',
                // position: 'relative',
                // overflow: 'hidden',
            }}>
                {/* Decorative elements */}
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(25,118,210,0.1) 0%, rgba(255,255,255,0) 70%)',
                    zIndex: 0,
                }} />
                <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(156,39,176,0.1) 0%, rgba(255,255,255,0) 70%)',
                    zIndex: 0,
                }} />

                <Box position="relative" zIndex={1}>
                    <Typography
                        variant="h4"
                        align="center"
                        gutterBottom
                        fontWeight={700}
                        sx={{
                            mb: 6,
                            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-block',
                        }}
                    >
                        We Are A Full-Service Agency Specializing In
                    </Typography>

                    <Grid container spacing={4} justifyContent="center" mt={2}>
                        {stats.map((item, i) => (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: i * 0.15,
                                        type: 'spring',
                                        stiffness: 100
                                    }}
                                    viewport={{ once: true, margin: '-50px' }}
                                >
                                    <StyledPaper>
                                        <Box
                                            sx={{
                                                width: 70,
                                                height: 70,
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mb: 2,
                                                background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${"#f25e29"} 100%)`,
                                                color: 'White',
                                            }}
                                        >
                                            {item.icon}
                                        </Box>
                                        <Typography variant="h4" fontWeight={700} color="primary">
                                            <CountUp
                                                end={item.count}
                                                duration={2.5}
                                                suffix="+"
                                            />
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            color="text.secondary"
                                            sx={{ mt: 1 }}
                                        >
                                            {item.label}
                                        </Typography>
                                    </StyledPaper>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>

                    <Typography
                        variant="h4"
                        align="center"
                        gutterBottom
                        fontWeight={700}
                        sx={{
                            mt: 10,
                            mb: 6,
                            background: `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.main} 90%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-block',
                        }}
                    >
                        Our Services
                    </Typography>

                    <Grid container spacing={4} justifyContent="center">
                        {services.map((service, i) => (
                            <Grid size={{ xs: 12, sm: 6, }} key={i}>
                                <motion.div
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: i * 0.15,
                                        type: 'spring',
                                        stiffness: 100
                                    }}
                                    viewport={{ once: true, margin: '-50px' }}
                                >
                                    <ServicePaper>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                                            <Box
                                                sx={{
                                                    width: 60,
                                                    height: 60,
                                                    borderRadius: '16px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    background: `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`,
                                                    color: 'white',
                                                    flexShrink: 0,
                                                }}
                                            >
                                                {service.icon}
                                            </Box>
                                            <Box textAlign="left">
                                                <Typography variant="h5" fontWeight={600} gutterBottom>
                                                    {service.title}
                                                </Typography>
                                                <Typography variant="body1" color="text.secondary">
                                                    {service.desc}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </ServicePaper>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default ColatchStatsSection;