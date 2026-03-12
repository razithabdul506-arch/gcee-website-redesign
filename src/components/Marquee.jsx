import React from 'react';

const marqueeItems = [
  "AICTE Approved Institution", "✦",
  "Affiliated to Anna University", "✦",
  "200 Acre Green Campus", "✦",
  "90%+ Placement Rate", "✦",
  "Established 1984", "✦",
  "8 UG · 2 PG Programmes", "✦",
  "DoTE Governed Since 2021", "✦",
  "DST & DRDO Funded Research", "✦",
  "Naan Mudhalvan Scheme Partner", "✦"
];

export default function Marquee() {
  return (
    <div className="py-4 border-y border-slate-200 bg-slate-100/50 overflow-hidden relative flex">
      <div 
        className="flex min-w-full shrink-0 animate-[marquee_25s_linear_infinite]"
      >
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <span 
            key={idx} 
            className={`mx-8 whitespace-nowrap ${
              item === "✦" ? "text-gold-500/40 text-lg" : "text-slate-600 font-bold tracking-[0.2em] uppercase text-xs"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
      <div 
        className="flex min-w-full shrink-0 animate-[marquee_25s_linear_infinite]"
        aria-hidden="true"
      >
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <span 
            key={idx} 
            className={`mx-8 whitespace-nowrap ${
              item === "✦" ? "text-gold-500/40 text-lg" : "text-slate-600 font-bold tracking-[0.2em] uppercase text-xs"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
      `}} />
    </div>
  );
}
