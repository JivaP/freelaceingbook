
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BookNowButton = ({ fullWidth = true, variant = 'outlined', sx = {} }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/book-now');
    };

    return (
        <Button
            variant={variant}
            onClick={handleClick}
            fullWidth={fullWidth}
            sx={{
                border: '1px solid #e30f5f',
                color: '#e30f5f',
                overflow: 'hidden',
                p: 2,
                borderRadius: '12px',
                transition: 'all 0.4s ease-in-out',
                fontWeight: 600,
                textTransform: 'uppercase',
                '&:hover': {
                    borderColor: '#888',
                    backgroundColor: '#888',
                    color: '#fff',
                },
                ...sx, // Merge custom styles
            }}
        >
            BOOK NOW
        </Button>
    );
};

export default BookNowButton;