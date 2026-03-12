import React from 'react';

const svgMapPin = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;

export default function ElectricalEngineering() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-yellow-600 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Electrical & Electronics Engineering</h1>
          <p className="text-yellow-100 text-lg">Department of Electrical & Electronics Engineering - GCEE</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Overview</h2>
          <div className="prose max-w-none space-y-6">
            <p className="text-slate-700 leading-relaxed text-lg">
              In the e-world the role of electrical & electronics engineers has come into sharp focus. In fact the advances made in the field have redefined the way we live and work. To cope with the rapid changes, modern day engineers need to constantly program themselves to stay relevant and updated.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              At IRT Tech, E&E engineers keep themselves wired to the world by attending seminars and by conducting mini projects. They also become members of the IEEE to keep themselves abreast with the latest in the field.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              As part of the curriculum our engineers are trained in software like C, C++, Java, Assembly Language Programming, microprocessors, microcontrollers and networking.
            </p>
          </div>
        </div>
      </section>

      {/* Department Facilities */}
      <section className="py-16 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Department Facilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-yellow-600 mb-4">Learning Resources</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span>24x7 access to computing facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span>Digital library access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span>Internet resources and information services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span>IEEE membership opportunities</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-yellow-600 mb-4">Industry Engagement</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our students are programmed to be in sync with the evolving needs of the industry. They regularly visit leading IT Organisations in India and keep themselves updated with the latest in the field.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Through seminars, mini-projects, and hands-on training, students gain practical exposure to real-world electrical and electronics applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Head of Department */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Head of the Department</h2>
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-8 border border-yellow-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Dr. M. Mohammadha Hussaini</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Position:</span> Head of the Department</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Qualification:</span> M.E., Ph.D.</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Specialization:</span> Power Systems</p>
              </div>
              <div>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Publications:</span> 20 Conference Papers & 9 Journal Articles</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Contact:</span> +91-9443406070</p>
                <p className="text-slate-700"><span className="font-semibold">Email:</span> hussaini1008@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Directory */}
      <section className="py-16 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Staff Directory</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Dr. M. Mohammadha Hussaini", title: "Associate Professor", symbol: "🎓" },
              { name: "Dr. B. Baby Priya", title: "Associate Professor", symbol: "🎓" },
              { name: "Dr. A. Vetrivel", title: "Associate Professor", symbol: "🎓" },
              { name: "Dr. S. Dhanapal", title: "Assistant Professor (Sr)", symbol: "🎓" },
              { name: "Mrs. S. Gomathi", title: "Assistant Professor", symbol: "🎓" },
              { name: "Dr. K. Tamilselvan", title: "Assistant Professor (Sr)", symbol: "🎓" },
              { name: "Dr. A. Gowthaman", title: "Assistant Professor", symbol: "🎓" },
              { name: "Dr. P. Govindasamy", title: "Assistant Professor", symbol: "🎓" }
            ].map((staff, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
                <div className="text-3xl mb-4">{staff.symbol}</div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm">{staff.name}</h3>
                <p className="text-yellow-600 font-medium text-xs">{staff.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Activities */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Department Activities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "National level conference on 'Recent advancement in Electrical Engineering' for students",
              "Green sodality club - for eco-friendly environment in IRTT campus",
              "GATE forum for competitive exam preparation and awareness",
              "Placement training for final and pre-final year students by alumni",
              "Enhancing interview skills and group discussion skills by experts",
              "Research funding from MNRE, MOEF, DST and TEDA"
            ].map((activity, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 flex items-start gap-4">
                <div className="text-yellow-600 text-2xl flex-shrink-0">⚡</div>
                <p className="text-slate-900 font-medium">{activity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Projects & Initiatives */}
      <section className="py-16 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Research Projects & Initiatives</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gradient-to-r from-yellow-600 to-amber-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">S.No</th>
                  <th className="px-6 py-4 text-left font-semibold">Project Title</th>
                  <th className="px-6 py-4 text-left font-semibold">Funding Agency</th>
                  <th className="px-6 py-4 text-left font-semibold">Amount</th>
                  <th className="px-6 py-4 text-left font-semibold">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  { id: 1, title: "New & Energy Club Inauguration", agency: "TEDA", amount: "Rs. 25,000", year: "2007" },
                  { id: 2, title: "Modern Trends in New & Energy Resources", agency: "TEDA", amount: "Rs. 25,000", year: "2007" },
                  { id: 3, title: "Intelligent Digital Controller for Special Electrical Machines", agency: "DST", amount: "Rs. 25,000", year: "2009" },
                  { id: 4, title: "Energy Conservation and Electrical Safety", agency: "TNEB", amount: "--", year: "2009" },
                  { id: 5, title: "Recent Trends in New and Renewable Energy Sources for Efficient Power Generation", agency: "MNRE", amount: "Rs. 50,000", year: "2010" },
                  { id: 6, title: "Emerging Trends in Electrical Science", agency: "--", amount: "--", year: "2011" },
                  { id: 7, title: "Improved Dynamic Performance of Environmental Friendly Green Power Generation", agency: "--", amount: "Rs. 30,000", year: "2011" }
                ].map((project) => (
                  <tr key={project.id} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 text-slate-700 font-medium">{project.id}</td>
                    <td className="px-6 py-4 text-slate-700 text-sm">{project.title}</td>
                    <td className="px-6 py-4 text-slate-700 text-sm">{project.agency}</td>
                    <td className="px-6 py-4 text-slate-700">{project.amount}</td>
                    <td className="px-6 py-4 text-slate-700">{project.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Research Work Undertaken */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Research Work Undertaken</h2>
          <div className="grid gap-6">
            {[
              { 
                id: 1, 
                title: "22KV HT Underground Cable Design & Installation", 
                desc: "Design, supply, laying, erection, testing and commissioning of 22KV HT underground cable between Bhavani pump house to Kundah in Nilgiris District",
                agency: "Tamil Nadu Electricity Board",
                staff: "Dr. R. Anita"
              },
              { 
                id: 2, 
                title: "Three and Half Core Cable Design", 
                desc: "Auditorium cable design project at IRTT",
                agency: "Institute of Road Transport",
                staff: "Dr. R. Anita & M. M. Hussaini"
              },
              { 
                id: 3, 
                title: "Generator Set Parameters Design & Testing", 
                desc: "Design and testing of generator set parameters for IRTT campus electrical infrastructure",
                agency: "Institute of Road Transport",
                staff: "Dr. R. Anita & M. M. Hussaini"
              },
              { 
                id: 4, 
                title: "Power Factor Correction Meter Parameter Testing", 
                desc: "Testing and calibration of power factor correction meter parameters",
                agency: "Perundurai Medical College",
                staff: "Dr. R. Anita & M. M. Hussaini"
              }
            ].map((work) => (
              <div key={work.id} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold flex-shrink-0">
                    {work.id}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{work.title}</h3>
                    <p className="text-slate-700 mb-3">{work.desc}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span><span className="font-semibold text-slate-900">Agency:</span> {work.agency}</span>
                      <span><span className="font-semibold text-slate-900">Staff:</span> {work.staff}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratories */}
      <section className="py-16 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Laboratories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Power Systems Laboratory",
              "Electrical Machines Laboratory",
              "Digital Electronics Laboratory",
              "Analog Electronics Laboratory",
              "Microprocessor & Microcontroller Laboratory",
              "Power Electronics Laboratory",
              "Network Analysis Laboratory",
              "Electrical & Electronics Measurement Laboratory",
              "Signal Processing Laboratory",
              "Control Systems Laboratory"
            ].map((lab, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 flex items-center gap-4 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-slate-900 font-medium">{lab}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Locate Us</h2>
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-8 border border-yellow-200 text-center">
            <div className="flex justify-center mb-4">{svgMapPin}</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Department of Electrical & Electronics Engineering</h3>
            <p className="text-slate-700">GCEE Campus, Erode</p>
          </div>
        </div>
      </section>
    </div>
  );
}
