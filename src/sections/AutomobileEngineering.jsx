import React from 'react';

const svgMapPin = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;

export default function AutomobileEngineering() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-rose-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Automobile Engineering</h1>
          <p className="text-red-100 text-lg">Department of Automobile Engineering - GCEE</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Overview</h2>
          <div className="prose max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6 text-lg">
              Automotive engineering is a branch of mechanical engineering that concerns the design, development and manufacture of cars, trucks, motorcycles and other motor vehicles. Automotive engineers also design and test the many subsystems or components that comprise a motorized vehicle.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              Very few universities offer a bachelor's degree in automotive engineering. Consequently, many prospective automotive engineers earn a bachelor's degree in mechanical engineering from a university that also offers specialized courses in automotive engineering. However, there are plenty of universities that offer master's degrees in automotive engineering.
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
              <h3 className="text-xl font-bold text-red-600 mb-4">Library Resources</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✓</span>
                  <span>Over 1000 volumes of books</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✓</span>
                  <span>Varied titles for faculty and students</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✓</span>
                  <span>Updated yearly based on requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✓</span>
                  <span>Individual department library</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-red-600 mb-4">Learning Approach</h3>
              <p className="text-slate-700 leading-relaxed">
                The department maintains comprehensive library resources to support both theoretical and practical learning. Individual libraries are maintained for better understanding of automotive engineering concepts and hands-on training in state-of-the-art facilities.
              </p>
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
              <h3 className="text-lg font-bold text-red-600 mb-3">World Class Graduates</h3>
              <p className="text-slate-700 leading-relaxed">
                To produce world class Automobile engineering graduates by making them learn state of the art technologies.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-red-600 mb-3">Strong Fundamentals</h3>
              <p className="text-slate-700 leading-relaxed">
                Automobile engineers are in need of thorough understanding of physics, mathematics and materials to design components of various types of automotive vehicles used for surface transport and off-road applications.
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
                desc: "Graduates are able to design, develop, build, test and maintain the engine and chassis of automotive vehicles." 
              },
              { 
                title: "Technical Expertise", 
                desc: "Thorough knowledge in engine design, chassis design, body design, transmission systems, and various fuel systems." 
              },
              { 
                title: "Alternative Fuels", 
                desc: "Expertise in alternative fuels for automotive engines and sustainable fuel solutions." 
              },
              { 
                title: "Practical Experience", 
                desc: "Gain hands-on training in testing of automotive engines and chassis through research projects and internship training." 
              },
              { 
                title: "Industry Training", 
                desc: "Internship training opportunities in reputed Automotive industries to gain real-world experience." 
              },
              { 
                title: "Advanced Testing", 
                desc: "Hands-on experience with state-of-the-art testing equipment and PC-based analysis systems." 
              }
            ].map((po, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">{po.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{po.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Head of Department */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Head of the Department</h2>
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-8 border border-red-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Dr. R. Senthilraja</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Position:</span> Head of the Department (i/c - Additional Charge)</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Qualification:</span> M.E., Ph.D.</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Experience:</span> 12 Years</p>
                <p className="text-slate-700"><span className="font-semibold">Specialization:</span> Thermal Engineering</p>
              </div>
              <div>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Publications:</span> 1 Conference Paper & 1 Journal Article</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Contact:</span> +91-94432 78504</p>
                <p className="text-slate-700"><span className="font-semibold">Email:</span> senthilraja@irttech.ac.in</p>
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
              { name: "Dr. R. Senthilraja", title: "Assistant Professor", symbol: "🎓" }
            ].map((staff, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
                <div className="text-3xl mb-4">{staff.symbol}</div>
                <h3 className="font-bold text-slate-900 mb-2">{staff.name}</h3>
                <p className="text-red-600 font-medium text-sm">{staff.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Development Activities */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Research & Development Activities</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gradient-to-r from-red-600 to-rose-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">S.No</th>
                  <th className="px-6 py-4 text-left font-semibold">Project Title</th>
                  <th className="px-6 py-4 text-left font-semibold">Funding Agency</th>
                  <th className="px-6 py-4 text-left font-semibold">Amount</th>
                  <th className="px-6 py-4 text-left font-semibold">Year</th>
                  <th className="px-6 py-4 text-left font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  { id: 1, title: "Modernize The Engine Testing Lab Using P.C Based Combustion Analysis System", agency: "AICTE", amount: "Rs. 12 Lakhs", year: "2011", status: "Completed" },
                  { id: 2, title: "Development Of Mathematical Model And Generating Experimental Data For NLC-II 239cm3 Reciprocating Compressor", agency: "WABCO", amount: "Rs. 14.75 Lakhs", year: "2013", status: "Completed" },
                  { id: 3, title: "Endurance test of m/s Simpson SJV326 Engine", agency: "SIMPSON", amount: "Rs. 15.25 Lakhs", year: "2013", status: "Completed" },
                  { id: 4, title: "Testing of Nano Special Edition engine", agency: "Jeyam Automotive", amount: "Rs. 4.00 Lakhs", year: "2012", status: "Completed" },
                  { id: 5, title: "Automobile Mechanic Training", agency: "Tamilnadu Skill Development Corporation", amount: "Rs. 21.0 Lakhs", year: "2014-2015", status: "Completed" },
                  { id: 6, title: "Testing of IC Engines Using Alternative Fuels", agency: "Anna University Research Scholars", amount: "Rs. 4.00 Lakhs", year: "2011-2016", status: "Ongoing" },
                  { id: 7, title: "Modernization Of Engine And Vehicle Testing Lab Using PC Based Two Wheeler Chassis Dynamometer", agency: "AICTE", amount: "Rs. 16.00 Lakhs", year: "2015-2016", status: "Ongoing" },
                  { id: 8, title: "LMV Driver Training", agency: "Tamilnadu Skill Development Corporation", amount: "Rs. 15.60 Lakhs", year: "2015-2016", status: "Ongoing" },
                  { id: 9, title: "Indigenous Resource Utilization: Development of Diesel Ethanol Vegetable Oil Hybrid Fuel Blends", agency: "Department of Science and Technology, Government of India", amount: "Rs. 20.7 Lakhs", year: "2008-2011", status: "Completed" },
                  { id: 10, title: "Modernization and Removal of Obsolescence (MODROBS)", agency: "AICTE", amount: "Rs. 12 Lakhs", year: "2007-2011", status: "Completed" },
                  { id: 11, title: "Emerging Trends in Alternative Fuels and Emission Control Technique in I.C.Engines", agency: "AICTE", amount: "Rs. 2 Lakhs", year: "2010", status: "Completed" }
                ].map((project) => (
                  <tr key={project.id} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 text-slate-700 font-medium">{project.id}</td>
                    <td className="px-6 py-4 text-slate-700 text-sm">{project.title}</td>
                    <td className="px-6 py-4 text-slate-700 text-sm">{project.agency}</td>
                    <td className="px-6 py-4 text-slate-700">{project.amount}</td>
                    <td className="px-6 py-4 text-slate-700">{project.year}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                        {project.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Laboratories */}
      <section className="py-16 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Laboratories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Engine Testing Lab with PC-Based Combustion Analysis System",
              "Two Wheeler Chassis Dynamometer Lab",
              "Thermal Engineering Lab",
              "Transmission & Drive Systems Lab",
              "Automotive CAD & Design Lab",
              "Alternative Fuels Testing Lab",
              "Vehicle Emission Testing Lab",
              "Automotive Materials Testing Lab"
            ].map((lab, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 flex items-center gap-4 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-600 font-bold flex-shrink-0">
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
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-8 border border-red-200 text-center">
            <div className="flex justify-center mb-4">{svgMapPin}</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Department of Automobile Engineering</h3>
            <p className="text-slate-700">GCEE Campus, Erode</p>
          </div>
        </div>
      </section>
    </div>
  );
}
