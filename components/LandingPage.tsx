
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/hdlbasewhitefinal-removebg-preview.png';
interface Props {
  currentUser: any;
  onSignOut: () => void;
}

const LandingPage: React.FC<Props> = ({ currentUser, onSignOut }) => {
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentUser) {
      navigate('/dashboard');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate('/');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-matte text-offwhite selection:bg-accent selection:text-matte overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-matte/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div 
            onClick={handleLogoClick}
            className="flex items-center cursor-pointer group"
          >
            <span className="text-2xl font-black tracking-tighter group-hover:text-accent transition-colors"><img src={logo} alt="LOGO" className="w-32 h-auto mx-auto block"/></span>
          </div>
          
          <div className="hidden md:flex gap-10 text-sm font-bold text-gray-400 uppercase tracking-widest">
            <button onClick={() => scrollToSection('features')} className="hover:text-accent transition-colors">Features</button>
            <button onClick={() => scrollToSection('categories')} className="hover:text-accent transition-colors">Users</button>
            <button onClick={() => scrollToSection('process')} className="hover:text-accent transition-colors">Process</button>
          </div>

          <div className="flex items-center gap-4">
            {currentUser ? (
              <div className="flex items-center gap-6">
                <Link 
                  to="/dashboard" 
                  className="bg-accent text-matte px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10"
                >
                  Dashboard
                </Link>
                <button 
                  onClick={onSignOut}
                  className="text-xs font-bold text-gray-500 hover:text-red-400 transition-colors uppercase tracking-widest"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="bg-white/5 border border-white/10 px-8 py-2.5 rounded-full font-bold text-sm hover:bg-white/10 transition-all active:scale-95"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-56 pb-32 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-producer/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-consumer/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent/10 border border-white/10 rounded-full text-[11px] font-black tracking-[0.25em] uppercase text-white mb-10">
            Think LeetCode, but for Hardware.
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9] bg-gradient-to-b from-white via-white to-gray-600 bg-clip-text text-transparent">
            Hardware Design <br />Reimagined.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
            HDLBase is the ultimate practice ground for Electronics Students. Solve RTL challenges, simulate Verilog/VHDL in-browser, and build a professional hardware portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/login" 
              className="bg-accent text-matte px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/10"
            >
              Start Practicing Free
            </Link>
            <button 
              onClick={() => scrollToSection('features')}
              className="bg-gunmetal border border-white/10 px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              Explore Challenges
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Features</h2>
            <div className="w-20 h-2 bg-accent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-gunmetal border border-white/5 rounded-[40px] hover:border-accent/20 transition-all group cursor-pointer text-left">
              <div className="w-14 h-14 bg-producer/10 text-producer rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Interactive Challenges</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                Sharpen your skills with logic problems designed by industry experts. It's the "LeetCode experience" specifically tailored for VLSI and FPGA engineers.
              </p>
            </div>

            <div className="p-10 bg-gunmetal border border-white/5 rounded-[40px] hover:border-accent/20 transition-all group cursor-pointer text-left">
              <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Real-Time Playground</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                Don't wait for heavy tools to load. Write, lint, and simulate Verilog and VHDL code instantly in our cloud-based playground.
              </p>
            </div>

            <div className="p-10 bg-gunmetal border border-white/5 rounded-[40px] hover:border-accent/20 transition-all group cursor-pointer text-left">
              <div className="w-14 h-14 bg-consumer/10 text-consumer rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Library Access</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                Explore a massive repository of verified RTL modules. Learn from best practices and download components for your own projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories / Roles (Users) */}
      <section id="categories" className="py-32 px-6 bg-gunmetal/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="text-left">
            <h2 className="text-5xl font-black tracking-tighter mb-8 leading-tight">Built for <span className="text-accent">Success.</span></h2>
            <div className="space-y-6">
              <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 flex gap-6 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-producer text-white rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Students</h4>
                  <p className="text-gray-500 font-medium">The best place to prepare for technical interviews and gain hands-on hardware design experience.</p>
                </div>
              </div>
              <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 flex gap-6 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-consumer text-white rounded-xl flex items-center justify-center shrink-0">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Educators</h4>
                  <p className="text-gray-500 font-medium">Automate labs, create assessment quizzes, and manage student repositories in one centralized place.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-white/5 rounded-[60px] border border-white/10 flex items-center justify-center p-12">
               <div className="w-full aspect-video bg-matte rounded-3xl border border-accent/20 shadow-2xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-50"></div>
                  <div className="p-6 font-mono text-[10px] text-accent/60 flex flex-col gap-2 text-left">
                    <span className="text-accent font-bold">// Chipcrafters HDL Processor</span>
                    <span>module top_chip (input clk, rst);</span>
                    <span className="pl-4">reg [31:0] data_bus;</span>
                    <span className="pl-4">always @(posedge clk) begin ...</span>
                    <span>endmodule</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-accent text-matte px-4 py-2 rounded-xl text-xs font-black uppercase">Live Simulation</div>
               </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-consumer/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section id="process" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black tracking-tighter mb-4">How It Works</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">A simple path from beginner to pro</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
            {[
              { n: '01', t: 'Learn', d: 'Master logic foundations and HDL syntax through interactive labs.' },
              { n: '02', t: 'Code', d: 'Draft your designs using our optimized web editor.' },
              { n: '03', t: 'Verify', d: 'Get instant feedback on your RTL with automated testbenches.' },
              { n: '04', t: 'Showcase', d: 'Build a profile that recruiters will actually notice.' }
            ].map((step, idx) => (
              <div key={idx} className="relative group cursor-default">
                <div className="text-7xl font-black text-white/5 absolute -top-10 -left-4 group-hover:text-white/10 transition-colors">{step.n}</div>
                <h4 className="text-xl font-bold mb-4 relative z-10 group-hover:text-accent transition-colors">{step.t}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium relative z-10">{step.d}</p>
                {idx < 3 && <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-white/5"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      
      <footer className="py-20 border-t border-white/5 bg-matte">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div 
            onClick={handleLogoClick}
            className="flex items-center cursor-pointer"
          >
            <span className="font-black tracking-tighter text-lg">HDLBase</span>
          </div>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
          <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">© 2026 Chipcrafters Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
