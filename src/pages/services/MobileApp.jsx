import { Container, Typography, Chip } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaAndroid, FaApple, FaReact, FaMobileAlt, FaRocket, FaCode } from 'react-icons/fa';
import { SiFlutter, SiKotlin, SiSwift, SiFirebase } from 'react-icons/si';

const techs = [
    {
        name: 'Kotlin',
        icon: <SiKotlin />,
        desc: 'Modern, concise language for native Android development.',
        gradient: 'from-purple-600 to-pink-600',
        features: ['Type Safety', 'Coroutines', 'Jetpack']
    },
    {
        name: 'Flutter',
        icon: <SiFlutter />,
        desc: 'Fast, natively compiled applications for mobile from a single codebase.',
        gradient: 'from-blue-400 to-cyan-400',
        features: ['Hot Reload', 'Widgets', 'Dart']
    },
    {
        name: 'React Native',
        icon: <FaReact />,
        desc: 'Cross-platform mobile apps using React and JavaScript.',
        gradient: 'from-blue-500 to-indigo-500',
        features: ['JSX', 'Native Modules', 'Fast Refresh']
    },
    {
        name: 'Swift (iOS)',
        icon: <SiSwift />,
        desc: 'Powerful and intuitive programming language for iOS, macOS, and more.',
        gradient: 'from-orange-500 to-red-500',
        features: ['SwiftUI', 'Combine', 'Performance']
    },
    {
        name: 'Firebase',
        icon: <SiFirebase />,
        desc: 'Backend-as-a-Service for real-time data, auth, and analytics.',
        gradient: 'from-yellow-500 to-orange-500',
        features: ['Real-time DB', 'Auth', 'Analytics']
    },
];

export default function MobileApp() {
    const { scrollYProgress } = useScroll();
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <div className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white overflow-hidden">
            {/* ✨ Animated Background with Phone Silhouette */}
            <motion.div
                style={{ y: yParallax }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute top-20 right-[5%] w-[500px] h-[500px] bg-green-600/20 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse delay-1000" />

                {/* 🎨 Giant Phone Silhouette */}
                <div className="absolute right-[5%] top-1/2 -translate-y-1/2 opacity-5">
                    <FaMobileAlt className="text-[600px] text-white" />
                </div>
            </motion.div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

            <Container maxWidth="xl" className="relative z-10 py-24 px-4">
                {/* 🔥 Hero Section with Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    {/* Animated Badge */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-block mb-8"
                    >
                        <motion.div
                            animate={{
                                boxShadow: [
                                    "0 0 20px rgba(34, 197, 94, 0.3)",
                                    "0 0 40px rgba(34, 197, 94, 0.6)",
                                    "0 0 20px rgba(34, 197, 94, 0.3)"
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity
                            }}
                            className="px-6 py-3 bg-green-500/10 border-2 border-green-500/40 rounded-full inline-flex items-center gap-3"
                        >
                            <FaRocket className="text-green-400 text-xl" />
                            <span className="text-green-400 font-bold tracking-wider">MOBILE FIRST</span>
                        </motion.div>
                    </motion.div>

                    {/* ⭐ Title with Animated Gradient */}
                    <Typography variant="h1" className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        Build Apps That
                        <br />
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
                            className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent inline-block"
                        >
                            Users Love
                        </motion.span>
                    </Typography>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        From native performance to cross-platform efficiency, we craft mobile experiences that engage, delight, and convert.
                    </motion.p>
                </motion.div>

                {/* 🎨 Unique Staggered Card Layout */}
                <div className="max-w-7xl mx-auto mb-24">
                    {techs.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.8 }}
                            className={`mb-8 ${index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'} max-w-4xl`}
                        >
                            <motion.div
                                whileHover={{ scale: 1.02, x: index % 2 === 0 ? 10 : -10 }}
                                className="relative group"
                            >
                                {/* 🎨 Unique Card Design with Side Accent */}
                                <div className={`relative p-8 rounded-3xl bg-gray-900/50 backdrop-blur-xl border-l-4 border-${index % 2 === 0 ? 'green' : 'blue'}-500 hover:border-${index % 2 === 0 ? 'green' : 'blue'}-400 transition-all duration-500 overflow-hidden shadow-xl`}>
                                    {/* Gradient Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                    {/* Animated Corner Accent */}
                                    <motion.div
                                        animate={{
                                            rotate: [0, 90, 180, 270, 360]
                                        }}
                                        transition={{
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${tech.gradient} opacity-10 rounded-full blur-xl`}
                                    />

                                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                                        {/* 🎨 Large Animated Icon */}
                                        <motion.div
                                            animate={{
                                                rotate: [0, 10, -10, 0],
                                                y: [0, -10, 0]
                                            }}
                                            transition={{
                                                duration: 6,
                                                repeat: Infinity,
                                                delay: index * 0.5
                                            }}
                                            className="relative flex-shrink-0"
                                        >
                                            {/* Pulsing Glow */}
                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.4, 1],
                                                    opacity: [0.3, 0.6, 0.3]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity
                                                }}
                                                className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} rounded-3xl blur-2xl`}
                                            />

                                            <div className={`relative p-8 bg-gradient-to-br ${tech.gradient} rounded-3xl shadow-2xl text-white text-6xl`}>
                                                {tech.icon}
                                            </div>
                                        </motion.div>

                                        {/* Content */}
                                        <div className="flex-1 text-center md:text-left">
                                            <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                                                {tech.name}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed mb-4">
                                                {tech.desc}
                                            </p>

                                            {/* ⭐ Feature Tags */}
                                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                                {tech.features.map((feature, i) => (
                                                    <motion.div
                                                        key={i}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <Chip
                                                            label={feature}
                                                            size="small"
                                                            className="!bg-gray-800 !text-gray-300 !border !border-gray-700 hover:!border-green-500/50 !transition-all !font-semibold"
                                                        />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Number Badge */}
                                        <div className="hidden lg:block">
                                            <motion.div
                                                animate={{ rotate: [0, 360] }}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                className={`w-16 h-16 rounded-full bg-gradient-to-br ${tech.gradient} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}
                                            >
                                                {index + 1}
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Hover Shine Effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* 🔥 Platform Comparison Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="relative p-12 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-gray-700 overflow-hidden">
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-blue-600/5 animate-pulse" />

                        <div className="relative z-10">
                            <div className="text-center mb-12">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="inline-block mb-4"
                                >
                                    <FaCode className="text-6xl text-green-500" />
                                </motion.div>
                                <Typography variant="h3" className="font-bold text-white mb-4">
                                    Native & Cross-Platform Excellence
                                </Typography>
                                <p className="text-gray-400 max-w-2xl mx-auto">
                                    We leverage the best technologies to deliver high-performance mobile applications tailored to your needs.
                                </p>
                            </div>

                            {/* Platform Icons Row */}
                            <div className="flex justify-center items-center gap-12 flex-wrap">
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="text-center"
                                >
                                    <div className="p-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl text-white text-6xl shadow-2xl shadow-green-500/50 mb-4">
                                        <FaAndroid />
                                    </div>
                                    <span className="text-gray-400 font-semibold">Android</span>
                                </motion.div>

                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <FaMobileAlt className="text-8xl text-gray-700" />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                    className="text-center"
                                >
                                    <div className="p-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl text-white text-6xl shadow-2xl shadow-gray-500/50 mb-4">
                                        <FaApple />
                                    </div>
                                    <span className="text-gray-400 font-semibold">iOS</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}