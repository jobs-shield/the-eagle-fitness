import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import { Target, Shield, Zap } from 'lucide-react';
import gymInterior from '../assets/gallery-1.jpg';

const About = () => {
    return (
        <div className="pt-20">
            {/* Header */}
            <section className="relative py-20 bg-dark-800">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-heading font-bold text-white uppercase tracking-tighter"
                    >
                        About <span className="text-gold-400">The Eagle</span>
                    </motion.h1>
                    <div className="w-24 h-1 bg-gold-400 mx-auto mt-6" />
                </div>
            </section>

            {/* Introduction & History */}
            <Section className="bg-dark-900">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-heading font-bold text-white uppercase">
                            Our <span className="text-gold-400">History</span> & Legacy
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Founded by the visionary <strong>Sagar Jagtap</strong>, <strong>The Eagle Fitness</strong> started with a single goal: to bring elite-level fitness infrastructure to our community. What began as a passion project has evolved into one of the most respected fitness destinations in Maharashtra.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Over the years, we have cultivated a culture of <strong>unrelenting discipline</strong> and <strong>high performance</strong>. Our journey is defined by the hundreds of detailed success stories and transformations that have walked out of our doors. We don't just build bodies; we build character, resilience, and a championship mindset.
                        </p>
                        <div className="flex gap-8 pt-4">
                            <div>
                                <h4 className="text-4xl font-bold text-gold-400">8+</h4>
                                <p className="text-gray-400 text-sm uppercase tracking-wide">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-gold-400">500+</h4>
                                <p className="text-gray-400 text-sm uppercase tracking-wide">Happy Members</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-gold-400">100%</h4>
                                <p className="text-gray-400 text-sm uppercase tracking-wide">Success Rate</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gold-400 blur-[100px] opacity-20" />
                        <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src={gymInterior}
                                alt="The Eagle Fitness Gym Interior"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Why We Are The Best */}
            <Section className="bg-dark-800">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-heading font-bold text-white uppercase mb-6">
                        Why We Are The <span className="text-gold-400">Best</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        We combine old-school bodybuilding principles with modern sports science to deliver results that last.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: <Target className="text-gold-400" size={32} />, title: "Personalized Approach", text: "No cookie-cutter plans. Every member gets guidance tailored to their body type and goals." },
                        { icon: <Shield className="text-gold-400" size={32} />, title: "Elite Equipment", text: "We invest in the best machinery to ensure biomechanically correct movements and injury prevention." },
                        { icon: <Zap className="text-gold-400" size={32} />, title: "Results Driven", text: "Our track record speaks for itself. We measure success by your progress, not just your attendance." }
                    ].map((item, idx) => (
                        <div key={idx} className="glass-card p-8 border-t-4 border-t-gold-400 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="mb-6 flex justify-center">{item.icon}</div>
                            <h3 className="text-xl font-bold text-white uppercase mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default About;
