import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col pt-20 relative overflow-hidden bg-elite-dark text-white">
      {/* Background Ambient Glows */}
      <div className="fixed top-[-100px] right-[-100px] w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-150px] left-[-100px] w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
