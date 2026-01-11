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
  const [activeTab, setActiveTab] = useState<'modules' | 'quiz' | 'playground' | 'progress'>(
    () => (localStorage.getItem('learner_active_tab') as any) || 'modules'
  );

  useEffect(() => {
    localStorage.setItem('learner_active_tab', activeTab);
  }, [activeTab]);

  // Quiz State
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [completedQuizIds, setCompletedQuizIds] = useState<Set<string>>(new Set());
  const [activeQuiz, setActiveQuiz] = useState<any>(null); // The quiz currently being taken
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Playground State
  const [code, setCode] = useState('// Implementation\nmodule my_design(output a);\n  assign a = 1;\nendmodule');
  const [testbenchCode, setTestbenchCode] = useState('// Testbench\nmodule tb;\n  wire a;\n  my_design uut(a);\n  initial begin\n    $monitor("Time=%0d a=%b", $time, a);\n    #10 $finish;\n  end\nendmodule');
  const [compilationOutput, setCompilationOutput] = useState<string>('');
  const [isCompiling, setIsCompiling] = useState(false);

  // General Dashboard State
  const [stats, setStats] = useState<UserStats | null>(null);
  const [modules, setModules] = useState<any[]>([]);
  const [downloadingModule, setDownloadingModule] = useState<any>(null);
  const [downloadFormat, setDownloadFormat] = useState('Verilog');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const session = localStorage.getItem('hdlbase_mock_session');
        const sessionData = JSON.parse(session);
        const token = sessionData.token || sessionData.uid;
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
          setModules(modulesData.data);
        }

        // Fetch Quizzes (for Assessment)
        const quizzesRes = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/v1/quizzes`, { headers });
        const quizzesData = await quizzesRes.json();
        if (quizzesData.status === 'success') {
          setQuizzes(quizzesData.data);
        }

        // Fetch user's completed quizzes
        try {
          const myResultsRes = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/v1/quizzes/my-results`, { headers });
          const myResultsData = await myResultsRes.json();
          if (myResultsData.status === 'success') {
            const completedIds = new Set(myResultsData.data.map((r: any) => r.quizId as string));
            setCompletedQuizIds(completedIds as Set<string>);
          }
        } catch (e) {
          console.warn("Failed to fetch my-results");
        }

        // Fetch User Results to mark completed quizzes
        // We'll just fetch user stats or specific results endpoint if available.
        // For now, let's assume we can get 'my results' or we just infer from stats? 
        // No, we need a list. Let's add a quick client-side filter or new endpoint later.
        // Actually, we can just use the stats endpoint if it returned a list of completed IDs, 
        // but it currently doesn't. 
        // Let's hitting the results endpoint with a query? No, standard Firestore restrict.
        // Let's just use a dedicated "my-results" call if possible, or skip for now and use local storage fallback?
        // Better: Let's just quick-fetch all results for this user.
        // Wait, standard users can't list all results? 
        // Implementation Plan said: "Fetch all valid results for req.user.uid".
        // Let's assume there's an endpoint or we just use GET /results? No, that's usually admin.
        // Let's add a "my-results" endpoint or just filter?
        // Let's assume we can fetch: GET /api/v1/users/me/results? 
        // I haven't implemented that.
        // Hack for now: We won't show "Completed" on reload until I make that endpoint.
        // OR, simply rely on the fact that I just implemented sending results.

        // Let's implement the 'Completed' badge logic optimistically for the current session at least.
      } catch (err) {
        console.error('Failed to fetch learner data', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleLogoClick = () => {
    navigate('/dashboard');
  };

  const startQuiz = (quiz: any) => {
    setActiveQuiz(quiz);
    setQuestions(quiz.questions || []);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
  };

  const handleAnswer = async (index: number) => {
    let newScore = score;
    if (index === questions[currentQuestionIndex].correct) {
      newScore = score + 1;
      setScore(newScore);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
      // Submit Results
      try {
        const session = localStorage.getItem('hdlbase_mock_session');
        if (session) {
          const sessionData = JSON.parse(session);
          const token = sessionData.token || sessionData.uid;

          const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/v1/quizzes/results`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              score: newScore,
              total: questions.length,
              details: `Quiz: ${activeQuiz?.title || 'Unknown'}`,
              quizId: activeQuiz?.id || null
            })
          });

          if (!response.ok) {
            const err = await response.json();
            console.warn("Result submission warning:", err);
            // If it's the 403 "Already completed", just swallow it or notify.
          }

          // Refresh stats

          const statsRes = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/v1/users/stats`, {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          const statsData = await statsRes.json();
          if (statsData.status === 'success') setStats(statsData.data);

          // Mark locally as completed
          if (activeQuiz?.id) {
            setCompletedQuizIds(prev => new Set(prev).add(activeQuiz.id));
          }
        }
      } catch (error) {
        console.error("Failed to submit results", error);
      }
    }
  };

  const handleDownloadClick = (module: any) => {
    setDownloadingModule(module);
    setDownloadFormat('Verilog'); // Default
  };

  const confirmDownload = () => {
    if (!downloadingModule || !downloadingModule.code) {
      alert("No code available to download.");
      return;
    }

    let extension = '.v';
    switch (downloadFormat) {
      case 'VHDL': extension = '.vhd'; break;
      case 'SystemVerilog': extension = '.sv'; break;
      default: extension = '.v';
    }

    const element = document.createElement("a");
    const file = new Blob([downloadingModule.code], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${downloadingModule.name.replace(/\s+/g, '_')}${extension}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setDownloadingModule(null);
  };

  const resetQuiz = () => {
    setActiveQuiz(null); // Go back to list
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
      const token = user.token || user.uid;

      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/v1/simulation/run`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          code: code,
          testbenchCode: testbenchCode,
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
              {loading ? (
                <div className="col-span-full py-20 text-center text-gray-500 font-bold animate-pulse">Loading modules...</div>
              ) : modules.length > 0 ? (
                modules.map((item) => (
                  <div key={item.name} className="bg-gunmetal p-8 rounded-[32px] border border-white/5 hover:border-learner/50 transition-all group">
                    <div className="text-[10px] text-gray-600 mb-3 font-black uppercase tracking-widest">Educational IP</div>
                    <h4 className="text-xl font-bold text-accent mb-8 group-hover:text-learner transition-colors">{item.name}</h4>
                    <button onClick={() => handleDownloadClick(item)} className="w-full py-3 bg-white/5 text-[10px] font-black rounded-xl uppercase tracking-widest hover:bg-learner hover:text-white transition-all">Download</button>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center text-gray-500 font-bold">No modules found.</div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <section className="max-w-7xl mx-auto">
            {!activeQuiz ? (
              // QUIZ LIST VIEW
              <div>
                <div className="mb-12">
                  <h2 className="text-4xl font-black tracking-tight">Available Quizzes</h2>
                  <p className="text-gray-400 font-medium">Verify your skills with community-curated assessments.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {quizzes.map(quiz => (
                    <div key={quiz.id} onClick={() => startQuiz(quiz)} className="bg-gunmetal p-8 rounded-[32px] border border-white/5 hover:border-learner/50 hover:bg-white/5 transition-all cursor-pointer group">
                      <div className="text-[10px] text-gray-500 mb-4 font-black uppercase tracking-widest">{quiz.questions?.length || 0} Questions</div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-learner transition-colors">{quiz.title}</h3>
                      <p className="text-sm text-gray-400 mb-8 line-clamp-2">{quiz.description}</p>
                      <div className="flex justify-between items-center">
                        {completedQuizIds.has(quiz.id) ? (
                          <div className="flex gap-2">
                            <span className="text-[10px] font-black uppercase tracking-widest bg-green-500/10 text-green-500 px-3 py-3 rounded-xl border border-green-500/20">Done ✅</span>
                            <button className="text-[10px] font-black uppercase tracking-widest bg-white/5 text-gray-400 px-4 py-3 rounded-xl hover:bg-white/10 transition-all">Retry</button>
                          </div>
                        ) : (
                          <button className="text-[10px] font-black uppercase tracking-widest bg-learner text-white px-6 py-3 rounded-xl shadow-lg shadow-learner/20 hover:scale-105 transition-all">Start Quiz</button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // TAKING ACTIVE QUIZ
              <div className="max-w-2xl mx-auto">
                {quizFinished ? (
                  <div className="bg-gunmetal p-16 rounded-[48px] border border-white/10 text-center shadow-2xl animate-fade-in">
                    <div className="w-20 h-20 bg-learner/10 text-learner rounded-3xl flex items-center justify-center mx-auto mb-8">
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-3xl font-black tracking-tighter mb-2">Assessment Complete</h3>
                    <p className="text-gray-400 mb-10 text-xl font-medium">You scored <span className="text-learner font-black">{score}</span> out of {questions.length}</p>

                    <div className="flex gap-4 justify-center">
                      <button onClick={() => { setCurrentQuestionIndex(0); setScore(0); setQuizFinished(false); }} className="px-8 py-3 rounded-2xl font-bold text-sm border border-white/10 hover:bg-white/5 transition-all">Retry</button>
                      <button onClick={resetQuiz} className="bg-learner text-white px-8 py-3 rounded-2xl font-black text-sm shadow-xl shadow-learner/20 hover:scale-105 transition-all">Back to Quizzes</button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gunmetal rounded-[48px] border border-white/10 overflow-hidden shadow-2xl animate-fade-in">
                    <div className="p-12">
                      <div className="flex justify-between items-center mb-10">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black text-learner uppercase tracking-widest mb-1">{activeQuiz.title}</span>
                          <span className="text-2xl font-black text-white">Question {currentQuestionIndex + 1}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-1">Progress</span>
                          <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-learner transition-all duration-500" style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}></div>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-medium mb-12 leading-relaxed text-gray-200">{questions[currentQuestionIndex]?.text}</h3>
                      <div className="space-y-4">
                        {questions[currentQuestionIndex]?.options.map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => handleAnswer(i)}
                            className="w-full text-left p-6 rounded-2xl bg-matte border border-white/5 hover:border-learner/50 hover:bg-white/5 transition-all flex items-center gap-6 group active:scale-[0.98]"
                          >
                            <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center font-black text-gray-600 group-hover:text-learner group-hover:bg-learner/10 transition-colors">{String.fromCharCode(65 + i)}</span>
                            <span className="font-bold text-gray-400 group-hover:text-white transition-colors">{opt}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
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
            <div className="flex-grow flex flex-col gap-6">
              {/* Dual Editors */}
              <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[400px]">
                {/* Design Editor */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center px-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">design.sv</span>
                  </div>
                  <textarea
                    className="w-full h-full bg-gunmetal border border-white/10 rounded-[20px] p-6 font-mono text-sm text-accent/80 focus:border-learner outline-none transition-all resize-none shadow-inner leading-relaxed overflow-auto"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    spellCheck={false}
                    placeholder="// Design Code"
                  />
                </div>

                {/* Testbench Editor */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center px-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">testbench.sv</span>
                  </div>
                  <textarea
                    className="w-full h-full bg-gunmetal border border-white/10 rounded-[20px] p-6 font-mono text-sm text-accent/80 focus:border-learner outline-none transition-all resize-none shadow-inner leading-relaxed overflow-auto"
                    value={testbenchCode}
                    onChange={(e) => setTestbenchCode(e.target.value)}
                    spellCheck={false}
                    placeholder="// Testbench Code"
                  />
                </div>
              </div>

              {/* Console Output */}
              <div className="h-[200px] bg-black/40 border-t-2 border-white/5 p-0 flex flex-col">
                <div className="bg-white/5 px-6 py-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-learner"></span>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Console</span>
                </div>
                <div className="flex-grow font-mono text-xs text-green-400/90 p-6 overflow-auto whitespace-pre-wrap font-medium">
                  {compilationOutput || (
                    <span className="text-gray-600 opacity-50">// Output will appear here after compilation...</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Download Modal */}
        {
          downloadingModule && (
            <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-gunmetal w-full max-w-sm rounded-[32px] p-8 border border-white/10 shadow-2xl transform animate-in zoom-in duration-300">
                <h3 className="text-xl font-black tracking-tight mb-6">Download Module</h3>
                <div className="space-y-4 mb-8">
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">Module</label>
                    <div className="text-white font-bold">{downloadingModule.name}</div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">Format</label>
                    <select
                      value={downloadFormat}
                      onChange={(e) => setDownloadFormat(e.target.value)}
                      className="w-full bg-matte border border-white/10 rounded-xl px-4 py-3 text-offwhite focus:border-learner outline-none transition-colors appearance-none font-bold text-sm"
                    >
                      <option value="Verilog">Verilog (.v)</option>
                      <option value="VHDL">VHDL (.vhd)</option>
                      <option value="SystemVerilog">SystemVerilog (.sv)</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setDownloadingModule(null)}
                    className="flex-1 py-3 text-[10px] font-black uppercase tracking-widest bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmDownload}
                    className="flex-1 py-3 text-[10px] font-black uppercase tracking-widest bg-learner text-white rounded-xl shadow-xl shadow-learner/20 hover:brightness-110 transition-all"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          )
        }

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


            </div>
          </div>
        )}
      </main >
    </div >
  );
};

export default LearnerDashboard;
