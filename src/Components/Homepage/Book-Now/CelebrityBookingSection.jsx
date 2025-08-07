
import { Box, Typography, Grid, List, ListItem, ListItemIcon, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import {
    Star as StarIcon,
    Celebration as CelebrationIcon,
    CameraAlt as CameraIcon,
    TheaterComedy as TheaterIcon,
    TrendingUp as TrendingIcon,
    CheckCircle as CheckIcon
} from '@mui/icons-material';


const fadeInUp = {
    hidden: { opacity: 1, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

export default function CelebrityBookingSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid size={{ xs: 12, md: 7 }} >
            <Box sx={{
                // px: { xs: 2, md: 4 },
                // py: { xs: 3, md: 0 }
            }}>
                {/* Main Heading */}
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <Typography
                        variant={isMobile ? "h4" : "h3"}
                        component="h1"
                        gutterBottom
                        sx={{
                            // fontFamily: 'Montserrat',
                            fontWeight: 700,
                            color: "white",
                            mb: 3,
                            position: 'relative',
                            '&:after': {
                                content: '""',
                                position: 'absolute',
                                bottom: -12,
                                left: 0,
                                width: 80,
                                height: 4,
                                background: 'linear-gradient(to right, #ff4d4d, #f9cb28)',
                                borderRadius: 2
                            }
                        }}
                    >
                        Book Celebrities & Influencers
                    </Typography>

                </motion.div>

                {/* Opening Paragraphs */}
                <motion.div
                    custom={1}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Typography paragraph sx={{
                        // fontFamily: 'Lato',
                        color: 'white',
                        fontSize: isMobile ? '1rem' : '1.1rem',
                        lineHeight: 1.7
                    }}>
                        Some events are meant to impress, some to express — and some to create lifelong memories.
                    </Typography>
                </motion.div>

                <motion.div
                    custom={2}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Box sx={{
                        background: 'linear-gradient(to right, rgba(255, 77, 77, 0.42), rgba(226, 225, 220, 0.32))',
                        p: 3,
                        borderRadius: 2,
                        mb: 3,
                        borderLeft: '4px solid #f73d3dff'
                    }}>
                        <Typography paragraph sx={{
                            // fontFamily: 'Lato',
                            color: 'white',
                            fontSize: isMobile ? '1rem' : '1.1rem',
                            mb: 0
                        }}>
                            Whether it's a wedding, corporate gala, brand launch, or private celebration — make it unforgettable with the presence of India's biggest celebrities and top influencers.
                        </Typography>
                    </Box>
                </motion.div>

                {/* Key Selling Point */}
                <motion.div
                    custom={3}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <CelebrationIcon color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
                        <Typography variant="h6" sx={{
                            // fontFamily: 'Montserrat',
                            fontWeight: 600,
                            color: "white"
                        }}>
                            Because nothing grabs attention like star power
                        </Typography>
                    </Box>
                    <Typography paragraph sx={{
                        // fontFamily: 'Lato',
                        color: "white",
                        fontSize: isMobile ? '1rem' : '1.1rem',
                        pl: 6
                    }}>
                        From the red carpet to your own stage — let celebrities elevate your occasion.
                    </Typography>
                </motion.div>

                {/* Services List */}
                <motion.div
                    custom={4}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Typography variant="h6" sx={{

                        fontWeight: 600,
                        color: "white",
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <CameraIcon color="primary" sx={{ mr: 1.5 }} />
                        Whether you need:
                    </Typography>

                    <List dense sx={{ pl: 0, mb: 3 }}>
                        {[
                            { text: "A Bollywood celebrity for a grand entry", icon: TheaterIcon },
                            { text: "A regional star for a soulful performance", icon: StarIcon },
                            { text: "A trending influencer for social media buzz", icon: TrendingIcon }
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                    <item.icon color="primary" />
                                </ListItemIcon>
                                <Typography sx={{

                                    color: "white",
                                    fontSize: isMobile ? '0.95rem' : '1rem'
                                }}>
                                    {item.text}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </motion.div>

                {/* Value Proposition */}
                <motion.div
                    custom={5}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Box sx={{
                        bgcolor: 'background.paper',
                        p: 3,
                        borderRadius: 2,
                        boxShadow: 1,
                        mb: 3
                    }}>
                        <Typography paragraph sx={{
                            
                            color: 'text.primary',
                            fontSize: isMobile ? '1rem' : '1.1rem',
                            fontWeight: 500,
                            mb: 0
                        }}>
                            We bring stars straight to your event — <Box component="span" sx={{ fontWeight: 700 }}>effortlessly, seamlessly.</Box>
                        </Typography>
                    </Box>
                </motion.div>

                {/* Closing Statement */}
                <motion.div
                    custom={6}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Typography paragraph sx={{
                       
                       color: "white",
                        fontSize: isMobile ? '1rem' : '1.1rem',
                        mb: 3
                    }}>
                        📸 Let the paparazzi moments begin. Let the glam take over. And let your event become the talk of the town.
                    </Typography>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    custom={7}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Box sx={{
                        mt: 4,
                        pt: 3,
                        borderTop: '1px solid',
                        borderColor: 'divider'
                    }}>
                        <Typography variant="h5" component="h2" sx={{
                           
                            fontWeight: 700,
                           color: "white",
                            mb: 2
                        }}>
                            Ready to Book?
                        </Typography>
                        <Typography paragraph sx={{
                           
                           color: "white",
                            fontSize: isMobile ? '1rem' : '1.1rem',
                            mb: 3
                        }}>
                            Just share your requirements, and we'll match you with the perfect celebrity or influencer to fit your budget, vibe, and vision.
                        </Typography>

                        <List dense sx={{ pl: 0, mb: 3 }}>
                            {[
                                "500+ verified celebrities",
                                "End-to-end management",
                                "Competitive pricing",
                                "Secure contracts"
                            ].map((item, index) => (
                                <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                        <CheckIcon color="primary" />
                                    </ListItemIcon>
                                    <Typography sx={{
                                        
                                        color: "white",
                                        fontSize: isMobile ? '0.95rem' : '1rem'
                                    }}>
                                        {item}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </motion.div>
            </Box>
        </Grid>
    );
}