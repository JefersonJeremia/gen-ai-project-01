import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FaSearch, FaEnvelope, FaAd, FaChartLine, FaHashtag, FaArrowRight } from 'react-icons/fa';

const services = [
    { name: 'SEO', icon: <FaSearch />, desc: 'Optimizing your website to rank higher on search engines and attract organic traffic.', gradient: 'from-blue-500 to-cyan-500', metric: '+120%' },
    { name: 'Social Media Marketing', icon: <FaHashtag />, desc: 'Building brand awareness and community engagement across major social platforms.', gradient: 'from-pink-500 to-rose-500', metric: '+85%' },
    { name: 'Email Marketing', icon: <FaEnvelope />, desc: 'Personalized email campaigns to nurture leads and retain customers.', gradient: 'from-yellow-500 to-orange-500', metric: '+65%' },
    { name: 'Content Marketing', icon: <FaChartLine />, desc: 'Creating valuable content to attract, inform, and convert your target audience.', gradient: 'from-green-500 to-emerald-500', metric: '+95%' },
    { name: 'PPC Advertising', icon: <FaAd />, desc: 'Targeted pay-per-click campaigns on Google and social media to drive instant traffic.', gradient: 'from-purple-500 to-pink-500', metric: '+150%' },
];

export default function DigitalMarketing() {
    return (
        // ✨ improved layout with dark gradient background
        <div className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white overflow-hidden">
            {/* 🎨 animated background elements */}
            <div className="absolute top-20 right-[10%] w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-40 left-[15%] w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-700" />

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
                        Digital <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">Marketing</span>
                    </Typography>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Data-driven strategies to grow your brand, increase ROI, and achieve measurable results.
                    </motion.p>
                </motion.div>

                {/* ✨ improved services grid */}
                <div className="space-y-6 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        // 🔥 added Framer Motion animation
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ scale: 1.02 }}
                            // 🎨 updated Tailwind styling with glassmorphism
                            className="relative group"
                        >
                            <div className="relative p-8 rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-gray-800 hover:border-orange-500/50 transition-all duration-500 overflow-hidden">
                                {/* Gradient glow effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />

                                {/* Animated border gradient */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} blur-sm opacity-20`} />
                                </div>

                                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                                    {/* 🎨 animated icon container */}
                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.3
                                        }}
                                        className="relative"
                                    >
                                        {/* Pulsing glow */}
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.5, 0.8, 0.5]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity
                                            }}
                                            className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-xl blur-md`}
                                        />

                                        <div className={`relative p-6 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg text-white text-4xl`}>
                                            {service.icon}
                                        </div>
                                    </motion.div>

                                    {/* Content */}
                                    <div className="flex-1 text-center md:text-left">
                                        {/* ⭐ enhanced typography */}
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                                            {service.name}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {service.desc}
                                        </p>
                                    </div>

                                    {/* Growth metric */}
                                    <div className="flex flex-col items-center gap-2 px-6">
                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                                        >
                                            {service.metric}
                                        </motion.div>
                                        <span className="text-xs text-gray-500 uppercase tracking-wider">Avg. Growth</span>
                                    </div>
                                </div>

                                {/* Hover shine effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 🔥 added CTA section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white font-semibold shadow-lg shadow-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/60 transition-all duration-300 cursor-pointer group">
                        <span>Start Growing Today</span>
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <FaArrowRight />
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}
