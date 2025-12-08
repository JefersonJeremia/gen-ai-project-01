import { Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { FaFigma, FaSketch, FaInvision, FaPalette } from 'react-icons/fa';
import { SiAdobe, SiFramer } from 'react-icons/si';

const tools = [
    { name: 'Figma', icon: <FaFigma />, desc: 'Real-time collaborative interface design tool for teams.', gradient: 'from-purple-500 to-pink-500' },
    { name: 'Adobe XD', icon: <SiAdobe />, desc: 'Vector-based user experience design tool for web & mobile apps.', gradient: 'from-pink-600 to-rose-600' },
    { name: 'Sketch', icon: <FaSketch />, desc: 'Digital design toolkit for macOS, focusing on UI/UX.', gradient: 'from-yellow-500 to-orange-500' },
    { name: 'Framer', icon: <SiFramer />, desc: 'Interactive prototyping tool for creating realistic product demos.', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'InVision', icon: <FaInvision />, desc: 'Digital product design platform for prototyping and workflow.', gradient: 'from-red-500 to-pink-500' },
];

export default function UiUx() {
    return (
        // ✨ improved layout
        <div className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white overflow-hidden">
            {/* 🎨 animated background orbs */}
            <div className="absolute top-20 right-[10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-40 left-[15%] w-80 h-80 bg-pink-600/20 rounded-full blur-[120px] animate-pulse delay-700" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

            <Container maxWidth="xl" className="relative z-10 py-24 px-4">
                {/* 🔥 enhanced hero section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    {/* ⭐ enhanced typography */}
                    <Typography variant="h2" className="font-extrabold mb-6 tracking-tight">
                        UI/UX <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">Design</span>
                    </Typography>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        We create intuitive, engaging, and beautiful digital experiences that delight users and drive conversions.
                    </motion.p>
                </motion.div>

                {/* ✨ improved grid layout */}
                <Grid container spacing={4} justifyContent="center" className="max-w-5xl mx-auto mb-20">
                    {tools.map((tool, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            {/* 🔥 added Framer Motion animation */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -10 }}
                                // 🎨 updated Tailwind styling
                                className="relative h-full group"
                            >
                                <div className="relative h-full p-8 rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                                    {/* Gradient glow */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                    {/* Animated border */}
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tool.gradient} blur-sm opacity-30`} />
                                    </div>

                                    <div className="relative z-10 flex flex-col items-center text-center h-full">
                                        {/* 🎨 animated icon */}
                                        <motion.div
                                            animate={{
                                                rotate: [0, 10, -10, 0],
                                                y: [0, -8, 0]
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                delay: index * 0.3
                                            }}
                                            className="mb-6"
                                        >
                                            <div className={`p-6 bg-gradient-to-br ${tool.gradient} rounded-2xl shadow-lg text-white text-5xl`}>
                                                {tool.icon}
                                            </div>
                                        </motion.div>

                                        {/* ⭐ enhanced typography */}
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                            {tool.name}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {tool.desc}
                                        </p>
                                    </div>

                                    {/* Hover shine */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
                                    </div>
                                </div>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* 🔥 enhanced quote section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative p-12 rounded-3xl bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-xl border border-purple-500/30 overflow-hidden">
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 animate-pulse" />

                        <div className="relative z-10 text-center">
                            <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="inline-block mb-6"
                            >
                                <FaPalette className="text-6xl text-purple-500" />
                            </motion.div>

                            {/* ⭐ enhanced typography */}
                            <Typography variant="h4" className="font-serif italic text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-4">
                                "Design is not just what it looks like and feels like. Design is how it works."
                            </Typography>
                            <p className="text-gray-500 text-sm">- Steve Jobs</p>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}
