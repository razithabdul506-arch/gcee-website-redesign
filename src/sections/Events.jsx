import React from 'react';

const svgSparkles = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v18M3 12h18"/><path d="M6 6l12 12M6 18L18 6"/></svg>;
const svgArrow = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;

export default function Events() {
  return (
    <section id="events" className="py-24 lg:py-32 relative overflow-hidden bg-slate-50 border-t border-slate-200">
      <div className="absolute w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[150px] top-1/2 left-0 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-[2px] bg-gold-400"></div>
            <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">Campus Life</span>
            <div className="w-10 h-[2px] bg-gold-400"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Facilities & <span className="text-gold-500">Infrastructure</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {[
            {
              title: "Campus Events & News",
              desc: "Cultural events, festivals, and campus activities celebrating diversity, talent, and community spirit throughout the academic year.",
              img: "/img/events/img2.jpg",
              tag: "Cultural",
              delay: "0s"
            },
            {
              title: "2000 Silver Jubilee Alumni Meet",
              desc: "Celebrating 50 years of excellence with alumni reunion, networking opportunities, and nostalgic moments from the college's journey.",
              img: "/img/events/img12.jpg",
              tag: "Alumni",
              delay: "0.1s"
            },
            {
              title: "Department Technical Symposia",
              desc: "Platform for departments to showcase technical innovations, research projects, and compete in specialized engineering competitions.",
              img: "/img/events/img5.jpg",
              tag: "Technical",
              delay: "0.2s"
            },
            {
              title: "New Hostels",
              desc: "Brand new hostel facilities dedicated for students with modern amenities, 24x7 WiFi, and comfortable living spaces.",
              img: "/img/hostel/img1.jpg",
              tag: "Accommodation",
              delay: "0.3s"
            },
            {
              title: "Central Library",
              desc: "State-of-the-art central library with wide collection across engineering disciplines, digital access, and NPTEL resources.",
              img: "/img/main/irtt_gal3.jpg",
              tag: "Digital Resources",
              delay: "0.4s"
            },
            {
              title: "Main Auditorium",
              desc: "Massive seating capacity with excellent acoustics and lighting, hosting numerous cultural, technical, and alumni events.",
              img: "/img/irtt_auditorium/img1.jpeg",
              tag: "Events Venue",
              delay: "0.5s"
            },
            {
              title: "Sports Stadium",
              desc: "Extensive outdoor tracks and fully equipped indoor stadium for basketball, badminton, and other athletic activities.",
              img: "/img/sports/img10.jpg",
              tag: "Athletics",
              delay: "0.6s"
            },
            {
              title: "Cafeteria",
              desc: "Hygienic and highly affordable meals and snacks, functioning as the favorite social hub for students and faculty.",
              img: "/img/canteen/canteen1.jpg",
              tag: "Dining",
              delay: "0.7s"
            },
            {
              title: "Campus Transport",
              desc: "A fleet of dedicated college buses providing safe, daily commute across major routes in Erode and surrounding districts.",
              img: "/img/transport/img1.jpg",
              tag: "Commute",
              delay: "0.8s"
            }
          ].map((facility, idx) => (
            <div 
              key={idx}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-up cursor-pointer"
              style={{ minHeight: '340px', animationDelay: facility.delay }}
            >
              {/* Background Image */}
              <img src={facility.img} alt={facility.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-slate-900/10 group-hover:via-slate-900/60"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white backdrop-blur-md w-max shadow-sm border border-white/20">
                  {svgSparkles} {facility.tag}
                </span>
                
                <div className="text-white transform group-hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="font-display text-2xl font-bold mb-3">{facility.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium line-clamp-3">{facility.desc}</p>
                  <button className="inline-flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                    Explore {svgArrow}
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
