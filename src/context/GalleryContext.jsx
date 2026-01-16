import React, { createContext, useContext, useState, useEffect } from 'react';
import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.jpg';
import gallery3 from '../assets/gallery-3.jpg';
import gallery4 from '../assets/gallery-4.jpg';
import gallery5 from '../assets/gallery-5.jpg';
import gallery6 from '../assets/gallery-6.jpg';
import gallery7 from '../assets/gallery-7.jpg';
import gallery8 from '../assets/gallery-8.jpg';
import gallery9 from '../assets/gallery-9.jpg';
import gallery10 from '../assets/gallery-10.jpg';
import gallery11 from '../assets/gallery-11.jpg';
import gallery12 from '../assets/gallery-12.jpg';
import gallery13 from '../assets/gallery-13.jpg';
import gallery14 from '../assets/gallery-14.jpg';
import gallery15 from '../assets/gallery-15.jpg';

const GalleryContext = createContext();

export const useGallery = () => useContext(GalleryContext);

// Seed Data (Default Gallery - The Eagle Fitness Facility)
// Define outside component to prevent recreation on every render
const defaultImages = [
    { id: 1, url: gallery1 },
    { id: 2, url: gallery2 },
    { id: 3, url: gallery3 },
    { id: 4, url: gallery4 },
    { id: 5, url: gallery5 },
    { id: 6, url: gallery6 },
    { id: 7, url: gallery7 },
    { id: 8, url: gallery8 },
    { id: 9, url: gallery9 },
    { id: 10, url: gallery10 },
    { id: 11, url: gallery11 },
    { id: 12, url: gallery12 },
    { id: 13, url: gallery13 },
    { id: 14, url: gallery14 },
    { id: 15, url: gallery15 }
];

export const GalleryProvider = ({ children }) => {
    const [images, setImages] = useState(defaultImages);

    useEffect(() => {
        const savedImages = localStorage.getItem('eagle_gallery');
        if (savedImages) {
            try {
                const parsed = JSON.parse(savedImages);
                // Validate that saved images have proper structure
                if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].url) {
                    setImages(parsed);
                } else {
                    // Invalid data, use defaults
                    setImages(defaultImages);
                    localStorage.setItem('eagle_gallery', JSON.stringify(defaultImages));
                }
            } catch (error) {
                // Parse error, use defaults
                console.error('Error parsing gallery from localStorage:', error);
                setImages(defaultImages);
                localStorage.setItem('eagle_gallery', JSON.stringify(defaultImages));
            }
        } else {
            // No saved data, save defaults
            localStorage.setItem('eagle_gallery', JSON.stringify(defaultImages));
        }
    }, []);

    const addImage = (url) => {
        const newImages = [...images, { id: Date.now(), url }];
        setImages(newImages);
        localStorage.setItem('eagle_gallery', JSON.stringify(newImages));
    };

    const removeImage = (id) => {
        const newImages = images.filter(img => img.id !== id);
        setImages(newImages);
        localStorage.setItem('eagle_gallery', JSON.stringify(newImages));
    };

    return (
        <GalleryContext.Provider value={{ images, addImage, removeImage }}>
            {children}
        </GalleryContext.Provider>
    );
};
