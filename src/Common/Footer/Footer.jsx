import React from 'react';
import { Grid, Typography, Box, TextField, Button, IconButton, Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: '#00000000', color: '#fff', pt: 6, pb: 3 }}>
            <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
                <Grid container spacing={4}>
                    {/* About */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} >

                        <img src="/footerlogo.svg" alt="" width="200px" />
                        <Typography variant="body2" sx={{ lineHeight: 1.6, }}>
                            Celeb India Vision is a
                            Managing Bollywood
                            Celebrities, Television Actors and Actresses, Superstars of  Indian Cinema for Special Guest appearances, Performances, Product launch and Brand Promotions or any other special occasions or events.
                        </Typography>
                    </Grid>

                    {/* Contacts */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                            Contacts
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                            <LocationOnIcon sx={{ mr: 1, mt: '3px' }} />
                            <Typography variant="body2" fontFamily={"Poppins"} >
                                309, 3rd floor, Sahitya Hills & icon, Nava Naroda, Ahmedabad, Gujarat - 382330.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>

                            <AccessTimeIcon sx={{ mr: 1, mt: 0.3 }} />
                            <Typography variant="body2" fontFamily={"Poppins"} >
                                Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
                                10:00 - 06:30
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <PhoneIcon sx={{ mr: 1 }} />
                            <Box component={Link} href='tel:+91 9054510329' fontFamily={"Poppins"} sx={{ color: "white", textDecoration: "none" }}> +91 9054510329</Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <EmailIcon sx={{ mr: 1 }} />
                            <Box component={Link} href='emailto:celebindiavision@gmail.com' fontFamily={"Poppins"} sx={{ color: "white", textDecoration: "none" }}> celebindiavision@gmail.com</Box>
                        </Box>
                    </Grid>

                    {/* Instagram */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                            Instagram
                        </Typography>
                        <Grid container spacing={1}>
                            {[
                                '/assert/Celebrities/Divyanka.jpg',
                                '/assert/footer/item12.jpeg',
                                '/assert/footer/item8.jpeg',
                                '/assert/footer/item9.jpeg',
                                '/assert/footer/item10.jpeg',
                                '/assert/footer/item11.jpeg',
                            ].map((src, i) => (
                                <Grid size={{ xs: 4, sm: 4, md: 4 }} key={i}>
                                    <Link href="#" underline="none" sx={{ display: 'block' }}>
                                        <Box
                                            component="img"
                                            src={src}
                                            alt={`Instagram item ${i + 1}`}
                                            sx={{ width: '100%', borderRadius: 1, display: 'block' ,height:"90px"}}
                                        />
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    {/* Subscribe */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                            Subscribe
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6, }}>
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
                            {/* <IconButton
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
                            </IconButton> */}
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Copyright */}
            <Box sx={{ bgcolor: '#111', mt: 6, py: 2 }}>
                <Box sx={{ maxWidth: 1200, m: 'auto', px: 2 }}>
                    <Grid container alignItems="center" textAlign={"center"} spacing={1}>
                        <Grid size={{ xs: 12 }} >
                            <Typography
                                variant="caption"
                                sx={{ color: '#aaa', textAlign: 'center' }}
                            >
                                © {new Date().getFullYear()} - Mentor by Vikas Gade,&nbsp;
                                Developed by{' '}
                                <Link
                                    href="mailto:Jeeva01424@gmail.com"
                                    sx={{
                                        color: '#fff',
                                        textDecoration: 'none',
                                        '&:hover': { textDecoration: 'underline' }
                                    }}
                                >
                                    Jeeva01424@gmail.com
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <Typography
                                variant="caption"
                                sx={{ color: '#aaa', textAlign: 'center' }}
                            >
                                **Images are for representation only | **All rights reserved with
                                respective owners
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </Box>
    );
};

export default Footer;
