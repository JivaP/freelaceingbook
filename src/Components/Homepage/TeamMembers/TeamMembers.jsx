// import React, { useState, useEffect } from 'react';
// import { Grid, Card, CardMedia, CardContent, Typography, Button, Container } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';

// const teamMembers = [
//     {
//         name: 'Alia Bhatt',
//         images: [
//             '/assert/team/item1.png',
//             '/assert/team/item12.png',
//             '/assert/team/item13.png',
//         ],
//         alt: 'Book Now - Alia Bhatt',
//     },
//     {
//         name: 'Shruthi Hassan',
//         images: [
//             '/assert/team/item2.png',
//             '/assert/team/item22.png',
//             '/assert/team/item23.png',
//         ],
//         alt: 'Book Now - Shruthi Hassan',
//     },
//     {
//         name: 'Ileana D-cruz',
//         images: [
//             '/assert/team/item3.png',
//             '/assert/team/item32.png',
//             '/assert/team/item33.png',
//         ],
//         alt: 'Book Now - Ileana D-cruz',
//     },
//     {
//         name: 'Katrina Kaif',
//         images: [
//             '/assert/team/item42.png',
//             '/assert/team/item43.png',
//             '/assert/team/item4.png',
//         ],
//         alt: 'Book Now - Katrina Kaif',
//     },
// ];

// const fadeVariants = {
//     initial: { opacity: 0, scale: 0.9 },
//     animate: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
//     exit: { opacity: 0, scale: 0.9, transition: { duration: 0.8 } },
// };

// export default function TeamMembers() {
//     // Store current visible image index for each member
//     const [currentIndex, setCurrentIndex] = useState(
//         Array(teamMembers.length).fill(0)
//     );

//     useEffect(() => {
//         // Auto-slide every 3 seconds
//         const interval = setInterval(() => {
//             setCurrentIndex((prev) =>
//                 prev.map((index, i) =>
//                     (index + 1) % teamMembers[i].images.length
//                 )
//             );
//         }, 3000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <Container>
//             <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'start', marginBottom: 4, fontFamily: 'Montserrat', fontWeight: 500 }}>
//                 Celebrity Zone
//             </Typography>
//             <Grid container spacing={3} sx={{ p: 2 }}>
//                 {teamMembers.map((member, i) => (
//                     <Grid size={{ xs: 12, sm: 6, md: 3 }} key={member.name}>
//                         <Card
//                             sx={{
//                                 height: '100%',
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 alignItems: 'center',
//                                 p: 2,
//                                 boxShadow: "none",
//                                 borderRadius: 3,
//                             }}
//                         >
//                             <div
//                                 style={{
//                                     position: 'relative',
//                                     width: '100%',
//                                     height:"100%",
//                                     paddingTop: '150%', // 1:1 aspect ratio square
//                                     overflow: 'hidden',
//                                     borderRadius: 8,
//                                     marginBottom: 16,
//                                 }}
//                             >
//                                 <AnimatePresence initial={false} mode="wait">
//                                     <motion.img
//                                         key={member.images[currentIndex[i]]}
//                                         src={member.images[currentIndex[i]]}
//                                         alt={member.alt}
//                                         variants={fadeVariants}
//                                         initial="initial"
//                                         animate="animate"
//                                         exit="exit"
//                                         style={{
//                                             position: 'absolute',
//                                             top: 0,
//                                             left: 0,
//                                             width: '100%',
//                                             height: '100%',
//                                             objectFit: 'cover',
//                                             borderRadius: 8,
//                                         }}
//                                     />
//                                 </AnimatePresence>
//                             </div>

//                             <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
//                                 <Typography variant="h6" component="div" gutterBottom>
//                                     {member.name}
//                                 </Typography>
//                             </CardContent>
//                             <Button
//                                 variant="contained"
//                                 color="primary"
//                                 href="book-now.php"
//                                 sx={{ width: '100%' }}
//                             >
//                                 BOOK NOW
//                             </Button>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </Container>
//     );
// }
import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Button, Container, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const teamMembers = [
    {
        name: 'Alia Bhatt',
        images: ['/assert/team/item1.png', '/assert/team/item12.png', '/assert/team/item13.png'],
        alt: 'Book Now - Alia Bhatt',
    },
    {
        name: 'Shruthi Hassan',
        images: ['/assert/team/item2.png', '/assert/team/item22.png', '/assert/team/item23.png'],
        alt: 'Book Now - Shruthi Hassan',
    },
    {
        name: 'Ileana D-cruz',
        images: ['/assert/team/item3.png', '/assert/team/item32.png', '/assert/team/item33.png'],
        alt: 'Book Now - Ileana D-cruz',
    },
    {
        name: 'Katrina Kaif',
        images: ['/assert/team/item42.png', '/assert/team/item43.png', '/assert/team/item4.png'],
        alt: 'Book Now - Katrina Kaif',
    },
];

const fadeVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.8 } },
};

export default function TeamMembers() {
    const [currentIndex, setCurrentIndex] = useState(Array(teamMembers.length).fill(0));

    useEffect(() => {
        // Show index 0 for 3s, then change one-by-one every 2s
        const timeouts = [];

        teamMembers.forEach((member, idx) => {
            let index = 0;

            const updateSlide = () => {
                index = (index + 1) % member.images.length;
                setCurrentIndex(prev => {
                    const updated = [...prev];
                    updated[idx] = index;
                    return updated;
                });
            };

            const delay = 3000 + idx * 2000; // start each after 2s gap
            timeouts[idx] = setTimeout(function intervalFn() {
                updateSlide();
                timeouts[idx] = setInterval(updateSlide, 6000); // loop every 6s per card
            }, delay);
        });

        return () => {
            timeouts.forEach(t => clearInterval(t));
        };
    }, []);

    return (
        <Box sx={{ backgroundColor: "#ffffffff", }}>

            <Container>
                <Typography variant="h3" gutterBottom sx={{ textAlign: 'start', py: 4, fontFamily: 'Montserrat', fontWeight: 500 }}>
                    Celebrity Zone
                </Typography>

                <Grid container spacing={3}>
                    {teamMembers.map((member, i) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={member.name}>
                            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 'none', borderRadius: 3 }}>
                                <div
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        paddingTop: '120%',
                                        overflow: 'hidden',
                                        borderRadius: 12,
                                    }}
                                >
                                    <AnimatePresence mode="wait" initial={false}>
                                        <motion.img
                                            key={member.images[currentIndex[i]]}
                                            src={member.images[currentIndex[i]]}
                                            alt={member.alt}
                                            variants={fadeVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: 'auto',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </AnimatePresence>
                                </div>

                                <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                                    <Typography variant="h6" gutterBottom>
                                        {member.name}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        href="book-now.php"
                                        fullWidth
                                        sx={{
                                            border: '1px solid #e30f5f',
                                            color: '#e30f5f',
                                            overflow: 'hidden', p: 2,
                                            borderRadius: "12px",
                                            transition: 'all 0.4s ease-in-out',
                                            '&:hover': {
                                                borderColor: '#888',
                                                backgroundColor: '#888',
                                                color: '#fff',
                                            },
                                        }}
                                    >
                                        BOOK NOW
                                    </Button>


                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
