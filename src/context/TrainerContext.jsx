import React, { createContext, useContext, useState, useEffect } from 'react';
import sagarImage from '../assets/sagar-trainer.jpg';

const TrainerContext = createContext();

export const useTrainers = () => useContext(TrainerContext);

export const TrainerProvider = ({ children }) => {
    const [trainers, setTrainers] = useState([]);

    // Seed Data (Default Trainer)
    const defaultTrainers = [
        {
            id: 1,
            name: "Sagar Jagtap",
            role: "Head Trainer & Founder",
            bio: "With over 8 years of experience in bodybuilding and functional fitness, Sagar is dedicated to transforming lives through discipline and expert guidance.",
            image: sagarImage,
            instagram: "https://www.instagram.com/sagarjagtap1702/"
        }
    ];

    useEffect(() => {
        const savedTrainers = localStorage.getItem('eagle_trainers');
        if (savedTrainers) {
            setTrainers(JSON.parse(savedTrainers));
        } else {
            setTrainers(defaultTrainers);
            localStorage.setItem('eagle_trainers', JSON.stringify(defaultTrainers));
        }
    }, []);

    const addTrainer = (trainer) => {
        const newTrainer = { ...trainer, id: Date.now() };
        const updatedTrainers = [...trainers, newTrainer];
        setTrainers(updatedTrainers);
        localStorage.setItem('eagle_trainers', JSON.stringify(updatedTrainers));
    };

    const removeTrainer = (id) => {
        const updatedTrainers = trainers.filter(t => t.id !== id);
        setTrainers(updatedTrainers);
        localStorage.setItem('eagle_trainers', JSON.stringify(updatedTrainers));
    };

    return (
        <TrainerContext.Provider value={{ trainers, addTrainer, removeTrainer }}>
            {children}
        </TrainerContext.Provider>
    );
};
