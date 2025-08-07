import { Typography, keyframes } from '@mui/material';

// Animations
const textFadeIn = keyframes`
  0% { opacity: 0; transform: translateY(15px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const underlineGrow = keyframes`
  0% { width: 0; opacity: 0; }
  100% { width: 60px; opacity: 1; }
`;

const gradientPulse = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Hr = () => (
    <Typography
        gutterBottom
        sx={{
            color: "white",
            textAlign: 'center',
            marginBottom: 4,
            fontWeight: 500,
            fontSize: { xs: 25, md: 32 },
            position: 'relative',
            animation: `${textFadeIn} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`,

            '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -12,
                left: '50%',
                transform: 'translateX(-50%)',
                width: "100px !important",
                height: 2,
                background: 'linear-gradient(90deg, #FE0000 0%, #FF9A9E 50%, #FE0000 100%)',
                backgroundSize: '200% 200%',
                borderEndStartRadius: 4,
                borderStartEndRadius: 4,
                animation: `
          ${underlineGrow} 0.6s ease-out 0.4s forwards,
          ${gradientPulse} 3s ease infinite 1s
        `,
                opacity: 0,
                boxShadow: '0 2px 8px rgba(254, 0, 0, 0.3)',
            },

            '&:hover': {
                '&:after': {
                    height: 5,
                    background: 'linear-gradient(90deg, #FE0000 0%, #FF0000 100%)',
                    boxShadow: '0 2px 12px rgba(254, 0, 0, 0.5)',
                    transition: 'all 0.3s ease',
                }
            }
        }}
    />


);

export default Hr;