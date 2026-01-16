import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Image as ImageIcon } from 'lucide-react';
import Section from '../components/ui/Section';
import { useGallery } from '../context/GalleryContext';

const Gallery = () => {
    const { images } = useGallery();
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="pt-20 min-h-screen">
            <Section>
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-heading font-bold text-white uppercase tracking-tighter">
                        Our <span className="text-gold-400">Gallery</span>
                    </h1>
                    <p className="text-gray-400 mt-4">A glimpse into the world of The Eagle Fitness.</p>
                </div>

                {images.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 border border-white/5 rounded-2xl bg-white/5 mx-auto max-w-2xl">
                        <ImageIcon size={64} className="text-gray-600 mb-4" />
                        <h3 className="text-2xl font-heading font-bold text-gray-400 uppercase">Gallery Empty</h3>
                        <p className="text-gray-500">The gallery is currently being curated. Check back soon!</p>
                    </div>
                ) : (
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {images.map((img) => (
                            <motion.div
                                key={img.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative group break-inside-avoid cursor-pointer overflow-hidden rounded-xl border border-white/10"
                                onClick={() => setSelectedImage(img.url)}
                            >
                                {img.url && img.url.startsWith('data:video') ? (
                                    <video
                                        src={img.url}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                        muted
                                        loop
                                        onMouseOver={e => e.target.play()}
                                        onMouseOut={e => e.target.pause()}
                                    />
                                ) : (
                                    <img
                                        src={img.url}
                                        alt="Gallery Item"
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                )}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                    <span className="text-gold-400 uppercase tracking-widest font-bold text-sm">View</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </Section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white hover:text-gold-400 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>
                        {selectedImage.startsWith('data:video') ? (
                            <motion.video
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                src={selectedImage}
                                controls
                                autoPlay
                                className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl shadow-gold-400/10"
                                onClick={(e) => e.stopPropagation()}
                            />
                        ) : (
                            <motion.img
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                src={selectedImage}
                                alt="Fullscreen View"
                                className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl shadow-gold-400/10"
                                onClick={(e) => e.stopPropagation()}
                            />
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
