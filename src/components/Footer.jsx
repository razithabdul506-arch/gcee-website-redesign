import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-white rounded-full p-1.5 flex items-center justify-center">
                <img src="/img/icons/GCEE.png" alt="GCEE Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-white font-display font-bold text-2xl leading-none mb-1">GCEE</div>
                <div className="text-slate-400 text-[10px] tracking-widest uppercase font-bold">Erode</div>
              </div>
            </div>
            <p className="text-slate-400 text-[13px] leading-relaxed mb-4">
              Formerly IRTT · Established 1984 · Governed by DoTE, Government of Tamil Nadu · Affiliated to Anna University, Chennai · AICTE Approved.
            </p>
            <div className="flex flex-col gap-2 mt-6">
              <a href="https://www.gcee.ac.in" target="_blank" rel="noreferrer" className="text-gold-400 text-sm font-semibold hover:text-white transition-colors">🌐 gcee.ac.in</a>
              <a href="mailto:gceeprincipal@gmail.com" className="text-slate-400 text-sm font-medium hover:text-white transition-colors">✉️ gceeprincipal@gmail.com</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-6">Academics</h4>
            <ul className="space-y-4">
              {['UG Programmes', 'PG Programmes', 'Science & Humanities', 'Admissions', 'Fees Structure'].map(link => (
                <li key={link}>
                  <a href="#departments" className="text-slate-400 text-sm hover:text-gold-400 transition-colors font-semibold">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-6">Campus</h4>
            <ul className="space-y-4">
              {['Library', 'Sports & Gym', 'Hostels', 'Cafeteria', 'Transport'].map(link => (
                <li key={link}>
                  <a href="#events" className="text-slate-400 text-sm hover:text-gold-400 transition-colors font-semibold">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Placements', 'R&D Consultancy', 'Alumni', 'EDC Cell', 'Committees', 'Contact Us'].map((link, idx) => (
                <li key={link}>
                  <a href={idx === 0 ? '#placements' : idx === 5 ? '#contact' : '#home'} className="text-slate-400 text-sm hover:text-gold-400 transition-colors font-semibold">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 pb-4 flex flex-col items-center">
          <div className="flex gap-6 mb-8">
            <a href="https://www.youtube.com/@IRTT.GCEERODE" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-red-500 transition-all hover:scale-110">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://www.instagram.com/gcee_cse_official/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-500 transition-all hover:scale-110">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.linkedin.com/company/gce-erode-cse" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-all hover:scale-110">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452h-.001z"/></svg>
            </a>
            <a href="https://x.com/GceErode" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-all hover:scale-110">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.facebook.com/people/Gce-Erode/pfbid0PwFjHnmtgtiqkjuc2DwFGpvnbJJxGbjsp7DAC6XuaU88WmPz6XYV9aWWKmiD1Yzdl/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-all hover:scale-110">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-bold tracking-widest uppercase w-full">
            <span>© {new Date().getFullYear()} Government College of Engineering, Erode (Formerly IRTT). All Rights Reserved.</span>
            <span className="flex gap-6">
              <a href="#home" className="hover:text-gold-400 transition-colors">Designed & Maintained by GCEE Website Administrators, Dept of IT</a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
