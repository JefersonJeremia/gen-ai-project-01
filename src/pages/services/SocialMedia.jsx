import React from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import {
    FaInstagram,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaTiktok,
    FaRocket,
    FaChartLine,
    FaBullhorn
} from 'react-icons/fa';
import { BiWorld } from "react-icons/bi";

const platforms = [
    {
        name: 'Instagram',
        icon: <FaInstagram />,
        desc: 'Visual storytelling & reels that captivate audiences.',
        color: 'from-pink-500 via-purple-500 to-orange-500',
        bgGlow: 'bg-pink-500/20'
    },
    {
        name: 'Facebook',
        icon: <FaFacebookF />,
        desc: 'Community building & targeted advertising campaigns.',
        color: 'from-blue-600 to-blue-800',
        bgGlow: 'bg-blue-600/20'
    },
    {
        name: 'Twitter (X)',
        icon: <FaTwitter />,
        desc: 'Real-time engagement & trending topics participation.',
        color: 'from-gray-700 to-black',
        bgGlow: 'bg-gray-700/20'
    },
    {
        name: 'LinkedIn',
        icon: <FaLinkedinIn />,
        desc: 'Professional networking & B2B thought leadership.',
        color: 'from-blue-700 to-cyan-600',
        bgGlow: 'bg-blue-700/20'
    },
    {
        name: 'YouTube',
        icon: <FaYoutube />,
        desc: 'Deep-dive video content & channel growth strategies.',
        color: 'from-red-600 to-red-800',
        bgGlow: 'bg-red-600/20'
    },
    {
        name: 'TikTok',
        icon: <FaTiktok />,
        desc: 'Viral short-form content for maximum reach.',
        color: 'from-black via-gray-800 to-black',
        bgGlow: 'bg-gray-800/20'
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100
        }
    }
};

const SocialMedia = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden relative selection:bg-purple-500/30">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.2, 0.3]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/20 blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -60, 0],
                        opacity: [0.2, 0.1, 0.2]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[10%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/20 blur-[100px]"
                />
            </div>

            <Container maxWidth="lg" className="relative z-10 pt-24 pb-12">
                {/* Header Section */}
                <Box className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                            </span>
                            <span className="text-sm font-medium text-gray-300">Digital Presence Elevated</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
                    >
                        Social Media <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                            Mastery
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        We craft scrolling-stopping content and data-driven strategies to amplify your brand across every digital frontier.
                    </motion.p>
                </Box>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <Grid container spacing={3}>
                        {platforms.map((platform, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <motion.div variants={itemVariants} className="h-full">
                                    <div className="group relative h-full bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-colors duration-500 overflow-hidden">
                                        {/* Hover Gradient Overlay */}
                                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${platform.color} mix-blend-overlay pointer-events-none`} />

                                        {/* Glow Effect */}
                                        <div className={`absolute -top-20 -right-20 w-40 h-40 ${platform.bgGlow} rounded-full blur-[60px] opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />

                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className="mb-6 flex justify-between items-start">
                                                <motion.div
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl text-white bg-gradient-to-br ${platform.color} shadow-lg shadow-black/50`}
                                                >
                                                    {platform.icon}
                                                </motion.div>
                                                <motion.div
                                                    whileHover={{ x: 5 }}
                                                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-white/30 transition-all"
                                                >
                                                    <FaChartLine className="text-xs" />
                                                </motion.div>
                                            </div>

                                            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                                {platform.name}
                                            </h3>

                                            <p className="text-gray-400 leading-relaxed mb-6 flex-grow group-hover:text-gray-300 transition-colors">
                                                {platform.desc}
                                            </p>

                                            <div className="flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-white transition-colors">
                                                <span>Learn more</span>
                                                <FaRocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-32 relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 blur-3xl -z-10" />
                    <div className="rounded-[2.5rem] bg-gradient-to-b from-[#1a1a1a] to-black border border-white/10 p-12 text-center overflow-hidden relative">
                        {/* Decorative Grid */}
                        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <BiWorld className="text-6xl text-blue-500 mx-auto mb-6 animate-pulse" />
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                                Ready to go viral?
                            </h2>
                            <p className="text-gray-400 text-lg mb-10">
                                Join hundreds of brands that have scaled their presence with our expert management.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
                                >
                                    Start Your Growth
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-colors"
                                >
                                    View Casestudies
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
};

export default SocialMedia;