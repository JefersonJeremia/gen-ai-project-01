import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const navLinks = [
    { name: 'Home', path: '/freelancerhub/app/v1/home' },
    { name: 'About', path: '/freelancerhub/app/v1/about' },
    { name: 'Services', path: '/freelancerhub/app/v1/services' },
    { name: 'Portfolio', path: '/freelancerhub/app/v1/portfolio' },
    { name: 'Blog', path: '/freelancerhub/app/v1/blog' },
    { name: 'Pricing', path: '/freelancerhub/app/v1/pricing' },
    { name: 'Contact', path: '/freelancerhub/app/v1/contact' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <AppBar
                position="fixed"
                className={`transition-all duration-300 ${isScrolled
                    ? 'bg-gray-900/95 backdrop-blur-md shadow-md shadow-blue-500/20'
                    : 'bg-gray-900 shadow-none'
                    } text-white`}
            >
                <div className="container mx-auto px-6">
                    <Toolbar disableGutters className="flex justify-between h-20">
                        {/* Logo with Animation */}
                        <Link to="/freelancerhub/app/v1/home">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgb(59, 130, 246)" }}
                                className="text-3xl font-bold font-sans tracking-tight text-white"
                            >
                                FreelancerHub
                            </motion.div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `text-sm font-medium transition-colors ${isActive
                                            ? 'text-blue-400 font-bold'
                                            : 'text-gray-300 hover:text-blue-400'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}

                            <div className="flex items-center space-x-4 ml-4">
                                <Link
                                    to="/freelancerhub/app/v1/login"
                                    className="text-sm font-medium text-gray-300 hover:text-blue-400 hover:underline transition-colors"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/freelancerhub/app/v1/register"
                                    className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
                                >
                                    Register
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden items-center">
                            <IconButton
                                edge="start"
                                onClick={handleDrawerToggle}
                                className="text-white"
                            >
                                {mobileOpen ? <FiX /> : <FiMenu />}
                            </IconButton>
                        </div>
                    </Toolbar>
                </div>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                PaperProps={{
                    className: "w-full max-w-xs bg-gray-900 text-white"
                }}
            >
                <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-center mb-8">
                        <Link to="/freelancerhub/app/v1/home" onClick={handleDrawerToggle} className="text-xl font-bold text-blue-400">
                            FreelancerHub
                        </Link>
                        <IconButton onClick={handleDrawerToggle} className="text-gray-300">
                            <FiX />
                        </IconButton>
                    </div>
                    <List className="flex-grow">
                        {navLinks.map((link) => (
                            <ListItem
                                key={link.name}
                                component={NavLink}
                                to={link.path}
                                onClick={handleDrawerToggle}
                                className="rounded-lg mb-2 hover:bg-gray-800"
                                style={({ isActive }) => ({
                                    color: isActive ? '#60a5fa' : 'inherit'
                                })}
                            >
                                <ListItemText primary={link.name} primaryTypographyProps={{ className: "font-medium" }} />
                            </ListItem>
                        ))}
                    </List>
                    <div className="mt-auto space-y-4">
                        <Link
                            to="/freelancerhub/app/v1/login"
                            onClick={handleDrawerToggle}
                            className="block w-full py-3 text-center rounded-lg border border-gray-700 font-medium hover:bg-gray-800 transition-colors"
                        >
                            Login
                        </Link>
                        <Link
                            to="/freelancerhub/app/v1/register"
                            onClick={handleDrawerToggle}
                            className="block w-full py-3 text-center rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </Drawer>
        </>
    );
}
