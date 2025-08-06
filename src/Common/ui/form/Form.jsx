import { Box, Button, Card, CardContent, Grid, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

export default function Form() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <Grid size={{ xs: 12, md: 5 }} >
                <Card sx={{
                    borderRadius: 4,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    background: 'linear-gradient(to bottom right, #ffffff, #f8f8f8)',
                    overflow: 'hidden'
                }}>
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                        <Typography
                            variant={isMobile ? "h5" : "h4"}
                            component="h3"
                            gutterBottom
                            sx={{
                                fontFamily: 'Montserrat',
                                fontWeight: 700,
                                color: '#222',
                                mb: 3,
                                position: 'relative',
                                '&:after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: -8,
                                    left: 0,
                                    width: 60,
                                    height: 4,
                                    background: 'linear-gradient(to right, #e30f5f, #ff4d4d)',
                                    borderRadius: 2
                                }
                            }}
                        >
                            Book Now
                        </Typography>

                        <Box component="form" noValidate autoComplete="off">
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                margin="normal"
                                variant="outlined"
                                InputProps={{
                                    sx: { borderRadius: 2 }
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Mobile Number"
                                name="mobile"
                                margin="normal"
                                variant="outlined"
                                required
                                type="tel"
                                InputProps={{
                                    sx: { borderRadius: 2 }
                                }}
                            />
                            <TextField
                                fullWidth
                                label="E-mail"
                                name="email"
                                margin="normal"
                                variant="outlined"
                                type="email"
                                InputProps={{
                                    sx: { borderRadius: 2 }
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Comments"
                                name="message"
                                margin="normal"
                                variant="outlined"
                                multiline
                                rows={4}
                                InputProps={{
                                    sx: { borderRadius: 2 }
                                }}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{
                                    mt: 3,
                                    py: 1.5,
                                    borderRadius: 2,
                                    background: 'linear-gradient(to right, #e30f5f, #ff4d4d)',
                                    '&:hover': {
                                        background: 'linear-gradient(to right, #c00d52, #e30f5f)',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 4px 12px rgba(227, 15, 95, 0.3)'
                                    },
                                    fontFamily: 'Montserrat',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    transition: 'all 0.3s ease',
                                    textTransform: 'uppercase'
                                }}
                            >
                                Submit Booking
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}
