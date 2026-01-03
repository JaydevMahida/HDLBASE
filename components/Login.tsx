
import React, { useState } from 'react';
import { UserRole, UserProfile } from '../types';

interface Props {
  onLoginSuccess: () => void;
}

const Login: React.FC<Props> = ({ onLoginSuccess }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>(UserRole.CONSUMER);
  const [loading, setLoading] = useState(false);

  const handleMockLogin = (selectedRole: UserRole) => {
    setLoading(true);
    const mockUid = `mock_${selectedRole.toLowerCase()}_${Date.now()}`;
    const mockUser = {
      uid: mockUid,
      email: `${selectedRole.toLowerCase()}@chipcrafters.mock`,
      displayName: `Engineer ${selectedRole.charAt(0) + selectedRole.slice(1).toLowerCase()}`
    };
    
    const profile: UserProfile = {
      uid: mockUid,
      email: mockUser.email,
      role: selectedRole,
      displayName: mockUser.displayName,
      category: selectedRole === UserRole.PRODUCER ? 'HDL Designer' : 'Learner'
    };

    const localProfiles = JSON.parse(localStorage.getItem('hdlbase_mock_users') || '{}');
    localProfiles[mockUid] = profile;
    localStorage.setItem('hdlbase_mock_users', JSON.stringify(localProfiles));
    localStorage.setItem('hdlbase_mock_session', JSON.stringify(mockUser));
    
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess();
    }, 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleMockLogin(role);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-matte relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-producer/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-consumer/10 rounded-full blur-[120px]"></div>

      <div className="w-full max-w-md frosted-glass rounded-2xl p-8 shadow-2xl z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black tracking-tighter text-accent mb-1">HDLBase</h1>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Chipcrafters Inc.</p>
        </div>

        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
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
              <input
                type="password"
                required
                className="w-full bg-gunmetal/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-offwhite font-medium"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Select Role</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRole(UserRole.PRODUCER)}
                  className={`py-2 px-4 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${
                    role === UserRole.PRODUCER 
                      ? 'bg-producer/20 border-producer text-producer' 
                      : 'bg-gunmetal border-white/5 text-gray-600'
                  }`}
                >
                  Producer
                </button>
                <button
                  type="button"
                  onClick={() => setRole(UserRole.CONSUMER)}
                  className={`py-2 px-4 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${
                    role === UserRole.CONSUMER 
                      ? 'bg-consumer/20 border-consumer text-consumer' 
                      : 'bg-gunmetal border-white/5 text-gray-600'
                  }`}
                >
                  Consumer
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent text-matte font-black py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 shadow-2xl shadow-white/5 uppercase text-xs tracking-widest"
            >
              {loading ? 'Processing...' : isRegistering ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-white/10"></div>
            <span className="flex-shrink mx-4 text-gray-500 text-[9px] uppercase font-black tracking-widest">Quick Access</span>
            <div className="flex-grow border-t border-white/10"></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleMockLogin(UserRole.PRODUCER)}
              className="text-[9px] py-3 bg-producer/5 border border-producer/20 text-producer rounded-xl hover:bg-producer/10 uppercase font-black tracking-widest transition-all"
            >
              Mock Prod
            </button>
            <button
              onClick={() => handleMockLogin(UserRole.CONSUMER)}
              className="text-[9px] py-3 bg-consumer/5 border border-consumer/20 text-consumer rounded-xl hover:bg-consumer/10 uppercase font-black tracking-widest transition-all"
            >
              Mock Consumer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
