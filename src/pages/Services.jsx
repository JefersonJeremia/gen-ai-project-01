import { Link } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCode, FaMobileAlt, FaPaintBrush, FaBullhorn, FaPenNib, FaShareAlt, FaSearchDollar, FaShoppingCart, FaArrowRight } from 'react-icons/fa';

const servicesList = [
    {
        title: 'Full Stack Web Development',
        description: 'Building end-to-end web solutions with modern technologies like React, Node.js, and more.',
        icon: <FaCode size={40} />,
        path: '/freelancerhub/app/v1/services/full-stack-development',
        gradient: 'from-blue-500 to-cyan-500',
        glowColor: 'blue'
    },
    {
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications for iOS and Android using Flutter and React Native.',
        icon: <FaMobileAlt size={40} />,
        path: '/freelancerhub/app/v1/services/mobile-app-development',
        gradient: 'from-green-500 to-emerald-500',
        glowColor: 'green'
    },
    {
        title: 'UI/UX Design',
        description: 'User-centered design solutions including wireframing, prototyping, and high-fidelity mockups.',
        icon: <FaPaintBrush size={40} />,
        path: '/freelancerhub/app/v1/services/ui-ux-design',
        gradient: 'from-purple-500 to-pink-500',
        glowColor: 'purple'
    },
    {
        title: 'Digital Marketing',
        description: 'Comprehensive marketing strategies to boost your brand visibility and engagement.',
        icon: <FaBullhorn size={40} />,
        path: '/freelancerhub/app/v1/services/digital-marketing',
        gradient: 'from-orange-500 to-red-500',
        glowColor: 'orange'
    },
    {
        title: 'Content Writing',
        description: 'Professional copywriting, blogging, and technical writing services to tell your story.',
        icon: <FaPenNib size={40} />,
        path: '/freelancerhub/app/v1/services/content-writing',
        gradient: 'from-pink-500 to-rose-500',
        glowColor: 'pink'
    },
    {
        title: 'Social Media Management',
        description: 'Strategic management of your social media profiles to grow your audience.',
        icon: <FaShareAlt size={40} />,
        path: '/freelancerhub/app/v1/services/social-media-management',
        gradient: 'from-cyan-500 to-blue-500',
        glowColor: 'cyan'
    },
    {
        title: 'SEO Services',
        description: 'Search Engine Optimization to improve your website rankings and drive organic traffic.',
        icon: <FaSearchDollar size={40} />,
        path: '/freelancerhub/app/v1/services/seo',
        gradient: 'from-yellow-500 to-orange-500',
        glowColor: 'yellow'
    },
    {
        title: 'E-commerce',
        description: 'Custom e-commerce solutions using Shopify, WooCommerce, and Magento.',
        icon: <FaShoppingCart size={40} />,
        path: '/freelancerhub/app/v1/services/ecommerce',
        gradient: 'from-red-500 to-pink-500',
        glowColor: 'red'
    }
];

export default function Services() {
    const { scrollYProgress } = useScroll();
    const yBackground = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
                style={{ y: yBackground }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute top-20 right-[10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-40 left-[15%] w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
                <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-600/10 rounded-full blur-[100px] animate-pulse delay-1000" />
            </motion.div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

            <Container maxWidth="xl" className="relative z-10 py-24 px-4">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-block mb-6"
                    >
                        <motion.span
                            animate={{
                                boxShadow: [
                                    "0 0 20px rgba(59, 130, 246, 0.3)",
                                    "0 0 40px rgba(59, 130, 246, 0.5)",
                                    "0 0 20px rgba(59, 130, 246, 0.3)"
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="px-6 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold tracking-wider backdrop-blur-sm inline-block"
                        >
                            WHAT WE OFFER
                        </motion.span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
                    >
                        Our{" "}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="inline-block"
                        >
                            <motion.span
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{
                                    backgroundSize: "200% 200%"
                                }}
                                className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent"
                            >
                                Premium
                            </motion.span>
                        </motion.span>{" "}
                        Services
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Transform your digital presence with our comprehensive suite of cutting-edge solutions.
                        We combine innovation, expertise, and passion to deliver exceptional results.
                    </motion.p>
                </motion.div>

                {/* UPDATED: 4 × 2 GRID LAYOUT */}
                <Grid
                    container
                    spacing={4}
                    sx={{
                        display: "grid",                   // Added
                        gridTemplateColumns: {
                            xs: "1fr",                     // 1 column on mobile
                            sm: "1fr 1fr",                 // 2 columns on small screens
                            md: "repeat(4, 1fr)"           // 4 columns layout (4 × 2 grid total)
                        },
                        rowGap: 4,                          // Vertical spacing
                        columnGap: 4                        // Horizontal spacing
                    }}
                >
                    {servicesList.map((service, index) => (
                        <Grid
                            item
                            key={index}
                            sx={{ width: "100%" }}          // Ensures clean grid
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="h-full"
                            >
                                <Link to={service.path} className="block h-full group">
                                    <div className="relative h-full p-8 rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-blue-500/20">

                                        {/* 🌟 All your original effects preserved */}

                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} blur-sm opacity-30`} />
                                        </div>

                                        <motion.div
                                            animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                            className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full blur-sm`}
                                        />
                                        <motion.div
                                            animate={{ y: [0, -15, 0], opacity: [0.2, 0.5, 0.2] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                            className={`absolute bottom-8 left-6 w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full blur-sm`}
                                        />

                                        {/* Content */}
                                        <div className="relative z-10 flex flex-col h-full">

                                            <motion.div
                                                animate={{ y: [0, -8, 0] }}
                                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                                                whileHover={{ scale: 1.15, rotate: [0, -5, 5, -5, 0] }}
                                                className="relative mb-6 w-fit"
                                            >
                                                <motion.div
                                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-xl blur-md opacity-50`}
                                                />

                                                <div className={`relative p-4 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg group-hover:shadow-2xl group-hover:shadow-${service.glowColor}-500/50 transition-all duration-500`}>
                                                    <motion.div
                                                        className="text-white"
                                                        animate={{ rotate: [0, 5, -5, 0] }}
                                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                                                    >
                                                        {service.icon}
                                                    </motion.div>
                                                </div>
                                            </motion.div>

                                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                                                {service.title}
                                            </h3>

                                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                                {service.description}
                                            </p>

                                            <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                                                <span className="mr-2">Explore Service</span>
                                                <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
                                                    <FaArrowRight className="text-sm" />
                                                </motion.div>
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>


                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-24 text-center"
                >
                    <div className="relative p-12 rounded-3xl bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 backdrop-blur-xl border border-blue-500/20 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 animate-pulse" />

                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Ready to Start Your Project?
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                                Let's collaborate to bring your vision to life. Our team is ready to deliver exceptional results.
                            </p>
                            <Link to="/freelancerhub/app/v1/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-bold text-lg shadow-lg shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/60 transition-all duration-300"
                                >
                                    Get Started Today
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}
