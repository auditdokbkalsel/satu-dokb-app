import React, { useState } from 'react';
import { 
  ClipboardCheck, MapPin, History, User, Bell, Search,
  ChevronRight, ShieldCheck, LayoutDashboard, Flame, ArrowLeft, Upload
} from 'lucide-react';

function App() {
  const [page, setPage] = useState('home');

  // HALAMAN AUDIT TARIF
  if (page === 'audit') {
    return (
      <div className="min-h-screen bg-[#334155] text-white p-6 pb-20">
        <button onClick={() => setPage('home')} className="flex items-center gap-2 text-[#FACC15] mb-6 font-bold">
          <ArrowLeft size={20} /> Kembali ke Beranda
        </button>
        
        <h2 className="text-2xl font-black text-[#FACC15] mb-2">SISTEM AUDIT DOKB</h2>
        <p className="text-xs opacity-70 mb-8 tracking-widest uppercase font-bold">Input Temuan Lapangan</p>

        <div className="space-y-5">
          <div>
            <label className="text-[10px] font-black uppercase text-[#FACC15] ml-1">Tanggal Order</label>
            <input type="date" className="w-full bg-slate-800 border-b-4 border-slate-900 p-4 rounded-2xl mt-1 outline-none focus:border-[#FACC15] transition-all" />
          </div>

          <div>
            <label className="text-[10px] font-black uppercase text-[#FACC15] ml-1">Pilih Aplikator</label>
            <select className="w-full bg-slate-800 border-b-4 border-slate-900 p-4 rounded-2xl mt-1 outline-none appearance-none">
              <option>Grab</option>
              <option>Gojek</option>
              <option>Maxim</option>
            </select>
          </div>

          <div>
            <label className="text-[10px] font-black uppercase text-[#FACC15] ml-1">Jarak (KM)</label>
            <input type="number" placeholder="Contoh: 5.2" className="w-full bg-slate-800 border-b-4 border-slate-900 p-4 rounded-2xl mt-1 outline-none font-bold" />
          </div>

          <div className="bg-[#1e293b] p-6 rounded-[30px] border-l-8 border-[#FACC15] shadow-xl">
            <p className="text-[10px] font-bold text-[#FACC15] uppercase italic">Tarif Seharusnya (SK GUB)</p>
            <p className="text-3xl font-black mt-1 text-white leading-none tracking-tighter">Rp 0</p>
          </div>

          <div>
            <label className="text-[10px] font-black uppercase text-[#FACC15] ml-1">Unggah Bukti Screenshot</label>
            <div className="w-full border-2 border-dashed border-slate-600 rounded-2xl p-8 flex flex-col items-center gap-2 mt-1 bg-slate-800/50">
              <Upload size={24} className="text-[#FACC15]" />
              <span className="text-[10px] font-bold opacity-50 uppercase">Klik untuk Upload</span>
            </div>
          </div>

          <button className="w-full bg-[#FACC15] text-[#334155] p-5 rounded-2xl font-black uppercase shadow-[0_8px_0_0_#ca8a04] active:translate-y-1 active:shadow-none transition-all mt-4">
            Kirim Data Audit
          </button>
        </div>
      </div>
    );
  }

  // HALAMAN DASHBOARD UTAMA
  return (
    <div className="min-h-screen bg-[#f3f4f6] pb-28 text-slate-800">
      {/* HEADER GAGAH - Diperlebar agar tidak nabrak */}
      <div className="bg-[#334155] p-6 pt-10 pb-20 text-white rounded-b-[50px] shadow-2xl relative">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-[#FACC15] p-2.5 rounded-2xl shadow-[0_4px_0_0_#ca8a04]">
               <ShieldCheck size={28} className="text-[#334155]" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tighter text-[#FACC15] leading-none uppercase">SATU DOKB</h1>
              <p className="text-[10px] font-bold opacity-70 uppercase tracking-[0.2em] mt-1.5">Kalsel Unggul</p>
            </div>
          </div>
          <div className="bg-white/10 p-2.5 rounded-2xl border border-white/10 shadow-inner relative">
            <Bell size={22} className="text-[#FACC15]" />
            <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-slate-700"></div>
          </div>
        </div>

        {/* SEARCH BAR 3D */}
        <div className="bg-white rounded-[20px] p-4 flex items-center gap-3 text-gray-400 shadow-[0_15px_30px_rgba(0,0,0,0.3)] border-b-4 border-gray-200">
          <Search size={20} className="text-[#FACC15]" />
          <span className="text-sm font-bold italic opacity-60">Cek Rute & Tarif SK Gubernur...</span>
        </div>
      </div>

      {/* GRID MENU 3D - JARAK DISESUAIKAN */}
      <div className="px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-2 gap-5">
          <button onClick={() => setPage('audit')} className="bg-[#d1fae5] rounded-[35px] p-6 shadow-[0_10px_0_0_#a7f3d0] active:translate-y-1 active:shadow-none transition-all flex flex-col items-center text-center border border-white">
            <div className="bg-white p-4 rounded-2xl shadow-sm mb-3">
              <ClipboardCheck size={32} className="text-[#059669]" />
            </div>
            <span className="text-sm font-black uppercase text-[#065f46]">Audit Tarif</span>
            <span className="text-[9px] font-bold text-[#065f46]/60 mt-1 uppercase tracking-tighter">Verifikasi Lapangan</span>
          </button>

          <button className="bg-[#fee2e2] rounded-[35px] p-6 shadow-[0_10px_0_0_#fecaca] active:translate-y-1 active:shadow-none transition-all flex flex-col items-center text-center border border-white">
            <div className="bg-white p-4 rounded-2xl shadow-sm mb-3 text-[#dc2626]">
              <MapPin size={32} />
            </div>
            <span className="text-sm font-black uppercase text-[#991b1b]">Rute Trayek</span>
            <span className="text-[9px] font-bold text-[#991b1b]/60 mt-1 uppercase tracking-tighter">Cek Jadwal AKT</span>
          </button>

          <button className="bg-[#e0f2fe] rounded-[35px] p-6 shadow-[0_10px_0_0_#bae6fd] active:translate-y-1 active:shadow-none transition-all flex flex-col items-center text-center border border-white">
            <div className="bg-white p-4 rounded-2xl shadow-sm mb-3 text-[#0284c7]">
              <History size={32} />
            </div>
            <span className="text-sm font-black uppercase text-[#075985]">Riwayat</span>
            <span className="text-[9px] font-bold text-[#075985]/60 mt-1 uppercase tracking-tighter">Log Perjalanan</span>
          </button>

          <button className="bg-[#fef9c3] rounded-[35px] p-6 shadow-[0_10px_0_0_#fef08a] active:translate-y-1 active:shadow-none transition-all flex flex-col items-center text-center border border-white">
            <div className="bg-white p-4 rounded-2xl shadow-sm mb-3 text-[#ca8a04]">
              <Flame size={32} />
            </div>
            <span className="text-sm font-black uppercase text-[#854d0e]">Data Driver</span>
            <span className="text-[9px] font-bold text-[#854d0e]/60 mt-1 uppercase tracking-tighter">Sertifikasi</span>
          </button>
        </div>
      </div>

      {/* INFO BANUA */}
      <div className="px-7 mt-12">
        <div className="flex justify-between items-end mb-4 px-1">
          <h2 className="font-black text-sm uppercase tracking-widest text-slate-400 leading-none">Berita Banua</h2>
          <span className="text-[10px] font-black text-[#ca8a04] uppercase border-b border-[#ca8a04]">Lihat Semua</span>
        </div>
        <div className="bg-[#334155] rounded-[35px] p-1.5 shadow-2xl active:scale-95 transition-all">
           <div className="bg-white rounded-[30px] p-5 flex items-center justify-between border-b-4 border-gray-100">
            <div className="flex items-center gap-4">
              <div className="bg-[#FACC15] p-3 rounded-2xl shadow-[0_4px_0_0_#ca8a04]">
                <ShieldCheck size={24} className="text-[#334155]" />
              </div>
              <div>
                <p className="text-sm font-black text-slate-800 leading-tight tracking-tight">Update SK Gubernur 2026</p>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter mt-1">Berlaku Per 1 Mei 2026</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-300" />
          </div>
        </div>
      </div>

      {/* NAVIGASI BAWAH */}
      <div className="fixed bottom-6 left-6 right-6 z-50">
        <div className="bg-[#334155]/95 backdrop-blur-xl rounded-[30px] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex justify-around items-center border border-white/10">
          <div className="flex flex-col items-center text-[#FACC15] scale-110">
            <LayoutDashboard size={24} />
            <span className="text-[9px] mt-1 font-black uppercase tracking-tighter">Home</span>
          </div>
          <div className="flex flex-col items-center text-gray-400 opacity-60">
            <History size={24} />
            <span className="text-[9px] mt-1 font-bold uppercase">Laporan</span>
          </div>
          <div className="flex flex-col items-center text-gray-400 opacity-60">
            <User size={24} />
            <span className="text-[9px] mt-1 font-bold uppercase">Profil</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
      
