import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
    FaCode, FaMobileAlt, FaPaintBrush, FaBullhorn,
    FaRocket, FaLightbulb, FaCog, FaChartLine,
    FaDatabase, FaCloud, FaShieldAlt, FaUsers
} from 'react-icons/fa';
import { Button, Container, Typography, Card, CardContent } from '@mui/material';

const services = [
    {
        title: 'Full Stack Development',
        description: 'End-to-end web solutions using modern technologies.',
        icon: <FaCode size={40} className="text-blue-500" />,
        path: '/freelancerhub/app/v1/services/full-stack-development'
    },
    {
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications.',
        icon: <FaMobileAlt size={40} className="text-blue-400" />,
        path: '/freelancerhub/app/v1/services/mobile-app-development'
    },
    {
        title: 'UI/UX Design',
        description: 'Intuitive and engaging user interface designs.',
        icon: <FaPaintBrush size={40} className="text-blue-300" />,
        path: '/freelancerhub/app/v1/services/ui-ux-design'
    },
    {
        title: 'Digital Marketing',
        description: 'Strategic marketing to grow your online presence.',
        icon: <FaBullhorn size={40} className="text-blue-600" />,
        path: '/freelancerhub/app/v1/services/digital-marketing'
    }
];

// Floating icons configuration
const floatingIcons = [
    { Icon: FaRocket, color: 'text-blue-400', delay: 0, position: { top: '10%', left: '5%' } },
    { Icon: FaLightbulb, color: 'text-yellow-400', delay: 0.5, position: { top: '20%', right: '10%' } },
    { Icon: FaCog, color: 'text-gray-400', delay: 1, position: { bottom: '30%', left: '8%' } },
    { Icon: FaChartLine, color: 'text-green-400', delay: 1.5, position: { top: '60%', right: '5%' } },
    { Icon: FaDatabase, color: 'text-purple-400', delay: 2, position: { bottom: '15%', right: '15%' } },
    { Icon: FaCloud, color: 'text-cyan-400', delay: 2.5, position: { top: '40%', left: '3%' } },
    { Icon: FaShieldAlt, color: 'text-red-400', delay: 3, position: { bottom: '45%', right: '8%' } },
    { Icon: FaUsers, color: 'text-pink-400', delay: 3.5, position: { top: '75%', left: '12%' } },
];

