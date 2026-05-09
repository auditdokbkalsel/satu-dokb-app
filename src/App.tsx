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
    <div className="min-h-screen bg-gray-50 pb-24 text-slate-800 font-sans">
      {/* HEADER - SLATE GREY */}
      <div className="bg-dokb-grey p-4 pt-6 pb-12 text-white rounded-b-[35px] shadow-xl relative">
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-2">
            <div className="bg-dokb-yellow p-1.5 rounded-lg shadow-[0_3px_0_0_#ca8a04]">
               <ShieldCheck size={20} className="text-dokb-grey" />
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight text-dokb-yellow leading-none">
                SATU DOKB
              </h1>
              <p className="text-[9px] font-bold opacity-70 uppercase tracking-[0.2em]">Kalsel Unggul</p>
            </div>
          </div>
          <button className="bg-white/10 p-2 rounded-xl border border-white/10 active:scale-90 transition-all">
            <Bell size={18} className="text-dokb-yellow" />
          </button>
        </div>

        {/* SEARCH BAR */}
        <div className="bg-white rounded-xl p-3 flex items-center gap-3 text-gray-400 shadow-lg border-b-2 border-gray-200">
          <Search size={16} className="text-dokb-yellow" />
          <span className="text-xs font-medium italic">Cek Rute & Tarif...</span>
        </div>
      </div>

      {/* QUICK ACTIONS - KOTAK LEBIH KECIL & RAPI */}
      <div className="px-5 -mt-6">
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-white rounded-2xl p-4 shadow-sm border-b-4 border-gray-200 active:translate-y-1 active:border-b-0 transition-all flex flex-col items-center gap-2">
            <div className="bg-yellow-50 p-3 rounded-xl text-yellow-600">
              <ClipboardCheck size={24} />
            </div>
            <span className="text-[10px] font-black uppercase">Audit Tarif</span>
          </button>

          <button className="bg-white rounded-2xl p-4 shadow-sm border-b-4 border-gray-200 active:translate-y-1 active:border-b-0 transition-all flex flex-col items-center gap-2">
            <div className="bg-slate-50 p-3 rounded-xl text-slate-500">
              <MapPin size={24} />
            </div>
            <span className="text-[10px] font-black uppercase">Rute Trayek</span>
          </button>

          <button className="bg-white rounded-2xl p-4 shadow-sm border-b-4 border-gray-200 active:translate-y-1 active:border-b-0 transition-all flex flex-col items-center gap-2">
            <div className="bg-slate-50 p-3 rounded-xl text-slate-500">
              <History size={24} />
            </div>
            <span className="text-[10px] font-black uppercase">Riwayat</span>
          </button>

          <button className="bg-white rounded-2xl p-4 shadow-sm border-b-4 border-gray-200 active:translate-y-1 active:border-b-0 transition-all flex flex-col items-center gap-2">
            <div className="bg-slate-50 p-3 rounded-xl text-slate-500">
              <User size={24} />
            </div>
            <span className="text-[10px] font-black uppercase">Data Driver</span>
          </button>
        </div>
      </div>

      {/* INFO BANUA */}
      <div className="px-6 mt-8">
        <div className="flex justify-between items-center mb-3 px-1">
          <h2 className="font-black text-sm uppercase tracking-tight">Informasi Banua</h2>
          <span className="text-[10px] font-bold text-yellow-600 underline">Lihat Semua</span>
        </div>
        
        <div className="bg-white rounded-2xl p-4 flex items-center justify-between border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 p-2 rounded-lg shadow-[0_2px_0_0_#ca8a04]">
              <ShieldCheck size={18} className="text-dokb-grey" />
            </div>
            <div>
              <p className="text-xs font-black text-gray-800">Update SK Gubernur 2026</p>
              <p className="text-[9px] font-bold text-gray-400 uppercase">Per 1 Mei 2026</p>
            </div>
          </div>
          <ChevronRight size={16} className="text-gray-300" />
        </div>
      </div>

      {/* BOTTOM NAV - FLOATING RAPI */}
      <div className="fixed bottom-4 left-6 right-6">
        <div className="bg-dokb-grey/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl flex justify-around items-center border border-white/10">
          <div className="flex flex-col items-center text-dokb-yellow">
            <LayoutDashboard size={20} />
            <span className="text-[9px] mt-1 font-bold uppercase">Home</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <History size={20} />
            <span className="text-[9px] mt-1 font-bold uppercase">Aktivitas</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <User size={20} />
            <span className="text-[9px] mt-1 font-bold uppercase">Profil</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
