
// import React, { useState } from 'react';
// import {
//     AppBar,
//     Toolbar,
//     IconButton,
//     Typography,
//     Box,
//     Container,
//     Menu,
//     MenuItem,
//     Button,
//     Link as MuiLink,
// } from '@mui/material';
// import {
//     Facebook,
//     Twitter,
//     LinkedIn,
//     YouTube,
//     Menu as MenuIcon,
//     ExpandMore,
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import './Header.css'; // optional for global styles

// const navItems = [
//     { label: 'Home', path: '/' },
//     { label: 'About Us', path: '/aboutus' },
//     { label: 'Services', path: '/services' },
//     { label: 'Previous Events', path: '/events' },
//     {
//         label: 'Artist',
//         nested: [
//             { label: 'Celebrities', path: '/celebrities' },
//             { label: 'Singers', path: '/singers' },
//         ],
//     },
//     { label: 'Book Now', path: '/book-now' },
//     { label: 'Connect', path: '/contact' },
// ];

// export default function CustomHeader() {
//     const [anchorEl, setAnchorEl] = useState(null);
//     const [nestedMenu, setNestedMenu] = useState(null);

//     const handleMenuOpen = (event, nested) => {
//         setAnchorEl(event.currentTarget);
//         setNestedMenu(nested);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//         setNestedMenu(null);
//     };

//     return (
//         <Box bgcolor="#000000" py={2}>
//             {/* Top Bar: Social Icons */}
//             <Box >
//                 <Container>
//                     <Box display="flex" justifyContent="start" gap={1}>
//                         <IconButton component="a" href="https://www.facebook.com/celebsbooking" sx={{ color: 'white' }}><Facebook /></IconButton>
//                         <IconButton component="a" href="https://mobile.twitter.com/vikasgade" sx={{ color: 'white' }}><Twitter /></IconButton>
//                         <IconButton component="a" href="https://in.linkedin.com/in/vikasgade" sx={{ color: 'white' }}><LinkedIn /></IconButton>
//                         <IconButton component="a" href="#" sx={{ color: 'white' }}><YouTube /></IconButton>
//                     </Box>
//                 </Container>
//             </Box>

//             {/* AppBar */}
//             <AppBar position="static" sx={{ bgcolor: "#000000" }} elevation={1}>
//                 <Container>
//                     <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
//                         {/* Logo */}
//                         <motion.div
//                             initial={{ opacity: 0, y: -20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5 }}
//                         >
//                             <MuiLink component={Link} to="/" underline="none">
//                                 <Typography
//                                     variant="h4"
//                                     sx={{ fontWeight: 500, color: '#e30f5f', fontFamily: 'Montserrat' }}
//                                     className="logo__heading"
//                                 >
//                                     CELEBSBOOKING
//                                 </Typography>
//                                 <Typography
//                                     variant="subtitle2"
//                                     sx={{ fontFamily: 'Lato', lineHeight: 1, textTransform: "uppercase", letterSpacing: "7px",color:"#888" }}
//                                 >
//                                     Celebrity Management
//                                 </Typography>
//                             </MuiLink>
//                         </motion.div>

//                         {/* Desktop Navigation */}
//                         <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
//                             {navItems.map((item, index) =>
//                                 item.nested ? (
//                                     <Button
//                                         key={index}
//                                         onClick={(e) => handleMenuOpen(e, item.nested)}
//                                         endIcon={null}
//                                         sx={{
//                                             fontFamily: 'Lato',
//                                             textTransform: 'uppercase',
//                                             color: 'white',
//                                             fontWeight: 400,
//                                             fontSize: '14px',
//                                             lineHeight: '20px',
//                                             position: 'relative',
//                                             paddingBottom: '4px',
//                                             '&::after': {
//                                                 content: '""',
//                                                 position: 'absolute',
//                                                 width: '100%',
//                                                 height: '2px',
//                                                 backgroundColor: '#e30f5f',
//                                                 bottom: 0,
//                                                 left: 0,
//                                                 transform: 'scaleX(0)',
//                                                 transformOrigin: 'left',
//                                                 transition: 'transform 0.3s ease',
//                                             },
//                                             '&:hover': {
//                                                 color: '#e30f5f',
//                                                 '&::after': {
//                                                     transform: 'scaleX(1)',
//                                                 },
//                                                 svg: {
//                                                     color: '#e30f5f',
//                                                 },
//                                             },
//                                         }}
//                                     >
//                                         <Box display="flex" alignItems="center" gap={0.5}>
//                                             {item.label}
//                                             <ExpandMore sx={{ color: 'white', transition: 'color 0.3s ease' }} />
//                                         </Box>
//                                     </Button>
//                                 ) : (
//                                     <Button
//                                         key={index}
//                                         component={Link}
//                                         to={item.path}
//                                         sx={{
//                                             fontFamily: 'Lato',
//                                             textTransform: 'uppercase',
//                                             color: 'white',
//                                             fontWeight: 400,
//                                             fontSize: '14px',
//                                             lineHeight: '20px',
//                                             position: 'relative',
//                                             paddingBottom: '4px',
//                                             '&::after': {
//                                                 content: '""',
//                                                 position: 'absolute',
//                                                 width: '100%',
//                                                 height: '2px',
//                                                 backgroundColor: '#e30f5f',
//                                                 bottom: 0,
//                                                 left: 0,
//                                                 transform: 'scaleX(0)',
//                                                 transformOrigin: 'left',
//                                                 transition: 'transform 0.3s ease',
//                                             },
//                                             '&:hover': {
//                                                 color: '#e30f5f',
//                                                 '&::after': {
//                                                     transform: 'scaleX(1)',
//                                                 },
//                                             },
//                                         }}
//                                     >
//                                         {item.label}
//                                     </Button>
//                                 )
//                             )}

