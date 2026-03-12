import React, { useState, useEffect, useRef } from 'react';

const svgTrophy = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7c0 3.31 2.69 6 6 6s6-2.69 6-6V2z"/></svg>;
const svgTrending = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const svgBuilding = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>;
const svgUsers = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>;
const svgPhone = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>;
const svgMail = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 4l10 8 10-8"/></svg>;

function Counter({ from = 0, to, duration = 2000, suffix = "" }) {
  const nodeRef = useRef(null);
  const [value, setValue] = useState(from);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime;
          const updateCounter = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            if (to % 1 !== 0) {
              setValue((from + (to - from) * easeOutQuart).toFixed(2));
            } else {
              setValue(Math.floor(from + (to - from) * easeOutQuart));
            }

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              if (to % 1 !== 0) setValue(to.toFixed(2));
              else setValue(to);
            }
          };
          requestAnimationFrame(updateCounter);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    return () => observer.disconnect();
  }, [from, to, duration]);

  return <span ref={nodeRef}>{value}{suffix}</span>;
}

const stats = [
  { id: 1, label: "Placement Rate", value: 90, suffix: "%+", icon: svgTrending },
  { id: 2, label: "Years of Records", value: 40, suffix: "+", icon: svgBuilding },
  { id: 3, label: "Total Departments", value: 10, suffix: "", icon: svgUsers },
  { id: 4, label: "Alumni Contribution", value: 1.22, suffix: " Cr+", icon: svgTrophy },
];

