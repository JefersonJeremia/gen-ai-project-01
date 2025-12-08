import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "E-commerce Platform Redesign",
        desc: "A complete overhaul of a fashion retailer's online store, increasing conversion by 40%.",
        image:
            "https://images.unsplash.com/photo-1711086316387-5f42369d06ea?w=600&auto=format&fit=crop&q=60",
        tech: ["React", "Node.js", "Stripe"],
        team: [
            { name: "Sarah Chen", image: "https://i.pravatar.cc/150?u=sarah" },
            { name: "Jessica Lee", image: "https://i.pravatar.cc/150?u=jessica" },
        ],
    },
    {
        title: "FinTech Mobile App",
        desc: "Secure mobile banking application with real-time transaction tracking.",
        image:
            "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80",
        tech: ["Flutter", "Firebase", "Dart"],
        team: [
            { name: "Michael Ross", image: "https://i.pravatar.cc/150?u=michael" },
            { name: "Sarah Chen", image: "https://i.pravatar.cc/150?u=sarah" },
        ],
    },
    {
        title: "Corporate Rebranding & Website",
        desc: "Modern corporate website and branding for a logistics leader.",
        image:
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        team: [
            { name: "Jessica Lee", image: "https://i.pravatar.cc/150?u=jessica" },
            { name: "Emily Wang", image: "https://i.pravatar.cc/150?u=emily" },
        ],
    },
    {
        title: "SEO & Content Strategy",
        desc: "SEO strategy that doubled organic traffic in just 3 months.",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        tech: ["SEO", "Analytics", "Content"],
        team: [
            { name: "David Kim", image: "https://i.pravatar.cc/150?u=david" },
            { name: "Robert Taylor", image: "https://i.pravatar.cc/150?u=robert" },
        ],
    },
    {
        title: "Social Media Growth Campaign",
        desc: "Viral marketing campaign reaching over 1M+ impressions.",
        image:
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
        tech: ["Instagram", "TikTok", "Strategy"],
        team: [
            { name: "James Wilson", image: "https://i.pravatar.cc/150?u=james" },
            { name: "David Kim", image: "https://i.pravatar.cc/150?u=david" },
        ],
    },
    {
        title: "Healthcare SaaS Dashboard",
        desc: "Highly detailed medical analytics dashboard with live charts.",
        image:
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
        tech: ["React", "D3.js", "Python"],
        team: [
            { name: "Sarah Chen", image: "https://i.pravatar.cc/150?u=sarah" },
            { name: "Jessica Lee", image: "https://i.pravatar.cc/150?u=jessica" },
        ],
    },
];

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 px-6 relative overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

            {/* HEADER */}
            <div className="text-center mb-20">
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-5xl md:text-7xl font-extrabold"
                >
                    Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
                >
                    A showcase of top-tier digital products crafted with precision and creativity.
                </motion.p>
            </div>

            {/* GRID */}
            <motion.div
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
            >
                {projects.map((p, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 }}
                        className="bg-[#0d1117] rounded-3xl overflow-hidden shadow-xl border border-white/5 hover:border-blue-500/30 hover:shadow-blue-500/20 transition-all duration-500"
                    >
                        {/* IMAGE */}
                        <div className="relative w-full aspect-[16/10] overflow-hidden">
                            <img
                                src={p.image}
                                alt={p.title}
                                className="w-full h-full object-cover scale-100 hover:scale-110 transition-all duration-700"
                            />

                            {/* Hover Buttons */}
                            <div className="absolute top-3 right-3 flex gap-2 opacity-0 hover:opacity-100 transition-all">
                                <button className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md">
                                    <FaGithub />
                                </button>

                                <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white">
                                    <FaExternalLinkAlt />
                                </button>
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-3">{p.title}</h3>

                            <p className="text-gray-400 mb-4 leading-relaxed">{p.desc}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {p.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs font-semibold bg-white/10 border border-white/10 rounded-full"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* TEAM MEMBERS */}
                            <div className="flex items-center gap-3 mt-3">
                                {p.team.map((member, i) => (
                                    <div key={i} className="flex flex-col items-center text-center">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-10 h-10 rounded-full object-cover border border-white/20"
                                        />
                                        <span className="text-xs text-gray-300 mt-1">{member.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
