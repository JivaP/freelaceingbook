// import React from 'react';
// import {
//     Grid,
//     Card,
//     CardMedia,
//     CardContent,
//     Typography,
//     Box,
//     CardActionArea,
//     Container,
// } from '@mui/material';
// import { motion } from 'framer-motion';

// const celebrities = [
//     {
//         name: 'Rashmika Mandanna',
//         image: '/assert/Celebrities/ras5.jpg',
//         url: '/assert/Celebrities/ras5.jpg',
//     },
//     {
//         name: 'Katrina Kaif',
//         image: '/assert/Celebrities/Katrina.jpg',
//         url: '/assert/Celebrities/Katrina.jpg',
//     },
//     {
//         name: 'Alia Bhatt',
//         image: '/assert/Celebrities/Alia.jpg',
//         url: '/assert/Celebrities/alia.php',
//     },
//     {
//         name: 'Shruti Hassan',
//         image: '/assert/Celebrities/Shruti.jpg',
//         url: '/assert/Celebrities/shruti.php',
//     },
//     {
//         name: 'Ileana DCruz',
//         image: '/assert/Celebrities/Ileana.jpg',
//         url: '/assert/Celebrities/ileana.php',
//     },
//     {
//         name: 'Radhika Madan',
//         image: '/assert/Celebrities/Radhika.jpg',
//         url: '/assert/Celebrities/radhika.php',
//     },
//     {
//         name: 'Divyanka Tripathi',
//         image: '/assert/Celebrities/Divyanka.jpg',
//         url: '/assert/Celebrities/divyanka.php',
//     },
//     {
//         name: 'Dia Mirza',
//         image: '/assert/Celebrities/diyamirza.jpg',
//         url: '/assert/Celebrities/dia-mirza.php',
//         wide: true,
//     },
// ];

// const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//         opacity: 1,
//         y: 0,
//         transition: { delay: i * 0.1, duration: 0.6 },
//     }),
// };

// const CelebrityProjects = () => {
//     return (
//         <Box sx={{ backgroundColor: "#ffffffff", }}>
//             <Container>
//                 <Typography variant="h3" gutterBottom sx={{ textAlign: 'start', py: 4, fontFamily: 'Montserrat', fontWeight: 500 }}>
//                     Celebrities
//                 </Typography>
//                 <Grid container spacing={2}>
//                     {celebrities.map((celeb, index) => (
//                         <Grid
//                             size={{ xs: 12, sm: 6, md: celeb.wide ? 8 : 4 }}
//                             key={celeb.name}
//                             component={motion.div}
//                             custom={index}
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true }}
//                             variants={cardVariants}
//                             sx={{ position: 'relative', background: "transparent" }}
//                         >
//                             <a href={celeb.url} style={{ textDecoration: 'none' }}>
//                                 <Card
//                                     sx={{
//                                         height: '100%',
//                                         overflow: 'hidden', boxShadow: "none"


//                                     }}

//                                 >
//                                     <CardActionArea
//                                         sx={{

//                                             '&:hover .nameOverlay': {
//                                                 backgroundColor: '#e30f5fa8',
//                                                 color: '#fff',
//                                                 display: "block"
//                                             },
//                                         }}
//                                     >
//                                         <CardMedia
//                                             component="img"
//                                             width="100%"
//                                             height="100%"
//                                             image={celeb.image}
//                                             alt={celeb.name}
//                                             sx={{ objectFit: 'cover' }}
//                                         />
//                                         <Box
//                                             className="nameOverlay"
//                                             sx={{
//                                                 textAlign: 'center',
//                                                 p: 2,
//                                                 width: '100%',
//                                                 // backgroundColor: '#f5f5f5',
//                                                 transition: 'all 0.3s ease',
//                                                 position: 'absolute',
//                                                 top: "0",
//                                                 bottom: "0",
//                                                 my: "auto",
//                                                 display: "none",
//                                                 alignItems: "center",

//                                             }}
//                                         >
//                                             <Typography
//                                                 variant="h6"
//                                                 fontWeight="bold"
//                                                 sx={{ textTransform: 'capitalize', textAlign: "center", my: "auto" }}
//                                             >
//                                                 {celeb.name}
//                                             </Typography>
//                                         </Box>
//                                     </CardActionArea>
//                                 </Card>
//                             </a>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Container>
//         </Box>
//     );
// };

// export default CelebrityProjects;
import React from 'react';
import {
    Card,
    CardMedia,
    CardActionArea,
    Typography,
    Box,
    Container,
} from '@mui/material';
import { Masonry } from '@mui/lab';
import { motion } from 'framer-motion';

const celebrities = [
    {
        name: 'Rashmika Mandanna',
        image: '/assert/Celebrities/ras5.jpg',
        url: '/assert/Celebrities/ras5.jpg',
    },
    {
        name: 'Katrina Kaif',
        image: '/assert/Celebrities/Katrina.jpg',
        url: '/assert/Celebrities/Katrina.jpg',
    },
    {
        name: 'Alia Bhatt',
        image: '/assert/Celebrities/Alia.jpg',
        url: '/assert/Celebrities/alia.php',
    },
    {
        name: 'Shruti Hassan',
        image: '/assert/Celebrities/Shruti.jpg',
        url: '/assert/Celebrities/shruti.php',
    },
    {
        name: 'Ileana DCruz',
        image: '/assert/Celebrities/Ileana.jpg',
        url: '/assert/Celebrities/ileana.php',
    },
    {
        name: 'Radhika Madan',
        image: '/assert/Celebrities/Radhika.jpg',
        url: '/assert/Celebrities/radhika.php',
    },
    {
        name: 'Divyanka Tripathi',
        image: '/assert/Celebrities/Divyanka.jpg',
        url: '/assert/Celebrities/divyanka.php',
    },
    {
        name: 'Dia Mirza',
        image: '/assert/Celebrities/diyamirza.jpg',
        url: '/assert/Celebrities/dia-mirza.php',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6 },
    }),
};

const CelebrityProjects = () => {
    return (
        <Box sx={{ backgroundColor: '#fff' }}>
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ textAlign: 'start', fontFamily: 'Montserrat', fontWeight: 500 }}
                >
                    Celebrities
                </Typography>

                <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
                    {celebrities.map((celeb, index) => (
                        <Box
                            key={celeb.name}
                            component={motion.div}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            sx={{ cursor: 'pointer' }}
                        >
                            <a href={celeb.url} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                <Card
                                    sx={{
                                        overflow: 'hidden',
                                        boxShadow: 'none',
                                        borderRadius: 2,
                                        position: 'relative',
                                    }}
                                >
                                    <CardActionArea
                                        sx={{
                                            position: 'relative',
                                            '&:hover .nameOverlay': {
                                                backgroundColor: 'rgba(227, 15, 95, 0.65)', // pinkish overlay
                                                color: '#fff',
                                                display: 'flex',
                                            },
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={celeb.image}
                                            alt={celeb.name}
                                            loading="lazy"
                                            sx={{
                                                width: '100%',
                                                display: 'block',
                                                borderRadius: 2,
                                            }}
                                        />
                                        <Box
                                            className="nameOverlay"
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                display: 'none',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                transition: 'all 0.3s ease',
                                                borderRadius: 2,
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                fontWeight="bold"
                                                sx={{ textTransform: 'capitalize', textAlign: 'center',fontFamily:"Montserrat" }}
                                            >
                                                {celeb.name}
                                            </Typography>
                                        </Box>
                                    </CardActionArea>
                                </Card>
                            </a>
                        </Box>
                    ))}
                </Masonry>
            </Container>
        </Box>
    );
};

export default CelebrityProjects;
