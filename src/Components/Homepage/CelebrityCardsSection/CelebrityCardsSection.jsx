
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import AnimatedHeading from '../../../Common/ui/Heading/Heading';
import { cardDatas } from '../../../Data/Landingpage/CelebrityCardData';
import Hr from '../../../Common/ui/Hrline/hr';

const cardData = cardDatas
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut"
        },
    }),
    hover: {
        y: -10,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

const CelebrityCardsSection = () => {
    const theme = useTheme();

    return (
        <Box sx={{

            py: { xs: 4, md: 8 },
            position: 'relative',

        }}>
            <Container maxWidth="lg">
                <AnimatedHeading name="Our Services" />

                <Grid container spacing={4} justifyContent="center">
                    {cardData.map((card, i) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                            <motion.div
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                whileHover="hover"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={cardVariants}
                                style={{ height: '100%' }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        boxShadow: '0 10px 30px -5px rgba(0,0,0,0.1)',
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            boxShadow: '0 15px 35px -5px rgba(0,0,0,0.2)',
                                            transform: 'translateY(-5px)'
                                        },
                                        background: 'linear-gradient(to bottom, #ffffff, #f5f5f5)',
                                        border: '1px solid rgba(0,0,0,0.05)'
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image={card.image}
                                        alt={`${card.title} Image`}
                                        sx={{
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease',
                                            '&:hover': {
                                                transform: 'scale(1.05)'
                                            }
                                        }}
                                    />
                                    <CardContent sx={{
                                        flexGrow: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        p: 3,
                                        background: 'white'
                                    }}>
                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            gutterBottom
                                            fontWeight={700}
                                            sx={{
                                                fontFamily: 'Montserrat',
                                                mb: 2,
                                                color: theme.palette.primary.main,
                                                textAlign: 'center'
                                            }}
                                        >
                                            {card.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="text.secondary"
                                            sx={{
                                                fontFamily: 'Lato',
                                                flexGrow: 1,
                                                textAlign: 'center',
                                                lineHeight: 1.6
                                            }}
                                        >
                                            {card.text}
                                        </Typography>
                                        <Box sx={{
                                            mt: 3,
                                            textAlign: 'center'
                                        }}>
                                            <Hr />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default CelebrityCardsSection;