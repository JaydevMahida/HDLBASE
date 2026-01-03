import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { collection, addDoc, query, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { LogOut, Terminal, Plus } from 'lucide-react';

const Dashboard = () => {
  const [userRole, setUserRole] = useState(null);
  const [modules, setModules] = useState([]);
  const [newModule, setNewModule] = useState({ title: '', code: '' });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(async (currentUser) => {
      if (!currentUser) {
        navigate('/login');
        return;
      }
      const userSnap = await getDoc(doc(db, "users", currentUser.uid));
      if (userSnap.exists()) setUserRole(userSnap.data().role);

      const q = query(collection(db, "hdl_modules"));
      const unsubscribeSnapshot = onSnapshot(q, (snapshot) => {
        setModules(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        setLoading(false);
      });
      return () => unsubscribeSnapshot();
    });
    return () => unsubscribeAuth();
  }, [navigate]);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!newModule.title || !newModule.code) return;
    try {
      await addDoc(collection(db, "hdl_modules"), {
        title: newModule.title,
        code: newModule.code,
        author: auth.currentUser.displayName,
        createdAt: new Date(),
        type: "Verilog"
      });
      setNewModule({ title: '', code: '' });
      alert("Module Uploaded Successfully!");
    } catch (err) { console.error(err); }
  };

  if (loading) return <div className="login-container">Loading Cloud-Native Engine...</div>;

  return (
    <div>
      <header className="dash-header">
        <div>
          <h2>Dashboard</h2>
          <span style={{color: '#3b82f6'}}>Logged in as: <strong>{userRole}</strong></span>
        </div>
        <button onClick={() => auth.signOut()} className="btn btn-outline" style={{display: 'flex', gap: '8px'}}>
          <LogOut size={18} /> Logout
        </button>
      </header>

      <main className="dash-grid">
        {/* Left Sidebar - Upload or Info */}
        {userRole === 'Producer' ? (
          <div className="sidebar-card">
            <h3><Plus size={18} /> Upload HDL Module</h3>
            <p style={{fontSize: '0.85rem', color: '#94a3b8', marginBottom: '15px'}}>
              As a Producer, create and upload modules for reuse.
            </p>
            <form onSubmit={handleUpload}>
              <div className="input-group">
                <label>Module Name</label>
                <input 
                  type="text" 
                  value={newModule.title}
                  onChange={(e) => setNewModule({...newModule, title: e.target.value})}
                  placeholder="e.g., 4-bit Counter"
                />
              </div>
              <div className="input-group">
                <label>Verilog/VHDL Code</label>
                <textarea 
                  rows="10"
                  value={newModule.code}
                  onChange={(e) => setNewModule({...newModule, code: e.target.value})}
                  placeholder="module counter(clk, rst, out)..."
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                Deploy to Repository
              </button>
            </form>
          </div>
        ) : (
          <div className="sidebar-card">
            <h3>Consumer Mode</h3>
            <p style={{color: '#94a3b8'}}>
              You are viewing the repository. Select modules to simulate or integrate into your projects.
            </p>
          </div>
        )}

        {/* Right Content - Feed */}
        <div>
          <h3 style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'20px'}}>
            <Terminal color="#4ade80" /> Repository Feed
          </h3>
          
          {modules.length === 0 && <p style={{color:'#64748b'}}>No modules found in the database.</p>}

          {modules.map((mod) => (
            <div key={mod.id} className="module-card">
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <h4>{mod.title}</h4>
                <span style={{fontSize:'0.8rem', color:'#94a3b8'}}>Author: {mod.author}</span>
              </div>
              <div className="code-block">
                {mod.code}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;