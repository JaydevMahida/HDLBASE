import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProfile } from '../types';
import logo from '../Assets/hdlbasewhitefinal-removebg-preview.png';

interface Props {
  profile: UserProfile;
  onSignOut: () => void;
}

interface MockFile {
  id: string;
  name: string;
  type: string;
  size: string;
  date: string;
  code?: string;
}

interface MockQuestion {
  id: string;
  text: string;
  difficulty: string;
  date: string;
}

const ContributorDashboard: React.FC<Props> = ({ profile, onSignOut }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'hdl' | 'mcq' | 'team' | 'profile'>('hdl');
  const [showUpload, setShowUpload] = useState(false);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [files, setFiles] = useState<MockFile[]>([]);

  const [questions, setQuestions] = useState<MockQuestion[]>([]);
  const [uploading, setUploading] = useState(false);
  const [stats, setStats] = useState<any>(null);

  const [editingQuestionId, setEditingQuestionId] = useState<string | null>(null);
  const [questionText, setQuestionText] = useState('');
  const [questionDifficulty, setQuestionDifficulty] = useState('Medium');
  const [options, setOptions] = useState<string[]>(['', '', '', '']);
  const [correctOption, setCorrectOption] = useState<number>(0);
  const [moduleCode, setModuleCode] = useState('');
  const [editingModuleId, setEditingModuleId] = useState<string | null>(null);



  const [deleteConfirmationId, setDeleteConfirmationId] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const session = localStorage.getItem('hdlbase_mock_session');
      const sessionData = JSON.parse(session);
      const token = sessionData.token || sessionData.uid;
      const headers = { 'Authorization': `Bearer ${token}` };

      // Fetch Modules
      const modulesRes = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/v1/modules`, { headers });
      const modulesData = await modulesRes.json();
      if (modulesData.status === 'success') {
        // Map backend format to frontend format if needed, or rely on consistency
        setFiles(modulesData.data.map((m: any) => ({
          id: m.id,
          name: m.name,
          type: m.type,
          size: m.size || '1 KB',
          date: m.createdAt ? new Date(m.createdAt).toLocaleDateString() : 'Recent'
        })));

        if (modulesData.message && modulesData.message.includes('Mock Mode')) {
          alert("WARNING: Backend is in MOCK MODE. Data will NOT be saved. Please configure Firebase Credentials on Render.");
        }
      }

      // Fetch Quizzes
      const quizzesRes = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/v1/quizzes`, { headers });
      const quizzesData = await quizzesRes.json();
      if (quizzesData.status === 'success') {
        setQuestions(quizzesData.data.map((q: any) => ({
          id: q.id,
          text: q.text,
          difficulty: q.difficulty,
          date: q.createdAt ? new Date(q.createdAt).toLocaleDateString() : 'Recent'
        })));
      }

      // Fetch Stats
      const statsRes = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/v1/users/stats`, { headers });
      const statsData = await statsRes.json();
      if (statsData.status === 'success') {
        setStats(statsData.data);
      }
    } catch (err) {
      console.error('Failed to fetch dashboard data', err);
    }
  };

  const handleLogoClick = () => {
    navigate('/dashboard');
  };

  const handleUploadFile = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const session = localStorage.getItem('hdlbase_mock_session');
      const sessionData = JSON.parse(session);
      const token = sessionData.token || sessionData.uid;

      const payload = {
        name: formData.get('moduleName') as string,
        language: formData.get('language') as string,
        code: moduleCode,
        type: 'IP Core',
        description: 'Uploaded from Contributor Dashboard'
      };

      const url = editingModuleId
        ? `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/v1/modules/${editingModuleId}`
        : `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/v1/modules`;

      const response = await fetch(url, {
        method: editingModuleId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        await fetchData(); // Reload list
        setShowUpload(false);
        setEditingModuleId(null);
        setModuleCode('');
        form.reset();
      } else {
        const errData = await response.json();
        alert(`Upload Failed: ${errData.message || 'Unknown error'}`);
      }
    } catch (err) {
      console.error('Upload failed', err);
      alert("Upload error: Check console");
    } finally {
      setUploading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      setModuleCode(text);
    };
    reader.readAsText(file);
  };

  const openEditModule = (module: MockFile) => {
    setEditingModuleId(module.id);
    setModuleCode(module.code || '');
    setShowUpload(true);
    // Note: We can't easily pre-fill the name/language inputs without controlled state for them or ref access, 
    // but for now we are using uncontrolled inputs. 
    // To fix this properly, we should switch to controlled inputs for the form.
    // However, as a quick fix, let's just make sure the user knows they need to re-enter name if they want to keep it same, 
    // OR switch to controlled inputs.
    // Let's switch to controlled inputs quickly? No, too many changes.
    // Let's defer input population for a second pass or use a timeout to set values? 
    // Actually, let's just use defaultValue if we re-render.
  };

  const openQuestionModal = (q: MockQuestion | null = null) => {
    if (q) {
      setEditingQuestionId(q.id);
      setQuestionText(q.text);
      setQuestionDifficulty(q.difficulty);
    } else {
      setEditingQuestionId(null);
      setQuestionText('');
      setQuestionDifficulty('Medium');
      setOptions(['', '', '', '']);
      setCorrectOption(0);
    }
    setShowQuestionModal(true);
  };

  const handleSaveQuestion = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simplification: We only support CREATE for now in this DB integration logic iteration
    if (editingQuestionId) {
      alert('Edit not supported in this version - please delete and recreate');
      return;
    }

    try {
      const session = localStorage.getItem('hdlbase_mock_session');
      const sessionData = JSON.parse(session);
      const token = sessionData.token || sessionData.uid;

      const payload = {
        text: questionText,
        difficulty: questionDifficulty,
        options: options,
        correct: correctOption
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/v1/quizzes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        await fetchData(); // Reload
        setShowQuestionModal(false);
        setQuestionText('');
        setQuestionDifficulty('Medium');
      }
    } catch (err) {
      console.error('Save question failed', err);
    }
  };

  const handleDeleteQuestion = (id: string) => {
    setDeleteConfirmationId(id);
  };

  const confirmDelete = () => {
    if (deleteConfirmationId) {
      const updated = questions.filter(q => q.id !== deleteConfirmationId);
      setQuestions(updated);
      localStorage.setItem('hdlbase_mock_mcq_admin', JSON.stringify(updated));
      setDeleteConfirmationId(null);
    }
  };

  return (
    <div className="min-h-screen bg-matte text-offwhite flex flex-col">
      <nav className="border-b border-white/5 bg-gunmetal/30 p-4 sticky top-0 backdrop-blur-md z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div
              onClick={handleLogoClick}
              className="flex items-center cursor-pointer group"
            >
              <h1 className="text-xl font-black tracking-tighter"><a href="/" className="logo-text"><img src={logo} alt="LOGO" className="w-32 h-auto" /></a></h1>
            </div>

            <div className="flex bg-white/5 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('hdl')}
                className={`text-[10px] uppercase tracking-widest px-4 py-2 rounded-lg font-black transition-all ${activeTab === 'hdl' ? 'bg-contributor text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
              >
                Repo
              </button>
              <button
                onClick={() => setActiveTab('mcq')}
                className={`text-[10px] uppercase tracking-widest px-4 py-2 rounded-lg font-black transition-all ${activeTab === 'mcq' ? 'bg-contributor text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
              >
                Quizzes
              </button>
              <button
                onClick={() => setActiveTab('team')}
                className={`text-[10px] uppercase tracking-widest px-4 py-2 rounded-lg font-black transition-all ${activeTab === 'team' ? 'bg-contributor text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
              >
                Team
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`text-[10px] uppercase tracking-widest px-4 py-2 rounded-lg font-black transition-all ${activeTab === 'profile' ? 'bg-contributor text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
              >
                Profile
              </button>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-black uppercase text-accent">{profile.displayName}</p>
              <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Contributor Mode</p>
            </div>
            <button onClick={onSignOut} className="text-[10px] font-black text-gray-500 hover:text-red-400 uppercase tracking-widest transition-colors">Sign Out</button>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto w-full p-6 md:p-12">
        {activeTab === 'hdl' && (
          <>
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-black tracking-tight">IP Repository</h2>
                <p className="text-gray-400 font-medium">Manage your verified hardware description blocks.</p>
              </div>
              <button onClick={() => setShowUpload(true)} className="bg-contributor text-white px-8 py-3 rounded-2xl font-black text-sm hover:brightness-110 shadow-2xl shadow-contributor/20 transition-all flex items-center gap-2">
                New Module
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {files.map(file => (
                <div key={file.id} className="bg-gunmetal p-8 rounded-[32px] border border-white/5 hover:border-contributor/50 transition-all group cursor-default">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-contributor/10 rounded-2xl flex items-center justify-center text-contributor">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                    </div>
                    <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest border border-white/5 px-2 py-1 rounded-lg">{file.type}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{file.name}</h3>
                  <p className="text-xs text-gray-500 mb-8 font-medium">{file.size} • Verified {file.date}</p>
                  <div className="flex gap-3">
                    <button onClick={() => openEditModule(file)} className="flex-1 text-[10px] font-black uppercase tracking-widest py-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">Edit Code</button>
                    <button className="flex-1 text-[10px] font-black uppercase tracking-widest py-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">Waveform</button>
                  </div>
                </div>
              ))}
              {files.length === 0 && (
                <div className="col-span-full py-40 text-center border-2 border-dashed border-white/5 rounded-[40px] text-gray-600 font-black uppercase tracking-widest text-xs">
                  Repository Empty. Initializing Required.
                </div>
              )}
            </div>
          </>
        )}

        {activeTab === 'mcq' && (
          <>
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-black tracking-tight">Assessment Hub</h2>
                <p className="text-gray-400 font-medium">Curate digital logic challenges for learners.</p>
              </div>
              <button onClick={() => openQuestionModal()} className="bg-contributor text-white px-8 py-3 rounded-2xl font-black text-sm hover:brightness-110 shadow-2xl transition-all">
                Add Question
              </button>
            </div>
            <div className="bg-gunmetal rounded-[40px] border border-white/5 overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 uppercase text-[10px] font-black tracking-widest text-gray-500">
                  <tr>
                    <th className="px-8 py-6">ID</th>
                    <th className="px-8 py-6">Preview</th>
                    <th className="px-8 py-6">Difficulty</th>
                    <th className="px-8 py-6">Created</th>
                    <th className="px-8 py-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {questions.map(q => (
                    <tr key={q.id} className="hover:bg-white/2 transition-colors">
                      <td className="px-8 py-6 font-mono text-gray-600">{q.id}</td>
                      <td className="px-8 py-6 font-bold">{q.text}</td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-[10px] font-black uppercase tracking-widest border border-orange-500/20">{q.difficulty}</span>
                      </td>
                      <td className="px-8 py-6 text-gray-500 font-medium">{q.date}</td>
                      <td className="px-8 py-6">
                        <div className="flex justify-end gap-6">
                          <button
                            onClick={() => openQuestionModal(q)}
                            className="text-contributor hover:text-white font-black uppercase text-[10px] tracking-widest transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteQuestion(q.id)}
                            className="text-red-500 hover:text-red-400 font-black uppercase text-[10px] tracking-widest transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {questions.length === 0 && (
                <div className="p-20 text-center text-gray-600 font-black uppercase tracking-[0.2em] text-[10px]">
                  No Assessment data found.
                </div>
              )}
            </div>
          </>
        )}

        {activeTab === 'team' && (
          <div className="max-w-3xl mx-auto py-24 text-center">
            <div className="w-24 h-24 bg-contributor/10 rounded-[32px] flex items-center justify-center mx-auto mb-10 text-contributor border border-contributor/20">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <h2 className="text-3xl font-black tracking-tight mb-4">Enterprise Controls</h2>
            <p className="text-gray-400 font-medium mb-12 text-lg">Manage faculty permissions and multi-user IP access.</p>
            <button className="bg-white text-matte px-10 py-4 rounded-2xl font-black text-sm hover:scale-105 active:scale-95 transition-all">Invite Engineer</button>
          </div>
        )}

        {showUpload && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gunmetal w-full max-w-lg rounded-[48px] p-12 border border-white/10 shadow-2xl transform animate-in zoom-in duration-300">
              <h3 className="text-3xl font-black tracking-tighter mb-8">{editingModuleId ? 'Update RTL' : 'Deploy RTL'}</h3>
              <form onSubmit={handleUploadFile} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Module Name</label>
                  <input
                    name="moduleName"
                    required
                    defaultValue={files.find(f => f.id === editingModuleId)?.name}
                    className="w-full bg-matte border border-white/10 rounded-2xl px-6 py-4 text-offwhite focus:border-contributor outline-none transition-colors font-medium"
                    placeholder="e.g. FIFO_Controller"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Target Language</label>
                  <select
                    name="language"
                    defaultValue={files.find(f => f.id === editingModuleId)?.type === 'IP Config' ? 'Verilog' : 'Verilog'} // Simplified fallback
                    className="w-full bg-matte border border-white/10 rounded-2xl px-6 py-4 text-offwhite focus:border-contributor outline-none transition-colors appearance-none font-medium"
                  >
                    <option value="Verilog">Verilog HDL</option>
                    <option value="VHDL">VHDL</option>
                    <option value="SystemVerilog">SystemVerilog</option>
                  </select>

                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">HDL Source Code</label>
                    <label className="cursor-pointer text-[9px] font-black uppercase tracking-widest text-contributor hover:bg-contributor/10 px-2 py-1 rounded-md transition-all">
                      <input type="file" accept=".v,.sv,.vhd,.txt" className="hidden" onChange={handleFileUpload} />
                      📂 Import from Disk
                    </label>
                  </div>
                  <textarea
                    name="moduleCode"
                    required
                    value={moduleCode}
                    onChange={(e) => setModuleCode(e.target.value)}
                    className="w-full h-48 bg-matte border border-white/10 rounded-2xl px-6 py-4 text-offwhite focus:border-contributor outline-none transition-colors font-mono text-xs leading-relaxed resize-none"
                    placeholder="Type code here or import from file..."
                  />
                </div>
                <div className="flex gap-4 pt-6">
                  <button type="button" onClick={() => { setShowUpload(false); setEditingModuleId(null); setModuleCode(''); }} className="flex-1 py-4 text-xs font-black uppercase tracking-widest bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">Abort</button>
                  <button type="submit" disabled={uploading} className="flex-1 py-4 text-xs font-black uppercase tracking-widest bg-contributor text-white rounded-2xl shadow-xl shadow-contributor/20 active:scale-95 transition-all">
                    {uploading ? 'Processing...' : (editingModuleId ? 'Update IP' : 'Deploy IP')}
                  </button>
                </div>
              </form>
            </div>
          </div >
        )}

        {
          showQuestionModal && (
            <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-gunmetal w-full max-w-lg rounded-[48px] p-12 border border-white/10 shadow-2xl transform animate-in zoom-in duration-300">
                <h3 className="text-3xl font-black tracking-tighter mb-8">{editingQuestionId ? 'Update Challenge' : 'New Assessment'}</h3>
                <form onSubmit={handleSaveQuestion} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Question Content</label>
                    <textarea
                      value={questionText}
                      onChange={(e) => setQuestionText(e.target.value)}
                      required
                      className="w-full h-40 bg-matte border border-white/10 rounded-2xl px-6 py-4 text-offwhite focus:border-contributor outline-none transition-colors resize-none leading-relaxed font-medium"
                      placeholder="Provide detailed hardware logic problem description..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Difficulty Calibration</label>
                    <div className="grid grid-cols-3 gap-4">
                      {['Entry', 'Medium', 'Senior'].map(lvl => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => setQuestionDifficulty(lvl)}
                          className={`py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all ${questionDifficulty === lvl ? 'bg-contributor text-white border-contributor shadow-lg shadow-contributor/20' : 'bg-matte text-gray-600 border-white/5 hover:border-white/10'}`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4 pt-6">
                    <button
                      type="button"
                      onClick={() => setShowQuestionModal(false)}
                      className="flex-1 py-4 text-xs font-black uppercase tracking-widest bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"
                    >
                      Discard
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-4 text-xs font-black uppercase tracking-widest bg-contributor text-white rounded-2xl shadow-xl shadow-contributor/20 hover:brightness-110 active:scale-95 transition-all"
                    >
                      {editingQuestionId ? 'Commit Changes' : 'Publish Challenge'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )
        }

        {
          deleteConfirmationId && (
            <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-gunmetal w-full max-w-md rounded-[40px] p-10 border border-white/10 shadow-2xl transform animate-in zoom-in duration-300 text-center">
                <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-2">Confirm Deletion</h3>
                <p className="text-gray-400 font-medium mb-8">Are you sure you want to permanently remove this assessment item? This action cannot be undone.</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setDeleteConfirmationId(null)}
                    className="flex-1 py-3 text-[10px] font-black uppercase tracking-widest bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmDelete}
                    className="flex-1 py-3 text-[10px] font-black uppercase tracking-widest bg-red-500 text-white rounded-xl shadow-xl shadow-red-500/20 hover:brightness-110 transition-all"
                  >
                    Delete Forever
                  </button>
                </div>
              </div>
            </div>
          )
        }
        {
          activeTab === 'profile' && (
            <div className="animate-fade-in max-w-4xl mx-auto space-y-8 mt-8">
              {stats ? (
                <>
                  <div className="bg-gunmetal p-8 rounded-[32px] border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-gray-500 mb-1">CONTRIBUTOR PROFILE</div>
                      <h2 className="text-3xl font-black text-white mb-2">{stats.username}</h2>
                      <div className="flex gap-4">
                        <span className="bg-contributor/10 text-contributor px-3 py-1 rounded-full text-xs font-bold border border-contributor/20">
                          ROLE: CONTRIBUTOR
                        </span>
                      </div>
                    </div>
                    <div className="h-20 w-20 bg-gradient-to-br from-contributor to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-contributor/20">
                      <span className="text-3xl">👨‍💻</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="bg-gunmetal p-8 rounded-[32px] border border-white/5 hover:border-contributor/30 transition-colors">
                      <div className="text-5xl font-black text-white mb-2">{stats.modules || 0}</div>
                      <div className="text-gray-400 font-bold uppercase tracking-widest text-sm">Modules Uploaded</div>
                    </div>
                    <div className="bg-gunmetal p-8 rounded-[32px] border border-white/5 hover:border-contributor/30 transition-colors">
                      <div className="text-5xl font-black text-white mb-2">{stats.quizzes || 0}</div>
                      <div className="text-gray-400 font-bold uppercase tracking-widest text-sm">Quizzes Created</div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-20">
                  <div className="text-gray-500 mb-4">Loading stats...</div>
                  <div className="text-xs text-gray-600">If this takes too long, ensure Backend is running.</div>
                </div>
              )}
            </div>
          )
        }
      </main >
    </div >
  );
};

export default ContributorDashboard;
