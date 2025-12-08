import { useState } from 'react';
import { Container, TextField, Button, InputAdornment } from '@mui/material';
import { motion } from 'framer-motion';
import { ClipLoader } from 'react-spinners';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitted(false), 3000);
        }, 2000);
    };

    const contactInfo = [
        {
            icon: <FaEnvelope size={28} />,
            title: 'Email Us',
            details: ['contact@freelancerhub.com', 'support@freelancerhub.com']
        },
        {
            icon: <FaPhone size={28} />,
            title: 'Call Us',
            details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
        },
        {
            icon: <FaMapMarkerAlt size={28} />,
            title: 'Visit Us',
            details: ['123 Freelance Ave, Suite 100', 'Digital City, Tech State 90210']
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-16 px-4">
            <Container maxWidth="lg">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Get In <span className="text-blue-500">Touch</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a project in mind or want to learn more about our services? We'd love to hear from you.
                    </p>
                </motion.div>

                {/* Contact Info Cards - Horizontal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                >
                    {contactInfo.map((info, index) => (
                        <div
                            key={index}
                            className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 text-center"
                        >
                            <div className="inline-flex p-4 bg-blue-600/20 rounded-full text-blue-400 mb-4">
                                {info.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                                <p key={idx} className="text-gray-400 text-sm">
                                    {detail}
                                </p>
                            ))}
                        </div>
                    ))}
                </motion.div>

                {/* Contact Form - Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative">
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

                        {/* Form Card */}
                        <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl shadow-blue-500/10 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                                Send Us a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name and Email Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <TextField
                                        label="Your Name"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <FiUser className="text-blue-400" />
                                                </InputAdornment>
                                            ),
                                            className: "bg-gray-800/50 text-white rounded-lg"
                                        }}
                                        InputLabelProps={{ className: "text-gray-400" }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': { borderColor: '#374151' },
                                                '&:hover fieldset': { borderColor: '#3b82f6' },
                                                '&.Mui-focused fieldset': { borderColor: '#3b82f6' },
                                            },
                                            '& .MuiInputLabel-root': { color: '#9ca3af' },
                                            '& .MuiInputBase-input': { color: 'white' },
                                        }}
                                    />
                                    <TextField
                                        label="Email Address"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <FiMail className="text-blue-400" />
                                                </InputAdornment>
                                            ),
                                            className: "bg-gray-800/50 text-white rounded-lg"
                                        }}
                                        InputLabelProps={{ className: "text-gray-400" }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': { borderColor: '#374151' },
                                                '&:hover fieldset': { borderColor: '#3b82f6' },
                                                '&.Mui-focused fieldset': { borderColor: '#3b82f6' },
                                            },
                                            '& .MuiInputLabel-root': { color: '#9ca3af' },
                                            '& .MuiInputBase-input': { color: 'white' },
                                        }}
                                    />
                                </div>

                                {/* Subject */}
                                <TextField
                                    label="Subject"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <FiMessageSquare className="text-blue-400" />
                                            </InputAdornment>
                                        ),
                                        className: "bg-gray-800/50 text-white rounded-lg"
                                    }}
                                    InputLabelProps={{ className: "text-gray-400" }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': { borderColor: '#374151' },
                                            '&:hover fieldset': { borderColor: '#3b82f6' },
                                            '&.Mui-focused fieldset': { borderColor: '#3b82f6' },
                                        },
                                        '& .MuiInputLabel-root': { color: '#9ca3af' },
                                        '& .MuiInputBase-input': { color: 'white' },
                                    }}
                                />

                                {/* Message */}
                                <TextField
                                    label="Message"
                                    multiline
                                    rows={6}
                                    variant="outlined"
                                    fullWidth
                                    required
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    InputProps={{
                                        className: "bg-gray-800/50 text-white rounded-lg"
                                    }}
                                    InputLabelProps={{ className: "text-gray-400" }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': { borderColor: '#374151' },
                                            '&:hover fieldset': { borderColor: '#3b82f6' },
                                            '&.Mui-focused fieldset': { borderColor: '#3b82f6' },
                                        },
                                        '& .MuiInputLabel-root': { color: '#9ca3af' },
                                        '& .MuiInputBase-input': { color: 'white' },
                                    }}
                                />

                                {/* Submit Button */}
                                <div className="relative pt-2">
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        fullWidth
                                        disabled={loading}
                                        className="!bg-gradient-to-r !from-blue-600 !to-blue-700 !text-white !font-bold !py-4 !rounded-lg !shadow-lg !shadow-blue-500/30 hover:!shadow-blue-500/50 !transition-all !duration-300 hover:!scale-[1.02]"
                                    >
                                        {loading ? <ClipLoader size={24} color="#ffffff" /> : 'SEND MESSAGE'}
                                    </Button>

                                    {submitted && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-4 p-4 bg-green-500/20 border border-green-500/50 text-green-400 rounded-lg text-center font-semibold"
                                        >
                                            ✓ Message sent successfully!
                                        </motion.div>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}
