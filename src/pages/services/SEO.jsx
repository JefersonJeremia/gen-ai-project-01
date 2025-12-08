import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FaSearchPlus, FaGlobe, FaMapMarkedAlt, FaCogs, FaMobileAlt, FaChartLine } from 'react-icons/fa';

const services = [
    { title: 'On-Page SEO', icon: <FaSearchPlus />, desc: 'Optimizing individual web pages to rank higher and earn more relevant traffic. We focus on content quality, keyword usage, header tags, and internal linking.', gradient: 'from-blue-500 to-cyan-500' },
    { title: 'Off-Page SEO', icon: <FaGlobe />, desc: 'Actions taken outside of your own website to impact your rankings within search engine results pages (SERPs). This mainly involves backlink building and social signals.', gradient: 'from-green-500 to-emerald-500' },
    { title: 'Local SEO', icon: <FaMapMarkedAlt />, desc: 'Optimizing your online presence to attract more business from relevant local searches. Essential for brick-and-mortar businesses serving specific areas.', gradient: 'from-red-500 to-orange-500' },
    { title: 'Technical SEO', icon: <FaCogs />, desc: 'Ensuring your website meets the technical requirements of modern search engines with the goal of improved organic rankings. Includes site speed, XML sitemaps, and crawlability.', gradient: 'from-gray-600 to-gray-800' },
    { title: 'Mobile SEO', icon: <FaMobileAlt />, desc: 'Optimizing your site for users on smartphones and tablets, ensuring a seamless experience which is a key ranking factor for Google.', gradient: 'from-purple-500 to-pink-500' },
];

export default function SEO() {
    return (
        // ✨ improved layout
        <div className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white overflow-hidden">
            {/* 🎨 animated background orbs */}
            <div className="absolute top-20 right-[10%] w-96 h-96 bg-green-600/20 rounded-full blur-[120px] animate-pulse" />
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
                        SEO <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">Services</span>
                    </Typography>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Improve your visibility and dominate search results with our comprehensive SEO strategies.
                    </motion.p>
                </motion.div>

                {/* ✨ improved services grid */}
                <div className="grid gap-6 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        // 🔥 added Framer Motion animation
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ x: 10 }}
                            // 🎨 updated Tailwind styling
                            className="relative group"
                        >
                            <div className="relative p-8 rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-gray-800 hover:border-green-500/50 transition-all duration-500 overflow-hidden">
                                {/* Gradient glow */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                {/* Animated border */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} blur-sm opacity-20`} />
                                </div>

                                <div className="relative z-10 flex items-start gap-6">
                                    {/* 🎨 animated icon */}
                                    <motion.div
                                        animate={{
                                            y: [0, -8, 0],
                                            rotate: [0, 5, -5, 0]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            delay: index * 0.2
                                        }}
                                        className="flex-shrink-0"
                                    >
                                        <div className={`p-5 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg text-white text-3xl`}>
                                            {service.icon}
                                        </div>
                                    </motion.div>

                                    <div className="flex-1">
                                        {/* ⭐ enhanced typography */}
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover shine */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 🔥 added stats section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 grid grid-cols-3 gap-6 max-w-4xl mx-auto"
                >
                    {[
                        { label: 'Organic Traffic', value: '+250%' },
                        { label: 'Page Rankings', value: 'Top 10' },
                        { label: 'Conversion Rate', value: '+180%' }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-green-600/10 to-emerald-600/10 backdrop-blur-xl border border-green-500/30 text-center"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                                className="text-3xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2"
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </div>
    );
}