export default function Placements() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Placements & Career Excellence</h1>
          <p className="text-blue-100 text-lg">90%+ Placement Rate | Industry-Ready Engineers</p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-slate-50 border-b">
        
        <div className="absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.03] pointer-events-none"></div>
        <div className="absolute w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[150px] -bottom-40 -left-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-20 animate-fade-up">
            <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-full bg-white border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-widest shadow-sm">
              <span className="scale-75">{svgTrophy}</span> Career Success
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Placement <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Excellence</span>
            </h2>
            
            <p className="text-slate-600 text-base max-w-2xl mx-auto font-medium">
              Active IIP Cell ensures GCEE graduates are sought after by the world's leading technology and engineering firms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, idx) => (
              <div 
                key={stat.id}
                className="bg-white p-6 sm:p-8 rounded-3xl text-center relative group overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 text-blue-600 [&>svg]:w-16 [&>svg]:h-16">
                  {stat.icon}
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:-translate-y-1 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiters Logo Section */}
      <section className="py-16 border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center text-slate-400 text-xs font-bold uppercase tracking-[0.3em] mb-10">Trusted By Top Global Enterprises</div>
          
          <div className="py-4 overflow-hidden relative flex mask-image-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] -webkit-mask-image-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
             <div className="flex shrink-0 animate-[marquee_20s_linear_infinite] items-center gap-4 pr-4">
                {[
                  { name: 'CTS', img: '/img/companylogo/cts.png' }, { name: 'Zoho', img: '/img/companylogo/zohocorp.png' }, { name: 'TCS', img: '/img/companylogo/tcs.png' }, 
                  { name: 'Tech Mahindra', img: '/img/companylogo/techmahindra.png' }, { name: 'TAFE', img: '/img/companylogo/tafe.png' }, { name: 'Nokia', img: '/img/companylogo/nokia.png' }, 
                  { name: 'Infosys', img: '/img/companylogo/infosys.png' }, { name: 'IBM', img: '/img/companylogo/ibm.png' }, { name: 'HCL', img: '/img/companylogo/hcl.gif' }, 
                  { name: 'Capgemini', img: '/img/companylogo/capgemini.png' }, { name: 'Cadence', img: '/img/companylogo/cadence.png' }, { name: 'CSS Corp', img: '/img/companylogo/css.png' }, 
                  { name: 'Hexaware', img: '/img/companylogo/Hexa.png' }, { name: 'Polaris', img: '/img/companylogo/polaris.png' }, { name: 'Infoview', img: '/img/companylogo/infoview.png' }
                ].map((co, i) => (
                  <div key={i} className="px-6 py-4 rounded-xl bg-white border border-slate-200 flex flex-col items-center justify-center min-w-[160px] h-[100px] shadow-sm hover:border-blue-300 hover:shadow-md transition-all text-slate-700">
                    <img src={co.img} alt={co.name} className="h-full object-contain max-h-[60px]" />
                  </div>
                ))}
             </div>
             <div className="flex shrink-0 animate-[marquee_20s_linear_infinite] items-center gap-4 pr-4" aria-hidden="true">
                {[
                  { name: 'CTS', img: '/img/companylogo/cts.png' }, { name: 'Zoho', img: '/img/companylogo/zohocorp.png' }, { name: 'TCS', img: '/img/companylogo/tcs.png' }, 
                  { name: 'Tech Mahindra', img: '/img/companylogo/techmahindra.png' }, { name: 'TAFE', img: '/img/companylogo/tafe.png' }, { name: 'Nokia', img: '/img/companylogo/nokia.png' }, 
                  { name: 'Infosys', img: '/img/companylogo/infosys.png' }, { name: 'IBM', img: '/img/companylogo/ibm.png' }, { name: 'HCL', img: '/img/companylogo/hcl.gif' }, 
                  { name: 'Capgemini', img: '/img/companylogo/capgemini.png' }, { name: 'Cadence', img: '/img/companylogo/cadence.png' }, { name: 'CSS Corp', img: '/img/companylogo/css.png' }, 
                  { name: 'Hexaware', img: '/img/companylogo/Hexa.png' }, { name: 'Polaris', img: '/img/companylogo/polaris.png' }, { name: 'Infoview', img: '/img/companylogo/infoview.png' }
                ].map((co, i) => (
                  <div key={`dup-${i}`} className="px-6 py-4 rounded-xl bg-white border border-slate-200 flex flex-col items-center justify-center min-w-[160px] h-[100px] shadow-sm hover:border-blue-300 hover:shadow-md transition-all text-slate-700">
                    <img src={co.img} alt={co.name} className="h-full object-contain max-h-[60px]" />
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Placement Mission & Overview */}
      <section className="py-16 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Mission</h2>
          <div className="prose max-w-none space-y-6">
            <p className="text-slate-700 leading-relaxed text-lg">
              A dedicated placement section functions under the guidance of the Training and Placement Officer (TPO) to arrange campus interviews and coordinate all placement activities. Every year, over 90% of our students are placed in various reputed companies globally.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              At GCEE, each department has a placement staff coordinator and a student coordinator to ensure seamless coordination. The Placement Cell is well-organized by our students who play an instrumental role in guiding their peers through the placement process. Our aim is to achieve 100% placement at GCEE.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              The Placement Cell organizes various programmes to enhance student skills, conducts training classes and mock interviews to build confidence, and maintains a rich alumni database. There is healthy coordination between students and faculty across all departments regarding placement activities. Various reputed companies visit our campus frequently to recruit our high-caliber engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Placement Activities & Services */}
      <section className="py-16 border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Placement Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Campus Recruitment</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Regular campus interviews by top companies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Department-wise placement representatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Streamlined recruitment process</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Multi-round interview facilitation</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Skill Development</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Quantitative Aptitude & Logical Reasoning training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Verbal Communication & Soft Skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Company-specific technical training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Mock interviews & personality development</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Industry Connect</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Industry-Institute Partnership (IIP) Cell</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>In-plant training programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Industrial visits & field exposure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Latest technology courses & workshops</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Alumni Network</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Rich alumni database maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Industry trends & opportunities sharing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Alumni mentoring programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Corporate engagement initiatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Focus of Training */}
      <section className="py-16 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Focus of Our Training Programs</h2>
          <p className="text-slate-700 leading-relaxed mb-8 text-lg">
            Molding students to meet the requirements of corporate screening processes is a critical aspect of our placement initiative. Our intensive training programs cover:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Quantitative Analysis", desc: "Mathematical reasoning and problem-solving for corporate assessments" },
              { title: "Logical Reasoning", desc: "Pattern recognition and analytical thinking skills" },
              { title: "Verbal Excellence", desc: "Communication, writing, and presentation skills" },
              { title: "Soft Skills", desc: "Interpersonal, leadership, and team collaboration abilities" },
              { title: "Technical Expertise", desc: "Company-specific tools, technologies, and domain knowledge" },
              { title: "Interview Prep", desc: "Mock interviews and confidence building sessions" }
            ].map((foc, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
                <h3 className="text-lg font-bold text-blue-600 mb-3">{foc.title}</h3>
                <p className="text-slate-700 text-sm">{foc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Contact */}
      <section className="py-16 border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Contact the Placement Cell</h2>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8 border border-blue-200">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Dr. P. Kaliram</h3>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Position:</span> Training and Placement Officer (TPO)</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      {svgPhone}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-semibold">Official</p>
                      <p className="text-slate-900 font-medium">9280091830</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      {svgPhone}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-semibold">Personal</p>
                      <p className="text-slate-900 font-medium">8610539611</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      {svgMail}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-semibold">Email</p>
                      <p className="text-slate-900 font-medium">gceerodeplacement@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      {svgMail}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-semibold">Official Email</p>
                      <p className="text-slate-900 font-medium">placement@gcee.ac.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-blue-200 pt-8">
              <p className="text-slate-700 text-sm"><span className="font-semibold">Address:</span> Government College of Engineering, Erode - 638 316, Tamil Nadu, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Key Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "90%+ placement rate annually across all departments",
              "Strong ties with Fortune 500 companies and startups",
              "Dedicated career counseling and mentoring programs",
              "Comprehensive skill development and training modules",
              "Active Industry-Institute Partnership (IIP) Cell",
              "Regular on-campus and off-campus recruitment drives"
            ].map((highlight, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold flex-shrink-0 mt-1">
                  ✓
                </div>
                <p className="text-slate-900 font-medium">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}