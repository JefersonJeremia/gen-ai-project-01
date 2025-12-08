import { Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { FiCheck, FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const pricingPlans = [
    {
        name: 'Starter',
        price: '$999',
        period: '/project',
        description: 'Perfect for small businesses and startups',
        features: [
            'Single Page Website',
            'Basic SEO Setup',
            'Mobile Responsive',
            'Contact Form',
            '1 Month Support',
            'Social Media Integration'
        ],
        popular: false,
        gradient: 'from-blue-600 to-blue-700'
    },
    {
        name: 'Professional',
        price: '$2,499',
        period: '/project',
        description: 'Ideal for growing businesses',
        features: [
            'Multi-page Website (up to 5)',
            'Advanced SEO & Analytics',
            'CMS Integration',
            'Social Media Setup',
            '3 Months Support',
            'E-commerce Ready',
            'Custom Design',
            'Performance Optimization'
        ],
        popular: true,
        gradient: 'from-blue-500 to-blue-600'
    },
    {
        name: 'Enterprise',
        price: '$4,999+',
        period: '/project',
        description: 'For large-scale projects',
        features: [
            'Custom E-commerce / Web App',
            'Full Digital Marketing Strategy',
            'Priority Support',
            'Custom UI/UX Design',
            '6 Months Support',
            'Advanced Analytics',
            'API Integration',
            'Dedicated Account Manager'
        ],
        popular: false,
        gradient: 'from-blue-700 to-blue-800'
    }
];

export default function Pricing() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-16 px-4">
            <Container maxWidth="lg">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Simple, Transparent <span className="text-blue-500">Pricing</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Choose the perfect plan for your business needs. No hidden fees.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="relative"
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                                        <FiStar size={14} />
                                        MOST POPULAR
                                    </div>
                                </div>
                            )}

                            {/* Card */}
                            <div
                                className={`relative h-full bg-gray-900/50 backdrop-blur-xl border ${plan.popular
                                        ? 'border-blue-500 shadow-2xl shadow-blue-500/20'
                                        : 'border-gray-800'
                                    } rounded-2xl p-8 transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10`}
                            >
                                {/* Decorative gradient */}
                                {plan.popular && (
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl pointer-events-none"></div>
                                )}

                                <div className="relative z-10">
                                    {/* Plan Name */}
                                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                                    {/* Price */}
                                    <div className="mb-8">
                                        <div className="flex items-baseline gap-1">
                                            <span className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                                                {plan.price}
                                            </span>
                                            <span className="text-gray-400 text-lg">{plan.period}</span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="mt-1 flex-shrink-0">
                                                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                                                        <FiCheck className="text-blue-400 w-3 h-3" />
                                                    </div>
                                                </div>
                                                <span className="text-gray-300 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <Link to="/freelancerhub/app/v1/contact">
                                        <Button
                                            fullWidth
                                            variant={plan.popular ? 'contained' : 'outlined'}
                                            className={
                                                plan.popular
                                                    ? '!bg-gradient-to-r !from-blue-600 !to-blue-700 !text-white !font-bold !py-3 !rounded-lg !shadow-lg !shadow-blue-500/30 hover:!shadow-blue-500/50 !transition-all !duration-300'
                                                    : '!border-2 !border-blue-500 !text-blue-400 !font-bold !py-3 !rounded-lg hover:!bg-blue-500/10 !transition-all !duration-300'
                                            }
                                        >
                                            Choose Plan
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Need a Custom Solution?
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Have unique requirements? Let's discuss a tailored plan that fits your specific needs.
                        </p>
                        <Link to="/freelancerhub/app/v1/contact">
                            <Button
                                variant="outlined"
                                size="large"
                                className="!border-2 !border-blue-500 !text-blue-400 !font-bold !px-8 !py-3 !rounded-lg hover:!bg-blue-500/10 !transition-all !duration-300"
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}
