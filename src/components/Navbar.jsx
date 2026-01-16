import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Trainers', path: '/trainers' },
        { name: 'Membership', path: '/membership' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={twMerge(
                'fixed w-full z-50 transition-all duration-300',
                scrolled ? 'bg-dark-900/90 backdrop-blur-md py-3 border-b border-gold-400/10' : 'bg-transparent py-5'
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <Dumbbell className="w-8 h-8 text-gold-400 transition-transform duration-300 group-hover:rotate-45" />
                    <div className="flex flex-col">
                        <span className="text-2xl font-heading font-bold text-white tracking-widest leading-none">THE EAGLE</span>
                        <span className="text-xs text-gold-400 tracking-[0.3em] font-medium text-center">FITNESS</span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={clsx(
                                'text-sm font-bold uppercase tracking-wider transition-colors duration-300 relative group',
                                isActive(link.path) ? 'text-gold-400' : 'text-gray-300 hover:text-white'
                            )}
                        >
                            {link.name}
                            <span className={clsx(
                                "absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full",
                                isActive(link.path) && "w-full"
                            )} />
                        </Link>
                    ))}
                    <Link
                        to="/membership"
                        className="px-6 py-2 bg-gold-400 text-black font-bold uppercase text-xs tracking-wider clip-path-slant hover:bg-gold-500 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    >
                        Join Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-gold-400 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={clsx(
                    'fixed inset-0 bg-dark-900/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden',
                    isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'
                )}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={clsx(
                            'text-2xl font-heading font-bold uppercase tracking-widest hover:text-gold-400 transition-colors',
                            isActive(link.path) ? 'text-gold-400' : 'text-white'
                        )}
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    to="/membership"
                    onClick={() => setIsOpen(false)}
                    className="mt-4 px-10 py-4 bg-gold-400 text-black font-bold uppercase tracking-widest clip-path-slant hover:bg-gold-500 transition-all"
                >
                    Join Now
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
