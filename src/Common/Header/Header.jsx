
// import React, { useState, useEffect } from 'react';
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
//     Drawer,
//     List,
//     ListItem,
//     ListItemText,
//     Collapse,
// } from '@mui/material';
// import {
//     Facebook,
//     Twitter,
//     LinkedIn,
//     YouTube,
//     Menu as MenuIcon,
//     ExpandMore,
//     ExpandLess,
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import "../../App.css"

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
//     const [mobileOpen, setMobileOpen] = useState(false);
//     const [expandedNested, setExpandedNested] = useState(false);

//     const handleMenuOpen = (event, nested) => {
//         setAnchorEl(event.currentTarget);
//         setNestedMenu(nested);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//         setNestedMenu(null);
//     };

//     const toggleMobileDrawer = () => {
//         setMobileOpen(!mobileOpen);
//     };

//     useEffect(() => {
//         document.body.style.overflow = mobileOpen ? 'hidden' : 'auto';
//     }, [mobileOpen]);

//     return (
//         <Box sx={{
//             bgcolor: '#000000',
//             px: 2,
//             py: 2
//         }}>
//             {/* Top Social Icons Bar */}
//             <Box

//             >
//                 <Container>
//                     <Box display="flex" justifyContent="start" gap={1}>
//                         <IconButton component="a" href="https://www.facebook.com/celebsbooking" sx={{ color: 'white' }}><Facebook /></IconButton>
//                         <IconButton component="a" href="https://mobile.twitter.com/vikasgade" sx={{ color: 'white' }}><Twitter /></IconButton>
//                         <IconButton component="a" href="https://in.linkedin.com/in/vikasgade" sx={{ color: 'white' }}><LinkedIn /></IconButton>
//                         <IconButton component="a" href="#" sx={{ color: 'white' }}><YouTube /></IconButton>
//                     </Box>
//                 </Container>
//             </Box>

//             {/* Sticky AppBar */}
//             <AppBar
//                 position="sticky"
//                 sx={{
//                     bgcolor: '#000000',
//                     // zIndex: (theme) => theme.zIndex.drawer + 1,
//                 }}
//                 elevation={1}
//             >
//                 <Container>
//                     <Toolbar disableGutters sx={{ justifyContent: 'space-between', zIndex: 999 }}>
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
//                                 >
//                                     Celeb India Vision
//                                 </Typography>
//                                 <Typography
//                                     variant="subtitle2"
//                                     sx={{
//                                         fontFamily: 'Lato',
//                                         lineHeight: 1,
//                                         textTransform: 'uppercase',
//                                         letterSpacing: '7px',
//                                         color: '#888',
//                                     }}
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
//                                         sx={{
//                                             fontFamily: 'Lato',
//                                             textTransform: 'uppercase',
//                                             color: 'white',
//                                             fontWeight: 400,
//                                             fontSize: '12px',
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
//                                         <Box display="flex" alignItems="center" gap={0.5}>
//                                             {item.label}
//                                             <ExpandMore sx={{ color: 'white' }} />
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
//                                             fontSize: '12px',
//                                             letterSpacing: '2px',
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

//                             {/* Desktop Dropdown Menu */}
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
//                             <IconButton onClick={toggleMobileDrawer}>
//                                 <MenuIcon sx={{ color: 'white' }} />
//                             </IconButton>
//                         </Box>
//                     </Toolbar>
//                 </Container>
//             </AppBar>

