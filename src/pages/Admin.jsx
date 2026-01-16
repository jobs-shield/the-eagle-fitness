import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Upload, LogOut, Users, Image as ImageIcon } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { useGallery } from '../context/GalleryContext';
import { useTrainers } from '../context/TrainerContext';

const Admin = () => {
    const navigate = useNavigate();
    const { images, addImage, removeImage } = useGallery();
    const { trainers, addTrainer, removeTrainer } = useTrainers();

    const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' | 'trainers'

    // Gallery State
    const [newImageUrl, setNewImageUrl] = useState('');

    // Trainer State
    const [newTrainer, setNewTrainer] = useState({
        name: '',
        role: '',
        bio: '',
        image: '',
        instagram: ''
    });

    useEffect(() => {
        const isAdmin = localStorage.getItem('isAdmin');
        if (!isAdmin) {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        navigate('/login');
    };

    const handleAddImage = (e) => {
        e.preventDefault();
        if (newImageUrl.trim()) {
            addImage(newImageUrl.trim());
            setNewImageUrl('');
        }
    };

    const handleAddTrainer = (e) => {
        e.preventDefault();
        if (newTrainer.name && newTrainer.role && newTrainer.image) {
            addTrainer(newTrainer);
            setNewTrainer({ name: '', role: '', bio: '', image: '', instagram: '' });
        }
    };

    const handleFileUpload = (e, setUrlCallback) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert("File size too large! Max 5MB.");
                e.target.value = null;
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setUrlCallback(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="pt-20 min-h-screen">
            <Section>
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
                    <h1 className="text-4xl font-heading font-bold text-white uppercase tracking-tighter">
                        Admin <span className="text-gold-400">Dashboard</span>
                    </h1>
                    <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
                        <LogOut size={18} /> Logout
                    </Button>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8 border-b border-white/10 pb-4">
                    <button
                        onClick={() => setActiveTab('gallery')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-bold uppercase tracking-wider ${activeTab === 'gallery' ? 'bg-gold-400 text-black' : 'text-gray-400 hover:text-white'}`}
                    >
                        <ImageIcon size={20} /> Gallery
                    </button>
                    <button
                        onClick={() => setActiveTab('trainers')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-bold uppercase tracking-wider ${activeTab === 'trainers' ? 'bg-gold-400 text-black' : 'text-gray-400 hover:text-white'}`}
                    >
                        <Users size={20} /> Trainers
                    </button>
                </div>

                {activeTab === 'gallery' ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Upload Section */}
                        <div className="lg:col-span-1">
                            <div className="glass-card p-6 sticky top-24">
                                <h3 className="text-xl font-heading font-bold text-white uppercase mb-6 flex items-center gap-2">
                                    <Upload size={20} className="text-gold-400" /> Add New Media
                                </h3>
                                <form onSubmit={handleAddImage} className="space-y-4">
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Upload File</label>
                                        <input
                                            type="file"
                                            accept="image/*,video/*"
                                            onChange={(e) => handleFileUpload(e, setNewImageUrl)}
                                            className="w-full bg-dark-900/50 border border-white/10 rounded px-4 py-3 text-white focus:border-gold-400 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-gold-400 file:text-black hover:file:bg-gold-500"
                                            required
                                        />
                                        <p className="text-xs text-gray-600 mt-2">Max 5MB. Stored locally.</p>
                                    </div>
                                    <Button type="submit" variant="primary" className="w-full" disabled={!newImageUrl}>
                                        Upload to Gallery
                                    </Button>
                                </form>
                            </div>
                        </div>

                        {/* Gallery List */}
                        <div className="lg:col-span-2">
                            <h3 className="text-xl font-heading font-bold text-white uppercase mb-6">Current Gallery ({images.length})</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {images.map((img) => (
                                    <div key={img.id} className="relative group rounded-lg overflow-hidden border border-white/10 aspect-video bg-dark-800">
                                        {img.url.startsWith('data:video') ? (
                                            <video src={img.url} className="w-full h-full object-cover" controls />
                                        ) : (
                                            <img src={img.url} alt="Gallery Item" className="w-full h-full object-cover" />
                                        )}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <button onClick={() => removeImage(img.id)} className="bg-red-500/80 text-white p-3 rounded-full hover:bg-red-600">
                                                <Trash2 size={24} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Add Trainer */}
                        <div className="lg:col-span-1">
                            <div className="glass-card p-6 sticky top-24">
                                <h3 className="text-xl font-heading font-bold text-white uppercase mb-6 flex items-center gap-2">
                                    <Users size={20} className="text-gold-400" /> Add Trainer
                                </h3>
                                <form onSubmit={handleAddTrainer} className="space-y-4">
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Trainer Photo</label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleFileUpload(e, (url) => setNewTrainer({ ...newTrainer, image: url }))}
                                            className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-gold-400 file:text-black hover:file:bg-gold-500"
                                            required
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        value={newTrainer.name}
                                        onChange={(e) => setNewTrainer({ ...newTrainer, name: e.target.value })}
                                        className="w-full bg-dark-900/50 border border-white/10 rounded px-4 py-3 text-white focus:border-gold-400 focus:outline-none"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Role (e.g. Head Trainer)"
                                        value={newTrainer.role}
                                        onChange={(e) => setNewTrainer({ ...newTrainer, role: e.target.value })}
                                        className="w-full bg-dark-900/50 border border-white/10 rounded px-4 py-3 text-white focus:border-gold-400 focus:outline-none"
                                        required
                                    />
                                    <textarea
                                        placeholder="Bio / Description"
                                        value={newTrainer.bio}
                                        onChange={(e) => setNewTrainer({ ...newTrainer, bio: e.target.value })}
                                        className="w-full bg-dark-900/50 border border-white/10 rounded px-4 py-3 text-white focus:border-gold-400 focus:outline-none h-24 resize-none"
                                        required
                                    />
                                    <input
                                        type="url"
                                        placeholder="Instagram URL"
                                        value={newTrainer.instagram}
                                        onChange={(e) => setNewTrainer({ ...newTrainer, instagram: e.target.value })}
                                        className="w-full bg-dark-900/50 border border-white/10 rounded px-4 py-3 text-white focus:border-gold-400 focus:outline-none"
                                    />
                                    <Button type="submit" variant="primary" className="w-full" disabled={!newTrainer.image}>
                                        Add Trainer
                                    </Button>
                                </form>
                            </div>
                        </div>

                        {/* Trainer List */}
                        <div className="lg:col-span-2 space-y-4">
                            <h3 className="text-xl font-heading font-bold text-white uppercase mb-6">Current Trainers ({trainers.length})</h3>
                            {trainers.map((trainer) => (
                                <div key={trainer.id} className="glass-card p-4 flex flex-col md:flex-row gap-4 items-center">
                                    <div className="w-24 h-24 rounded-full overflow-hidden border border-gold-400 shrink-0">
                                        <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <h4 className="text-lg font-bold text-white uppercase">{trainer.name}</h4>
                                        <p className="text-gold-400 text-sm uppercase tracking-wider mb-2">{trainer.role}</p>
                                        <p className="text-gray-400 text-xs line-clamp-2">{trainer.bio}</p>
                                    </div>
                                    <button
                                        onClick={() => removeTrainer(trainer.id)}
                                        className="text-red-500 hover:text-red-400 p-2"
                                        title="Remove Trainer"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </Section>
        </div>
    );
};

export default Admin;
