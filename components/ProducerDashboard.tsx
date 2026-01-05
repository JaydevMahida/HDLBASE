
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
}

interface MockQuestion {
  id: string;
  text: string;
  difficulty: string;
  date: string;
}

const ProducerDashboard: React.FC<Props> = ({ profile, onSignOut }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'hdl' | 'mcq' | 'team'>('hdl');
  const [showUpload, setShowUpload] = useState(false);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [files, setFiles] = useState<MockFile[]>([]);
  const [questions, setQuestions] = useState<MockQuestion[]>([]);
  const [uploading, setUploading] = useState(false);

  const [editingQuestionId, setEditingQuestionId] = useState<string | null>(null);
  const [questionText, setQuestionText] = useState('');
  const [questionDifficulty, setQuestionDifficulty] = useState('Medium');

  useEffect(() => {
    const savedFiles = JSON.parse(localStorage.getItem('hdlbase_mock_files') || '[]');
    const savedQuestions = JSON.parse(localStorage.getItem('hdlbase_mock_mcq_admin') || '[]');
    setFiles(savedFiles);
    setQuestions(savedQuestions);
  }, []);

  const handleLogoClick = () => {
    navigate('/dashboard');
  };

  const handleUploadFile = (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const newFile: MockFile = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.get('moduleName') as string || 'New Module',
      type: formData.get('language') as string || 'Verilog',
      size: `${(Math.random() * 50).toFixed(1)} KB`,
      date: new Date().toLocaleDateString()
    };

    setTimeout(() => {
      const updated = [newFile, ...files];
      setFiles(updated);
      localStorage.setItem('hdlbase_mock_files', JSON.stringify(updated));
      setUploading(false);
      setShowUpload(false);
      form.reset();
    }, 1000);
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
    }
    setShowQuestionModal(true);
  };

  const handleSaveQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    let updated: MockQuestion[];
    if (editingQuestionId) {
      updated = questions.map(q => q.id === editingQuestionId ? {
        ...q,
        text: questionText,
        difficulty: questionDifficulty
      } : q);
    } else {
      const newQ: MockQuestion = {
        id: Math.random().toString(36).substr(2, 5),
        text: questionText,
        difficulty: questionDifficulty,
        date: new Date().toLocaleDateString()
      };
      updated = [newQ, ...questions];
    }
    setQuestions(updated);
    localStorage.setItem('hdlbase_mock_mcq_admin', JSON.stringify(updated));
    setShowQuestionModal(false);
    setQuestionText('');
    setQuestionDifficulty('Medium');
    setEditingQuestionId(null);
  };

  const handleDeleteQuestion = (id: string) => {
    if (window.confirm('Delete this challenge permanently?')) {
      const updated = questions.filter(q => q.id !== id);
      setQuestions(updated);
      localStorage.setItem('hdlbase_mock_mcq_admin', JSON.stringify(updated));
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
              <h1 className="text-xl font-black tracking-tighter"><a href="/" className="logo-text"><img src={logo} alt="LOGO" /></a></h1>
            </div>
            
            <div className="flex bg-white/5 p-1 rounded-xl">
              <button 
                onClick={() => setActiveTab('hdl')}
                className={`text-[10px] uppercase tracking-widest px-4 py-2 rounded-lg font-black transition-all ${activeTab === 'hdl' ? 'bg-producer text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
              >
                Repo
              </button>
              <button 
                onClick={() => setActiveTab('mcq')}
                className={`text-[10px] uppercase tracking-widest px-4 py-2 rounded-lg font-black transition-all ${activeTab === 'mcq' ? 'bg-producer text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
              >
                Quizzes
              </button>
              <button 
                onClick={() => setActiveTab('team')}
                className={`text-[10px] uppercase tracking-widest px-4 py-2 rounded-lg font-black transition-all ${activeTab === 'team' ? 'bg-producer text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
              >
                Team
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
              <button onClick={() => setShowUpload(true)} className="bg-producer text-white px-8 py-3 rounded-2xl font-black text-sm hover:brightness-110 shadow-2xl shadow-producer/20 transition-all flex items-center gap-2">
                New Module
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {files.map(file => (
                <div key={file.id} className="bg-gunmetal p-8 rounded-[32px] border border-white/5 hover:border-producer/50 transition-all group cursor-default">
                   <div className="flex justify-between items-start mb-6">
                     <div className="w-12 h-12 bg-producer/10 rounded-2xl flex items-center justify-center text-producer">
                       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                     </div>
                     <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest border border-white/5 px-2 py-1 rounded-lg">{file.type}</span>
                   </div>
                   <h3 className="text-xl font-bold mb-1">{file.name}</h3>
                   <p className="text-xs text-gray-500 mb-8 font-medium">{file.size} • Verified {file.date}</p>
                   <div className="flex gap-3">
                     <button className="flex-1 text-[10px] font-black uppercase tracking-widest py-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">Edit Code</button>
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
                <p className="text-gray-400 font-medium">Curate digital logic challenges for consumers.</p>
              </div>
              <button onClick={() => openQuestionModal()} className="bg-producer text-white px-8 py-3 rounded-2xl font-black text-sm hover:brightness-110 shadow-2xl transition-all">
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
                              className="text-producer hover:text-white font-black uppercase text-[10px] tracking-widest transition-colors"
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
            <div className="w-24 h-24 bg-producer/10 rounded-[32px] flex items-center justify-center mx-auto mb-10 text-producer border border-producer/20">
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
              <h3 className="text-3xl font-black tracking-tighter mb-8">Deploy RTL</h3>
              <form onSubmit={handleUploadFile} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Module Name</label>
                  <input name="moduleName" required className="w-full bg-matte border border-white/10 rounded-2xl px-6 py-4 text-offwhite focus:border-producer outline-none transition-colors font-medium" placeholder="e.g. FIFO_Controller" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Target Language</label>
                  <select name="language" className="w-full bg-matte border border-white/10 rounded-2xl px-6 py-4 text-offwhite focus:border-producer outline-none transition-colors appearance-none font-medium">
                    <option value="Verilog">Verilog HDL</option>
                    <option value="VHDL">VHDL</option>
                    <option value="SystemVerilog">SystemVerilog</option>
                  </select>
                </div>
                <div className="flex gap-4 pt-6">
                  <button type="button" onClick={() => setShowUpload(false)} className="flex-1 py-4 text-xs font-black uppercase tracking-widest bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">Abort</button>
                  <button type="submit" disabled={uploading} className="flex-1 py-4 text-xs font-black uppercase tracking-widest bg-producer text-white rounded-2xl shadow-xl shadow-producer/20 active:scale-95 transition-all">
                    {uploading ? 'Processing...' : 'Deploy IP'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showQuestionModal && (
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
                    className="w-full h-40 bg-matte border border-white/10 rounded-2xl px-6 py-4 text-offwhite focus:border-producer outline-none transition-colors resize-none leading-relaxed font-medium" 
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
                        className={`py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all ${questionDifficulty === lvl ? 'bg-producer text-white border-producer shadow-lg shadow-producer/20' : 'bg-matte text-gray-600 border-white/5 hover:border-white/10'}`}
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
                    className="flex-1 py-4 text-xs font-black uppercase tracking-widest bg-producer text-white rounded-2xl shadow-xl shadow-producer/20 hover:brightness-110 active:scale-95 transition-all"
                  >
                    {editingQuestionId ? 'Commit Changes' : 'Publish Challenge'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProducerDashboard;
