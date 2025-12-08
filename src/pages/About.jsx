import { Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaRocket, FaUserFriends, FaLightbulb } from 'react-icons/fa';

const teamMembers = [
    { name: 'Sarah Chen', role: 'Full Stack Developer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', skills: ['React', 'Node.js', 'MongoDB'] },
    { name: 'Michael Ross', role: 'Mobile App Developer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', skills: ['Flutter', 'Kotlin', 'Swift'] },
    { name: 'Jessica Lee', role: 'UI/UX Designer', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', skills: ['Figma', 'Adobe XD'] },
    { name: 'David Kim', role: 'Digital Marketer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', skills: ['SEO', 'PPC', 'Analytics'] },
    { name: 'Emily Wang', role: 'Content Writer', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', skills: ['Copywriting', 'Blogging'] },
    { name: 'James Wilson', role: 'Social Media Manager', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', skills: ['Instagram', 'LinkedIn'] },
    { name: 'Robert Taylor', role: 'SEO Specialist', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', skills: ['Technical SEO', 'On-page'] },
    { name: 'Lisa Garcia', role: 'E-commerce Expert', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', skills: ['Shopify', 'WooCommerce'] },
    { name: 'Robert Taylor', role: 'SEO Specialist', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', skills: ['Technical SEO', 'On-page'] },
    { name: 'Lisa Garcia', role: 'E-commerce Expert', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', skills: ['Shopify', 'WooCommerce'] },
];

const features = [
    { icon: <FaRocket />, title: "Innovation First", description: "Pushing boundaries with cutting-edge technology solutions." },
    { icon: <FaUserFriends />, title: "Client Centric", description: "Your success is our priority. We build relationships, not just projects." },
    { icon: <FaCode />, title: "Clean Code", description: "Maintainable, scalable, and efficient code architectures." },
    { icon: <FaLightbulb />, title: "Creative Minds", description: "Thinking outside the box to deliver unique digital experiences." },
    { icon: <FaCode />, title: "Clean Code", description: "Maintainable, scalable, and efficient code architectures." },
    { icon: <FaLightbulb />, title: "Creative Minds", description: "Thinking outside the box to deliver unique digital experiences." }
];

export default function About() {
    const { scrollYProgress } = useScroll();
    const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white overflow-hidden">

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 px-4 overflow-hidden">
                <motion.div
                    style={{ y: yHero }}
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                >
                    <div className="absolute top-20 right-[10%] w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />
                </motion.div>

                <Container maxWidth="lg" className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography variant="h2" className="font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            Innovating the <span className="text-blue-500">Future</span> of Work
                        </Typography>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                        >
                            We are a collective of passionate experts dedicated to transforming visions into digital reality.
                            At FreelancerHub, we don't just write code; we craft experiences that empower businesses to thrive in the digital age.
                        </motion.p>
                    </motion.div>
                </Container>
            </div>

            {/* Features Grid */}
            <Container maxWidth="lg" className="mb-32">
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid
                            // UPDATED: 3 columns on md and up => md={4} (12/4 = 3 columns)
                            // sm=6 -> 2 columns on small screens, xs=12 -> 1 column on mobile
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={4}
                            xl={4}
                            key={index}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="h-full p-8 rounded-2xl bg-gray-900/40 backdrop-blur-md border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
                                    <div className="text-4xl text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            {/* Features Grid */}

            {/* Team Section */}
            <Container maxWidth="lg" className="mb-20 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Meet The <span className="text-blue-500">Team</span></h2>
                    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
                </motion.div>

                <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                    {teamMembers.map((member, index) => (
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={index} className="flex">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -5 }}
                                className="group relative w-full h-full flex flex-col"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                                <Card className="relative h-full flex flex-col !bg-gray-900 !border !border-gray-800 !rounded-2xl overflow-hidden group-hover:!border-blue-500/30 transition-all duration-300">
                                    {/* Image Wrapper */}
                                    <div className="relative h-72 overflow-hidden shrink-0">
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-60" />
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />

                                        {/* Social Overlay */}
                                        <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm bg-black/40">
                                            <motion.a whileHover={{ scale: 1.2 }} href="#" className="p-3 bg-white/10 rounded-full text-white hover:bg-blue-500 hover:text-white transition-colors">
                                                <FaGithub size={20} />
                                            </motion.a>
                                            <motion.a whileHover={{ scale: 1.2 }} href="#" className="p-3 bg-white/10 rounded-full text-white hover:bg-blue-600 hover:text-white transition-colors">
                                                <FaLinkedin size={20} />
                                            </motion.a>
                                            <motion.a whileHover={{ scale: 1.2 }} href="#" className="p-3 bg-white/10 rounded-full text-white hover:bg-sky-500 hover:text-white transition-colors">
                                                <FaTwitter size={20} />
                                            </motion.a>
                                        </div>
                                    </div>

                                    <CardContent className="!p-6 flex flex-col grow relative z-10">
                                        <div className="mb-auto">
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                                {member.name}
                                            </h3>
                                            <p className="text-blue-500 text-sm font-bold mb-4 uppercase tracking-wider">
                                                {member.role}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {member.skills.map((skill, i) => (
                                                <span key={i} className="px-3 py-1 text-xs font-semibold bg-gray-800 text-gray-300 rounded-full border border-gray-700 group-hover:border-blue-500/30 transition-colors">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}
