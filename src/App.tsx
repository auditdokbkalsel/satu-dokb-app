import React from 'react';
import { 
  ClipboardCheck, 
  MapPin, 
  History, 
  User, 
  Bell, 
  Search,
  ChevronRight,
  ShieldCheck,
  LayoutDashboard,
  Flame
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] pb-28 text-slate-800 font-sans">
      {/* HEADER - SLATE DARK KALSEL */}
      <div className="bg-[#334155] p-5 pt-8 pb-16 text-white rounded-b-[45px] shadow-2xl relative">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#FACC15] p-2 rounded-2xl shadow-[0_4px_0_0_#ca8a04]">
               <ShieldCheck size={24} className="text-[#334155]" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tighter text-[#FACC15] leading-none">
                SATU DOKB
              </h1>
              <p className="text-[10px] font-bold opacity-70 uppercase tracking-[0.2em] mt-1">Kalsel Unggul</p>
            </div>
          </div>
          <button className="bg-white/10 p-2.5 rounded-2xl border border-white/10 active:scale-90 transition-all shadow-inner">
            <Bell size={20} className="text-[#FACC15]" />
          </button>
        </div>

        {/* SEARCH BAR 3D */}
        <div className="bg-white rounded-2xl p-4 flex items-center gap-3 text-gray-400 shadow-[0_10px_25px_rgba(0,0,0,0.2)] border-b-4 border-gray-200">
          <Search size={18} className="text-[#FACC15]" />
          <span className="text-sm font-medium italic">Cek Rute & Tarif SK...</span>
        </div>
      </div>

      {/* GRID MENU 3D - INSPIRASI TURBO */}
      <div className="px-5 -mt-10">
        <div className="grid grid-cols-2 gap-4">
          
          {/* Audit Tarif - Hijau Pastel */}
          <button className="bg-[#d1fae5] rounded-[32px] p-5 shadow-[0_8px_0_0_#a7f3d0] active:translate-y-1 active:shadow-none transition-all flex flex-col items-center text-center border border-white/50">
            <div className="bg-white p-3 rounded-2xl shadow-sm mb-3">
              <ClipboardCheck size={32} className="text-[#059669]" />
            </div>
            <span className="text-sm font-black uppercase text-[#065f46]">Audit Tarif</span>
            <span className="text-[9px] font-bold text-[#065f46]/70 mt-1 uppercase">Verifikasi Lapangan</span>
          </button>

          {/* Rute Trayek - Merah/Coral Pastel */}
          <button className="bg-[#fee2e2] rounded-[32px] p-5 shadow-[0_8px_0_0_#fecaca] active:translate-y-1 active:shadow-none transition-all flex flex-col items-center text-center border border-white/50">
            <div className="bg-white p-3 rounded-2xl shadow-sm mb-3">
              <MapPin size={32} className="text-[#dc2626]" />
            </div>
            <span className="text-sm font-black uppercase text-[#991b1b]">Rute Trayek</span>
            <span className="text-[9px] font-bold text-[#991b1b]/70 mt-1 uppercase">Cek Jadwal AKT</span>
          </button>

          {/* Riwayat - Biru Pastel */}
          <button className="bg-[#e0f2fe] rounded-[32px] p-5 shadow-[0_8px_0_0_#bae6fd] active:translate-y-1 active:shadow-none transition-all flex flex-col items-center text-center border border-white/50">
            <div className="bg-white p-3 rounded-2xl shadow-sm mb-3 relative">
               <div className="absolute -top-1 -right-1 bg-red-500 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
               </div>
              <History size={32} className="text-[#0284c7]" />
            </div>
            <span className="text-sm font-black uppercase text-[#075985]">Riwayat</span>
            <span className="text-[9px] font-bold text-[#075985]/70 mt-1 uppercase">Log Laporan</span>
          </button>

          {/* Data Driver - Kuning Pastel */}
          <button className="bg-[#fef9c3] rounded-[32px] p-5 shadow-[0_8px_0_0_#fef08a] active:translate-y-1 active:shadow-none transition-all flex flex-col items-center text-center border border-white/50">
            <div className="bg-white p-3 rounded-2xl shadow-sm mb-3">
              <Flame size={32} className="text-[#ca8a04]" />
            </div>
            <span className="text-sm font-black uppercase text-[#854d0e]">Driver</span>
            <span className="text-[9px] font-bold text-[#854d0e]/70 mt-1 uppercase">Sertifikasi</span>
          </button>

        </div>
      </div>

      {/* INFORMASI BANUA SECTION */}
      <div className="px-6 mt-10">
        <div className="flex justify-between items-center mb-4 px-1">
          <h2 className="font-black text-sm uppercase tracking-wider text-slate-500">Informasi Banua</h2>
          <span className="text-[10px] font-black text-[#ca8a04] uppercase">Lihat Semua</span>
        </div>
        
        <div className="bg-[#334155] rounded-[30px] p-1 shadow-xl active:scale-95 transition-transform">
           <div className="bg-white rounded-[26px] p-4 flex items-center justify-between border-b-4 border-gray-200">
            <div className="flex items-center gap-4">
              <div className="bg-[#FACC15] p-2.5 rounded-2xl shadow-[0_3px_0_0_#ca8a04]">
                <ShieldCheck size={20} className="text-[#334155]" />
              </div>
              <div>
                <p className="text-xs font-black text-slate-800">Update SK Gubernur 2026</p>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">Berlaku Per 1 Mei 2026</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-300" />
          </div>
        </div>
      </div>

      {/* FLOATING BOTTOM NAV */}
      <div className="fixed bottom-6 left-6 right-6 z-50">
        <div className="bg-[#334155]/95 backdrop-blur-lg rounded-[28px] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex justify-around items-center border border-white/10">
          <div className="flex flex-col items-center text-[#FACC15]">
            <div className="bg-white/10 p-2 rounded-xl mb-1">
              <LayoutDashboard size={22} />
            </div>
            <span className="text-[9px] font-black uppercase tracking-tighter">Home</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <History size={22} />
            <span className="text-[9px] mt-1 font-bold uppercase tracking-tighter">Aktivitas</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <User size={22} />
            <span className="text-[9px] mt-1 font-bold uppercase tracking-tighter">Profil</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
