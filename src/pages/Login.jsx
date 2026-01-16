import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('isAdmin', 'true');
            navigate('/admin');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="pt-20 min-h-screen flex items-center justify-center">
            <Section className="w-full max-w-md">
                <div className="glass-card p-8 border-gold-400/20 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gold-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock className="text-gold-400" size={32} />
                        </div>
                        <h2 className="text-2xl font-heading font-bold text-white uppercase">Admin Portal</h2>
                        <p className="text-gray-400 text-sm mt-2">Client-side admin panel. For advanced security, migrate to backend hosting.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-dark-900/50 border border-white/10 rounded px-4 py-3 text-white focus:border-gold-400 focus:outline-none transition-colors"
                                placeholder="Enter username"
                            />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-dark-900/50 border border-white/10 rounded px-4 py-3 text-white focus:border-gold-400 focus:outline-none transition-colors"
                                placeholder="Enter password"
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                        <Button type="submit" variant="primary" className="w-full">
                            Access Dashboard
                        </Button>
                    </form>
                </div>
            </Section>
        </div>
    );
};

export default Login;
