import React from 'react';

const svgArrow = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
const svgArrowSmall = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
const svgCal = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;

const newsItems = [
  { id: 1, title: "கலைக்குயில் தமிழ்ப்பேரவை 2025", desc: "Annual Tamil cultural event celebrating language, literature and performing arts. Participation from students across all departments.", tag: "Cultural", tagColor: "text-amber-600 bg-amber-50 border-amber-200", date: "May 16, 2025" },
  { id: 2, title: "2000 Batch Silver Jubilee Alumni Meet", desc: "Alumni reunite after 25 years with contributions exceeding ₹14.97 lakh to campus infrastructure.", tag: "Alumni", tagColor: "text-blue-600 bg-blue-50 border-blue-200", date: "Jul 12, 2025" },
  { id: 3, title: "Department Technical Symposia", desc: "Each department's student association organises technical symposia, seminars, and conferences. Don't miss out on tech talks.", tag: "Symposia", tagColor: "text-emerald-600 bg-emerald-50 border-emerald-200", date: "Annual Event" },
];

export default function News() {
  return (
    <section id="news" className="py-24 lg:py-32 relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
       <div className="absolute w-[800px] h-[800px] bg-slate-200/50 rounded-full blur-[150px] bottom-0 right-0 pointer-events-none"></div>

       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 animate-fade-in">
         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
           <div className="max-w-2xl">
             <div className="flex items-center gap-4 mb-4">
               <div className="w-12 h-[2px] bg-gradient-to-r from-gold-400 to-transparent"></div>
               <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">Latest Updates</span>
             </div>
             <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
               Campus Events & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-700">News</span>
             </h2>
           </div>
           
           <a href="#news" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-700 font-bold hover:bg-slate-50 hover:text-gold-600 transition-all group">
             View all <span className="group-hover:translate-x-1 transition-transform">{svgArrow}</span>
           </a>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
           {newsItems.map((news) => (
             <div key={news.id} className="group cursor-pointer flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
               <div className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-6 bg-slate-100 border border-slate-200 group-hover:border-gold-400 transitions-colors shadow-sm">
                  <div className="absolute inset-0 bg-hero-grid bg-[length:20px_20px] opacity-[0.03] group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent z-10"></div>
                  
                  <div className={`absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm ${news.tagColor}`}>
                    {news.tag}
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center z-0">
                     <span className="text-slate-900/5 font-display font-bold text-4xl uppercase select-none rotate-[-15deg]">{news.tag}</span>
                  </div>
               </div>

               <div className="flex flex-col flex-grow px-2">
                 <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider mb-4">
                   <span className="text-gold-500">{svgCal}</span> {news.date}
                 </div>
                 <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-gold-600 transition-colors line-clamp-2">
                   {news.title}
                 </h3>
                 <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                   {news.desc}
                 </p>
                 <div className="mt-auto flex items-center gap-2 text-gold-600 text-sm font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                   Read full story {svgArrowSmall}
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
    </section>
  );
}
