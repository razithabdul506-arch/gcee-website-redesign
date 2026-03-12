import React, { useState } from 'react';

const svgMap = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const svgPhone = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>;
const svgMail = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const svgSend = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
const svgCheck = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_50%,#f8fafc_100%)]">
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-gold-400"></div>
            <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">Get in touch</span>
            <div className="w-8 h-[2px] bg-gold-400"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Contact <span className="text-gold-500">Us</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto font-medium">
            Reach out for admissions, academic queries, or general information. We are here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          <div className="lg:col-span-2 space-y-6 animate-fade-up">
            <div className="bg-white p-6 rounded-2xl flex gap-6 hover:shadow-md transition-shadow border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex flex-shrink-0 items-center justify-center text-gold-600">
                {svgMap}
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-2">Campus Address</h4>
                <p className="text-slate-600 text-[13px] leading-relaxed font-medium">Government College of Engineering (IRTT),<br />Vasavi College Post, Erode – 638 316,<br />Tamil Nadu, India.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl flex gap-6 hover:shadow-md transition-shadow border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex flex-shrink-0 items-center justify-center text-gold-600">
                {svgPhone}
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-2">Phone Directory</h4>
                <p className="text-slate-600 text-sm font-medium mb-1"><span className="text-xs text-slate-400 font-bold tracking-wider uppercase">Help Desk:</span> 0424-2533579</p>
                <p className="text-slate-600 text-sm font-medium"><span className="text-xs text-slate-400 font-bold tracking-wider uppercase">Principal:</span> 9280091825</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl flex gap-6 hover:shadow-md transition-shadow border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex flex-shrink-0 items-center justify-center text-gold-600">
                {svgMail}
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-2">Email</h4>
                <p className="text-slate-600 text-sm font-medium">gceeprincipal@gmail.com</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-[300px] border border-slate-200 relative group shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0651783076866!2d77.67090107345024!3d11.454948888686556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8c7a5d5d5d5d5%3A0x1234567890abcdef!2sGovernment%20College%20of%20Engineering%20%28IRTT%29!5e0!3m2!1sen!2sin!4v1234567890123" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white shadow-sm p-8 sm:p-10 rounded-3xl border border-slate-200 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-500 text-xs font-bold mb-2 tracking-widest uppercase">Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all font-medium text-sm shadow-sm" />
                </div>
                <div>
                  <label className="block text-slate-500 text-xs font-bold mb-2 tracking-widest uppercase">Email</label>
                  <input required type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all font-medium text-sm shadow-sm" />
                </div>
              </div>
              
              <div>
                <label className="block text-slate-500 text-xs font-bold mb-2 tracking-widest uppercase">Subject</label>
                <select required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all font-medium text-sm appearance-none cursor-pointer shadow-sm">
                  <option value="" disabled selected className="text-slate-400">Select a topic...</option>
                  <option value="admissions">Admissions Inquiry</option>
                  <option value="placement">Placement Info</option>
                  <option value="academics">Academic Query</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-500 text-xs font-bold mb-2 tracking-widest uppercase">Message</label>
                <textarea required rows="4" placeholder="How can we help you?" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all font-medium text-sm resize-none shadow-sm"></textarea>
              </div>

              <button type="submit" disabled={submitted} className={`relative w-full py-4 rounded-xl text-slate-900 font-bold text-sm uppercase tracking-wider transition-all duration-300 overflow-hidden shadow-lg ${submitted ? 'bg-emerald-400 text-white' : 'bg-gradient-to-r from-gold-400 to-gold-500 hover:shadow-gold-500/30'}`}>
                <div className="relative flex items-center justify-center gap-2">
                  {submitted ? (
                    <>{svgCheck} Message Sent Successfully</>
                  ) : (
                    <>Send Message {svgSend}</>
                  )}
                </div>
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}