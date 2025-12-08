import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaPenFancy, FaQuoteLeft } from 'react-icons/fa';

const services = [
    { title: 'Blogging', desc: 'Engaging, SEO-optimized blog posts to drive traffic and establish thought leadership.' },
    { title: 'Article Writing', desc: 'In-depth, well-researched articles for publications and industry journals.' },
    { title: 'Copywriting', desc: 'Persuasive marketing copy for websites, ads, and sales pages that converts.' },
    { title: 'Technical Writing', desc: 'Clear and concise documentation, manuals, and guides for complex products.' },
    { title: 'Creative Writing', desc: 'Storytelling for brands, video scripts, and newsletter content.' }
];

export default function ContentWriting() {
    return (
        // ✨ improved layout with gradient background
        <div className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white overflow-hidden">
            {/* 🎨 animated background orbs */}
            <div className="absolute top-20 right-[10%] w-96 h-96 bg-pink-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-40 left-[15%] w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-700" />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

            <Container maxWidth="xl" className="relative z-10 py-24 px-4">
                {/* 🔥 enhanced hero section with animations */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    {/* ⭐ enhanced typography with gradient */}
                    <Typography variant="h2" className="font-extrabold mb-6 tracking-tight">
                        Content <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">Writing</span>
                    </Typography>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Words have power. We craft compelling narratives that resonate with your audience and strengthen your brand voice.
                    </motion.p>
                </motion.div>

                {/* ✨ improved two-column layout */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Services List */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {services.map((service, index) => (
                            // 🔥 added Framer Motion animation for each item
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ x: 10 }}
                                // 🎨 updated Tailwind styling with glassmorphism
                                className="relative p-6 rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-gray-800 hover:border-pink-500/50 transition-all duration-300 group"
                            >
                                {/* Gradient glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10">
                                    <div className="flex items-start gap-4">
                                        {/* 🎨 animated icon */}
                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                            className="flex-shrink-0 mt-1"
                                        >
                                            <FaCheckCircle className="text-pink-500 text-2xl" />
                                        </motion.div>

                                        <div className="flex-1">
                                            {/* ⭐ enhanced typography */}
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {service.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right: Visual Quote */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex justify-center items-center"
                    >
                        {/* 🎨 updated Tailwind styling for quote section */}
                        <div className="relative p-12 rounded-3xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl border border-gray-700 shadow-2xl">
                            {/* 🔥 floating icon animation */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -top-8 -left-8"
                            >
                                <FaQuoteLeft className="text-6xl text-pink-500/30" />
                            </motion.div>

                            <div className="relative text-center">
                                <FaPenFancy className="text-9xl text-pink-500/20 mb-6 mx-auto" />

                                {/* ⭐ enhanced typography */}
                                <Typography variant="h3" className="font-serif italic text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-4">
                                    "Content is King"
                                </Typography>

                                <motion.div
                                    animate={{ width: ["0%", "100%"] }}
                                    transition={{ duration: 1.5, delay: 1 }}
                                    className="h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}
