import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Chip, Avatar, IconButton, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock, FaBookmark, FaShareAlt, FaStream } from 'react-icons/fa';

const posts = [
    {
        id: 1,
        title: 'The Future of Web Development: Trends to Watch in 2025',
        excerpt: 'From AI-driven coding assistants to the rise of WebAssembly and edge computing, explore the technologies reshaping how we build the web.',
        date: 'March 15, 2024',
        author: 'Sarah Chen',
        category: 'Technology',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        readTime: '5 min'
    },
    {
        id: 2,
        title: 'Maximizing ROI with Mobile-First Design',
        excerpt: 'Why starting with mobile isn\'t just a trend—it\'s a fundamental business strategy for higher conversion rates.',
        date: 'March 10, 2024',
        author: 'Michael Ross',
        category: 'Business',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        readTime: '6 min'
    },
    {
        id: 3,
        title: 'Psychology of Colors in Visual Interface Design',
        excerpt: 'Understanding how color theory influences user emotion and decision-making processes.',
        date: 'March 05, 2024',
        author: 'Jessica Lee',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&auto=format&fit=crop&q=60',
        readTime: '4 min'
    },
    {
        id: 4,
        title: 'Local SEO Mastery for Small Businesses',
        excerpt: 'Practical strategies to dominate your local search results and attract nearby customers.',
        date: 'Feb 28, 2024',
        author: 'Robert Taylor',
        category: 'Marketing',
        image: 'https://images.unsplash.com/photo-1674027001834-719c347d1eca?w=600&auto=format&fit=crop&q=60',
        readTime: '7 min'
    },
    {
        id: 5,
        title: 'Building Authority Through Content Strategy',
        excerpt: 'How to create value-driven content that establishes your brand as an industry thought leader.',
        date: 'Feb 20, 2024',
        author: 'Emily Wang',
        category: 'Strategy',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        readTime: '5 min'
    },
    {
        id: 6,
        title: 'The Rise of No-Code Development Platforms',
        excerpt: 'Are no-code tools the future of rapid prototyping or just a passing phase? We analyze the data.',
        date: 'Feb 15, 2024',
        author: 'David Kim',
        category: 'Tech',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
        readTime: '6 min'
    }
];

export default function Blog() {
    const featuredPost = posts[0];
    const restPosts = posts.slice(1);

    return (
        <div className="min-h-screen bg-[#020617] text-gray-200 font-sans selection:bg-indigo-500/30">
            <Container maxWidth="xl" className="py-20 px-4 md:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-800 pb-8 gap-6">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 mb-2"
                        >
                            <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
                            <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm">Our Journal</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
                        >
                            Insights & <br /><span className="text-gray-500">Perspectives</span>
                        </motion.h1>
                    </div>
                </div>

                {/* Featured Hero Post - Grid Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-24 group cursor-pointer"
                >
                    <Link to={`/freelancerhub/app/v1/blog/${featuredPost.id}`}>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0f172a]/50 p-6 md:p-8 rounded-3xl border border-gray-800 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-900/10">

                            {/* Hero Image - Spans 7 cols */}
                            <div className="lg:col-span-7 h-[400px] md:h-[500px] overflow-hidden rounded-2xl relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <motion.img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute top-6 left-6 z-20">
                                    <Chip label="Featured Story" className="!bg-white !text-black font-bold !rounded-md" />
                                </div>
                            </div>

                            {/* Hero Content - Spans 5 cols */}
                            <div className="lg:col-span-5 p-4 py-8 lg:p-4">
                                <div className="flex items-center gap-4 text-sm text-indigo-400 font-medium mb-6">
                                    <span className="px-3 py-1 bg-indigo-500/10 rounded-full">{featuredPost.category}</span>
                                    <span>{featuredPost.readTime} read</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-indigo-400 transition-colors">
                                    {featuredPost.title}
                                </h2>

                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    {featuredPost.excerpt}
                                </p>

                                <div className="flex items-center gap-4 pt-6 border-t border-gray-800">
                                    <Avatar src={`https://i.pravatar.cc/150?u=${featuredPost.id}`} sx={{ width: 48, height: 48, border: '2px solid #1e293b' }} />
                                    <div>
                                        <div className="text-white font-medium">{featuredPost.author}</div>
                                        <div className="text-gray-500 text-sm">{featuredPost.date}</div>
                                    </div>
                                    <div className="ml-auto w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white transition-all">
                                        <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>

                {/* Grid Divider */}
                <div className="flex items-center gap-4 mb-12">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <h3 className="text-xl font-bold text-white">Latest Articles</h3>
                    <div className="h-[1px] bg-gray-800 flex-1"></div>
                </div>

                {/* Standard 3-Column Grid */}
                <Grid container spacing={4}>
                    {restPosts.map((post, index) => (
                        <Grid item xs={12} md={6} lg={4} key={post.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group h-full flex flex-col"
                            >
                                <Link to={`/freelancerhub/app/v1/blog/${post.id}`} className="block h-full">
                                    {/* Image Card */}
                                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-gray-900 border border-gray-800 group-hover:border-gray-700 transition-colors">
                                        <motion.img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                        />
                                        <div className="absolute bottom-4 left-4">
                                            <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white/90 text-xs font-bold uppercase tracking-wider rounded-md border border-white/10">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col flex-1 pr-4">
                                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                                            <FaClock className="text-gray-600" />
                                            <span>{post.readTime} read</span>
                                            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                                            <span>{post.date}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-100 mb-3 leading-snug group-hover:underline underline-offset-4 decoration-indigo-500/50 decoration-2 transition-all">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed mb-4 flex-1">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800/50">
                                            <div className="flex items-center gap-2">
                                                <Avatar src={`https://i.pravatar.cc/150?u=${post.id}`} sx={{ width: 24, height: 24 }} />
                                                <span className="text-xs font-medium text-gray-400">{post.author}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}
