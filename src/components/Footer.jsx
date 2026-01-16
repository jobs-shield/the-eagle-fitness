import React from 'react';
import { Instagram, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark-800 pt-20 pb-10 border-t border-white/5 relative items-center">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <span className="text-3xl font-heading font-bold text-white tracking-widest leading-none">THE EAGLE</span>
                            <span className="text-sm text-gold-400 tracking-[0.4em] font-medium">FITNESS</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Unleash the power within. Premium equipment, expert guidance, and a luxury environment to transform your body and mind.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/the_eagle_fitnesss/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-400 hover:text-black transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="https://wa.me/918806205050" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-400 hover:text-black transition-all duration-300">
                                <Phone size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-heading font-bold text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Trainers', path: '/trainers' },
                                { name: 'Membership', path: '/membership' },
                                { name: 'Gallery', path: '/gallery' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-400 hover:text-gold-400 transition-colors uppercase text-sm tracking-wider">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-heading font-bold text-white">Visit Us</h4>
                        <div className="space-y-4">
                            <div className="flex gap-4 text-gray-400">
                                <MapPin className="text-gold-400 shrink-0" size={24} />
                                <p className="text-sm leading-relaxed">
                                    Chhatrapati Sambhaji Maharaj Chowk,<br />
                                    Kaij – Dharur Rd, Swaraj Nagar,<br />
                                    Kasba Vibhag Kille Dharur,<br />
                                    Maharashtra – 431124
                                </p>
                            </div>
                            <div className="flex gap-4 text-gray-400">
                                <Phone className="text-gold-400 shrink-0" size={24} />
                                <p className="text-sm">+91 8806205050</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} The Eagle Fitness. All rights reserved.
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-2 text-gray-500 text-sm">
                        <span>Designed by</span>
                        <span className="text-gold-400 font-bold">Vijay Ukande</span>
                        <span className="hidden md:inline">|</span>
                        <a href="https://wa.me/918788939760" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                            8788939760
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
