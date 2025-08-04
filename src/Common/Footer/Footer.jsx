import React from 'react';
import { Grid, Typography, Box, TextField, Button, IconButton, Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: '#222', color: '#fff', pt: 6, pb: 3 }}>
            <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
                <Grid container spacing={4}>
                    {/* About */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} >
                        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Montserrat', fontWeight: 500 }}>
                            About
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.6, fontFamily: 'Lato' }}>
                            Managing Bollywood Celebrities, Television Actors and Actresses, Superstars of Marathi Cinemas for Special Guest appearances, Performances, Product launch and Brand Promotions or any other special occasions or events.
                        </Typography>
                    </Grid>

                    {/* Contacts */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Montserrat', fontWeight: 500 }}>
                            Contacts
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                            <LocationOnIcon sx={{ mr: 1, mt: '3px' }} />
                            <Typography variant="body2" component="address" sx={{  fontFamily: 'Lato' }}>
                                Platinum Towers
                                <br />Off Juhu Lane
                                <br />Andheri West
                                <br />Mumbai 400053
                                <br />Landmark The Club
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <PhoneIcon sx={{ mr: 1 }} />
                            <Typography variant="body2" sx={{ fontFamily: "Lota" }}>+91 884-910-4707</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <EmailIcon sx={{ mr: 1 }} />
                            <Typography variant="body2" sx={{ fontFamily: "Lota" }}>hello@celebsbooking.com</Typography>
                        </Box>
                    </Grid>

                    {/* Instagram */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Montserrat', fontWeight: 500 }}>
                            Instagram
                        </Typography>
                        <Grid container spacing={1}>
                            {[
                                'img/instagram/item1.jpg',
                                'img/instagram/item2.jpg',
                                'img/instagram/item3.jpg',
                                'img/instagram/item4.jpg',
                                'img/instagram/item5.jpg',
                                'img/instagram/item6.jpg',
                            ].map((src, i) => (
                                <Grid size={{ xs: 4, sm: 4, md: 4 }} key={i}>
                                    <Link href="#" underline="none" sx={{ display: 'block' }}>
                                        <Box
                                            component="img"
                                            src={src}
                                            alt={`Instagram item ${i + 1}`}
                                            sx={{ width: '100%', borderRadius: 1, display: 'block' }}
                                        />
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    {/* Subscribe */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Montserrat', fontWeight: 500 }}>
                            Subscribe
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6, fontFamily: 'Lato' }}>
                            So why wait when you can celebrate with the biggest stars of the film industry! Contact us today.
                        </Typography>
                        <Box
                            component="form"
                            method="post"
                            action="subscribe.php"
                            sx={{ display: 'flex', alignItems: 'center' }}
                        >
                            <TextField
                                id="subscriber_email"
                                name="email"
                                type="email"
                                variant="outlined"
                                size="small"
                                placeholder="Enter your e-mail"
                                sx={{
                                    bgcolor: '#333',
                                    borderRadius: 1,
                                    flexGrow: 1,
                                    input: { color: '#fff' },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#555',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#777',
                                    },
                                }}
                                InputLabelProps={{ style: { color: '#aaa' } }}
                            />
                            <IconButton
                                type="submit"
                                color="primary"
                                sx={{
                                    ml: 1,
                                    bgcolor: '#e30f5f',
                                    '&:hover': { bgcolor: '#b60c49' },
                                }}
                                aria-label="subscribe"
                            >
                                <ArrowForwardIosIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Copyright */}
            <Box sx={{ bgcolor: '#111', mt: 6, py: 2 }}>
                <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid size={{ xs: 12 }} md="auto">
                            <Typography variant="caption" sx={{ color: '#aaa' }}>
                                © Copyright 2017 - Mentor by Vikas Gade,&nbsp;
                                Developed by{' '}
                                <Link
                                    href="#"
                                    sx={{ color: '#fff', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                >
                                    TECHLINKSOFTWARES.
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12 }} md="auto" sx={{ mt: { xs: 1, md: 0 } }}>
                            <Typography variant="caption" sx={{ color: '#aaa', textAlign: { xs: 'left', md: 'right' } }}>
                                **Images are for representation only | **All rights reserved with respective owner's
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
