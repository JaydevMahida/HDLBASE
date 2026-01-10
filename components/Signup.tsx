
import React, { useState } from 'react';
import { UserRole, UserProfile } from '../types';
import logo from '../Assets/hdlbasewhitefinal-removebg-preview.png';
import { Link } from 'react-router-dom';

interface Props {
    onLoginSuccess: () => void;
}

const Signup: React.FC<Props> = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [role, setRole] = useState<UserRole>(UserRole.LEARNER);
    const [loading, setLoading] = useState(false);

    // Real Signup Logic
    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        setLoading(true);
        try {
            // Dynamic imports for Firebase SDKs
            const { createUserWithEmailAndPassword, updateProfile } = await import("firebase/auth");
            const { doc, setDoc } = await import("firebase/firestore");
            const { auth, db } = await import("../firebase");

            // 1. Create Authentication User
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const finalUsername = username || `user_${Date.now()}`;

            // Update Auth Profile Display Name
            await updateProfile(user, {
                displayName: finalUsername
            });

            // 2. Create User Profile in Firestore
            const userRef = doc(db, "users", user.uid);
            const profileData: UserProfile = {
                uid: user.uid,
                email: user.email || '',
                role: role,
                displayName: finalUsername,
                username: finalUsername.toLowerCase().replace(/\s+/g, '_'),
                category: role === UserRole.CONTRIBUTOR ? 'HDL Designer' : 'Learner'
            };

            await setDoc(userRef, profileData);

            // Success handled by App.tsx onAuthStateChanged
        } catch (error: any) {
            console.error("Signup Error:", error);
            alert("Signup failed: " + error.message);
            setLoading(false); // Only stop loading on error, success redirects or waits for state change
        }
    };

    // Google Login Logic (Reused from Login.tsx with slight mods for signup context)
    const handleGoogleLogin = async () => {
        setLoading(true);
        try {
            const { signInWithPopup } = await import("firebase/auth");
            const { doc, setDoc, getDoc } = await import("firebase/firestore");
            const { auth, googleProvider, db } = await import("../firebase");

            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            // Check if user exists to preserve role or create new
            const userRef = doc(db, "users", user.uid);
            const userSnap = await getDoc(userRef);

            if (!userSnap.exists()) {
                const profileData: UserProfile = {
                    uid: user.uid,
                    email: user.email || '',
                    role: role, // Use selected role for new users
                    displayName: user.displayName || 'User',
                    username: (user.displayName || 'User').toLowerCase().replace(/\s+/g, '_'),
                    category: role === UserRole.CONTRIBUTOR ? 'HDL Designer' : 'Learner'
                };
                await setDoc(userRef, profileData);
            }
            // If exists, onAuthStateChanged in App.tsx will pick it up

        } catch (error: any) {
            console.error("Google Login Error:", error);
            alert("Google Login failed: " + error.message);
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-matte relative overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-contributor/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-learner/10 rounded-full blur-[120px]"></div>

            <div className="w-full max-w-md frosted-glass rounded-2xl p-8 shadow-2xl z-10">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-black tracking-tighter text-accent mb-1"><Link to="/" className="logo-text"><img src={logo} alt="LOGO" className="w-32 h-auto mx-auto block" /></Link></h1>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Create New Account</p>
                </div>

                <div className="space-y-6">
                    <form onSubmit={handleSignup} className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Username</label>
                            <input
                                type="text"
                                required
                                className="w-full bg-gunmetal/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-offwhite font-medium"
                                placeholder="chip_wizard"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email Address</label>
                            <input
                                type="email"
                                required
                                className="w-full bg-gunmetal/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-offwhite font-medium"
                                placeholder="engineer@chipcrafters.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className="w-full bg-gunmetal/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-offwhite font-medium pr-10"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                                >
                                    {showPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    required
                                    className="w-full bg-gunmetal/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-offwhite font-medium pr-10"
                                    placeholder="••••••••"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                                >
                                    {showConfirmPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Select Role</label>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    onClick={() => setRole(UserRole.CONTRIBUTOR)}
                                    className={`py-2 px-4 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${role === UserRole.CONTRIBUTOR
                                        ? 'bg-contributor/20 border-contributor text-contributor'
                                        : 'bg-gunmetal border-white/5 text-gray-600'
                                        }`}
                                >
                                    Contributor
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setRole(UserRole.LEARNER)}
                                    className={`py-2 px-4 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${role === UserRole.LEARNER
                                        ? 'bg-learner/20 border-learner text-learner'
                                        : 'bg-gunmetal border-white/5 text-gray-600'
                                        }`}
                                >
                                    Learner
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-accent text-matte font-black py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 shadow-2xl shadow-white/5 uppercase text-xs tracking-widest"
                        >
                            {loading ? 'Processing...' : 'Sign Up'}
                        </button>
                    </form>

                    <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-white/10"></div>
                        <span className="flex-shrink mx-4 text-gray-500 text-[9px] uppercase font-black tracking-widest">Or Continue With</span>
                        <div className="flex-grow border-t border-white/10"></div>
                    </div>

                    <button
                        onClick={handleGoogleLogin}
                        className="w-full bg-white text-gray-800 font-bold py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl flex items-center justify-center gap-3"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <span className="text-xs uppercase tracking-widest">Google Direct Login</span>
                    </button>

                    <div className="flex items-center justify-center gap-2 mt-4">
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Already have an account?</p>
                        <Link to="/login" className="text-[10px] text-accent font-black uppercase tracking-widest hover:underline">Log In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
