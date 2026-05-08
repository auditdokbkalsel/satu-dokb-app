import React from 'react';

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      fontFamily: 'sans-serif',
      backgroundColor: '#f3f4f6',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ color: '#00b14f' }}>SATU DOKB</h1>
      <p style={{ fontSize: '1.2rem', color: '#374151' }}>
        Sistem Administrasi & Transportasi Unggul
      </p>
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '12px', 
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
      }}>
        <p>Sedang disiapkan oleh Pak Sekjend Jani 🫡</p>
        <small>Monitoring Tarif SK Gubernur Kalsel</small>
      </div>
    </div>
  );
}

export default App;
