import React from 'react';
import { Button } from '@mui/material';
import { keyframes } from '@mui/system';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

// Animation for button hover effect
const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const MyButton = ({
    fullWidth = true,
    variant = 'contained',
    sx = {},
    handleClick = () => { },
    name = "Book Now",
    icons = < CalendarTodayIcon sx={{ fontSize: '1.2rem' }} />
}) => {


    return (
        <Button
            variant={variant}
            onClick={handleClick}
            fullWidth={fullWidth}
            startIcon={icons}
            sx={{
                background: variant === 'contained'
                    ? 'linear-gradient(45deg, #FE0000 0%, #FF4D4D 50%, #FE0000 100%)'
                    : 'transparent',
                backgroundSize: '200% 200%',
                border: variant === 'outlined'
                    ? '2px solid #FE0000'
                    : 'none',
                color: variant === 'contained' ? '#fff' : '#FE0000',
                overflow: 'hidden',
                p: '10px 24px',
                borderRadius: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                position: 'relative',
                transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                animation: `${pulse} 3s infinite`,
                '&:hover': {
                    background: variant === 'contained'
                        ? 'linear-gradient(45deg, #FE0000 0%, #FF1A1A 50%, #FE0000 100%)'
                        : 'rgba(254, 0, 0, 0.08)',
                    animation: `${gradientFlow} 3s ease infinite`,
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(254, 0, 0, 0.3)',
                    ...(variant === 'outlined' && {
                        borderColor: '#FF1A1A',
                        color: '#FF1A1A'
                    })
                },
                '&:active': {
                    transform: 'translateY(0)'
                },
                '& .MuiButton-startIcon': {
                    transition: 'transform 0.3s ease',
                },
                '&:hover .MuiButton-startIcon': {
                    transform: 'scale(1.2)'
                },
                ...sx,
            }}
        >
            {name}
        </Button>
    );
};

export default MyButton;