
import React, { useState } from 'react';
import { User, Role, Transaction, Member } from '../types';
import { MENU_ITEMS, COLORS } from '../constants';
import StatsCard from '../components/StatsCard';
import DataTable from '../components/DataTable';
import { 
  Plus, Search, Filter, Download, Eye, Edit, Trash2, 
  ChevronRight, UserCircle, TrendingUp, Wallet, Users, 
  Layers, Home, LogOut, FileText, ShieldCheck, MapPin, 
  Calendar, Building2, Briefcase, ChevronDown, History,
  PieChart, Activity, Target, ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import { mockTransactions, mockMembers } from '../services/mockData';

interface DashboardProps {
  user: User;
  onLogout: () => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onExitToPortal: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout, currentPage, setCurrentPage, onExitToPortal }) => {
  const [activeSubTab, setActiveSubTab] = useState('pusat');
  
  const isAuthorized = (itemRoles: string[]) => itemRoles.includes(user.role);

  const formatIDR = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency', currency: 'IDR', maximumFractionDigits: 0
    }).format(amount);
  };

  const SubTabs = ({ tabs }: { tabs: { id: string, label: string }[] }) => (
    <div className="flex border-b border-slate-200 mb-6 overflow-x-auto no-scrollbar">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveSubTab(tab.id)}
          className={`px-6 py-3 text-xs font-black tracking-widest uppercase transition-all border-b-2 whitespace-nowrap ${activeSubTab === tab.id ? 'border-[#1a4d2e] text-[#1a4d2e]' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );

  // 1. DASHBOARD SUMMARY (EXECUTIVE VIEW)
  const renderDashboardHome = () => (
    <div className="animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Executive Summary</h2>
          <p className="text-sm text-slate-500">Analisis strategis kesehatan ekosistem SI MANDIRI.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
          <Activity size={16} className="text-emerald-500" />
          <span className="text-xs font-bold text-slate-600 uppercase tracking-tighter">System Health: Optimal</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatsCard label="AUM Konsolidasi" value={formatIDR(4250000000)} subLabel="Asset Under Management" icon={<Building2 size={24} />} />
        <StatsCard label="Project Avg ROI" value="22.4%" subLabel="Rerata Margin Sektor Riil" icon={<Target size={24} />} color={COLORS.success} />
        <StatsCard label="Retention Rate" value="98.2%" subLabel="Partisipasi Aktif Anggota" icon={<Users size={24} />} color={COLORS.accent} />
        <StatsCard label="Surplus (SHU)" value={formatIDR(320000000)} subLabel="Estimasi Bagi Hasil" icon={<TrendingUp size={24} />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Aktivitas Terkini (66%) */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <History size={18} className="text-[#1a4d2e]" />
              Aktivitas Terkini & Ledger
            </h3>
            <button className="text-[10px] font-black text-[#1a4d2e] uppercase hover:underline">Lihat Semua</button>
          </div>
          <DataTable 
            headers={['Ref ID', 'Tanggal', 'Unit', 'Kategori', 'Nominal']}
            data={mockTransactions.slice(0, 5)}
            renderRow={(t) => (
              <tr key={t.id} className="hover:bg-slate-50/50">
                <td className="px-6 py-4 text-xs font-bold text-slate-600">{t.id}</td>
                <td className="px-6 py-4 text-xs text-slate-500">{t.date}</td>
                <td className="px-6 py-4 text-xs font-medium text-slate-700">{t.entity}</td>
                <td className="px-6 py-4 text-xs text-slate-400">{t.category}</td>
                <td className="px-6 py-4 text-xs font-bold text-slate-800 text-right">{formatIDR(t.amount)}</td>
              </tr>
            )}
          />
        </div>

        {/* Right Column: Status & Distribusi (33%) */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#1a4d2e] rounded-2xl p-6 text-white shadow-lg">
             <div className="flex items-center gap-3 mb-4 text-[#d4af37]">
               <ShieldCheck size={20} />
               <span className="text-xs font-black uppercase tracking-widest">Status Koperasi</span>
             </div>
             <h4 className="text-xl font-bold mb-2">Likuiditas Pusat</h4>
             <p className="text-xs text-white/60 leading-relaxed mb-6">Cash Ratio: 1.45. Koperasi memiliki likuiditas yang cukup untuk menutupi kewajiban jangka pendek.</p>
             <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#d4af37] h-full w-[85%]"></div>
             </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
             <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
               <PieChart size={18} className="text-[#d4af37]" />
               Distribusi Area
             </h4>
             <div className="space-y-4">
                {[
                  { name: 'Koperasi Pusat', pct: 35, color: '#1a4d2e' },
                  { name: 'Koperasi Cabang', pct: 45, color: '#d4af37' },
                  { name: 'Investasi Mitra', pct: 20, color: '#4f6f52' }
                ].map((p, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold">
                       <span className="text-slate-500">{p.name}</span>
                       <span className="text-slate-800">{p.pct}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                       <div className="h-full rounded-full" style={{ width: `${p.pct}%`, backgroundColor: p.color }}></div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );

  // 2. KEUANGAN (Pusat, Cabang, Project Stats)
  const renderKeuangan = () => (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Manajemen Keuangan</h2>
        <button className="bg-[#1a4d2e] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg">
          <Plus size={16} /> Transaksi Baru
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatsCard label="Total Simpanan" value={formatIDR(2100000000)} subLabel="Pokok, Wajib & Sukarela" icon={<Wallet size={20} />} />
        <StatsCard label="Arus Kas (OCF)" value={formatIDR(125000000)} subLabel="Rerata Per Bulan" icon={<Activity size={20} />} color={COLORS.success} />
        <StatsCard label="Pencapaian SHU" value="78%" subLabel="Dari Target Tahunan" icon={<Target size={20} />} color={COLORS.accent} />
      </div>
      
      <SubTabs tabs={[
        { id: 'pusat', label: 'Koperasi Pusat' },
        { id: 'cabang', label: 'Koperasi Cabang' },
        { id: 'project', label: 'Keuangan Project' }
      ]} />

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <DataTable 
          headers={['ID Ledger', 'Tanggal', 'Unit Kerja', 'Kategori', 'Nominal', 'Audit']}
          data={mockTransactions}
          renderRow={(t) => (
            <tr key={t.id}>
              <td className="px-6 py-4 text-xs font-bold text-slate-700">{t.id}</td>
              <td className="px-6 py-4 text-xs text-slate-500">{t.date}</td>
              <td className="px-6 py-4 text-xs font-medium text-slate-600">{t.entity}</td>
              <td className="px-6 py-4 text-xs text-slate-400">{t.category}</td>
              <td className="px-6 py-4 text-xs font-bold text-right">{formatIDR(t.amount)}</td>
              <td className="px-6 py-4">
                <span className="text-[9px] font-black bg-blue-50 text-blue-600 px-2 py-1 rounded border border-blue-100 uppercase tracking-tighter">Verified</span>
              </td>
            </tr>
          )}
        />
      </div>
    </div>
  );

  // 3. KEANGGOTAAN (Pusat, Cabang Stats)
  const renderKeanggotaan = () => (
    <div className="animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 uppercase tracking-tight">Database Keanggotaan</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
           <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Total Anggota Aktif</p>
           <div className="flex items-center gap-3">
             <span className="text-3xl font-black text-slate-800">1,240</span>
             <span className="flex items-center text-xs font-bold text-emerald-500"><ArrowUpRight size={14} /> +4.2%</span>
           </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
           <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Rasio Partisipasi</p>
           <div className="flex items-center gap-3">
             <span className="text-3xl font-black text-slate-800">92.4%</span>
             <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="bg-[#d4af37] h-full" style={{ width: '92.4%' }}></div>
             </div>
           </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
           <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Domisili Cabang</p>
           <span className="text-3xl font-black text-slate-800">42 Wilayah</span>
        </div>
      </div>
      
      <SubTabs tabs={[
        { id: 'pusat', label: 'Anggota Pusat' },
        { id: 'cabang', label: 'Anggota Cabang' }
      ]} />

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <DataTable 
          headers={['ID Anggota', 'Nama Lengkap', 'Domisili', 'Pekerjaan', 'Area Kerja', 'Partisipasi']}
          data={mockMembers.filter(m => activeSubTab === 'pusat' ? m.areaType === 'PUSAT' : m.areaType === 'CABANG')}
          renderRow={(m) => (
            <tr key={m.id}>
              <td className="px-6 py-4 text-xs font-bold text-[#1a4d2e]">{m.id}</td>
              <td className="px-6 py-4 text-xs font-medium text-slate-800">{m.name}</td>
              <td className="px-6 py-4 text-xs text-slate-500">{m.location}</td>
              <td className="px-6 py-4 text-xs text-slate-400">{m.job}</td>
              <td className="px-6 py-4">
                 <span className="text-[10px] font-black bg-slate-100 px-2 py-1 rounded">{m.areaType}</span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-1">
                   {[1,2,3,4,5].map(i => <div key={i} className={`w-1.5 h-1.5 rounded-full ${i <= 4 ? 'bg-[#d4af37]' : 'bg-slate-200'}`}></div>)}
                </div>
              </td>
            </tr>
          )}
        />
      </div>
    </div>
  );

  // 4. PROJECT (Performance Tracking)
  const renderProjectDetail = () => (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Financial Performance Project</h2>
          <p className="text-sm text-slate-500">Monitoring real-time Budget vs Actual (BVA).</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#1a4d2e] text-white rounded-xl text-xs font-bold shadow-lg">
          <Download size={16} /> Laporan Audit
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
         <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Aset Project</h4>
            <span className="text-2xl font-black text-slate-800">{formatIDR(920000000)}</span>
         </div>
         <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Yield Index</h4>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-slate-800">1.2x</span>
              <span className="text-[10px] font-bold text-emerald-500 tracking-tighter">Above Average</span>
            </div>
         </div>
         <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">BEP Accuracy</h4>
            <span className="text-2xl font-black text-slate-800">98.5%</span>
         </div>
         <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Unit Aktif</h4>
            <span className="text-2xl font-black text-slate-800">12 Unit</span>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
         <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
               <h5 className="text-xs font-black uppercase text-slate-600">Project: Kampung Haji</h5>
               <span className="text-[10px] font-bold text-emerald-600">+12% Profitability</span>
            </div>
            <div className="space-y-3">
               <div className="flex justify-between text-[9px] font-bold text-slate-400 uppercase">
                 <span>Progress Biaya (Actual / Budget)</span>
                 <span>85%</span>
               </div>
               <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                 <div className="h-full bg-[#1a4d2e]" style={{ width: '85%' }}></div>
               </div>
            </div>
         </div>
         <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
               <h5 className="text-xs font-black uppercase text-slate-600">Project: Trading Ikan</h5>
               <span className="text-[10px] font-bold text-rose-500">-2.4% Cost Inc.</span>
            </div>
            <div className="space-y-3">
               <div className="flex justify-between text-[9px] font-bold text-slate-400 uppercase">
                 <span>Realisasi Target Penjualan</span>
                 <span>60%</span>
               </div>
               <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                 <div className="h-full bg-[#d4af37]" style={{ width: '60%' }}></div>
               </div>
            </div>
         </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <Layers size={18} className="text-[#1a4d2e]" />
            Operational Ledger Detail
          </h3>
        </div>
        <DataTable 
          headers={['Ref ID', 'Tanggal', 'Project', 'Kategori', 'Qty', 'Nominal', 'Audit']}
          data={mockTransactions.filter(t => t.referal === 'PROJECT')}
          renderRow={(t) => (
            <tr key={t.id}>
              <td className="px-6 py-4 text-xs font-bold text-slate-700">{t.id}</td>
              <td className="px-6 py-4 text-xs text-slate-500">{t.date}</td>
              <td className="px-6 py-4 text-xs font-bold text-[#1a4d2e]">{t.entity}</td>
              <td className="px-6 py-4 text-xs text-slate-500">{t.category}</td>
              <td className="px-6 py-4 text-xs text-slate-400">{t.qty}</td>
              <td className="px-6 py-4 text-xs font-black text-right">{formatIDR(t.amount)}</td>
              <td className="px-6 py-4">
                <ShieldCheck size={16} className="text-emerald-500 mx-auto" />
              </td>
            </tr>
          )}
        />
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard': return renderDashboardHome();
      case 'keuangan': return renderKeuangan();
      case 'keanggotaan': return renderKeanggotaan();
      case 'project': return renderProjectDetail();
      default: return renderDashboardHome();
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Side Navigation */}
      <aside className="hidden lg:flex flex-col w-72 bg-[#1a4d2e] text-white shadow-2xl relative z-50">
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#d4af37] rounded-lg flex items-center justify-center text-[#1a4d2e] font-brand text-2xl font-bold shadow-lg">M</div>
            <div>
              <h1 className="font-brand text-sm font-bold tracking-[0.2em] text-[#d4af37]">SI MANDIRI</h1>
              <p className="text-[9px] text-white/40 uppercase tracking-widest font-bold">Internal App</p>
            </div>
          </div>
        </div>

        <div className="p-6 flex-1 overflow-y-auto">
          <div className="bg-white/5 rounded-2xl p-4 flex items-center gap-3 border border-white/10 mb-8">
             <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center text-[#1a4d2e]">
               <UserCircle size={28} />
             </div>
             <div className="flex-1 overflow-hidden">
               <p className="text-xs font-black truncate">{user.name}</p>
               <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">{user.role}</p>
             </div>
          </div>

          <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-4 px-2">Pilar Utama</p>
          <nav className="flex flex-col gap-1.5">
            {MENU_ITEMS.map(item => isAuthorized(item.roles) && (
              <button 
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setActiveSubTab('pusat');
                }}
                className={`flex items-center gap-4 px-5 py-3.5 rounded-xl text-sm font-bold transition-all relative group ${currentPage === item.id ? 'bg-white text-[#1a4d2e] shadow-xl' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
              >
                <span className={currentPage === item.id ? 'text-[#1a4d2e]' : 'text-white/30 group-hover:text-white/60'}>
                  {item.icon}
                </span>
                {item.label}
                {currentPage === item.id && <div className="absolute right-4 w-1.5 h-1.5 bg-[#d4af37] rounded-full"></div>}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6 border-t border-white/5 flex flex-col gap-2 bg-[#143a23]">
          <button onClick={onExitToPortal} className="flex items-center gap-4 px-5 py-3 rounded-xl text-sm font-bold text-white/50 hover:text-white transition-all">
            <Home size={18} /> Ke Portal Publik
          </button>
          <button onClick={onLogout} className="flex items-center gap-4 px-5 py-3.5 rounded-xl text-sm font-bold text-rose-300 hover:bg-rose-500/10 transition-all">
            <LogOut size={18} /> Logout System
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-10 flex-shrink-0 relative z-40">
           <div className="flex items-center gap-3 text-slate-400">
              <span className="text-[10px] font-black uppercase tracking-widest">{currentPage}</span>
              <ChevronRight size={14} className="opacity-50" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#1a4d2e]">{activeSubTab} Mode</span>
           </div>
           
           <div className="flex items-center gap-6">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-lg border border-emerald-100">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-black text-emerald-700 uppercase tracking-tighter">Secure Link Active</span>
              </div>
              <div className="w-px h-6 bg-slate-200"></div>
              <button className="relative text-slate-400 hover:text-slate-600 transition-colors">
                <FileText size={20} />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
              </button>
           </div>
        </header>

        <div className="flex-1 overflow-y-auto bg-slate-50 p-6 md:p-10">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
