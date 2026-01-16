import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowRight, Award } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import sagarImage from '../assets/sagar-trainer.jpg';

const Trainers = () => {
    return (
        <div className="pt-20">
            <Section className="min-h-[80vh] flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Trainer Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="absolute inset-0 bg-gold-400/20 blur-[80px] rounded-full" />
                        <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-gold-400/30 shadow-[0_0_30px_rgba(212,175,55,0.15)] max-w-md mx-auto">
                            {/* Trainer Image */}
                            <div className="aspect-[3/4] bg-dark-800 flex items-center justify-center relative overflow-hidden group">
                                <img
                                    src={sagarImage}
                                    alt="Sagar Jagtap"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-80" />
                            </div>
                        </div>

                        {/* Name Overlay (Mobile Style) */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] glass-card text-center lg:hidden z-20">
                            <h2 className="text-2xl font-bold font-heading text-white uppercase">Sagar Jagtap</h2>
                            <p className="text-gold-400 text-sm tracking-widest">Owner & Head Trainer</p>
                        </div>
                    </motion.div>

                    {/* Trainer Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2 space-y-8"
                    >
                        <div>
                            <h3 className="text-gold-400 font-bold tracking-widest uppercase mb-2">Meet the Expert</h3>
                            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white uppercase leading-none mb-6">
                                Sagar <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-white">Jagtap</span>
                            </h1>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="px-4 py-1 border border-gold-400 rounded-full text-gold-400 text-xs font-bold uppercase tracking-wider">Owner</span>
                                <span className="px-4 py-1 border border-gray-600 rounded-full text-gray-400 text-xs font-bold uppercase tracking-wider">Certified Trainer</span>
                            </div>
                        </div>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                As the founder and head coach of The Eagle Fitness, Sagar brings years of dedication, expertise, and passion to the floor. His philosophy is simple: results speak louder than words.
                            </p>
                            <p>
                                Specializing in strength training, body transformation, and functional fitness, Sagar has helped countless individuals achieve their dream physique through disciplined training and nutritional guidance.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 pt-6">
                            <Button
                                href="https://wa.me/918806205050?text=Hello,%20I'm%20interested%20in%20joining%20The%20Eagle%20Fitness.%20Please%20guide%20me."
                                variant="primary"
                            >
                                Start Training <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>

                            <a
                                href="https://www.instagram.com/sagarjagtap1702/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 px-8 py-3 bg-dark-800 border border-white/10 hover:border-gold-400/50 hover:bg-white/5 text-white transition-all duration-300 rounded"
                            >
                                <Instagram className="text-pink-500" />
                                <span className="font-bold uppercase tracking-wider text-sm">Follow on Instagram</span>
                            </a>
                        </div>

                        <div className="pt-8 grid grid-cols-2 gap-6">
                            <div className="glass-card p-4 text-center">
                                <h4 className="text-3xl font-heading font-bold text-gold-400 mb-1">5+</h4>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Years Experience</p>
                            </div>
                            <div className="glass-card p-4 text-center">
                                <h4 className="text-3xl font-heading font-bold text-gold-400 mb-1">100+</h4>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Transformations</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </Section>
        </div>
    );
};

export default Trainers;
