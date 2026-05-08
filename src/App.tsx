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
  LayoutDashboard
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 pb-24 text-dokb-grey">
      {/* HEADER - DARK GREY KALSEL */}
      <div className="bg-dokb-grey p-5 pt-8 pb-14 text-white rounded-b-[40px] shadow-2xl relative">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-dokb-yellow p-2 rounded-xl shadow-[0_4px_0_0_#ca8a04]">
               <ShieldCheck size={28} className="text-dokb-grey" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tighter text-dokb-yellow">
                SATU DOKB
              </h1>
              <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Kalsel Unggul</p>
            </div>
          </div>
          <button className="bg-white/10 p-2 rounded-2xl border border-white/20 active:scale-95 transition-all">
            <Bell size={22} className="text-dokb-yellow" />
          </button>
        </div>

        {/* SEARCH BAR TIMBUL */}
        <div className="bg-white rounded-2xl p-4 flex items-center gap-3 text-gray-400 shadow-[0_8px_20px_rgba(0,0,0,0.3)] border-b-4 border-gray-200">
          <Search size={20} className="text-dokb-yellow" />
          <span className="text-sm font-medium">Cek Rute & Tarif SK Gubernur...</span>
        </div>
      </div>

      {/* QUICK ACTIONS - TOMBOL TIMBUL */}
      <div className="px-5 -mt-8">
        <div className="grid grid-cols-2 gap-5">
          {/* Menu Audit */}
          <button className="bg-white rounded-3xl p-5 shadow-[0_10px_0_0_rgba(0,0,0,0.05)] border-b-4 border-gray-200 active:translate-y-1 active:border-b-0 transition-all flex flex-col items-center gap-3">
            <div className="bg-yellow-100 p-4 rounded-2xl text-yellow-600">
              <ClipboardCheck size={32} />
            </div>
            <span className="text-xs font-black uppercase tracking-tight">Audit Tarif</span>
          </button>

          {/* Menu Rute */}
          <button className="bg-white rounded-3xl p-5 shadow-[0_10px_0_0_rgba(0,0,0,0.05)] border-b-4 border-gray-200 active:translate-y-1 active:border-b-0 transition-all flex flex-col items-center gap-3">
            <div className="bg-gray-100 p-4 rounded-2xl text-gray-600">
              <MapPin size={32} />
            </div>
            <span className="text-xs font-black uppercase tracking-tight">Rute Trayek</span>
          </button>

          {/* Menu Riwayat */}
          <button className="bg-white rounded-3xl p-5 shadow-[0_10px_0_0_rgba(0,0,0,0.05)] border-b-4 border-gray-200 active:translate-y-1 active:border-b-0 transition-all flex flex-col items-center gap-3">
            <div className="bg-gray-100 p-4 rounded-2xl text-gray-600">
              <History size={32} />
            </div>
            <span className="text-xs font-black uppercase tracking-tight">Riwayat</span>
          </button>

          {/* Menu Driver */}
          <button className="bg-white rounded-3xl p-5 shadow-[0_10px_0_0_rgba(0,0,0,0.05)] border-b-4 border-gray-200 active:translate-y-1 active:border-b-0 transition-all flex flex-col items-center gap-3">
            <div className="bg-gray-100 p-4 rounded-2xl text-gray-600">
              <User size={32} />
            </div>
            <span className="text-xs font-black uppercase tracking-tight">Data Driver</span>
          </button>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="px-6 mt-10">
        <div className="flex justify-between items-end mb-4">
          <h2 className="font-black text-lg uppercase tracking-tighter">Informasi Banua</h2>
          <span className="text-xs font-bold text-yellow-600">Lihat Semua</span>
        </div>
        
        <div className="bg-dokb-grey rounded-3xl p-1 shadow-xl">
           <div className="bg-white rounded-[22px] p-5 flex items-center justify-between border-b-4 border-gray-200">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-400 p-3 rounded-2xl shadow-[0_4px_0_0_#ca8a04]">
                <ShieldCheck size={24} className="text-dokb-grey" />
              </div>
              <div>
                <p className="text-sm font-black text-gray-800">Update SK Gubernur 2026</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Per 1 Mei 2026</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-300" />
          </div>
        </div>
      </div>

      {/* BOTTOM NAV - TIMBUL */}
      <div className="fixed bottom-6 left-6 right-6">
        <div className="bg-dokb-grey rounded-3xl p-4 shadow-[0_15px_30px_rgba(0,0,0,0.3)] flex justify-around items-center border-t border-white/10">
          <div className="flex flex-col items-center text-dokb-yellow transform scale-110">
            <LayoutDashboard size={24} />
            <span className="text-[10px] mt-1 font-black uppercase">Home</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <History size={24} />
            <span className="text-[10px] mt-1 font-bold uppercase">Aktivitas</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <User size={24} />
            <span className="text-[10px] mt-1 font-bold uppercase">Profil</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