//             {/* Mobile Drawer */}
//             <Drawer anchor="left" open={mobileOpen} onClose={toggleMobileDrawer}>
//                 <Box
//                     sx={{
//                         width: 430,
//                         bgcolor: '#000',
//                         height: '100%',
//                         color: '#fff',
//                     }}
//                     role="presentation"
//                     onClick={toggleMobileDrawer}
//                 >
//                     <List>
//                         {navItems.map((item, index) =>
//                             item.nested ? (
//                                 <React.Fragment key={index}>
//                                     <ListItem button onClick={() => setExpandedNested(!expandedNested)}>
//                                         <ListItemText primary={item.label} />
//                                         {expandedNested ? <ExpandLess /> : <ExpandMore />}
//                                     </ListItem>
//                                     <Collapse in={expandedNested} timeout="auto" unmountOnExit>
//                                         <List component="div" disablePadding>
//                                             {item.nested.map((subItem, idx) => (
//                                                 <ListItem
//                                                     button
//                                                     key={idx}
//                                                     component={Link}
//                                                     to={subItem.path}
//                                                     sx={{ pl: 4, fontFamily: 'Lato', }}
//                                                 >
//                                                     <ListItemText primary={subItem.label} sx={{ fontFamily: 'Lato', }} />
//                                                 </ListItem>
//                                             ))}
//                                         </List>
//                                     </Collapse>
//                                 </React.Fragment>
//                             ) : (
//                                 <ListItem button key={index} component={Link} to={item.path} sx={{ fontFamily: 'Lato', }}>
//                                     <ListItemText primary={item.label} sx={{
//                                         fontFamily: 'Lato',
//                                         textTransform: 'capitalize',
//                                         color: 'white',
//                                         fontWeight: 400,
//                                         fontSize: '14px',
//                                         lineHeight: '20px',
//                                         position: 'relative',
//                                         paddingBottom: '4px',
//                                         '&::after': {
//                                             content: '""',
//                                             position: 'absolute',
//                                             width: '100%',
//                                             height: '2px',
//                                             backgroundColor: '#e30f5f',
//                                             bottom: 0,
//                                             left: 0,
//                                             transform: 'scaleX(0)',
//                                             transformOrigin: 'left',
//                                             transition: 'transform 0.3s ease',
//                                         },
//                                         '&:hover': {
//                                             color: '#e30f5f',
//                                             '&::after': {
//                                                 transform: 'scaleX(1)',
//                                             },
//                                         },
//                                     }} />
//                                 </ListItem>
//                             )
//                         )}
//                     </List>
//                 </Box>
//             </Drawer>
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
    useMediaQuery,
    useTheme,
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
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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

    const toggleNestedMenu = () => {
        setExpandedNested(!expandedNested);
    };

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [mobileOpen]);

    return (
        <Box sx={{
            bgcolor: '#000000',
            px: { xs: 1, sm: 2 },
            py: { xs: 1, sm: 2 }
        }}>
            {/* Top Social Icons Bar - Hidden on mobile */}
            {!isMobile && (
                <Container>
                    <Box display="flex" justifyContent="start" gap={1}>
                        <IconButton component="a" href="https://www.facebook.com/celebsbooking" sx={{ color: 'white' }}><Facebook /></IconButton>
                        <IconButton component="a" href="https://mobile.twitter.com/vikasgade" sx={{ color: 'white' }}><Twitter /></IconButton>
                        <IconButton component="a" href="https://in.linkedin.com/in/vikasgade" sx={{ color: 'white' }}><LinkedIn /></IconButton>
                        <IconButton component="a" href="#" sx={{ color: 'white' }}><YouTube /></IconButton>
                    </Box>
                </Container>
            )}

            {/* Sticky AppBar */}
            <AppBar
                position="sticky"
                sx={{
                    bgcolor: '#000000',
                    boxShadow: 'none',
                    // borderBottom: '1px solid rgba(255,255,255,0.1)',
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: { xs: 1, md: 0 } }}>
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <MuiLink component={Link} to="/" underline="none">
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: 500,
                                        color: '#e30f5f',
                                        fontFamily: 'Montserrat',
                                        fontSize: { xs: '1.5rem', sm: '2rem' }
                                    }}
                                >
                                    Celeb India Vision
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        fontFamily: 'Lato',
                                        lineHeight: 1,
                                        textTransform: 'uppercase',
                                        letterSpacing: { xs: '3px', sm: '7px' },
                                        fontSize: { xs: '0.5rem', sm: '0.7rem' },
                                        color: '#888',
                                    }}
                                >
                                    Celebrity Management
                                </Typography>
                            </MuiLink>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
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
                                            fontSize: '0.75rem',
                                            letterSpacing: '1px',
                                            minWidth: 'auto',
                                            px: 1.5,
                                            position: 'relative',
                                            '&:hover': {
                                                color: '#e30f5f',
                                                '&::after': {
                                                    transform: 'scaleX(1)',
                                                },
                                            },
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                width: 'calc(100% - 24px)',
                                                height: '2px',
                                                backgroundColor: '#e30f5f',
                                                bottom: 0,
                                                left: '12px',
                                                transform: 'scaleX(0)',
                                                transformOrigin: 'center',
                                                transition: 'transform 0.3s ease',
                                            },
                                        }}
                                    >
                                        <Box display="flex" alignItems="center" gap={0.5}>
                                            {item.label}
                                            <ExpandMore sx={{
                                                color: 'inherit',
                                                fontSize: '1rem',
                                            }} />
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
                                            fontSize: '0.75rem',
                                            letterSpacing: '1px',
                                            minWidth: 'auto',
                                            px: 1.5,
                                            position: 'relative',
                                            '&:hover': {
                                                color: '#e30f5f',
                                                '&::after': {
                                                    transform: 'scaleX(1)',
                                                },
                                            },
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                width: 'calc(100% - 24px)',
                                                height: '2px',
                                                backgroundColor: '#e30f5f',
                                                bottom: 0,
                                                left: '12px',
                                                transform: 'scaleX(0)',
                                                transformOrigin: 'center',
                                                transition: 'transform 0.3s ease',
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
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                sx={{
                                    '& .MuiPaper-root': {
                                        bgcolor: '#000',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                    }
                                }}
                            >
                                {nestedMenu?.map((subItem, idx) => (
                                    <MenuItem
                                        key={idx}
                                        component={Link}
                                        to={subItem.path}
                                        onClick={handleMenuClose}
                                        sx={{
                                            color: 'white',
                                            '&:hover': {
                                                color: '#e30f5f',
                                                bgcolor: 'rgba(255,255,255,0.05)',
                                            },
                                        }}
                                    >
                                        {subItem.label}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        {/* Mobile Menu Button */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                onClick={toggleMobileDrawer}
                                sx={{ color: 'white' }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={toggleMobileDrawer}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: { xs: '80%', sm: '60%' },
                        maxWidth: '400px',
                        bgcolor: '#000',
                        color: '#fff',
                    }
                }}
            >
                <Box
                    role="presentation"
                    sx={{ height: '100%' }}
                >
                    <List sx={{ py: 2 }}>
                        {navItems.map((item, index) =>
                            item.nested ? (
                                <React.Fragment key={index}>
                                    <ListItem
                                        button
                                        onClick={toggleNestedMenu}
                                        sx={{
                                            '&:hover': {
                                                color: '#e30f5f',
                                            },
                                        }}
                                    >
                                        <ListItemText
                                            primary={item.label}
                                            primaryTypographyProps={{
                                                fontFamily: 'Lato',
                                                textTransform: 'uppercase',
                                                fontWeight: 500,
                                            }}
                                        />
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
                                                    onClick={toggleMobileDrawer}
                                                    sx={{
                                                        pl: 4,
                                                        '&:hover': {
                                                            color: '#e30f5f',
                                                            bgcolor: 'rgba(255,255,255,0.05)',
                                                        },
                                                    }}
                                                >
                                                    <ListItemText
                                                        primary={subItem.label}
                                                        primaryTypographyProps={{
                                                            fontFamily: 'Lato',
                                                            textTransform: 'uppercase',
                                                            fontSize: '0.9rem',
                                                        }}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Collapse>
                                </React.Fragment>
                            ) : (
                                <ListItem
                                    button
                                    key={index}
                                    component={Link}
                                    to={item.path}
                                    onClick={toggleMobileDrawer}
                                    sx={{
                                        '&:hover': {
                                            color: '#e30f5f',
                                            bgcolor: 'rgba(255,255,255,0.05)',
                                        },
                                    }}
                                >
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{
                                            fontFamily: 'Lato',
                                            textTransform: 'uppercase',
                                            fontWeight: 500,
                                        }}
                                    />
                                </ListItem>
                            )
                        )}
                    </List>

                    {/* Mobile Social Icons */}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 1,
                        mt: 'auto',
                        py: 3,
                        borderTop: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <IconButton component="a" href="https://www.facebook.com/celebsbooking" sx={{ color: 'white' }}><Facebook /></IconButton>
                        <IconButton component="a" href="https://mobile.twitter.com/vikasgade" sx={{ color: 'white' }}><Twitter /></IconButton>
                        <IconButton component="a" href="https://in.linkedin.com/in/vikasgade" sx={{ color: 'white' }}><LinkedIn /></IconButton>
                        <IconButton component="a" href="#" sx={{ color: 'white' }}><YouTube /></IconButton>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    );
}