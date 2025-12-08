import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TextField, Button, Container, InputAdornment, IconButton } from '@mui/material';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { ClipLoader } from 'react-spinners';

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = 'Name is required';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length === 0) {
            setLoading(true);
            // Simulate API call
            setTimeout(() => {
                setLoading(false);
                alert('Registration successful! (Demo)');
            }, 2000);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <Container maxWidth="sm">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    {/* Decorative background elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

                    {/* Main card */}
                    <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl shadow-blue-500/10 p-8 md:p-12">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <motion.h1
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl font-bold text-white mb-2"
                            >
                                Create Account
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-gray-400"
                            >
                                Join our community today
                            </motion.p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <TextField
                                    fullWidth
                                    name="name"
                                    type="text"
                                    label="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    error={!!errors.name}
                                    helperText={errors.name}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <FiUser className="text-blue-400" />
                                            </InputAdornment>
                                        ),
                                        className: "bg-gray-800/50 text-white rounded-lg"
                                    }}
                                    InputLabelProps={{
                                        className: "text-gray-400"
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#374151',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#3b82f6',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#3b82f6',
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#9ca3af',
                                        },
                                        '& .MuiInputBase-input': {
                                            color: 'white',
                                        },
                                    }}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <TextField
                                    fullWidth
                                    name="email"
                                    type="email"
                                    label="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <FiMail className="text-blue-400" />
                                            </InputAdornment>
                                        ),
                                        className: "bg-gray-800/50 text-white rounded-lg"
                                    }}
                                    InputLabelProps={{
                                        className: "text-gray-400"
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#374151',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#3b82f6',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#3b82f6',
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#9ca3af',
                                        },
                                        '& .MuiInputBase-input': {
                                            color: 'white',
                                        },
                                    }}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <TextField
                                    fullWidth
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    label="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    error={!!errors.password}
                                    helperText={errors.password}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <FiLock className="text-blue-400" />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    edge="end"
                                                    className="text-white hover:text-blue-400"
                                                >
                                                    {showPassword ? <FiEyeOff color='white' /> : <FiEye color='white' />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                        className: "bg-gray-800/50 text-white rounded-lg"
                                    }}
                                    InputLabelProps={{
                                        className: "text-gray-400"
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#374151',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#3b82f6',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#3b82f6',
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#9ca3af',
                                        },
                                        '& .MuiInputBase-input': {
                                            color: 'white',
                                        },
                                    }}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                <TextField
                                    fullWidth
                                    name="confirmPassword"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    label="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    error={!!errors.confirmPassword}
                                    helperText={errors.confirmPassword}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <FiLock className="text-blue-400" />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                    edge="end"
                                                    className="text-white hover:text-blue-400"
                                                >
                                                    {showConfirmPassword ? <FiEyeOff color='white' /> : <FiEye color='white' />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                        className: "bg-gray-800/50 text-white rounded-lg"
                                    }}
                                    InputLabelProps={{
                                        className: "text-gray-400"
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#374151',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#3b82f6',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#3b82f6',
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#9ca3af',
                                        },
                                        '& .MuiInputBase-input': {
                                            color: 'white',
                                        },
                                    }}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    disabled={loading}
                                    className="!bg-gradient-to-r !from-blue-600 !to-blue-700 !text-white !font-bold !py-4 !rounded-lg !shadow-lg !shadow-blue-500/30 hover:!shadow-blue-500/50 !transition-all !duration-300 hover:!scale-[1.02]"
                                >
                                    {loading ? (
                                        <ClipLoader color="#ffffff" size={24} />
                                    ) : (
                                        'REGISTER'
                                    )}
                                </Button>
                            </motion.div>
                        </form>

                        {/* Footer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="mt-8 text-center"
                        >
                            <p className="text-gray-400">
                                Already have an account?{' '}
                                <Link to="/freelancerhub/app/v1/login" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                                    Log In
                                </Link>
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}
