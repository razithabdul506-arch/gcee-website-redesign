import React from 'react';

const svgMapPin = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;

export default function MechanicalEngineering() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Mechanical Engineering</h1>
          <p className="text-amber-100 text-lg">Department of Mechanical Engineering - GCEE</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Overview</h2>
          <div className="prose max-w-none space-y-6">
            <p className="text-slate-700 leading-relaxed text-lg">
              Globalization has forced the manufacturing sector to adopt innovative production processes. The shop floors of modern day industries have become highly automated. There is tremendous pressure to deliver products matching world-class quality. Therefore it has become mandatory for engineers to arm themselves with the necessary cutting-edge technologies.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              At GCE, Erode, our students are well trained in all facets of Mechanical Engineering aided by state-of-the-art facilities. The Anna University curriculum consists of a balanced mix of theory and practice along with TN Government flagship skill development programme - Naan Mudhalvan.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              Our students regularly undergo internship/in-plant training in prestigious industries like TAFE, TVS, Hyundai, Sakthi Auto Components Ltd., and others. Besides specialized laboratories like CAD/CAM/Mechatronics/IoT, our students have access to Innovative Product Development Centre (IPDC) to convert their innovative ideas to prototype/product.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Vision</h3>
              <p className="text-slate-700 leading-relaxed">
                To be a leading department of mechanical engineering that fosters innovation, excellence, and societal impact through quality education, applied research, and industry collaboration, preparing globally competitive graduates who contribute to the sustainable development of technology and society.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Mission</h3>
              <div className="space-y-4 text-slate-700">
                <div>
                  <h4 className="font-bold mb-2">Educational Excellence</h4>
                  <p className="text-sm leading-relaxed">Provide rigorous education equipping students with theoretical knowledge, practical skills, and ethical values for career excellence.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Research & Innovation</h4>
                  <p className="text-sm leading-relaxed">Promote cutting-edge research through interdisciplinary collaboration and industry partnerships.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Holistic Development</h4>
                  <p className="text-sm leading-relaxed">Support student development through leadership and personal development programs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Educational Objectives */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Programme Educational Objectives (PEOs)</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-amber-600 mb-3">World Class Graduates</h3>
              <p className="text-slate-700 leading-relaxed">
                To produce world class mechanical engineering graduates by making them learn state of art technologies.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-amber-600 mb-3">Entrepreneurial Mindset</h3>
              <p className="text-slate-700 leading-relaxed">
                To produce quality engineers who can contribute to the society as Intrapreneurs and Entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Outcomes */}
      <section className="py-16 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Programme Outcomes (POs)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                title: "Design & Development", 
                desc: "Graduates will be well conversant in designing, developing, building and testing mechanical equipment for automotive, aerospace and defence sectors." 
              },
              { 
                title: "Industry Ready", 
                desc: "Through practical experience, live projects, and 4-week internship exposure in reputed mechanical industries, enabling graduates to be immediately industry ready." 
              }
            ].map((po, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2 text-lg">{po.title}</h4>
                <p className="text-slate-600 leading-relaxed">{po.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Head of Department */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Head of the Department</h2>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 border border-amber-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Dr. K. Balamurugan</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Position:</span> Head of the Department</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Qualification:</span> M.E., Ph.D.</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Experience:</span> 23 Years</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Specialization:</span> Manufacturing Engineering</p>
              </div>
              <div>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Publications:</span> 25 Conference Papers & 80 Journal Articles</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Books Published:</span> 5 Books & 2 Chapters</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">R&D Projects:</span> 6 projects (Rs. 50 Lakhs)</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Ph.D Supervision:</span> 11 students</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">FDP Conducted:</span> 32 programs</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Consultancy:</span> 1 project (Rs. 10,000)</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-6 pt-6 border-t border-amber-200">
              <div>
                <p className="text-slate-700"><span className="font-semibold">Contact:</span> +91-9150166322</p>
              </div>
              <div>
                <p className="text-slate-700"><span className="font-semibold">Email:</span> drkbalamurugan@gcee.ac.in</p>
                <p className="text-slate-700"><span className="font-semibold">Email:</span> hodmechgcee@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Directory */}
      <section className="py-16 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Staff Directory</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Dr. K. Balamurugan", title: "Associate Professor", symbol: "🎓" },
              { name: "Dr. R. Senthilraja", title: "Assistant Professor", symbol: "🎓" },
              { name: "Mr. N.S. Nandakumar", title: "Assistant Professor", symbol: "🎓" },
              { name: "Dr. N. Vadivel", title: "Assistant Professor", symbol: "🎓" },
              { name: "Mrs. K. Uma", title: "Assistant Professor", symbol: "🎓" },
              { name: "Mr. P. Gowtham", title: "Assistant Professor", symbol: "🎓" }
            ].map((staff, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
                <div className="text-3xl mb-4">{staff.symbol}</div>
                <h3 className="font-bold text-slate-900 mb-2">{staff.name}</h3>
                <p className="text-amber-600 font-medium text-sm">{staff.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Research Projects</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gradient-to-r from-amber-600 to-orange-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">S.No</th>
                  <th className="px-6 py-4 text-left font-semibold">Project Title</th>
                  <th className="px-6 py-4 text-left font-semibold">Funding Agency</th>
                  <th className="px-6 py-4 text-left font-semibold">Investigator(s)</th>
                  <th className="px-6 py-4 text-left font-semibold">Amount</th>
                  <th className="px-6 py-4 text-left font-semibold">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  { id: 1, title: "Design and development of dynamic facility layout design toolkit", agency: "DST, Delhi", inv: "Dr. K. Balamurugan", amount: "Rs. 5.04 Lakhs", year: "2007-2010" },
                  { id: 2, title: "Tribological and corrosion studies on Soya Bean Oil based Lubricants for Diesel Engines", agency: "DRDO", inv: "Dr. K. Balamurugan, Dr. K. Mayilsamy", amount: "Rs. 2.75 Lakhs", year: "2009-2010" },
                  { id: 3, title: "PC based Data acquisition system for IC Engine", agency: "AICTE, New Delhi", inv: "Dr. K. Balamurugan, Dr. K. Mayilsamy", amount: "Rs. 2.67 Lakhs", year: "2009-2010" },
                  { id: 4, title: "Modernisation of CAM lab with CNC turning center", agency: "AICTE, New Delhi", inv: "Dr. K. Balamurugan", amount: "Rs. 8.83 Lakhs", year: "2013-2014" },
                  { id: 5, title: "Entrepreneurship Development Cell", agency: "AICTE, New Delhi", inv: "Dr. K. Balamurugan", amount: "Rs. 3.0 Lakhs", year: "2013-2015" },
                  { id: 6, title: "Making Biomass briquette from water hyacinth and energy evaluation", agency: "TNSCST, Chennai", inv: "Dr. K. Balamurugan", amount: "Rs. 2.2 Lakhs", year: "2013-2015" },
                  { id: 7, title: "Development of Scroll air compressors for automotive applications", agency: "WABCO India Ltd", inv: "Dr. S. Tharves Mohideen", amount: "Rs. 10.00 Lakhs", year: "2012" }
                ].map((project) => (
                  <tr key={project.id} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 text-slate-700 font-medium">{project.id}</td>
                    <td className="px-6 py-4 text-slate-700 text-sm">{project.title}</td>
                    <td className="px-6 py-4 text-slate-700 text-sm">{project.agency}</td>
                    <td className="px-6 py-4 text-slate-700 text-sm">{project.inv}</td>
                    <td className="px-6 py-4 text-slate-700">{project.amount}</td>
                    <td className="px-6 py-4 text-slate-700">{project.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Short Term Courses & Workshops */}
      <section className="py-16 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Short Term Courses & Workshops</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-gradient-to-r from-amber-600 to-orange-700 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">S.No</th>
                  <th className="px-4 py-3 text-left font-semibold">Title</th>
                  <th className="px-4 py-3 text-left font-semibold">Funding Agency</th>
                  <th className="px-4 py-3 text-left font-semibold">Coordinator</th>
                  <th className="px-4 py-3 text-left font-semibold">Amount</th>
                  <th className="px-4 py-3 text-left font-semibold">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  { id: 1, title: "FDP on Thermal Engineering", agency: "Anna University, Chennai", coord: "Dr. K. Mayilsamy", amount: "Rs. 15,000", year: "2005" },
                  { id: 2, title: "Renewable Energy-Energy for the Future", agency: "TEDA, Chennai", coord: "Dr. K. Mayilsamy", amount: "Rs. 5,000", year: "2005" },
                  { id: 3, title: "FDP on Engineering Thermodynamics", agency: "Anna University, Chennai", coord: "Dr. K. Mayilsamy", amount: "Rs. 15,000", year: "2006" },
                  { id: 4, title: "SDP on Recent trends in Manufacturing System Design and Optimization", agency: "AICTE, New Delhi", coord: "Dr. K. Balamurugan", amount: "Rs. 1,80,000", year: "2007" },
                  { id: 5, title: "National Conference on E-Factory", agency: "DoIT & CSIR, New Delhi", coord: "Dr. K. Balamurugan, Dr. K. Mayilsamy", amount: "Rs. 50,000", year: "2007" },
                  { id: 6, title: "STTP on Recent Trends in Robotics and Automation", agency: "ISTE, New Delhi", coord: "Dr. S. Selvi, Dr. K. Balamurugan", amount: "Rs. 90,000", year: "2008" },
                  { id: 7, title: "Three day Entrepreneurship Awareness Camp", agency: "ISTE, New Delhi", coord: "Dr. S. Tharves Mohideen", amount: "Rs. 15,000", year: "2008" },
                  { id: 8, title: "National Level Quiz competition on Refrigeration and Air Conditioning", agency: "ISHRAE, Chennai", coord: "Dr. S. Tharves Mohideen", amount: "--", year: "2008" },
                  { id: 9, title: "National Conference on Soft Computing", agency: "CSIR, New Delhi", coord: "Dr. K. Balamurugan, Dr. K. Mayilsamy", amount: "Rs. 25,000", year: "2009" },
                  { id: 10, title: "SDP on AI Application in Manufacturing", agency: "AICTE, New Delhi", coord: "Dr. K. Balamurugan", amount: "Rs. 2,00,000", year: "2009" },
                  { id: 11, title: "One Day workshop on Green Building and Energy Conservation Building Code", agency: "ISHRAE, Chennai", coord: "Dr. S. Tharves Mohideen", amount: "Rs. 10,000 + Experts", year: "2009" },
                  { id: 12, title: "One Day Workshop on Recent Trends in Air Conditioning", agency: "ISTE, New Delhi", coord: "Dr. S. Tharves Mohideen", amount: "Rs. 10,000 + Experts", year: "2010" },
                  { id: 13, title: "ISTE Workshop on Heat Transfer", agency: "ISTE, New Delhi (IIT-Bombay)", coord: "Dr. K. Balamurugan", amount: "Rs. 2,00,000", year: "2011" },
                  { id: 14, title: "SDP on Nano materials - Synthesis, Characteristics & Engineering applications", agency: "AICTE, New Delhi", coord: "Dr. K. Balamurugan", amount: "Rs. 7,00,000", year: "2011" },
                  { id: 15, title: "ISTE Workshop on Writing Effective Conference papers", agency: "ISTE, New Delhi", coord: "Dr. K. Balamurugan", amount: "Rs. 50,000", year: "2012" },
                  { id: 16, title: "ISTE Workshop on Computational Fluid Dynamics", agency: "ISTE, New Delhi", coord: "Dr. K. Balamurugan, Dr. R. Senthilraja", amount: "Rs. 1,00,000", year: "2012" },
                  { id: 17, title: "ISTE Workshop on Introduction to Research Methodologies", agency: "ISTE, New Delhi", coord: "Dr. K. Balamurugan", amount: "Rs. 1,00,000", year: "2012" },
                  { id: 18, title: "One-day Workshop on Nano Materials", agency: "IRTT, Erode", coord: "Dr. K. Balamurugan", amount: "--", year: "2012" },
                  { id: 19, title: "ISTE Workshop on Aakash for Education", agency: "ISTE, New Delhi", coord: "Dr. K. Balamurugan", amount: "--", year: "2012" },
                  { id: 20, title: "One day Science Awareness Programme", agency: "IRTT, Erode (IGCAR, Chennai)", coord: "Dr. K. Balamurugan", amount: "--", year: "2016" },
                  { id: 21, title: "ISTE Workshop on Electric Power Systems", agency: "ISTE, New Delhi", coord: "Dr. K. Balamurugan, Dr. Govindasamy", amount: "Rs. 66,710", year: "2017" },
                  { id: 22, title: "AICTE-ISTE Induction/Refresher Programme on Teaching and Research with Technology", agency: "AICTE-ISTE, New Delhi", coord: "Dr. K. Balamurugan", amount: "Rs. 3,00,000", year: "2018" },
                  { id: 23, title: "Three online STTPs on Additive manufacturing of multi-functional Nanocomposites", agency: "AICTE, New Delhi", coord: "Dr. K. Balamurugan", amount: "Rs. 2,79,000", year: "2021" }
                ].map((workshop) => (
                  <tr key={workshop.id} className="hover:bg-slate-50 transition">
                    <td className="px-4 py-3 text-slate-700 font-medium">{workshop.id}</td>
                    <td className="px-4 py-3 text-slate-700">{workshop.title}</td>
                    <td className="px-4 py-3 text-slate-700">{workshop.agency}</td>
                    <td className="px-4 py-3 text-slate-700">{workshop.coord}</td>
                    <td className="px-4 py-3 text-slate-700">{workshop.amount}</td>
                    <td className="px-4 py-3 text-slate-700">{workshop.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Laboratories */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Laboratories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "CAD/CAM Laboratory",
              "CNC Turning Center Laboratory",
              "Thermal Engineering Laboratory",
              "Fluid Mechanics & Hydraulics Laboratory",
              "Mechatronics Laboratory",
              "IoT & Automation Laboratory",
              "Manufacturing Processes Laboratory",
              "Measurement & Metrology Laboratory",
              "Robotics Laboratory",
              "Innovative Product Development Centre (IPDC)"
            ].map((lab, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 flex items-center gap-4 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-slate-900 font-medium">{lab}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Locate Us</h2>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 border border-amber-200 text-center">
            <div className="flex justify-center mb-4">{svgMapPin}</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Department of Mechanical Engineering</h3>
            <p className="text-slate-700">GCEE Campus, Erode</p>
          </div>
        </div>
      </section>
    </div>
  );
}
