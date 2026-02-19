
import React, { useState, useEffect } from 'react';
import Portal from './pages/Portal';
import Dashboard from './pages/Dashboard';
import { User, Role } from './types';
import { mockUsers } from './services/mockData';
// Added ArrowRight and X to imports
import { Loader2, Landmark, ShieldCheck, ArrowRight, X } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<'PORTAL' | 'DASHBOARD'>('PORTAL');
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '', show: false });

  // Persistence Simulation
  useEffect(() => {
    const savedUser = localStorage.getItem('si_mandiri_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setView('DASHBOARD');
      setCurrentPage('dashboard');
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate real auth delay
    setTimeout(() => {
      const foundUser = mockUsers.find(u => u.username === loginForm.username.toLowerCase());
      
      if (foundUser) {
        setUser(foundUser);
        localStorage.setItem('si_mandiri_user', JSON.stringify(foundUser));
        setView('DASHBOARD');
        setCurrentPage('dashboard');
        setLoginForm({ ...loginForm, show: false });
      } else {
        alert('Credential tidak ditemukan dalam database sistem.');
      }
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('si_mandiri_user');
    setView('PORTAL');
    setCurrentPage('home');
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#1a4d2e] flex flex-col items-center justify-center z-[100] text-white">
        <Loader2 className="animate-spin mb-6 text-[#d4af37]" size={48} />
        <p className="text-sm font-bold tracking-[0.3em] uppercase opacity-70">Sinkronisasi Keamanan...</p>
      </div>
    );
  }

  return (
    <div className="antialiased">
      {view === 'PORTAL' ? (
        <>
          <Portal 
            onLoginClick={() => setLoginForm({ ...loginForm, show: true })} 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />

          {/* Login Modal Overlay */}
          {loginForm.show && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-[100] p-6 animate-in fade-in duration-300">
              <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative border border-slate-200">
                <button 
                  onClick={() => setLoginForm({ ...loginForm, show: false })}
                  className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-all"
                >
                  {/* Fixed: Use Lucide X icon instead of raw SVG to resolve 'size' property error */}
                  <X size={24} />
                </button>
                
                <div className="p-10 pt-12 text-center">
                   <div className="w-16 h-16 bg-[#1a4d2e] rounded-2xl flex items-center justify-center text-[#d4af37] mx-auto mb-6 shadow-xl shadow-[#1a4d2e]/20">
                     <Landmark size={32} />
                   </div>
                   <h3 className="text-2xl font-bold text-[#1a4d2e] mb-2 font-brand uppercase tracking-wider">SI MANDIRI</h3>
                   <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-8">Gerbang Masuk Ekosistem Digital</p>
                   
                   <form onSubmit={handleLogin} className="space-y-4">
                      <div className="text-left space-y-1.5">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Username / ID</label>
                        <input 
                          type="text" 
                          required
                          placeholder="Masukkan User ID Anda"
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-[#1a4d2e] transition-all text-sm font-medium"
                          value={loginForm.username}
                          onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                        />
                      </div>
                      <div className="text-left space-y-1.5">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Password Keamanan</label>
                        <input 
                          type="password" 
                          required
                          placeholder="••••••••"
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-[#1a4d2e] transition-all text-sm font-medium"
                          value={loginForm.password}
                          onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                        />
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#1a4d2e] focus:ring-[#1a4d2e]" />
                          <span className="text-xs text-slate-500 font-medium">Ingat Saya</span>
                        </label>
                        <a href="#" className="text-xs text-[#1a4d2e] font-bold hover:underline">Lupa Password?</a>
                      </div>
                      <button 
                        type="submit"
                        className="w-full bg-[#1a4d2e] hover:bg-[#0e2b1a] text-white font-bold py-4 rounded-2xl shadow-xl shadow-[#1a4d2e]/20 transition-all flex items-center justify-center gap-2 group"
                      >
                        MASUK KE SISTEM
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                   </form>
                   
                   <div className="mt-8 flex items-center gap-2 justify-center text-slate-300">
                     <ShieldCheck size={14} />
                     <span className="text-[10px] font-bold uppercase tracking-widest">Enkripsi Berlapis (SSL/TLS 1.3)</span>
                   </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        user && (
          <Dashboard 
            user={user} 
            onLogout={handleLogout} 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            onExitToPortal={() => { setView('PORTAL'); setCurrentPage('home'); }}
          />
        )
      )}
    </div>
  );
};

export default App;