//                             {/* Dropdown Menu for Nested Items */}
//                             <Menu
//                                 anchorEl={anchorEl}
//                                 open={Boolean(anchorEl)}
//                                 onClose={handleMenuClose}
//                             >
//                                 {nestedMenu?.map((subItem, idx) => (
//                                     <MenuItem
//                                         key={idx}
//                                         component={Link}
//                                         to={subItem.path}
//                                         onClick={handleMenuClose}
//                                     >
//                                         {subItem.label}
//                                     </MenuItem>
//                                 ))}
//                             </Menu>
//                         </Box>

//                         {/* Mobile Menu Icon */}
//                         <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//                             <IconButton>
//                                 <MenuIcon sx={{ color: 'white' }} />
//                             </IconButton>
//                         </Box>
//                     </Toolbar>
//                 </Container>
//             </AppBar>
//         </Box>
//     );
// }
import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
    Container,
    Menu,
    MenuItem,
    Button,
    Link as MuiLink,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Collapse,
} from '@mui/material';
import {
    Facebook,
    Twitter,
    LinkedIn,
    YouTube,
    Menu as MenuIcon,
    ExpandMore,
    ExpandLess,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "../../App.css"

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/aboutus' },
    { label: 'Services', path: '/services' },
    { label: 'Previous Events', path: '/events' },
    {
        label: 'Artist',
        nested: [
            { label: 'Celebrities', path: '/celebrities' },
            { label: 'Singers', path: '/singers' },
        ],
    },
    { label: 'Book Now', path: '/book-now' },
    { label: 'Connect', path: '/contact' },
];

