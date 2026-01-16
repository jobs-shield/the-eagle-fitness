import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Activity, Users, Cloud, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import heroBg from '../assets/hero-bg.png';

const Home = () => {
    const features = [
        {
            icon: <Dumbbell size={40} className="text-gold-400" />,
            title: "Premium Strength",
            description: "State-of-the-art equipment designed for maximum muscle isolation and growth."
        },
        {
            icon: <Activity size={40} className="text-gold-400" />,
            title: "Advanced Cardio",
            description: "High-performance treadmills, ellipticals, and cycles to boost your endurance."
        },
        {
            icon: <Users size={40} className="text-gold-400" />,
            title: "Certified Guidance",
            description: "Train with the best. Expert coaching from Sagar Jagtap to reach your goals."
        },
        {
            icon: <Cloud size={40} className="text-gold-400" />,
            title: "Steam Bath",
            description: "Recover faster and detoxify your body in our premium steam bath facility."
        }
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background Image/Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent z-10" />
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    {/* Hero Image */}
                    <div
                        className="w-full h-full bg-cover bg-center animate-fade-in"
                        style={{ backgroundImage: `url(${heroBg})` }}
                    />
                </div>

                <div className="container mx-auto px-6 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-gold-400 font-bold tracking-[0.2em] mb-4 text-lg md:text-xl uppercase">Welcome to The Eagle Fitness</h2>
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-bold text-white uppercase tracking-tighter mb-8 leading-none">
                            Unleash The <br />
                            <span className="text-gradient">Power Within</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-6"
                    >
                        <Button
                            href="https://wa.me/918806205050?text=Hello,%20I%E2%80%99m%20interested%20in%20joining%20The%20Eagle%20Fitness.%20Please%20guide%20me."
                            variant="primary"
                        >
                            Join Now <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                            href="https://wa.me/918806205050?text=Hello,%20I%20want%20to%20talk%20to%20the%20trainer."
                            variant="outline"
                        >
                            Talk to Trainer
                        </Button>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-gold-400 to-transparent" />
                </motion.div>
            </section>

            {/* Features Section */}
            <Section id="features" className="bg-dark-900">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                        Why Choose <span className="text-gold-400">The Eagle?</span>
                    </h2>
                    <div className="w-24 h-1 bg-gold-400 mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="glass-card hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className="mb-6 p-4 bg-gold-400/10 rounded-full w-fit group-hover:bg-gold-400/20 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Parallax Quote Section */}
            <section className="relative py-32 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop')" }}>
                    <div className="absolute inset-0 bg-black/80" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-3xl md:text-6xl font-heading font-bold text-white uppercase tracking-widest leading-tight mb-8">
                        "Discipline is the bridge between <br />
                        <span className="text-gold-400">Goals</span> and <span className="text-gold-400">Accomplishment</span>"
                    </h2>
                    <Button
                        href="https://wa.me/918806205050"
                        variant="outline"
                    >
                        Start Your Journey
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Home;
