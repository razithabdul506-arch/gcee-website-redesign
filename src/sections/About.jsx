import React from 'react';

const svgGrad = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;
const svgMicro = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18h8M3 22h18"/><path d="M14 22a7 7 0 100-14h-1"/><path d="M9 14h2M9 12a2 2 0 01-2-2V6h6v4a2 2 0 01-2 2Z"/></svg>;
const svgFac = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20a2 2 0 002 2h16a2 2 0 002-2V8l-7 5V8l-7 5V4a2 2 0 00-2-2H4a2 2 0 00-2 2Z"/></svg>;
const svgBrief = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>;
const svgGradLg = <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;

const features = [
  { icon: svgGrad, title: "Anna University Affiliated" },
  { icon: svgMicro, title: "200 Acre Campus" },
  { icon: svgFac, title: "Industry-Funded R&D" },
  { icon: svgBrief, title: "Active IIP & Alumni Network" }
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden bg-white">
      <div className="absolute w-[600px] h-[600px] bg-slate-100 rounded-full blur-[120px] -top-60 -right-40 border border-slate-200"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-gradient-to-r from-gold-400 to-gold-600"></div>
              <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">About the Institution</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-[1.15] mb-8 tracking-tight">
              Government College of Engineering, <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-700">Erode</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-6 font-medium">
              Established in 1984 as an Automobile Research Oriented Engineering College under IRTT by Tamil Nadu State Transport Corporation. On 26 August 2021, the institution was taken under the direct governance of DoTE and subsequently renamed as <b>Government College of Engineering, Erode (Formerly IRTT)</b>.
            </p>
            
            <p className="text-slate-500 text-base leading-relaxed mb-10">
              Located in a sprawling lush green campus of 200 acres between Bhavani and Chithode, the campus provides a congenial atmosphere for Technical Education with state-of-the-art facilities across 8 UG and 2 PG programmes.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:bg-slate-50 transition-colors group border border-slate-200 shadow-sm hover:shadow-md">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-gold-500 group-hover:scale-110 shadow-sm transition-transform">
                    {feature.icon}
                  </div>
                  <span className="text-slate-700 text-sm font-bold">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-slate-200 group cursor-pointer bg-slate-900 flex items-center justify-center">
               
               <img src="/img/sliders/layer/NammaGCEE2.jpeg" alt="GCEE Campus Overview" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out opacity-90" />
               <div className="absolute inset-0 bg-hero-grid bg-[length:30px_30px] opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500"></div>

               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/10 opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
               
               <div className="text-center z-10 px-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                 <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                    {svgGradLg}
                 </div>
                 <h3 className="text-2xl font-display font-bold text-white mb-2 shadow-sm drop-shadow-md">Campus Overview</h3>
               </div>

               <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 text-slate-900 text-sm font-bold shadow-lg">
                    GCE Erode Campus
                  </div>
               </div>
            </div>

            <div className="absolute -bottom-8 -right-8 p-6 rounded-2xl bg-white border border-slate-200 shadow-xl z-20 hidden md:block animate-[float_5s_ease-in-out_infinite]">
              <div className="text-gold-500 font-display text-4xl font-bold mb-1">40+</div>
              <div className="text-slate-600 text-sm font-bold">Years of Excellence</div>
            </div>

            <div className="absolute -top-6 -left-6 p-5 rounded-2xl bg-white border border-slate-200 shadow-xl z-20 hidden sm:block animate-[float_6s_ease-in-out_infinite_1s]">
              <div className="text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">Accreditations</div>
              <div className="flex gap-2">
                <span className="px-3 py-1.5 bg-gold-50 border border-gold-200 text-gold-600 text-xs rounded-lg font-bold">AICTE</span>
                <span className="px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-600 text-xs rounded-lg font-bold">DoTE</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}