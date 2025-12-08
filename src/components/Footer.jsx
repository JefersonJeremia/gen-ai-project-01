import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-blue-400">FreelancerHub</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Example collective of expert freelancers delivering top-tier digital solutions for your business.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><FaTwitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><FaFacebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><FaLinkedin size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><FaInstagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/freelancerhub/app/v1/about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link to="/freelancerhub/app/v1/services" className="text-gray-400 hover:text-blue-400 transition-colors">Our Services</Link></li>
                            <li><Link to="/freelancerhub/app/v1/portfolio" className="text-gray-400 hover:text-blue-400 transition-colors">Portfolio</Link></li>
                            <li><Link to="/freelancerhub/app/v1/blog" className="text-gray-400 hover:text-blue-400 transition-colors">Latest News</Link></li>
                            <li><Link to="/freelancerhub/app/v1/pricing" className="text-gray-400 hover:text-blue-400 transition-colors">Pricing Plans</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
                        <ul className="space-y-3">
                            <li><Link to="/freelancerhub/app/v1/services/full-stack-development" className="text-gray-400 hover:text-blue-400 transition-colors">Web Development</Link></li>
                            <li><Link to="/freelancerhub/app/v1/services/mobile-app-development" className="text-gray-400 hover:text-blue-400 transition-colors">Mobile Apps</Link></li>
                            <li><Link to="/freelancerhub/app/v1/services/ui-ux-design" className="text-gray-400 hover:text-blue-400 transition-colors">UI/UX Design</Link></li>
                            <li><Link to="/freelancerhub/app/v1/services/digital-marketing" className="text-gray-400 hover:text-blue-400 transition-colors">Digital Marketing</Link></li>
                            <li><Link to="/freelancerhub/app/v1/services/seo" className="text-gray-400 hover:text-blue-400 transition-colors">SEO Services</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li>123 Freelance Ave, Digital City</li>
                            <li>contact@freelancerhub.com</li>
                            <li>+1 (555) 123-4567</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {currentYear} FreelancerHub. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
