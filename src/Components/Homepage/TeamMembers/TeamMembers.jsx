
import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Button, Container, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import BookNowButton from '../../../Common/ui/Button';
import AnimatedHeading from '../../../Common/ui/Heading/Heading';

const teamMembers = [
    {
        name: 'Shraddha Kapoor',
        images: ['/assert/CelebrityZone/Shraddha-Kapoor1.jpeg', '/assert/CelebrityZone/Shraddha-Kapoor2.jpeg', '/assert/CelebrityZone/Shraddha-Kapoor3.jpeg', '/assert/CelebrityZone/Shraddha-Kapoor4.jpeg'],
        alt: 'Book Now - Shraddha Kapoor',
        link: 'https://www.instagram.com/shraddhakapoor/',
    },
    {
        name: 'Varun Dhavan',
        images: ['/assert/CelebrityZone/Varun-Dhavan1.jpeg', '/assert/CelebrityZone/Varun-Dhavan2.jpeg', '/assert/CelebrityZone/Varun-Dhavan3.jpeg', '/assert/CelebrityZone/Varun-Dhavan4.jpeg'],
        alt: 'Book Now - Varun Dhavan',
        link: 'https://www.instagram.com/varundvn/',
    },
    {
        name: 'Alia Bhatt',
        images: ['/assert/CelebrityZone/Alia-Bhatt1.jpeg', '/assert/CelebrityZone/Alia-Bhatt2.jpeg', '/assert/CelebrityZone/Alia-Bhatt13.jpeg', '/assert/CelebrityZone/Alia-Bhatt4.jpeg'],
        alt: 'Book Now - Alia Bhatt',
        link: 'https://www.instagram.com/aliaabhatt/',
    },
    {
        name: 'Siddharth Malhotra',
        images: ['/assert/CelebrityZone/Siddharth-Malhotra1.jpeg', '/assert/CelebrityZone/Siddharth-Malhotra2.jpeg', '/assert/CelebrityZone/Siddharth-Malhotra3.jpeg', '/assert/CelebrityZone/Siddharth-Malhotra4.jpeg'],
        alt: 'Book Now - Siddharth Malhotra',
        link: 'https://www.instagram.com/sidmalhotra/',
    },
];

const fadeVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.8 } },
};

export default function TeamMembers() {
    const [currentIndex, setCurrentIndex] = useState(Array(teamMembers.length).fill(0));

    useEffect(() => {
        // Show index 0 for 3s, then change one-by-one every 2s
        const timeouts = [];

        teamMembers.forEach((member, idx) => {
            let index = 0;

            const updateSlide = () => {
                index = (index + 1) % member.images.length;
                setCurrentIndex(prev => {
                    const updated = [...prev];
                    updated[idx] = index;
                    return updated;
                });
            };

            const delay = 3000 + idx * 2000; // start each after 2s gap
            timeouts[idx] = setTimeout(function intervalFn() {
                updateSlide();
                timeouts[idx] = setInterval(updateSlide, 6000); // loop every 6s per card
            }, delay);
        });

        return () => {
            timeouts.forEach(t => clearInterval(t));
        };
    }, []);

    return (
        <Box >

            <Container>
                <AnimatedHeading name={"Celebrity Zone"} />


                <Grid container spacing={3}>
                    {teamMembers.map((member, i) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={member.name}>
                            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 'none', borderRadius: 3 }}>
                                <div
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        paddingTop: '120%',
                                        overflow: 'hidden',
                                        // borderRadius: 12,
                                    }}
                                >
                                    <AnimatePresence mode="wait" initial={false}>
                                        <motion.img
                                            key={member.images[currentIndex[i]]}
                                            src={member.images[currentIndex[i]]}
                                            alt={member.alt}
                                            variants={fadeVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: 'auto',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </AnimatePresence>
                                </div>

                                <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                                    <Typography variant="h6" gutterBottom>
                                        {member.name}
                                    </Typography>
                                    <BookNowButton fullWidth={false} />


                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
