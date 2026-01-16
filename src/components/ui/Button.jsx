import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

const Button = ({
    children,
    variant = 'primary',
    className,
    to,
    href,
    onClick,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 clip-path-slant focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-400";

    const variants = {
        primary: "bg-gold-400 text-black hover:bg-gold-500 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] px-8 py-3",
        outline: "border border-gold-400 text-gold-400 hover:bg-gold-400/10 px-8 py-3",
        ghost: "text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2",
    };

    const combinedClasses = twMerge(baseStyles, variants[variant], className);

    if (to) {
        return (
            <Link to={to} className={combinedClasses} {...props}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={combinedClasses} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={combinedClasses} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
