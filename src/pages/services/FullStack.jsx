import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaCode } from 'react-icons/fa';
import { SiMongodb, SiFirebase } from 'react-icons/si';

const techs = [
    { name: 'React.js', icon: <FaReact />, desc: 'Building dynamic, responsive user interfaces with component-based architecture.', gradient: 'from-blue-400 to-cyan-400' },
    { name: 'Node.js', icon: <FaNodeJs />, desc: 'Scalable server-side logic and API development for high-performance applications.', gradient: 'from-green-600 to-emerald-600' },
    { name: 'Python (Django)', icon: <FaPython />, desc: 'Robust backend development with a focus on security and rapid prototyping.', gradient: 'from-yellow-600 to-orange-600' },
    { name: 'Java (Spring Boot)', icon: <FaJava />, desc: 'Enterprise-grade microservices and secure application backend solutions.', gradient: 'from-red-500 to-orange-500' },
    { name: 'MySQL', icon: <FaDatabase />, desc: 'Reliable relational database management for structured data integrity.', gradient: 'from-blue-600 to-indigo-600' },
    { name: 'MongoDB', icon: <SiMongodb />, desc: 'Flexible NoSQL database for handling large volumes of unstructured data.', gradient: 'from-green-500 to-teal-500' },
    { name: 'Firebase', icon: <SiFirebase />, desc: 'Real-time database, authentication, and hosting for rapid app development.', gradient: 'from-orange-500 to-yellow-500' }
];

export default function FullStack() {
    return (
        // ✨ improved layout with dark theme
        <div className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white overflow-hidden">
            {/* 🎨 animated background orbs */}
            <div className="absolute top-20 right-[10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-40 left-[15%] w-80 h-80 bg-cyan-600/20 rounded-full blur-[120px] animate-pulse delay-700" />

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
                    {/* ⭐ enhanced typography with gradient */}
                    <Typography variant="h2" className="font-extrabold mb-6 tracking-tight">
                        Full Stack <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">Web Development</span>
                    </Typography>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        We deliver comprehensive web solutions, handling every layer of your application from the user interface to the database.
                    </motion.p>
                </motion.div>

                {/* ✨ improved grid layout */}
                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {techs.map((tech, index) => (
                        // 🔥 added Framer Motion animation
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -5 }}
                            // 🎨 updated Tailwind styling with glassmorphism
                            className="relative group"
                        >
                            <div className="relative p-8 rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden h-full">
                                {/* Gradient glow */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                {/* Animated border */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tech.gradient} blur-sm opacity-20`} />
                                </div>

                                <div className="relative z-10">
                                    {/* 🎨 animated icon */}
                                    <motion.div
                                        animate={{
                                            rotate: [0, 5, -5, 0],
                                            y: [0, -5, 0]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            delay: index * 0.2
                                        }}
                                        className="mb-6"
                                    >
                                        <div className={`inline-flex p-4 bg-gradient-to-br ${tech.gradient} rounded-xl shadow-lg text-white text-4xl`}>
                                            {tech.icon}
                                        </div>
                                    </motion.div>

                                    {/* ⭐ enhanced typography */}
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                        {tech.name}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {tech.desc}
                                    </p>
                                </div>

                                {/* Hover shine */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 🔥 added decorative element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 backdrop-blur-xl border border-blue-500/30 rounded-full">
                        <FaCode className="text-3xl text-blue-500" />
                        <span className="text-gray-300 font-semibold">End-to-End Solutions</span>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}
