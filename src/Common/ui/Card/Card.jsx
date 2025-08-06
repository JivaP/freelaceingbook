import React from 'react';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { motion } from 'framer-motion';

const CelebrityCards = ({ celebrityData }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ px: { xs: 1, sm: 2 }, py: 3 }}>
            <Grid container spacing={3} justifyContent="center">
                {Object.entries(celebrityData).map(([name, details]) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={name}>
                        <motion.div
                            whileHover={!isMobile ? { scale: 1.02 } : {}}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Card sx={{
                                borderRadius: 2,
                                boxShadow: 2,
                                height: '100%',
                                position: 'relative',
                                overflow: 'hidden',
                                '&:hover .celebrity-overlay': {
                                    opacity: 1
                                }
                            }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={details.image}
                                    alt={name}
                                    sx={{ objectFit: 'cover' }}
                                />

                                {/* Compact hover overlay */}
                                <Box className="celebrity-overlay" sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 20%, transparent 60%)',
                                    opacity: 0,
                                    transition: 'opacity 0.2s ease',
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    color: 'white'
                                }}>
                                    <Typography variant="subtitle1" fontWeight={600}>
                                        {name}
                                    </Typography>
                                    {details.description && (
                                        <Typography variant="caption" sx={{ lineHeight: 1.3 }}>
                                            {details.description.length > 80
                                                ? `${details.description.substring(0, 80)}...`
                                                : details.description}
                                        </Typography>
                                    )}
                                </Box>

                                {/* Compact card content */}
                                <CardContent sx={{ p: 2 }}>
                                    <Typography variant="subtitle1" fontWeight={600} noWrap>
                                        {name}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                                        {details.title}
                                    </Typography>

                                    <List dense disablePadding sx={{ mt: 1 }}>
                                        {details.commercial_details?.slice(0, 2).map((item, index) => (
                                            <ListItem key={index} disableGutters sx={{ px: 0, py: 0.25 }}>
                                                <ListItemText
                                                    primary={<Typography variant="caption">{item.Category}</Typography>}
                                                    secondary={<Typography variant="caption" color="primary" fontWeight="medium">₹{item.Commercial}</Typography>}
                                                    sx={{ my: 0 }}
                                                />
                                            </ListItem>
                                        ))}
                                        {details.commercial_details?.length > 2 && (
                                            <Typography variant="caption" color="text.secondary">
                                                +{details.commercial_details.length - 2} more
                                            </Typography>
                                        )}
                                    </List>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CelebrityCards;