import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import {
    FaShopify,
    FaMagento,
    FaShoppingCart,
    FaStore,
    FaCreditCard,
    FaChartLine,
    FaArrowRight
} from 'react-icons/fa';
import { SiWoocommerce, SiBigcommerce, SiSalesforce } from 'react-icons/si';
import { BiWorld } from "react-icons/bi";

const platforms = [
    {
        name: 'Shopify',
        icon: <FaShopify />,
        desc: 'All-in-one commerce platform to start, run, and grow a business.',
        color: 'from-green-500 to-emerald-600',
        bgGlow: 'bg-green-500/20'
    },
    {
        name: 'WooCommerce',
        icon: <SiWoocommerce />,
        desc: 'The most customizable eCommerce platform for building your online business.',
        color: 'from-purple-600 to-indigo-600',
        bgGlow: 'bg-purple-600/20'
    },
    {
        name: 'Magento',
        icon: <FaMagento />,
        desc: 'Flexible eCommerce capabilities for B2B and B2C experiences.',
        color: 'from-orange-600 to-red-600',
        bgGlow: 'bg-orange-600/20'
    },
    {
        name: 'BigCommerce',
        icon: <SiBigcommerce />,
        desc: 'Open SaaS platform for enterprise ecommerce.',
        color: 'from-blue-600 to-cyan-600',
        bgGlow: 'bg-blue-600/20'
    },
    {
        name: 'Salesforce',
        icon: <SiSalesforce />,
        desc: 'Unified commerce platform for faster growth and personalization.',
        color: 'from-sky-500 to-blue-600',
        bgGlow: 'bg-sky-500/20'
    },
    {
        name: 'Custom Build',
        icon: <FaStore />,
        desc: 'Tailor-made solutions for unique business requirements.',
        color: 'from-gray-200 to-gray-400',
        bgGlow: 'bg-gray-500/20'
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

const Ecommerce = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden relative selection:bg-green-500/30">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[10%] left-[5%] text-9xl text-green-500/10"
                >
                    <FaShoppingCart />
                </motion.div>

                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.1, 0.2]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-emerald-600/10 blur-[100px]"
                />
            </div>

            <Container maxWidth="lg" className="relative z-10 pt-24 pb-12">
                {/* Header Section */}
                <Box className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/20 border border-emerald-500/20 backdrop-blur-md mb-8">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-sm font-medium text-emerald-400 tracking-wide uppercase">Commerce Reimagined</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        Build Your <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                            Digital Empire
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Seamless shopping experiences engineered for conversion, scalability, and growth.
                    </motion.p>
                </Box>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <Grid container spacing={3}>
                        {platforms.map((platform, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <motion.div variants={itemVariants} className="h-full">
                                    <div className="group relative h-full bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-8 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-emerald-900/20">

                                        {/* Background Glow */}
                                        <div className={`absolute top-0 right-0 w-32 h-32 ${platform.bgGlow} rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className="mb-8 flex justify-between items-start">
                                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl text-white bg-gradient-to-br ${platform.color} shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-500`}>
                                                    {platform.icon}
                                                </div>
                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-2 group-hover:translate-x-0">
                                                    <FaArrowRight className="text-white/50 -rotate-45" />
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">
                                                {platform.name}
                                            </h3>

                                            <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                                                {platform.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>

                {/* Dashboard Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 mb-20"
                >
                    <div className="relative rounded-3xl overflow-hidden bg-[#0F0F0F] border border-white/10 p-1 md:p-12">
                        {/* Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: <FaChartLine />, label: 'Revenue Growth', value: '250%', color: 'text-emerald-400' },
                                { icon: <FaCreditCard />, label: 'Processed', value: '$50M+', color: 'text-blue-400' },
                                { icon: <BiWorld />, label: 'Global Markets', value: '15+', color: 'text-purple-400' }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5"
                                >
                                    <div className={`text-4xl mb-4 ${stat.color} flex justify-center`}>{stat.icon}</div>
                                    <h4 className="text-4xl font-bold text-white mb-2">{stat.value}</h4>
                                    <p className="text-gray-400 uppercase tracking-wider text-sm">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </Container>
        </div>
    );
};

export default Ecommerce;
