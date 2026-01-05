
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProfile } from '../types';
import logo from '../Assets/hdlbasewhitefinal.png';

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

const ConsumerDashboard: React.FC<Props> = ({ profile, onSignOut }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'modules' | 'quiz' | 'playground' | 'progress'>('modules');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
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

  useEffect(() => {
    const mockQuestions: Question[] = [
      { id: '1', text: 'Which keyword is used to define a module in Verilog?', options: ['component', 'module', 'unit', 'entity'], correct: 1 },
      { id: '2', text: 'In VHDL, what part defined external interfaces?', options: ['Architecture', 'Process', 'Entity', 'Package'], correct: 2 },
      { id: '3', text: 'Non-blocking assignment symbol?', options: ['=', ':=', '<=', '=>'], correct: 2 },
      { id: '4', text: 'What is RTL?', options: ['Register Transfer Level', 'Real Time Logic', 'Ready To Load', 'Runtime Logic'], correct: 0 }
    ];
    setQuestions(mockQuestions);
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

  return (
    <div className="min-h-screen bg-matte text-offwhite flex flex-col">
      <nav className="border-b border-white/5 bg-gunmetal/30 p-4 sticky top-0 backdrop-blur-md z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-10">
            <div 
              onClick={handleLogoClick}
              className="flex items-center cursor-pointer group"
            >
              <h1 className="text-xl font-black tracking-tighter"><a href="" className="logo-text"><img src={logo} alt="LOGO" /></a></h1>
            </div>

            <div className="flex bg-white/5 p-1 rounded-xl">
              {['modules', 'quiz', 'playground', 'progress'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`text-[9px] px-4 py-2 rounded-lg font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-consumer text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
               <span className="text-xs font-black uppercase text-accent block">{profile.displayName}</span>
               <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">{profile.category}</span>
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
              {['Fast Fourier Transform', 'RISC-V 32I Core', 'DDR Controller', 'UART Subsystem', 'HDMI Controller', 'Ethernet MAC'].map((item) => (
                <div key={item} className="bg-gunmetal p-8 rounded-[32px] border border-white/5 hover:border-consumer/50 transition-all group">
                  <div className="text-[10px] text-gray-600 mb-3 font-black uppercase tracking-widest">Educational IP</div>
                  <h4 className="text-xl font-bold text-accent mb-8 group-hover:text-consumer transition-colors">{item}</h4>
                  <button className="w-full py-3 bg-white/5 text-[10px] font-black rounded-xl uppercase tracking-widest hover:bg-consumer hover:text-white transition-all">Download .v</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <section className="max-w-2xl mx-auto">
            {quizFinished ? (
              <div className="bg-gunmetal p-16 rounded-[48px] border border-white/10 text-center shadow-2xl">
                <div className="w-20 h-20 bg-consumer/10 text-consumer rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-3xl font-black tracking-tighter mb-2">Final Report</h3>
                <p className="text-gray-400 mb-10 text-xl font-medium">Score: <span className="text-consumer font-black">{score}</span> / {questions.length}</p>
                <button onClick={resetQuiz} className="bg-consumer text-white px-12 py-4 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all">Re-Verify Skills</button>
              </div>
            ) : (
              <div className="bg-gunmetal rounded-[48px] border border-white/10 overflow-hidden shadow-2xl">
                <div className="p-12">
                  <div className="flex justify-between items-center mb-10">
                    <span className="text-[10px] font-black text-consumer uppercase tracking-widest">Section {currentQuestionIndex + 1}</span>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{Math.round(((currentQuestionIndex)/questions.length)*100)}% Done</span>
                  </div>
                  <h3 className="text-2xl font-black mb-12 leading-snug">{questions[currentQuestionIndex]?.text}</h3>
                  <div className="space-y-4">
                    {questions[currentQuestionIndex]?.options.map((opt, i) => (
                      <button 
                        key={i} 
                        onClick={() => handleAnswer(i)}
                        className="w-full text-left p-6 rounded-2xl bg-matte border border-white/5 hover:border-consumer/50 hover:bg-white/5 transition-all flex items-center gap-6 group"
                      >
                        <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center font-black text-gray-600 group-hover:text-consumer transition-colors">{String.fromCharCode(65 + i)}</span>
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
              <button className="bg-consumer text-white px-8 py-3 rounded-2xl font-black text-xs shadow-xl shadow-consumer/20 hover:brightness-110 transition-all">Compile & Test</button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 flex-grow">
              <div className="lg:col-span-3">
                <textarea 
                  className="w-full h-full bg-gunmetal border border-white/10 rounded-[32px] p-16 font-mono text-base text-accent/80 focus:border-consumer outline-none transition-all resize-none shadow-inner leading-relaxed overflow-auto"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  spellCheck={false}
                  placeholder="Enter your Verilog or VHDL logic here..."
                />
              </div>
              <div className="lg:col-span-2 bg-matte border border-white/5 rounded-[32px] p-8 flex flex-col shadow-2xl">
                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-6">Console Output</h4>
                <div className="flex-grow font-mono text-xs text-consumer/70 bg-black/40 p-6 rounded-2xl overflow-auto border border-white/5">
                  <span className="text-gray-600">[info]</span> HDLBase Simulator v2.0.4<br/>
                  <span className="text-gray-600">[info]</span> Loading counter.v...<br/>
                  <span className="text-gray-600">[info]</span> Linting module...<br/>
                  <span className="text-consumer font-bold">[success]</span> 0 errors, 0 warnings.<br/>
                  <span className="text-gray-600">[info]</span> Initializing clock: 100MHz...<br/>
                  <span className="text-gray-600">[info]</span> Waveform data generated.<br/>
                  <span className="text-accent cursor-pointer underline">View Waveforms.vcd</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="max-w-4xl mx-auto py-12">
            <h2 className="text-4xl font-black tracking-tight mb-16 text-center">Your Learning Path</h2>
            <div className="space-y-8">
              {[
                { name: 'Digital Logic Foundations', progress: 100, status: 'Certified', color: 'bg-green-500' },
                { name: 'Verilog RTL Design', progress: 45, status: 'In Progress', color: 'bg-consumer' },
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
        )}
      </main>
    </div>
  );
};

export default ConsumerDashboard;
