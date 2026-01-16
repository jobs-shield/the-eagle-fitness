import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const Contact = () => {
    return (
        <div className="pt-20">
            <Section className="min-h-screen flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-gold-400 font-bold tracking-widest uppercase mb-2">Get In Touch</h2>
                            <h1 className="text-5xl font-heading font-bold text-white uppercase leading-none">
                                Visit <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-white">The Eagle</span>
                            </h1>
                        </div>

                        <div className="glass-card p-8 space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-gold-400 shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wider mb-2">Address</h4>
                                    <p className="text-gray-400 leading-relaxed">
                                        Chhatrapati Sambhaji Maharaj Chowk,<br />
                                        Kaij – Dharur Rd, Swaraj Nagar,<br />
                                        Kasba Vibhag Kille Dharur,<br />
                                        Dharur, Maharashtra – 431124
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="text-gold-400 shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wider mb-2">Phone / WhatsApp</h4>
                                    <p className="text-gray-400">+91 8806205050</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Instagram className="text-gold-400 shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wider mb-2">Instagram</h4>
                                    <p className="text-gray-400">@the_eagle_fitnesss</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                href="https://wa.me/918806205050?text=Hello,%20I%E2%80%99m%20interested%20in%20joining%20The%20Eagle%20Fitness.%20Please%20guide%20me."
                                variant="primary"
                                className="flex-1"
                            >
                                Chat on WhatsApp
                            </Button>
                            <Button
                                href="https://maps.app.goo.gl/eLiQytk7miTwPYKn7"
                                variant="outline"
                                className="flex-1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Open Google Maps
                            </Button>
                        </div>
                    </motion.div>

                    {/* Map Image / Redirect */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
                    >
                        {/* We can use an iframe or just an image with a link. 
                 User requested redirection button, but an embedded map is better UX. 
                 However, to stick to "Google Maps redirection button" request strictly, I'll put a placeholder map image that LINKS to the map.
             */}
                        <a href="https://maps.app.goo.gl/eLiQytk7miTwPYKn7" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10 flex items-center justify-center">
                                <div className="bg-gold-400 text-black px-6 py-3 rounded font-bold uppercase tracking-wider shadow-lg transform group-hover:scale-105 transition-transform flex items-center gap-2">
                                    <MapPin size={20} /> View on Google Maps
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop"
                                alt="Map Location"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </a>
                    </motion.div>

                </div>
            </Section>
        </div>
    );
};

export default Contact;
