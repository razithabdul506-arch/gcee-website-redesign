import React from 'react';

const svgMapPin = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;

export default function InformationTechnology() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-sky-500 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Department of Information Technology</h1>
          <p className="text-sky-100 text-lg">Innovative IT Professionals for Industry Excellence</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Overview</h2>
          <div className="prose max-w-none space-y-6">
            <p className="text-slate-700 leading-relaxed text-lg">
              Information Technology (IT) is the application of technology to solve organizational and business problems. Information Technology is essential for a company to ensure the efficiency and security of information systems. Demand for professionals in the Information Technology field is high and growing, with a wide range of career paths available.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              At GCEE, the Department of Information Technology is committed to producing high-profile, innovative IT professionals prepared for the challenges of the modern digital landscape. Our students gain hands-on experience with cutting-edge technologies and develop skills in cybersecurity, cloud computing, big data analytics, and artificial intelligence.
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
              <h3 className="text-xl font-bold text-sky-600 mb-4">Software Laboratories</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-sky-500 mt-1">✓</span>
                  <span>4 well-equipped software laboratories</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-500 mt-1">✓</span>
                  <span>Approximately 100 computers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-500 mt-1">✓</span>
                  <span>High-speed internet connectivity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-500 mt-1">✓</span>
                  <span>Campus-wide WiFi coverage</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-sky-600 mb-4">Hardware Laboratory</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-sky-500 mt-1">✓</span>
                  <span>Specialized hardware laboratory</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-500 mt-1">✓</span>
                  <span>All essential networking equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-500 mt-1">✓</span>
                  <span>Server and infrastructure setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-500 mt-1">✓</span>
                  <span>24x7 laboratory access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Educational Objectives */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Programme Educational Objectives (PEOs)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Innovative IT Solutions",
                description: "Train students to identify, analyse, design and implement secured innovative Information Technology solutions for real-time applications."
              },
              {
                title: "Specialized Expertise",
                description: "Gain knowledge in specialized areas such as artificial intelligence, big data analytics, cloud computing, and cybersecurity to meet industry needs."
              },
              {
                title: "Professional Excellence",
                description: "Develop intellectually alert, scientifically progressive, globally competent and dynamic IT professionals with team spirit and leadership skills."
              },
              {
                title: "Essential Skills",
                description: "Encourage students to practice communication, problem-solving and decision-making skills through appropriate technology and business understanding."
              }
            ].map((peo, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
                <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 font-bold mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{peo.title}</h3>
                <p className="text-slate-700 leading-relaxed">{peo.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Outcomes */}
      <section className="py-16 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Programme Outcomes (POs)</h2>
          <p className="text-slate-700 leading-relaxed mb-8">On completion of the course, graduate students will be able to:</p>
          <div className="space-y-4">
            {[
              "Build communication networks for companies, safeguarding data and information, creating and administering databases, helping employees troubleshoot problems with computers or mobile devices, and ensure efficiency and security of business information.",
              "Use computers, networks, storage, and other technical infrastructure both hardware and software to deal with and manipulate information or data.",
              "Identify, analyse, design, implement and deliver quality products with enhanced resource utilization.",
              "Work in cross-domain projects and identify appropriate technology and tools to design and develop optimized solutions to meet client requirements.",
              "Discover and adapt to new technologies and offer the best products and services to clients.",
              "Realize the need for ethics and human values and make positive contributions in the IT field and society."
            ].map((po, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold flex-shrink-0 mt-1">
                  {idx + 1}
                </div>
                <p className="text-slate-700 leading-relaxed">{po}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Head of Department */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Head of the Department</h2>
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg p-8 border border-sky-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Dr. I. Bhuvaneshwarri</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Position:</span> Head of the Department (In-charge)</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Qualification:</span> M.E., Ph.D.</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Experience:</span> 24 Years</p>
                <p className="text-slate-700"><span className="font-semibold">Specialization:</span> Big Data Analytics, Data Mining, Web Technology & Network Security</p>
              </div>
              <div>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Publications:</span> 10 Conference Papers & 12 Journal Articles</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Books & Patents:</span> 1 Book & 1 Patent</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Contact:</span> +91-9442689006</p>
                <p className="text-slate-700"><span className="font-semibold">Email:</span> pbw.irtt@gmail.com</p>
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
              { name: "Dr. I. Bhuvaneshwarri", title: "Assistant Professor (Sr)", symbol: "🎓" },
              { name: "Dr. K. G. Maheswari", title: "Assistant Professor (Sr)", symbol: "🎓" },
              { name: "Dr. M. Poongothai", title: "Assistant Professor (Sr)", symbol: "🎓" },
              { name: "Mrs. R. Sathyavani", title: "Assistant Professor (Sr)", symbol: "🎓" },
              { name: "Dr. S. Thilagavathi", title: "Assistant Professor (Sr)", symbol: "🎓" },
              { name: "Dr. S. Mohanasundaram", title: "Assistant Professor (Sr)", symbol: "🎓" },
              { name: "Dr. P. Thangavel", title: "Assistant Professor (Sr)", symbol: "🎓" },
              { name: "Dr. M. Sathyakala", title: "Assistant Professor", symbol: "🎓" },
              { name: "Dr. M. N. Sudha", title: "Assistant Professor", symbol: "🎓" },
              { name: "Mr. B. V. Prakash", title: "Assistant Professor", symbol: "🎓" },
              { name: "Dr. R. Anurekha", title: "Assistant Professor", symbol: "🎓" },
              { name: "Dr. K. Murugan", title: "Assistant Professor", symbol: "🎓" },
              { name: "Dr. T. Sumathi", title: "Assistant Professor", symbol: "🎓" }
            ].map((staff, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
                <div className="text-3xl mb-4">{staff.symbol}</div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm">{staff.name}</h3>
                <p className="text-sky-600 font-medium text-xs">{staff.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization Areas */}
      <section className="py-16 border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Key Focus Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Artificial Intelligence & Machine Learning",
              "Big Data Analytics",
              "Cloud Computing & Virtualization",
              "Cybersecurity & Network Security",
              "Web Technologies & Development",
              "Mobile Application Development",
              "Software Engineering & DevOps",
              "Database Management Systems"
            ].map((area, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 font-bold flex-shrink-0">
                  ✓
                </div>
                <p className="text-slate-900 font-medium">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratories */}
      <section className="py-16 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Laboratories</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              "Software Development Laboratory I",
              "Software Development Laboratory II",
              "Software Development Laboratory III",
              "Software Development Laboratory IV",
              "Hardware & Networking Laboratory"
            ].map((lab, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 flex items-center gap-4 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-slate-900 font-medium">{lab}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Lab Features</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-sky-500 mt-1 flex-shrink-0">✓</span>
                <span>100+ High-performance computers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-500 mt-1 flex-shrink-0">✓</span>
                <span>Advanced networking equipment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-500 mt-1 flex-shrink-0">✓</span>
                <span>24x7 access to facilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-500 mt-1 flex-shrink-0">✓</span>
                <span>High-speed Internet & WiFi</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-500 mt-1 flex-shrink-0">✓</span>
                <span>Latest Software Tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-500 mt-1 flex-shrink-0">✓</span>
                <span>Server Infrastructure</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technologies & Tools */}
      <section className="py-16 border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Technologies & Tools</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Java & J2EE",
              "Python & Django",
              "C# & .NET",
              "JavaScript & React",
              "SQL & NoSQL",
              "Apache Hadoop",
              "Apache Spark",
              "Oracle & MySQL",
              "Linux Administration",
              "Cloud Platforms (AWS, Azure)",
              "Cybersecurity Tools",
              "Docker & Kubernetes"
            ].map((tool, idx) => (
              <div key={idx} className="bg-slate-50 rounded-lg p-4 shadow-sm border border-slate-200 text-center">
                <p className="text-slate-900 font-medium text-sm">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Locate Us</h2>
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg p-8 border border-sky-200 text-center">
            <div className="flex justify-center mb-4">{svgMapPin}</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Department of Information Technology</h3>
            <p className="text-slate-700">IT Block, GCEE Campus, Erode</p>
          </div>
        </div>
      </section>
    </div>
  );
}