export default function Home() {
    const phrases = ['Your Business', 'Your Projects', 'Your Social Media', 'Your Content'];
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [text, setText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Advanced Typewriter effect with multiple phrases
    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex];

        if (!isDeleting && currentIndex < currentPhrase.length) {
            // Typing
            const timeout = setTimeout(() => {
                setText(prev => prev + currentPhrase[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 150);
            return () => clearTimeout(timeout);
        } else if (!isDeleting && currentIndex === currentPhrase.length) {
            // Pause at end
            const timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 2000);
            return () => clearTimeout(timeout);
        } else if (isDeleting && text.length > 0) {
            // Deleting
            const timeout = setTimeout(() => {
                setText(prev => prev.slice(0, -1));
            }, 100);
            return () => clearTimeout(timeout);
        } else if (isDeleting && text.length === 0) {
            // Move to next phrase
            setIsDeleting(false);
            setCurrentIndex(0);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
    }, [currentIndex, isDeleting, text, currentPhraseIndex]);

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-24 lg:py-32 min-h-screen flex items-center">
                {/* Animated Background Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Gradient Orbs */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.25, 0.45, 0.25],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                        className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
                    />

                    {/* Floating Icons */}
                    {floatingIcons.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`absolute ${item.color} opacity-20`}
                            style={item.position}
                            animate={{
                                y: [0, -30, 0],
                                rotate: [0, 10, -10, 0],
                                opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{
                                duration: 5 + index,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: item.delay
                            }}
                        >
                            <item.Icon size={40} />
                        </motion.div>
                    ))}

                    {/* Animated Grid Lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
                </div>

                <Container maxWidth="lg" className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 space-y-6"
                        >
                            {/* Animated Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold"
                            >
                                <FaRocket className="animate-bounce" />
                                <span>Premium Freelance Services</span>
                            </motion.div>

                            {/* Main Heading with Animations */}
                            <motion.h1
                                className="text-4xl lg:text-6xl font-extrabold text-white leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    Professional Freelance
                                </motion.span>
                                <br />
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.9 }}
                                >
                                    Services for
                                </motion.span>
                                <br />
                                <span className="relative inline-block">
                                    <motion.span
                                        className="text-blue-500"
                                        animate={{
                                            textShadow: [
                                                '0 0 20px rgba(59, 130, 246, 0.5)',
                                                '0 0 40px rgba(59, 130, 246, 0.8)',
                                                '0 0 20px rgba(59, 130, 246, 0.5)',
                                            ],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        {text}
                                        <motion.span
                                            animate={{ opacity: [1, 0] }}
                                            transition={{ duration: 0.8, repeat: Infinity }}
                                            className="inline-block w-1 h-12 lg:h-16 bg-blue-500 ml-1"
                                        />
                                    </motion.span>
                                </span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                className="text-lg text-gray-300"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                            >
                                FreelancerHub connects you with a collective of experts dedicated to transforming your ideas into reality.
                                From code to content, we cover it all.
                            </motion.p>

                            {/* Animated Buttons */}
                            <motion.div
                                className="flex gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4 }}
                            >
                                <Link to="/freelancerhub/app/v1/services">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button
                                            variant="contained"
                                            size="large"
                                            className="!bg-gradient-to-r !from-blue-600 !to-blue-700 !text-white !font-bold !py-3 !px-8 !shadow-lg !shadow-blue-500/50 hover:!shadow-blue-500/70 !transition-all"
                                        >
                                            View Our Services
                                        </Button>
                                    </motion.div>
                                </Link>
                                <Link to="/freelancerhub/app/v1/contact">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button
                                            variant="outlined"
                                            size="large"
                                            className="!border-2 !border-blue-500 !text-blue-400 !font-bold !py-3 !px-8 hover:!bg-blue-500/10 !transition-all"
                                        >
                                            Contact Us
                                        </Button>
                                    </motion.div>
                                </Link>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.6 }}
                                className="flex gap-8 pt-8"
                            >
                                {[
                                    { number: '500+', label: 'Projects' },
                                    { number: '98%', label: 'Satisfaction' },
                                    { number: '50+', label: 'Clients' }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.1 }}
                                        className="text-center"
                                    >
                                        <div className="text-3xl font-bold text-blue-500">{stat.number}</div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right Image with Animations */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:w-1/2 relative"
                        >
                            {/* Glowing Border Effect */}
                            <motion.div
                                animate={{
                                    boxShadow: [
                                        '0 0 20px rgba(59, 130, 246, 0.3)',
                                        '0 0 60px rgba(59, 130, 246, 0.6)',
                                        '0 0 20px rgba(59, 130, 246, 0.3)',
                                    ],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="rounded-2xl overflow-hidden"
                            >
                                <motion.img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Team working together"
                                    className="rounded-2xl w-full"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>

                            {/* Floating Elements Around Image */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 5, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-xl shadow-2xl shadow-blue-500/50"
                            >
                                <FaCode size={32} className="text-white" />
                            </motion.div>

                            <motion.div
                                animate={{
                                    y: [0, 20, 0],
                                    rotate: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-600 to-purple-700 p-4 rounded-xl shadow-2xl shadow-purple-500/50"
                            >
                                <FaLightbulb size={32} className="text-white" />
                            </motion.div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Services Section */}
            <section className="relative bg-black py-20 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.1, 0.25, 0.1],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"
                    />
                </div>

                <Container maxWidth="lg" className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Typography variant="h3" className="font-bold text-white mb-4">
                                Our <span className="text-blue-500">Services</span>
                            </Typography>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex justify-center w-full">
                                <Typography variant="h6" align="center" className="text-gray-400 max-w-2xl text-center mb-6">
                                    Comprehensive solutions tailored to your business needs
                                </Typography>
                            </div>
                        </motion.div>

                        {/* See More Link */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link to="/freelancerhub/app/v1/services">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                                >
                                    <span>See All Services</span>
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </motion.svg>
                                </motion.div>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -10, scale: 1.05 }}
                            >
                                <Link to={service.path}>
                                    <Card className="!bg-gray-900/50 !backdrop-blur-xl !border !border-gray-800 hover:!border-blue-500/50 !transition-all !duration-300 h-full !shadow-xl hover:!shadow-blue-500/20">
                                        <CardContent className="!p-6 text-center">
                                            <motion.div
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                                className="mb-4 flex justify-center"
                                            >
                                                {service.icon}
                                            </motion.div>
                                            <Typography variant="h6" className="!font-bold !text-white !mb-2">
                                                {service.title}
                                            </Typography>
                                            <Typography variant="body2" className="!text-gray-400">
                                                {service.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Testimonial Section */}
            <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
                <Container maxWidth="md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 md:p-12 text-center shadow-2xl"
                    >
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="text-6xl mb-6"
                        >
                            💼
                        </motion.div>
                        <Typography variant="h5" className="!text-white !mb-4 !italic">
                            "FreelancerHub transformed our vision into a stunning reality. Their expertise and dedication are unmatched!"
                        </Typography>
                        <Typography variant="body1" className="!text-blue-400 !font-semibold">
                            — Sarah Johnson, CEO of TechStart
                        </Typography>
                    </motion.div>
                </Container>
            </section>
        </div>
    );
}
