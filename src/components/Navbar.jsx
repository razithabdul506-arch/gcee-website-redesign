import React, { useState, useEffect } from 'react';

const svgMenu = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>;
const svgX = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>;

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Departments', href: '#departments' },
  { name: 'News', href: '#news' },
  { name: 'Events', href: '#events' },
  { name: 'Placements', href: '#placements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? 'bg-white/80 backdrop-blur-xl border-slate-200 shadow-sm' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="hidden sm:flex w-12 h-12 items-center justify-center bg-white rounded-full p-1 shadow-md">
              <img src="/img/icons/GCEE.png" alt="GCEE Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-slate-900 font-display font-bold text-lg sm:text-xl leading-none tracking-wide">Government College of Engineering, Erode</div>
              <div className="text-slate-500 text-[9px] sm:text-[10px] tracking-[0.15em] uppercase leading-none mt-1.5 font-semibold">( Formerly IRTT )</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="relative text-sm font-semibold text-slate-600 hover:text-gold-600 transition-colors group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-0.5">
              Apply Now
            </a>
            <button className="lg:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? svgX : svgMenu}
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-600 hover:text-gold-600 hover:bg-slate-50 rounded-xl transition-all">
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-4">
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center w-full px-5 py-3 text-base font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all shadow-md">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}