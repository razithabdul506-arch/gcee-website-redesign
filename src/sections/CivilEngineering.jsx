import React from 'react';

const svgArrowRight = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
const svgMapPin = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;

export default function CivilEngineering() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Civil Engineering</h1>
          <p className="text-emerald-100 text-lg">Department of Civil Engineering - GCEE</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Overview</h2>
          <div className="prose max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6 text-lg">
              Designing and executing structural works requires a great amount of analyzing, understanding and planning. A Skilled civil engineer plays a crucial role in infrastructure development. He or She has to be a construction and environment specialist besides being a versatile systems integrator.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6 text-lg">
              Modern day hi-tech construction management systems require a thorough knowledge in information technology. Keeping this in mind, IRT Tech imparts training to civil engineering students with the latest curriculum besides offering them an opportunity to gain hands-on experience through visits to industries and project sites.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              The budding architects of the future also gain from the guest lectures organized by the institution.
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
              <h3 className="text-xl font-bold text-emerald-600 mb-4">Modern Infrastructure</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span>Modern equipped classrooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span>Faculty rooms with latest technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span>Seven established laboratories</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-emerald-600 mb-4">Learning Approach</h3>
              <p className="text-slate-700 leading-relaxed">
                The laboratories are designed to enhance understanding of concepts through practical exposure. Students gain hands-on experience through industry visits, project site observations, and guest lectures from professionals in the field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Educational Objectives */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Programme Educational Objectives (PEOs)</h2>
          <p className="text-slate-700 leading-relaxed mb-8 text-lg">
            Civil Engineering is one of the oldest Engineering disciplines and refers to the design, construction, and maintenance of structures integral to the public, such as roads, dams, bridges, canals, and buildings.
          </p>
          <p className="text-slate-700 leading-relaxed text-lg">
            The discipline of Civil Engineering at GCE, Erode focuses on a multifaceted growth of students and is designed to equip them not only with the core theoretical and practical fundamentals of the discipline, but also evolve them into confident individuals, ready to make an impact on whatever profession (industrial work, research, entrepreneurship) they choose to pursue.
          </p>
          <p className="text-slate-700 leading-relaxed mt-6 text-lg">
            Currently, the department offers B.E, M.E and Ph.D degrees with specializations in Structural Engineering.
          </p>
        </div>
      </section>

      {/* Programme Outcomes */}
      <section className="py-16 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Programme Outcomes (POs)</h2>

          {/* B.E Civil Engineering */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-emerald-600 mb-6">B.E (Civil Engineering)</h3>
            <p className="text-slate-700 mb-6">On completion of the B.E (Civil Engineering) degree the Graduates will be able to:</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Foundation for site work", desc: "Ability to understand and demonstrate ability to visualize & work on site quality control systems through consultancy work in the department." },
                { title: "Application of knowledge", desc: "Ability to apply knowledge in various fields to provide solution to new ideas and innovations through departmental expertise in Structural, Geotechnical, Water resource, Environmental, Transportation, and other specializations." },
                { title: "Professional agencies", desc: "Ability to follow the procedure in various Governmental, Non-Governmental, and Private Civil Engineering agencies with professional skills and knowledge of tendering." },
                { title: "Problem solving", desc: "Ability to identify, formulate, and find solutions for complex problems of civil engineering by applying knowledge of mathematics, science and principles." },
                { title: "Design skills", desc: "Ability to apply civil engineering design principles to produce solutions that meet specified needs with consideration of public health, safety, welfare, and environmental factors." },
                { title: "Research capability", desc: "Ability to use research-based knowledge and research methods including design of experiments and analysis to provide valid conclusions." },
                { title: "Modern tool usage", desc: "Ability to create and apply suitable techniques and modern engineering tools such as CAD, STAAD, and modelling to complex Civil Engineering activities." },
                { title: "Professional ethics", desc: "Support the society with solutions to Civil Engineering problems focusing on sustainable development and upholding Professional ethics." },
                { title: "Teamwork", desc: "Ability to perform effectively in a team whose members together provide leadership, create a collaborative environment, and meet objectives." }
              ].map((po, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">{po.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{po.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* M.E Structural Engineering */}
          <div className="mb-12 pt-8 border-t">
            <h3 className="text-2xl font-bold text-emerald-600 mb-6">M.E (Structural Engineering)</h3>
            <p className="text-slate-700 mb-6">On completion of the M.E (Structural Engineering) degree the Post Graduates will be able to:</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Independent research", desc: "An ability to independently carry out research/investigation and development work to solve practical problems." },
                { title: "Technical writing", desc: "An ability to write and present a substantial technical report/document." },
                { title: "Design mastery", desc: "An ability to demonstrate a degree of mastery for designing and solving Structural Engineering problems." },
                { title: "Continuous learning", desc: "An ability to demonstrate the traits of learning and unlearning throughout professional career, and willingness to learn new techniques and methods." },
                { title: "Professional responsibility", desc: "Tune knowledge to be a responsible Engineer adhering to all established practices of the profession." },
                { title: "Advanced courses", desc: "Exposure to advanced courses in analysis and Design of RC, PSC and Steel Structures as per the latest design codes and international scenario." },
                { title: "Societal focus", desc: "Ability to address the societal needs by interdisciplinary approach through advanced courses like Finite Element Analysis and Structural Dynamics." },
                { title: "Industry readiness", desc: "Graduate students enriched with hands-on training on latest equipment/software to be industry ready or pursue advanced research." }
              ].map((po, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">{po.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{po.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ph.D Civil Engineering */}
          <div className="pt-8 border-t">
            <h3 className="text-2xl font-bold text-emerald-600 mb-6">Ph.D (Civil Engineering)</h3>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              <p className="text-slate-700 leading-relaxed mb-4">
                Doctor of Philosophy in Civil Engineering programs require candidates to be innovative, critical thinkers who can apply theory to practice.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The Ph.D program is designed to prepare each student to actively participate in the development and growth of the field of Civil Engineering at all levels in the Industry or in Research and Teaching in a University or a Research organization.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The program provides rigorous research training to doctoral students in contemporary research methodologies and advanced topics in Civil Engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Head of Department */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Head of the Department</h2>
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-8 border border-emerald-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Dr. P. Saravanakumar</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Position:</span> Head of the Department</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Qualification:</span> M.E., Ph.D.</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Experience:</span> 20 Years</p>
                <p className="text-slate-700"><span className="font-semibold">Specialization:</span> Structural Engineering</p>
              </div>
              <div>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Contact:</span> +91-94436 67806</p>
                <p className="text-slate-700"><span className="font-semibold">Email:</span> grpsaravanan@gmail.com</p>
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
              { name: "Dr. P. Saravanakumar", title: "Assistant Professor (Sr)", symbol: "🎓" },
              { name: "Dr. G.M. Gowthama Kumar", title: "Assistant Professor (Sr)", symbol: "🎓" },
              { name: "Dr. D. Sathies Kumar", title: "Assistant Professor", symbol: "🎓" }
            ].map((staff, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
                <div className="text-3xl mb-4">{staff.symbol}</div>
                <h3 className="font-bold text-slate-900 mb-2">{staff.name}</h3>
                <p className="text-emerald-600 font-medium text-sm">{staff.title}</p>
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
              <thead className="bg-gradient-to-r from-emerald-600 to-green-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">S.No</th>
                  <th className="px-6 py-4 text-left font-semibold">Project Title</th>
                  <th className="px-6 py-4 text-left font-semibold">Funding Agency</th>
                  <th className="px-6 py-4 text-left font-semibold">Amount</th>
                  <th className="px-6 py-4 text-left font-semibold">Period</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  { id: 1, title: "Study on prevention of corrosion of RCC structural elements", agency: "All India Council for Technical Education (AICTE)", amount: "Rs. 3,00,000", period: "2 Years" },
                  { id: 2, title: "Analysis of Road Accidents involving STU Buses", agency: "AICTE", amount: "Rs. 5,00,000", period: "2 Years" },
                  { id: 3, title: "Earthquake Resistant Design of multi-storage Buildings", agency: "DST", amount: "Rs. 8,88,000", period: "Ongoing" },
                  { id: 4, title: "Kaplan Turbine Test Rig for Hydraulics Lab", agency: "Silver Jubilee Alumni (Mr. P. Arun)", amount: "Rs. 2,50,000", period: "Completed" },
                  { id: 5, title: "Road Accident Analysis and Monitoring for a NH Stretch", agency: "NIT-Tirchy", amount: "Rs. 1,00,000", period: "Ongoing" }
                ].map((project) => (
                  <tr key={project.id} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 text-slate-700 font-medium">{project.id}</td>
                    <td className="px-6 py-4 text-slate-700">{project.title}</td>
                    <td className="px-6 py-4 text-slate-700">{project.agency}</td>
                    <td className="px-6 py-4 text-slate-700">{project.amount}</td>
                    <td className="px-6 py-4 text-slate-700">{project.period}</td>
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
              "Structural Mechanics Lab",
              "Geotechnical Engineering Lab",
              "Fluid Mechanics & Hydraulics Lab",
              "Environmental Engineering Lab",
              "Transportation Engineering Lab",
              "Surveying & GIS Lab",
              "Building Materials & Testing Lab"
            ].map((lab, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 flex items-center gap-4 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold flex-shrink-0">
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
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-8 border border-emerald-200 text-center">
            <div className="flex justify-center mb-4">{svgMapPin}</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Department of Civil Engineering</h3>
            <p className="text-slate-700">GCEE Campus, Erode</p>
          </div>
        </div>
      </section>
    </div>
  );
}