export default function CustomHeader() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [nestedMenu, setNestedMenu] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [expandedNested, setExpandedNested] = useState(false);

    const handleMenuOpen = (event, nested) => {
        setAnchorEl(event.currentTarget);
        setNestedMenu(nested);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setNestedMenu(null);
    };

    const toggleMobileDrawer = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : 'auto';
    }, [mobileOpen]);

    return (
        <Box sx={{
            bgcolor: '#000000',
            px: 2,
            py: 2
        }}>
            {/* Top Social Icons Bar */}
            <Box

            >
                <Container>
                    <Box display="flex" justifyContent="start" gap={1}>
                        <IconButton component="a" href="https://www.facebook.com/celebsbooking" sx={{ color: 'white' }}><Facebook /></IconButton>
                        <IconButton component="a" href="https://mobile.twitter.com/vikasgade" sx={{ color: 'white' }}><Twitter /></IconButton>
                        <IconButton component="a" href="https://in.linkedin.com/in/vikasgade" sx={{ color: 'white' }}><LinkedIn /></IconButton>
                        <IconButton component="a" href="#" sx={{ color: 'white' }}><YouTube /></IconButton>
                    </Box>
                </Container>
            </Box>

            {/* Sticky AppBar */}
            <AppBar
                position="sticky"
                sx={{
                    bgcolor: '#000000',
                    // zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                elevation={1}
            >
                <Container>
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between', zIndex: 999 }}>
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <MuiLink component={Link} to="/" underline="none">
                                <Typography
                                    variant="h4"
                                    sx={{ fontWeight: 500, color: '#e30f5f', fontFamily: 'Montserrat' }}
                                >
                                    CELEBSBOOKING
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        fontFamily: 'Lato',
                                        lineHeight: 1,
                                        textTransform: 'uppercase',
                                        letterSpacing: '7px',
                                        color: '#888',
                                    }}
                                >
                                    Celebrity Management
                                </Typography>
                            </MuiLink>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                            {navItems.map((item, index) =>
                                item.nested ? (
                                    <Button
                                        key={index}
                                        onClick={(e) => handleMenuOpen(e, item.nested)}
                                        sx={{
                                            fontFamily: 'Lato',
                                            textTransform: 'uppercase',
                                            color: 'white',
                                            fontWeight: 400,
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            position: 'relative',
                                            paddingBottom: '4px',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                width: '100%',
                                                height: '2px',
                                                backgroundColor: '#e30f5f',
                                                bottom: 0,
                                                left: 0,
                                                transform: 'scaleX(0)',
                                                transformOrigin: 'left',
                                                transition: 'transform 0.3s ease',
                                            },
                                            '&:hover': {
                                                color: '#e30f5f',
                                                '&::after': {
                                                    transform: 'scaleX(1)',
                                                },
                                            },
                                        }}
                                    >
                                        <Box display="flex" alignItems="center" gap={0.5}>
                                            {item.label}
                                            <ExpandMore sx={{ color: 'white' }} />
                                        </Box>
                                    </Button>
                                ) : (
                                    <Button
                                        key={index}
                                        component={Link}
                                        to={item.path}
                                        sx={{
                                            fontFamily: 'Lato',
                                            textTransform: 'uppercase',
                                            color: 'white',
                                            fontWeight: 400,
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            position: 'relative',
                                            paddingBottom: '4px',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                width: '100%',
                                                height: '2px',
                                                backgroundColor: '#e30f5f',
                                                bottom: 0,
                                                left: 0,
                                                transform: 'scaleX(0)',
                                                transformOrigin: 'left',
                                                transition: 'transform 0.3s ease',
                                            },
                                            '&:hover': {
                                                color: '#e30f5f',
                                                '&::after': {
                                                    transform: 'scaleX(1)',
                                                },
                                            },
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                )
                            )}

                            {/* Desktop Dropdown Menu */}
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                {nestedMenu?.map((subItem, idx) => (
                                    <MenuItem
                                        key={idx}
                                        component={Link}
                                        to={subItem.path}

                                        onClick={handleMenuClose}
                                    >
                                        {subItem.label}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        {/* Mobile Menu Icon */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton onClick={toggleMobileDrawer}>
                                <MenuIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer anchor="left" open={mobileOpen} onClose={toggleMobileDrawer}>
                <Box
                    sx={{
                        width: 430,
                        bgcolor: '#000',
                        height: '100%',
                        color: '#fff',
                    }}
                    role="presentation"
                    onClick={toggleMobileDrawer}
                >
                    <List>
                        {navItems.map((item, index) =>
                            item.nested ? (
                                <React.Fragment key={index}>
                                    <ListItem button onClick={() => setExpandedNested(!expandedNested)}>
                                        <ListItemText primary={item.label} />
                                        {expandedNested ? <ExpandLess /> : <ExpandMore />}
                                    </ListItem>
                                    <Collapse in={expandedNested} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {item.nested.map((subItem, idx) => (
                                                <ListItem
                                                    button
                                                    key={idx}
                                                    component={Link}
                                                    to={subItem.path}
                                                    sx={{ pl: 4, fontFamily: 'Lato', }}
                                                >
                                                    <ListItemText primary={subItem.label} sx={{ fontFamily: 'Lato', }} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Collapse>
                                </React.Fragment>
                            ) : (
                                <ListItem button key={index} component={Link} to={item.path} sx={{ fontFamily: 'Lato', }}>
                                    <ListItemText primary={item.label} sx={{
                                        fontFamily: 'Lato',
                                        textTransform: 'capitalize',
                                        color: 'white',
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        position: 'relative',
                                        paddingBottom: '4px',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            width: '100%',
                                            height: '2px',
                                            backgroundColor: '#e30f5f',
                                            bottom: 0,
                                            left: 0,
                                            transform: 'scaleX(0)',
                                            transformOrigin: 'left',
                                            transition: 'transform 0.3s ease',
                                        },
                                        '&:hover': {
                                            color: '#e30f5f',
                                            '&::after': {
                                                transform: 'scaleX(1)',
                                            },
                                        },
                                    }} />
                                </ListItem>
                            )
                        )}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}
