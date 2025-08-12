
import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
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
    YouTube,
    Menu as MenuIcon,
    ExpandMore,
    ExpandLess, WhatsApp, Instagram,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "../../App.css";


const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/aboutus' },
    {
        label: 'Services',
        nested: [
            { label: 'Talent Management', path: '/talent-management' },
            { label: 'Event Management', path: '/event-management' },
            { label: 'Brand Jingle Creations', path: '/brand-jingle-creations' },
            { label: 'PR seedings & Media Ads', path: '/pr-seedings&media-ads' },
            { label: 'Movie & OTT Integrations', path: '/movie&ott-integrations' },
            { label: 'Immersive Tech – AR/VR', path: '/immersive-tech–ar-vr' },
            { label: 'Brand Consultancy', path: '/brand-consultancy' },
            { label: 'Sponsorship Opportunities', path: '/sponsorship-opportunities' },
            { label: 'TVC & Digital Ads', path: '/tvc&digitalads' },
        ],
    },
    { label: 'Previous Events', path: '/events' },
    {
        label: 'Artist',
        nested: [
            { label: 'Celebrities', path: '/celebrities' },
            { label: 'Singers', path: '/singers' },
        ],
    },
    { label: 'Book Now', path: '/book-now' },
    { label: 'Contact', path: '/contact' },
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
            bgcolor: '#ffffffff',
            px: { xs: 1, sm: 2 },
            py: { xs: 1, sm: 2 }
        }}>
            <AppBar
                position="fixed"
                sx={{
                    bgcolor: '#ffffffff',
                    boxShadow: 'none',
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
                                <img src="/New Project.svg" alt="" width={200} style={{ objectFit: "cover" }} />
                            </MuiLink>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                            {navItems.map((item, index) =>
                                item.nested ? (
                                    <Box
                                        key={index}
                                        onMouseEnter={(e) => handleMenuOpen(e, item.nested)}
                                        onMouseLeave={handleMenuClose}
                                    >
                                        <Button
                                            sx={{
                                                fontFamily: 'Poppins',
                                                textTransform: 'uppercase',
                                                color: 'black',
                                                fontWeight: 700,
                                                fontSize: '0.75rem',
                                                letterSpacing: '1px',
                                                minWidth: 'auto',
                                                px: 1.5,
                                                position: 'relative',
                                                '&:hover': {
                                                    color: '#e30f5f',
                                                    '&::after': { transform: 'scaleX(1)' },
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
                                                <ExpandMore sx={{ color: 'inherit', fontSize: '1rem' }} />
                                            </Box>
                                        </Button>

                                        {/* Styled Dropdown Menu */}
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={Boolean(anchorEl) && nestedMenu === item.nested}
                                            onClose={handleMenuClose}
                                            MenuListProps={{
                                                onMouseEnter: () => { },
                                                onMouseLeave: handleMenuClose,
                                            }}
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
                                                    bgcolor: '#111',
                                                    borderRadius: '10px',
                                                    overflow: 'hidden',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                                                    animation: 'fadeIn 0.3s ease',
                                                },
                                                '@keyframes fadeIn': {
                                                    from: { opacity: 0, transform: 'translateY(-10px)' },
                                                    to: { opacity: 1, transform: 'translateY(0)' },
                                                }
                                            }}
                                        >
                                            {item.nested.map((subItem, idx) => (
                                                <MenuItem
                                                    key={idx}
                                                    component="a"
                                                    to={subItem.path}


                                                    onClick={handleMenuClose}
                                                    sx={{
                                                        color: 'white',
                                                        py: 1.2,
                                                        px: 2.5,
                                                        fontSize: '0.9rem',
                                                        borderBottom: idx !== item.nested.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            color: '#e30f5f',
                                                            bgcolor: 'rgba(255,255,255,0.05)',
                                                            pl: 3,
                                                        },
                                                    }}
                                                >
                                                    {subItem.label}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </Box>
                                ) : (
                                    <Button
                                        key={index}
                                        component={Link}
                                        to={item.path}
                                        sx={{
                                            fontFamily: 'Poppins',
                                            textTransform: 'uppercase',
                                            color: 'black',
                                            fontWeight: 700,
                                            fontSize: '0.75rem',
                                            letterSpacing: '1px',
                                            minWidth: 'auto',
                                            px: 1.5,
                                            position: 'relative',
                                            '&:hover': {
                                                color: '#e30f5f',
                                                '&::after': { transform: 'scaleX(1)' },
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
                        </Box>

                        {/* Mobile Menu Button */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton onClick={toggleMobileDrawer} sx={{ color: 'black' }}>
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
                <Box role="presentation" sx={{ height: '100%' }}>
                    <List sx={{ py: 2 }}>
                        {navItems.map((item, index) =>
                            item.nested ? (
                                <React.Fragment key={index}>
                                    <ListItem
                                        button
                                        onClick={toggleNestedMenu}
                                        sx={{
                                            color: "white",
                                            '&:hover': { color: '#e30f5f' },
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
                                                        color: "white",
                                                        pl: 4,
                                                        '&:hover': {
                                                            color: '#e30f5f',
                                                            bgcolor: 'rgba(255,255,255,0.05)',
                                                        },
                                                    }}
                                                >
                                                    <ListItemText
                                                        sx={{ color: "white" }}
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
                                        color: "white",
                                        fontFamily: "Poppins",
                                        '&:hover': {
                                            color: '#e30f5f',
                                            bgcolor: 'rgba(255,255,255,0.05)',
                                        },
                                    }}
                                >
                                    <ListItemText
                                        sx={{
                                            colo: "white",
                                            '&:hover': {
                                                color: '#e30f5f',
                                                bgcolor: 'rgba(255,255,255,0.05)',
                                            },
                                        }}
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
                        <IconButton
                            component="a"
                            href="https://wa.me/919054510329"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: 'white' }}
                        >
                            <WhatsApp />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="https://www.instagram.com/celebindiavision?igsh=eTRrZWZ2b25zbjV0&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: 'white' }}
                        >
                            <Instagram />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="https://youtube.com/@celebindiavision?si=m68zEAekx9PMLU-s"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: 'white' }}
                        >
                            <YouTube />
                        </IconButton>
                    </Box>

                </Box>
            </Drawer>
        </Box>
    );
}

