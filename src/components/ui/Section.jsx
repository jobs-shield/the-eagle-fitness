import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Section = ({
    children,
    className,
    id,
    noPadding = false
}) => {
    return (
        <section
            id={id}
            className={twMerge(
                "relative w-full overflow-hidden",
                !noPadding && "py-20 md:py-32",
                className
            )}
        >
            {/* Decorative background grid line */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {children}
            </div>
        </section>
    );
};

export default Section;
