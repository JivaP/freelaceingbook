import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { motion,  } from 'framer-motion';
import TeamMembers from '../../Components/Homepage/TeamMembers/TeamMembers';
import Bookingmain from '../../Components/Homepage/Book-Now/bookingmain';
import AboutUs from '../../Common/AboutUs/AboutUs';
import { ParallaxHero } from '../../Common/ParallaxHero/ParallaxHero';


export default function AboutUsPage() {
    const theme = useTheme();
    const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const getHeadingVariant = () => {
        if (isSmallMobile) return 'h3';
        if (isTablet) return 'h2';
        return 'h1';
    };

    return (
        <Box sx={{ overflowX: 'hidden' }}>
            {/* Hero Section with Parallax */}
            <ParallaxHero image="/assert/team/background1.jpg">
                <Box sx={{
                    textAlign: 'center',
                    color: 'white',
                    py: isSmallMobile ? 4 : 8
                }}>
                    <Typography
                        component={motion.h1}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        variant={getHeadingVariant()}
                        sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            color: 'rgb(227, 15, 95)',
                            mb: isSmallMobile ? 1 : 2,
                            fontSize: {
                                xs: '2rem',
                                sm: '3rem',
                                md: '3rem'
                            }
                        }}
                    >
                        About Us
                    </Typography>

                    <Typography
                        component={motion.p}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        variant={isSmallMobile ? 'body1' : 'h5'}
                        sx={{
                            fontFamily: 'Lato',
                            maxWidth: 800,
                            mx: 'auto',
                            mt: isSmallMobile ? 1 : 2,
                            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                            fontSize: {
                                xs: '1rem',
                                sm: '1.25rem',
                                md: '1.5rem'
                            }
                        }}
                    >
                        Creating unforgettable experiences with celebrity excellence
                    </Typography>
                </Box>
            </ParallaxHero>

            {/* Page Content Sections */}
            <Box component="main" sx={{
                maxWidth: 1200,
                mx: 'auto',
                px: isSmallMobile ? 2 : isTablet ? 3 : 4,
                py: isSmallMobile ? 3 : 6
            }}>
                <AboutUs />

                <Box sx={{ my: isSmallMobile ? 4 : 8 }}>
                    <TeamMembers />
                </Box>

                <Box sx={{
                    mt: isSmallMobile ? 4 : 8,
                    mb: isSmallMobile ? 2 : 4
                }}>
                    <Bookingmain />
                </Box>
            </Box>
        </Box>
    );
}