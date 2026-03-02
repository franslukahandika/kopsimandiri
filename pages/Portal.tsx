
import React from 'react';
import { PORTAL_MENU, BUSINESS_NARRATIVE, COLORS, PAGE_NARRATIVES } from '../constants';
import { ChevronRight, ArrowRight, ShieldCheck, TrendingUp, Globe, Layers, CheckCircle2, History as HistoryIcon, Rocket, ShoppingBag } from 'lucide-react';

interface PortalProps {
  onLoginClick: () => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Portal: React.FC<PortalProps> = ({ onLoginClick, currentPage, setCurrentPage }) => {
  const renderHome = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl mb-12">
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Banner"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a4d2e]/95 via-[#1a4d2e]/70 to-transparent flex items-center p-12">
          <div className="max-w-2xl text-white">
            <h2 className="font-brand text-4xl lg:text-5xl font-bold mb-6 text-[#d4af37] leading-tight">
              {BUSINESS_NARRATIVE.vision}
            </h2>
            <p className="text-lg lg:text-xl text-slate-100 leading-relaxed mb-8">
              {BUSINESS_NARRATIVE.mission}
            </p>
            <button 
              onClick={onLoginClick}
              className="bg-[#d4af37] hover:bg-[#b8962e] text-[#1a4d2e] font-bold py-4 px-8 rounded-xl transition-all flex items-center gap-2 group shadow-lg"
            >
              Masuk ke Portal Anggota
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <div className="w-16 h-1 bg-[#d4af37] mb-6"></div>
          <h3 className="text-3xl font-bold text-[#1a4d2e] mb-6">Visi Strategis Nasional</h3>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            {BUSINESS_NARRATIVE.intro}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 bg-white rounded-2xl border-l-4 border-[#1a4d2e] shadow-sm">
              <h5 className="font-bold text-[#1a4d2e] mb-2">Sektor Riil</h5>
              <p className="text-xs text-slate-500 leading-relaxed">Fokus pada aset produktif: Pangan, Energi, dan Manufaktur.</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border-l-4 border-[#d4af37] shadow-sm">
              <h5 className="font-bold text-[#1a4d2e] mb-2">Hilirisasi</h5>
              <p className="text-xs text-slate-500 leading-relaxed">Menciptakan nilai tambah (Added Value) dari bahan baku mentah.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="aspect-square bg-white rounded-3xl p-8 shadow-sm flex flex-col justify-center items-center text-center">
            <ShieldCheck size={48} className="text-[#1a4d2e] mb-4" />
            <h4 className="font-bold">Amanah</h4>
            <p className="text-xs text-slate-500 mt-2">Prinsip Syariah & Tata Kelola yang Baik</p>
          </div>
          <div className="aspect-square bg-[#1a4d2e] rounded-3xl p-8 shadow-sm flex flex-col justify-center items-center text-center text-white">
            <TrendingUp size={48} className="text-[#d4af37] mb-4" />
            <h4 className="font-bold">Bertumbuh</h4>
            <p className="text-xs text-slate-200 mt-2">Skalabilitas Ekonomi Berbasis Komunitas</p>
          </div>
          <div className="aspect-square bg-[#d4af37] rounded-3xl p-8 shadow-sm flex flex-col justify-center items-center text-center text-[#1a4d2e]">
            <Globe size={48} className="mb-4" />
            <h4 className="font-bold">Mandiri</h4>
            <p className="text-xs text-[#1a4d2e]/70 mt-2">Kedaulatan Ekonomi Nasional</p>
          </div>
          <div className="aspect-square bg-slate-100 rounded-3xl p-8 border-2 border-dashed border-slate-300 flex flex-col justify-center items-center text-center grayscale opacity-60">
             <Layers size={48} className="mb-4" />
             <h4 className="font-bold">Ekosistem</h4>
          </div>
        </div>
      </div>
    </div>
  );

  const renderManajemen = () => (
    <div className="animate-in fade-in duration-700 max-w-4xl mx-auto py-10">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-[#1a4d2e]/10 rounded-2xl text-[#1a4d2e]">
          <ShieldCheck size={32} />
        </div>
        <h2 className="text-4xl font-bold text-[#1a4d2e]">{PAGE_NARRATIVES.manajemen.title}</h2>
      </div>
      <p className="text-xl text-slate-600 leading-relaxed mb-10">
        {PAGE_NARRATIVES.manajemen.description}
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {PAGE_NARRATIVES.manajemen.highlights.map((h, i) => (
          <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <CheckCircle2 className="text-[#d4af37] mt-1 shrink-0" size={20} />
            <p className="font-bold text-slate-700">{h}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPortofolio = () => (
    <div className="animate-in fade-in duration-700 py-10">
      <h2 className="text-4xl font-bold text-[#1a4d2e] mb-6">{PAGE_NARRATIVES.portofolio.title}</h2>
      <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-3xl">
        {PAGE_NARRATIVES.portofolio.description}
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PAGE_NARRATIVES.portofolio.projects.map((p, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#1a4d2e] mb-4 group-hover:bg-[#d4af37] group-hover:text-white transition-colors">
              <Rocket size={24} />
            </div>
            <h4 className="font-bold text-[#1a4d2e] text-lg mb-2">{p.name}</h4>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xs px-3 py-1 bg-slate-100 rounded-full font-bold text-slate-500">{p.sector}</span>
              <span className="text-[10px] font-black uppercase text-[#1e7e34]">{p.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMarketplace = () => (
    <div className="animate-in fade-in duration-700 py-10">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-[#1a4d2e] mb-6">{PAGE_NARRATIVES.marketplace.title}</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            {PAGE_NARRATIVES.marketplace.description}
          </p>
          <div className="space-y-4">
            {PAGE_NARRATIVES.marketplace.features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <ShoppingBag className="text-[#d4af37]" size={20} />
                <span className="font-bold text-slate-700">{f}</span>
              </div>
            ))}
          </div>
          <button className="mt-10 px-8 py-4 bg-[#1a4d2e] text-white font-bold rounded-2xl shadow-lg hover:bg-[#0e2b1a] transition-all">
            Kunjungi Marketplace
          </button>
        </div>
        <div className="flex-1 w-full max-w-md">
          <div className="aspect-square bg-white rounded-[40px] border border-slate-100 shadow-2xl p-8 flex flex-col justify-center items-center text-center">
            <div className="w-32 h-32 bg-[#d4af37]/10 rounded-full flex items-center justify-center text-[#d4af37] mb-6">
               <ShoppingBag size={64} />
            </div>
            <h3 className="text-2xl font-bold text-[#1a4d2e]">Sedang Dikembangkan</h3>
            <p className="text-slate-400 mt-2">Platform integrasi niaga digital akan diluncurkan pada Kuartal 3 2024.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSejarah = () => (
    <div className="animate-in fade-in duration-700 py-10">
      <h2 className="text-4xl font-bold text-[#1a4d2e] mb-8 text-center">{PAGE_NARRATIVES.sejarah.title}</h2>
      <div className="bg-[#1a4d2e] text-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden mb-12">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <HistoryIcon size={300} />
        </div>
        <p className="text-xl md:text-2xl leading-relaxed text-center font-medium italic relative z-10">
          "{PAGE_NARRATIVES.sejarah.description}"
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        {PAGE_NARRATIVES.sejarah.milestones.map((m, i) => (
          <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm relative">
             <div className="w-1.5 h-full absolute left-0 top-0 bg-[#d4af37] rounded-l-2xl"></div>
             <p className="font-bold text-[#1a4d2e] leading-snug">{m}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'home': return renderHome();
      case 'manajemen': return renderManajemen();
      case 'portofolio': return renderPortofolio();
      case 'marketplace': return renderMarketplace();
      case 'sejarah': return renderSejarah();
      default: return (
        <div className="py-20 text-center animate-in fade-in duration-500">
          <h2 className="text-3xl font-bold text-[#1a4d2e] mb-4">Halaman {currentPage.toUpperCase()}</h2>
          <p className="text-slate-500">Modul sedang dalam tahap integrasi sistem.</p>
          <button 
            onClick={() => setCurrentPage('home')}
            className="mt-8 text-[#1a4d2e] font-semibold flex items-center justify-center gap-2 mx-auto"
          >
            Kembali ke Beranda <ChevronRight size={16} />
          </button>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="bg-[#1a4d2e] text-white shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="w-10 h-10 bg-[#d4af37] rounded-lg flex items-center justify-center text-[#1a4d2e] font-brand text-2xl font-bold">M</div>
            <h1 className="font-brand text-lg lg:text-xl font-bold tracking-widest text-[#d4af37]">SI MANDIRI</h1>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            {PORTAL_MENU.map(item => (
              <button 
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-semibold transition-colors ${currentPage === item.id ? 'text-[#d4af37]' : 'text-slate-100 hover:text-[#d4af37]'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button 
            onClick={onLoginClick}
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-bold py-2.5 px-6 rounded-lg transition-all"
          >
            Masuk Anggota
          </button>
        </div>
      </header>

      <div className="lg:hidden bg-white border-b overflow-x-auto flex px-6 py-2 gap-4">
        {PORTAL_MENU.map(item => (
          <button 
            key={item.id} 
            onClick={() => setCurrentPage(item.id)}
            className={`flex-shrink-0 text-xs font-bold uppercase px-3 py-1 rounded ${currentPage === item.id ? 'bg-[#1a4d2e] text-white' : 'text-slate-400'}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-6 py-8 gap-8">
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 sticky top-28">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-4">Navigasi Utama</p>
            <div className="flex flex-col gap-1">
              {PORTAL_MENU.map(item => (
                <button 
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${currentPage === item.id ? 'bg-[#1a4d2e]/5 text-[#1a4d2e]' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                  <span className={currentPage === item.id ? 'text-[#d4af37]' : 'text-slate-400'}>{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="mt-8 px-4 py-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
               <p className="text-[10px] font-bold text-[#1a4d2e] uppercase mb-2">Pusat Bantuan</p>
               <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">Butuh bantuan pendaftaran? Hubungi layanan dukungan kami.</p>
               <button className="w-full text-[11px] font-bold text-white bg-[#1a4d2e] py-2 rounded-lg">WhatsApp Support</button>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          {renderContent()}
        </main>
      </div>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h4 className="font-brand text-2xl font-bold text-[#d4af37] mb-6">SI MANDIRI</h4>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed mb-6">
              Platform ekosistem digital Koperasi Syarikat Islam Mandiri untuk membangun kedaulatan ekonomi bangsa melalui hilirisasi dan tata kelola profesional.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6 border-b border-white/10 pb-2 inline-block">Link Penting</h5>
            <ul className="text-sm text-slate-400 space-y-3">
              <li className="hover:text-white transition-colors cursor-pointer">Profil Koperasi</li>
              <li className="hover:text-white transition-colors cursor-pointer">Syarat & Ketentuan</li>
              <li className="hover:text-white transition-colors cursor-pointer">Kebijakan Privasi</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 border-b border-white/10 pb-2 inline-block">Kontak Kami</h5>
            <p className="text-sm text-slate-400 leading-relaxed">
              Gedung Tempo Scan Tower Lt. 32<br />
              Jl. H. R. Rasuna Said, Kuningan Tim., Kecamatan Setiabudi<br />
              Jakarta Selatan, 12950
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-xs text-slate-500">
          &copy; 2024 Koperasi Syarikat Islam Mandiri. Seluruh hak cipta dilindungi undang-undang.
        </div>
      </footer>
    </div>
  );
};

export default Portal;
