import React, { useState, useEffect } from 'react';

const svgArrow = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
const svgChevron = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>;
const svgPlay = <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>;
const svgClose = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsVideoOpen(false);
    };
    if (isVideoOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isVideoOpen]);
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Dynamic Background Image with Parallax & Light Overlays */}
      <div className="absolute inset-0 z-0 bg-slate-900">
         <img 
            src="/img/sliders/layer/CollegeBirdView.jpeg" 
            alt="GCEE Campus" 
            className="w-full h-full object-cover opacity-30 mix-blend-screen mix-blend-luminosity animate-[kenburns_20s_ease-in-out_infinite_alternate]"
         />
         {/* Gradients to blend the image into the light theme UI seamlessly */}
         <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-slate-50"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-400/20 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center mt-12">
        <div className="animate-fade-up inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-slate-700 tracking-widest uppercase mb-8 glass-panel border border-slate-200/60 shadow-sm bg-white/60 backdrop-blur-md" style={{ animationDelay: '0.2s' }}>
          <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
          Erode's Premier Technical Institution
        </div>

        <h1 className="animate-fade-up font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-6 max-w-5xl leading-[1.1]" style={{ animationDelay: '0.4s' }}>
          Government College of <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 via-gold-400 to-amber-600">Engineering</span>, Erode.
        </h1>

        <p className="animate-fade-up text-lg md:text-xl text-slate-800 mb-12 max-w-2xl font-bold leading-relaxed bg-white/40 px-6 py-3 rounded-2xl backdrop-blur-sm border border-white/50" style={{ animationDelay: '0.6s' }}>
          ( Formerly IRTT ) — Innovating minds, advancing technology, and shaping the leaders of tomorrow since 1984.
        </p>

        <div className="animate-fade-up flex flex-col sm:flex-row items-center gap-6" style={{ animationDelay: '0.8s' }}>
          <button onClick={() => setIsVideoOpen(true)} className="relative group overflow-hidden px-8 py-4 rounded-xl text-white font-bold tracking-wide uppercase shadow-xl shadow-gold-500/20 bg-gradient-to-r from-gold-400 to-gold-500 transition-all hover:-translate-y-1 flex items-center gap-2">
            <span className="relative z-10 flex items-center gap-2">{svgPlay} Explore GCEE</span>
          </button>
          
          <a href="#departments" className="relative group overflow-hidden px-8 py-4 rounded-xl text-slate-900 font-bold tracking-wide uppercase shadow-xl transition-all hover:-translate-y-1 border border-slate-300 hover:border-gold-400 bg-white/70 hover:bg-white">
            <span className="relative z-10 flex items-center gap-2">Explore Programmes <span className="group-hover:translate-x-1 transition-transform">{svgArrow}</span></span>
          </a>
          
          <a href="#about" className="px-8 py-4 rounded-xl text-slate-700 font-bold tracking-wide uppercase hover:bg-slate-200/50 bg-white/50 backdrop-blur-md border border-slate-200 shadow-sm transition-all hover:text-gold-600">
            Learn More
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-10 text-slate-400">
        {svgChevron}
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            <video 
              src="/gcee_video.mp4" 
              controls 
              autoPlay
              className="w-full h-full"
            />
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gold-400 transition-colors"
            >
              {svgClose}
            </button>
          </div>
        </div>
      )}
      
    </section>
  );
}