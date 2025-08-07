// EventGallery.tsx
import React, { useState } from 'react';
import {
    Box,
    Dialog,
    DialogContent,
    IconButton,
    Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const images = [
    '/services/services1.jfif',
    '/services/services3.jfif',
    '/services/services4.jfif',
    '/services/services5.jfif',
    '/services/services6.jfif',
    '/services/services7.jfif',
];

const MotionBox = motion(Box);

const EventGallery = () => {
    const [open, setOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState('');

    const handleOpen = (src) => {
        setCurrentImg(src);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentImg('');
    };

    return (
        <Box sx={{  p: 1 }}>
            <Grid container spacing={2}>
                {images.map((src, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                        <MotionBox
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onClick={() => handleOpen(src)}
                            sx={{
                                cursor: 'pointer',
                                borderRadius: 2,
                                overflow: 'hidden',
                                // boxShadow: 2,
                            }}
                        >
                            <img
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                style={{ width: '100%', height: '359px', objectFit: 'contain' }}
                            />
                        </MotionBox>
                    </Grid>
                ))}
            </Grid>

            {/* Lightbox Dialog */}
            <Dialog open={open} onClose={handleClose} maxWidth="md">
                <DialogContent sx={{ p: 0, position: 'relative' }}>
                    <IconButton
                        onClick={handleClose}
                        sx={{ position: 'absolute', top: 8, right: 8, zIndex: 10, color: '#fff' }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <img
                        src={currentImg}
                        alt="Preview"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default EventGallery;
