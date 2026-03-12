import React from 'react';
import { useNavigate } from 'react-router-dom';

const svgMonitor = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
const svgGlobe = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>;
const svgCog = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="4"/></svg>;
const svgConst = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="14" width="16" height="8" rx="2" ry="2"/><rect x="4" y="6" width="16" height="8" rx="2" ry="2"/><path d="M12 2v4"/></svg>;
const svgCpu = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><path d="M9 9h6v6H9z"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>;
const svgZap = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const svgCar = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>;
const svgChart = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>;
const svgArrowRight = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;

const depts = [
  { id: 1, name: "Civil Engineering", icon: svgConst, color: "from-emerald-500 to-green-600", desc: "Structural design, construction management, and environmental engineering.", degrees: "B.E. | M.E.", bgImg: "/img/main/irtt_gal32.jpg", path: "/departments/civil" },
  { id: 2, name: "Automobile Engineering", icon: svgCar, color: "from-red-500 to-rose-600", desc: "GCEE's founding discipline. Design & development of vehicles. AVL Combustion Analysis lab.", degrees: "B.E.", bgImg: "/img/main/irtt_gal4.jpg", path: "/departments/automobile" },
  { id: 3, name: "Mechanical Engineering", icon: svgCog, color: "from-amber-500 to-orange-600", desc: "DST & DRDO funded research. Modernised Engine Testing & CNC facilities.", degrees: "B.E.", bgImg: "/img/main/irtt_gal5.jpg", path: "/departments/mechanical" },
  { id: 4, name: "Electrical & Electronics", icon: svgZap, color: "from-yellow-500 to-amber-600", desc: "Modern power systems, C/C++/Java training, microprocessors, and networking.", degrees: "B.E.", bgImg: "/img/main/irtt_gal6.jpg", path: "/departments/electrical" },
  { id: 5, name: "Electronics & Comm.", icon: svgCpu, color: "from-purple-500 to-pink-600", desc: "AU Permanent Affiliation. Industry-driven curriculum with 24×7 computing access.", degrees: "B.E.", bgImg: "/img/main/irtt_gal8.jpg", path: "/departments/ece" },
  { id: 6, name: "Computer Science", icon: svgMonitor, color: "from-indigo-400 to-violet-600", desc: "Algorithms, DSIR-funded projects, 24×7 digital library. Regular industry visits.", degrees: "B.E. | M.E.", bgImg: "/img/main/itlab/it1.jpg", path: "/departments/cse" },
  { id: 7, name: "CSE (Data Science)", icon: svgChart, color: "from-cyan-500 to-blue-500", desc: "Newest programme combining CS fundamentals with data analytics, ML, and AI.", degrees: "B.Tech", bgImg: "/img/main/itlab/it2.jpg", path: "/departments/cse-ds" },
  { id: 8, name: "Information Technology", icon: svgGlobe, color: "from-sky-400 to-blue-600", desc: "Entrepreneurship & app development focus. Alumni-driven skill enhancement.", degrees: "B.Tech", bgImg: "/img/main/itlab/it3.jpg", path: "/departments/it" },
];

export default function Departments() {
  const navigate = useNavigate();

  const handleDepartmentClick = (dept) => {
    if (dept.path) {
      navigate(dept.path);
    }
  };

  return (
    <section id="departments" className="py-24 lg:py-32 relative overflow-hidden bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-gold-400"></div>
            <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">Academic Programs</span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-gold-400"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Departments of <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-700">Excellence</span>
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto font-medium">
            8 UG and 2 PG highly specialized programmes designed to meet the advanced requirements of modern industry.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up">
          {depts.map((dept) => (
            <div 
              key={dept.id} 
              onClick={() => handleDepartmentClick(dept)}
              className={`bg-white border border-slate-200 shadow-sm p-6 rounded-3xl relative group overflow-hidden ${dept.path ? 'cursor-pointer' : ''} hover:shadow-2xl hover:border-gold-500/0 transition-all duration-500`}
            >
              
              {/* Hover Background Image Effect */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                {dept.bgImg && (
                  <img src={dept.bgImg} alt={dept.name} className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out" />
                )}
                {/* Gradient Overlay so text is readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/60 transition-opacity duration-700"></div>
              </div>

              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${dept.color} p-[1px] group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center text-slate-800">
                    {dept.icon}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-slate-200 group-hover:border-gold-400/30 flex items-center justify-center text-slate-400 group-hover:bg-gold-500 group-hover:text-white transition-all duration-500 backdrop-blur-md">
                  <span className="-rotate-45 group-hover:rotate-0 transition-transform duration-500">{svgArrowRight}</span>
                </div>
              </div>

              {/* Text elements that turn white on hover */}
              <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-white mb-2 transition-colors duration-500 relative z-10">
                {dept.name}
              </h3>
              <p className="text-slate-600 group-hover:text-slate-300 text-[13px] leading-relaxed mb-6 font-medium relative z-10 h-16 transition-colors duration-500">
                {dept.desc}
              </p>
              
              <div className="flex items-center justify-between mt-auto relative z-10">
                <span className="flex items-center gap-2 text-[11px] text-slate-500 group-hover:text-gold-300 font-bold tracking-wide transition-colors duration-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse"></span> {dept.degrees}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}