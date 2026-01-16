import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';

const Membership = () => {
    const [steamBath, setSteamBath] = useState(false);

    // Base Prices
    const plans = [
        {
            title: "Gym Training",
            subtitle: "Pure Strength & Muscle",
            prices: {
                1: 600,
                3: 1500,
                6: 3000,
                12: 5555
            },
            features: [
                "Unlimited Gym Access",
                "Strength Training Equipment",
                "Free Weights Zone",
                "General Trainer Guidance",
                "Locker Facility"
            ]
        },
        {
            title: "Gym + Cardio",
            subtitle: "Complete Fitness Solution",
            prices: {
                1: 900,
                3: 2400,
                6: 4500,
                12: 8888
            },
            features: [
                "All Gym Training Access",
                "Advanced Cardio Zone",
                "Treadmills & Ellipticals",
                "Fat Loss Programs",
                "Priority Support"
            ]
        }
    ];

    const durations = [
        { label: '1 Month', value: 1 },
        { label: '3 Months', value: 3 },
        { label: '6 Months', value: 6 },
        { label: '1 Year', value: 12, bestValue: true },
    ];

    return (
        <div className="pt-20">
            <Section className="bg-dark-900 border-b border-white/5">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase tracking-tighter mb-6">
                        Invest In <span className="text-gold-400">Yourself</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Choose the plan that fits your goals. Transparent pricing with no hidden fees.
                    </p>
                </div>

                {/* Steam Bath Toggle */}
                <div className="flex justify-center mb-16">
                    <div
                        className="flex items-center gap-4 bg-white/5 p-4 rounded-full border border-gold-400/30 cursor-pointer hover:bg-white/10 transition-colors select-none"
                        onClick={() => setSteamBath(!steamBath)}
                    >
                        <div className={`w-14 h-8 rounded-full flex items-center p-1 transition-colors duration-300 ${steamBath ? 'bg-gold-400' : 'bg-gray-600'}`}>
                            <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${steamBath ? 'translate-x-6' : 'translate-x-0'}`} />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                Include Steam Bath <Info size={14} className="text-gold-400" />
                            </span>
                            <span className="text-xs text-gray-400">+ ₹200/month</span>
                        </div>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <div key={index} className="space-y-6">
                            <div className="text-center md:text-left">
                                <h3 className="text-3xl font-heading font-bold text-white uppercase">{plan.title}</h3>
                                <p className="text-gold-400 text-sm tracking-widest uppercase">{plan.subtitle}</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {durations.map((duration) => {
                                    const basePrice = plan.prices[duration.value];
                                    // If steam bath is selected, add 200 * months
                                    const finalPrice = steamBath ? basePrice + (200 * duration.value) : basePrice;

                                    return (
                                        <motion.div
                                            key={duration.value}
                                            whileHover={{ scale: 1.05 }}
                                            className={`relative p-6 glass-card border border-white/10 hover:border-gold-400/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all flex flex-col items-center justify-center text-center group ${duration.bestValue ? 'bg-gradient-to-br from-white/10 to-gold-400/10' : ''}`}
                                        >
                                            {duration.bestValue && (
                                                <div className="absolute -top-3 bg-gold-400 text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full shadow-lg">
                                                    Best Value
                                                </div>
                                            )}

                                            <h4 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">{duration.label}</h4>
                                            <div className="text-4xl font-heading font-bold text-white mb-1 group-hover:text-gold-400 transition-colors">
                                                ₹{finalPrice}
                                            </div>
                                            {steamBath && <div className="text-[10px] text-gold-400 uppercase tracking-wider">+ Steam Included</div>}

                                            <Button
                                                href={`https://wa.me/918806205050?text=Hello,%20I'm%20interested%20in%20joining%20The%20Eagle%20Fitness.%20Plan:%20${plan.title}%20(${duration.label}).`}
                                                className="mt-4 w-full text-xs py-2"
                                                variant={duration.bestValue ? "primary" : "outline"}
                                            >
                                                Select
                                            </Button>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Features List */}
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 mt-4">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                                            <Check size={16} className="text-gold-400 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                    {steamBath && (
                                        <li className="flex items-center gap-3 text-gold-400 font-bold text-sm">
                                            <Check size={16} className="text-gold-400 shrink-0" />
                                            Unlimited Steam Bath Access
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Membership;
