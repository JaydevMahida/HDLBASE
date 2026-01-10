import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProfile } from '../types';
import logo from '../Assets/hdlbasewhitefinal-removebg-preview.png';

interface Question {
  id: string;
  text: string;
  options: string[];
  correct: number;
}

interface Props {
  profile: UserProfile;
  onSignOut: () => void;
}

interface UserStats {
  username: string;
  role: string;
  accuracy?: number;
  solved?: number;
  modules?: number;
  quizzes?: number;
}

const LearnerDashboard: React.FC<Props> = ({ profile, onSignOut }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'modules' | 'quiz' | 'playground' | 'progress'>('modules');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [compilationOutput, setCompilationOutput] = useState<string>('');
  const [isCompiling, setIsCompiling] = useState(false);
  const [code, setCode] = useState(`module counter (
  input clk,
  input rst,
  output reg [3:0] count
);
  always @(posedge clk or posedge rst) begin
    if (rst) count <= 4'b0;
    else count <= count + 1;
  end
endmodule`);

  const [stats, setStats] = useState<UserStats | null>(null);
  const [modules, setModules] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const session = localStorage.getItem('hdlbase_mock_session');
        const token = session ? JSON.parse(session).uid : '';
        const headers = { 'Authorization': `Bearer ${token}` };


        // Fetch Stats
        const statsRes = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/v1/users/stats`, { headers });
        const statsData = await statsRes.json();
        if (statsData.status === 'success') {
          setStats(statsData.data);
        }

        // Fetch Modules (for Knowledge Base)
        const modulesRes = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/v1/modules`, { headers });
        const modulesData = await modulesRes.json();
        if (modulesData.status === 'success') {
          setModules(modulesData.data.map((m: any) => m.name));
        }

        // Fetch Quizzes (for Assessment)
        const quizzesRes = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/v1/quizzes`, { headers });
        const quizzesData = await quizzesRes.json();
        if (quizzesData.status === 'success' && quizzesData.data.length > 0) {
          setQuestions(quizzesData.data.map((q: any) => ({
            id: q.id,
            text: q.text,
            options: q.options || ['A', 'B', 'C', 'D'],
            correct: q.correct || 0
          })));
        } else {
          // Fallback if DB is empty so UI isn't broken
          const mockQuestions: Question[] = [
            { id: '1', text: 'Which keyword is used to define a module in Verilog?', options: ['component', 'module', 'unit', 'entity'], correct: 1 },
            { id: '2', text: 'In VHDL, what part defined external interfaces?', options: ['Architecture', 'Process', 'Entity', 'Package'], correct: 2 },
            { id: '3', text: 'Non-blocking assignment symbol?', options: ['=', ':=', '<=', '=>'], correct: 2 },
            { id: '4', text: 'What is RTL?', options: ['Register Transfer Level', 'Real Time Logic', 'Ready To Load', 'Runtime Logic'], correct: 0 }
          ];
          setQuestions(mockQuestions);
        }
      } catch (err) {
        console.error('Failed to fetch learner data', err);
      }
    };
    fetchData();
  }, []);

  const handleLogoClick = () => {
    navigate('/dashboard');
  };

  const handleAnswer = (index: number) => {
    if (index === questions[currentQuestionIndex].correct) setScore(score + 1);
    if (currentQuestionIndex + 1 < questions.length) setCurrentQuestionIndex(currentQuestionIndex + 1);
    else setQuizFinished(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
  };

  const handleCompile = async () => {
    setIsCompiling(true);
    setCompilationOutput('Initializing simulation environment...\n');

    try {
      // Get the current user's token (mock or real) from local storage
      const session = localStorage.getItem('hdlbase_mock_session');
      if (!session) {
        setCompilationOutput('Error: No active session found. Please log in.');
        setIsCompiling(false);
        return;
      }
      const user = JSON.parse(session);
      const token = user.uid; // In mock mode, we use the UID as the token

      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/v1/simulation/run`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          code: code,
          language: 'Verilog'
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Compilation failed');
      }

      setCompilationOutput(prev => prev + (data.data?.output || 'No output received.'));

    } catch (err: any) {
      setCompilationOutput(prev => prev + `\n[Error] ${err.message}`);
    } finally {
      setIsCompiling(false);
    }
  };

  return (
    <div className="min-h-screen bg-matte text-offwhite flex flex-col">
      <nav className="border-b border-white/5 bg-gunmetal/30 p-4 sticky top-0 backdrop-blur-md z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-10">
            <div
              onClick={handleLogoClick}
              className="flex items-center cursor-pointer group"
            >
              <h1 className="text-xl font-black tracking-tighter"><a href="" className="logo-text"><img src={logo} alt="LOGO" className="w-32 h-auto" /></a></h1>
            </div>

            <div className="flex bg-white/5 p-1 rounded-xl">
              {['modules', 'quiz', 'playground', 'progress'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`text-[9px] px-4 py-2 rounded-lg font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-learner text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <span className="text-xs font-black uppercase text-accent block">{profile.displayName}</span>
              <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Learner Mode</span>
            </div>
            <button onClick={onSignOut} className="text-[10px] font-black text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Exit</button>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto w-full p-6 md:p-12">
        {activeTab === 'modules' && (
          <div className="space-y-12">
            <header>
              <h2 className="text-4xl font-black tracking-tight mb-2">Knowledge Base</h2>
              <p className="text-gray-400 font-medium">Download verified RTL building blocks for your student projects.</p>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {(modules.length > 0 ? modules : ['Fast Fourier Transform', 'RISC-V 32I Core', 'DDR Controller', 'UART Subsystem', 'HDMI Controller', 'Ethernet MAC']).map((item) => (
                <div key={item} className="bg-gunmetal p-8 rounded-[32px] border border-white/5 hover:border-learner/50 transition-all group">
                  <div className="text-[10px] text-gray-600 mb-3 font-black uppercase tracking-widest">Educational IP</div>
                  <h4 className="text-xl font-bold text-accent mb-8 group-hover:text-learner transition-colors">{item}</h4>
                  <button className="w-full py-3 bg-white/5 text-[10px] font-black rounded-xl uppercase tracking-widest hover:bg-learner hover:text-white transition-all">Download .v</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <section className="max-w-2xl mx-auto">
            {quizFinished ? (
              <div className="bg-gunmetal p-16 rounded-[48px] border border-white/10 text-center shadow-2xl">
                <div className="w-20 h-20 bg-learner/10 text-learner rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-3xl font-black tracking-tighter mb-2">Final Report</h3>
                <p className="text-gray-400 mb-10 text-xl font-medium">Score: <span className="text-learner font-black">{score}</span> / {questions.length}</p>
                <button onClick={resetQuiz} className="bg-learner text-white px-12 py-4 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all">Re-Verify Skills</button>
              </div>
            ) : (
              <div className="bg-gunmetal rounded-[48px] border border-white/10 overflow-hidden shadow-2xl">
                <div className="p-12">
                  <div className="flex justify-between items-center mb-10">
                    <span className="text-[10px] font-black text-learner uppercase tracking-widest">Section {currentQuestionIndex + 1}</span>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{Math.round(((currentQuestionIndex) / questions.length) * 100)}% Done</span>
                  </div>
                  <h3 className="text-2xl font-black mb-12 leading-snug">{questions[currentQuestionIndex]?.text}</h3>
                  <div className="space-y-4">
                    {questions[currentQuestionIndex]?.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(i)}
                        className="w-full text-left p-6 rounded-2xl bg-matte border border-white/5 hover:border-learner/50 hover:bg-white/5 transition-all flex items-center gap-6 group"
                      >
                        <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center font-black text-gray-600 group-hover:text-learner transition-colors">{String.fromCharCode(65 + i)}</span>
                        <span className="font-bold text-gray-300 group-hover:text-white transition-colors">{opt}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {activeTab === 'playground' && (
          <div className="h-[70vh] flex flex-col">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h3 className="text-3xl font-black tracking-tight">RTL Sandbox</h3>
                <p className="text-gray-400 text-sm font-medium">Draft and test logic blocks with real-time feedback.</p>
              </div>
              <button
                onClick={handleCompile}
                disabled={isCompiling}
                className="bg-learner text-white px-8 py-3 rounded-2xl font-black text-xs shadow-xl shadow-learner/20 hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCompiling ? 'Compiling...' : 'Compile & Test'}
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 flex-grow">
              <div className="lg:col-span-3">
                <textarea
                  className="w-full h-full bg-gunmetal border border-white/10 rounded-[32px] p-16 font-mono text-base text-accent/80 focus:border-learner outline-none transition-all resize-none shadow-inner leading-relaxed overflow-auto"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  spellCheck={false}
                  placeholder="Enter your Verilog or VHDL logic here..."
                />
              </div>
              <div className="lg:col-span-2 bg-matte border border-white/5 rounded-[32px] p-8 flex flex-col shadow-2xl">
                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-6">Console Output</h4>
                <div className="flex-grow font-mono text-xs text-learner/70 bg-black/40 p-6 rounded-2xl overflow-auto border border-white/5 whitespace-pre-wrap">
                  {compilationOutput || (
                    <>
                      <span className="text-gray-600">[info]</span> Ready to compile.<br />
                      <span className="text-gray-600">[info]</span> Waiting for input...
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="max-w-4xl mx-auto py-12">
            <div className="space-y-8 animate-fade-in">
              {/* User Profile Stats Card - ALWAYS SHOW IF TAB IS PROGRESS */}
              <div className="bg-gunmetal p-8 rounded-[32px] border border-white/5 relative overflow-hidden">
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-gray-500 mb-1">LEARNER PROFILE</div>
                    <h2 className="text-3xl font-black text-white mb-2">{stats?.username || 'Learner'}</h2>
                    <div className="flex gap-4">
                      <span className="bg-learner/10 text-learner px-3 py-1 rounded-full text-xs font-bold border border-learner/20">
                        ACCURACY: {stats?.accuracy || 0}%
                      </span>
                      <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs font-bold border border-purple-500/20">
                        SOLVED: {stats?.solved || 0}
                      </span>
                    </div>
                  </div>
                  <div className="h-16 w-16 bg-gradient-to-br from-learner to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-learner/20">
                    <span className="text-2xl">🎓</span>
                  </div>
                </div>
              </div>

              {/* Old Grid Below */}
              <div className="bg-gunmetal p-8 rounded-[32px] border border-white/5">
                <h2 className="text-4xl font-black tracking-tight mb-16 text-center">Your Learning Path</h2>
                <div className="space-y-8">
                  {[
                    { name: 'Digital Logic Foundations', progress: 100, status: 'Certified', color: 'bg-green-500' },
                    { name: 'Verilog RTL Design', progress: 45, status: 'In Progress', color: 'bg-learner' },
                    { name: 'SystemVerilog Verification', progress: 0, status: 'Locked', color: 'bg-gray-800' }
                  ].map(course => (
                    <div key={course.name} className="bg-gunmetal p-10 rounded-[40px] border border-white/5 flex items-center justify-between group hover:border-accent/10 transition-all">
                      <div className="flex-grow">
                        <h4 className="text-2xl font-bold mb-4">{course.name}</h4>
                        <div className="flex items-center gap-6">
                          <div className="flex-grow h-3 bg-white/5 rounded-full overflow-hidden">
                            <div className={`h-full ${course.color} transition-all duration-1000 ease-out`} style={{ width: `${course.progress}%` }}></div>
                          </div>
                          <span className="text-xs font-black font-mono text-gray-500">{course.progress}%</span>
                        </div>
                      </div>
                      <div className="ml-16">
                        <span className={`text-[10px] font-black uppercase px-4 py-2 rounded-xl border ${course.status === 'Certified' ? 'bg-green-500/10 border-green-500 text-green-500' : 'bg-white/5 border-white/5 text-gray-600'}`}>
                          {course.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default LearnerDashboard;
