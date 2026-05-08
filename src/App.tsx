import React from 'react';
import { 
  ClipboardCheck, 
  MapPin, 
  History, 
  User, 
  Bell, 
  Search,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen pb-20">
      {/* HEADER / TOP BAR */}
      <div className="bg-dokb-green p-4 pt-6 pb-10 text-white rounded-b-[30px] shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2">
              <ShieldCheck size={24} /> SATU DOKB
            </h1>
            <p className="text-xs opacity-90">Sistem Terpadu Kalsel</p>
          </div>
          <button className="bg-white/20 p-2 rounded-full relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
        </div>

        {/* SEARCH BAR PALSU (BIAR KEREN) */}
        <div className="bg-white rounded-xl p-3 flex items-center gap-3 text-gray-400 shadow-inner">
          <Search size={18} />
          <span className="text-sm italic">Cek tarif SK Gubernur...</span>
        </div>
      </div>

      {/* QUICK ACTIONS / MAIN MENU */}
      <div className="px-4 -mt-6">
        <div className="bg-white rounded-2xl p-6 shadow-xl grid grid-cols-4 gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="bg-green-100 p-3 rounded-2xl text-dokb-green">
              <ClipboardCheck size={24} />
            </div>
            <span className="text-[10px] font-bold text-gray-600 text-center uppercase">Audit Tarif</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-blue-100 p-3 rounded-2xl text-blue-600">
              <MapPin size={24} />
            </div>
            <span className="text-[10px] font-bold text-gray-600 text-center uppercase">Rute Trayek</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
              <History size={24} />
            </div>
            <span className="text-[10px] font-bold text-gray-600 text-center uppercase">Riwayat</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-purple-100 p-3 rounded-2xl text-purple-600">
              <User size={24} />
            </div>
            <span className="text-[10px] font-bold text-gray-600 text-center uppercase">Driver</span>
          </div>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="px-4 mt-8">
        <h2 className="font-bold text-gray-800 mb-4 px-1">Informasi Terkini</h2>
        <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="bg-red-50 p-3 rounded-xl text-red-500">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800 tracking-tight">Update SK Gubernur 2026</p>
              <p className="text-[11px] text-gray-500">Berlaku per 1 Mei 2026</p>
            </div>
          </div>
          <ChevronRight size={18} className="text-gray-300" />
        </div>
      </div>

      {/* BOTTOM NAVIGATION BARS */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div className="flex flex-col items-center text-dokb-green">
          <ClipboardCheck size={20} />
          <span className="text-[10px] mt-1 font-medium">Home</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <History size={20} />
          <span className="text-[10px] mt-1 font-medium">Aktivitas</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <User size={20} />
          <span className="text-[10px] mt-1 font-medium">Profil</span>
        </div>
      </div>
    </div>
  );
}

export default App;
