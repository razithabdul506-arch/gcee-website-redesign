import React from 'react';

const svgMapPin = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;

export default function CSEDataScience() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Computer Science & Engineering (Data Science)</h1>
          <p className="text-cyan-100 text-lg">Department of CSE (Data Science) - GCEE</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Overview</h2>
          <div className="prose max-w-none space-y-6">
            <p className="text-slate-700 leading-relaxed text-lg">
              Information Technology has thrown open limitless possibilities. The world is now just a click away. What we have seen as a result of the IT revolution is just a tip of the iceberg. Needless to say, the demand for quality computer science and engineering professionals will always be on the rise.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              The Data Science specialization combines computer science fundamentals with advanced analytics, machine learning, and artificial intelligence to solve complex real-world problems. Our students have access to some of the best learning tools including 24x7 computing access, digital library, internet resources, and information services.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              Our students are programmed to be in sync with the evolving needs of the industry. They regularly visit leading IT and Data Analytics organizations in India and keep themselves updated with the latest technologies and trends in the field.
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
              <h3 className="text-xl font-bold text-cyan-600 mb-4">Library Resources</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Over 1000 volumes of books</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Data Science & Analytics specialized collections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Yearly updated collections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Digital library with online resources</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-cyan-600 mb-4">Learning Access</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>24x7 computing and server access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Big Data tools and platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Internet and cloud resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Industry engagement opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Head of Department */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Head of the Department</h2>
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-8 border border-cyan-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Dr. A. Kavitha</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Position:</span> Head of the Department</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Qualification:</span> M.E., Ph.D.</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Specialization:</span> Semantic Web & Data Engineering</p>
              </div>
              <div>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Publications:</span> 3 Conference Papers & 6 Journal Articles</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Contact:</span> 9442513055</p>
                <p className="text-slate-700"><span className="font-semibold">Email:</span> kavitha@gcee.ac.in</p>
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
              { name: "Mr. R. Sivasubramanian", title: "Associate Professor", symbol: "🎓" },
              { name: "Dr. G. Venkatachalam", title: "Associate Professor", symbol: "🎓" },
              { name: "Dr. A. Kavidha", title: "Associate Professor", symbol: "🎓" },
              { name: "Mrs. M. Annapoorani", title: "Assistant Professor (Sr)", symbol: "🎓" },
              { name: "Dr. S. Palanisamy", title: "Assistant Professor (Sr)", symbol: "🎓" },
              { name: "Dr. N. Magesh", title: "Assistant Professor (Sr)", symbol: "🎓" },
              { name: "Dr. M. Marikkannan", title: "Assistant Professor (Sr)", symbol: "🎓" },
              { name: "Mr. N. Thirugnanasambandan", title: "Assistant Professor (Sr)", symbol: "🎓" },
              { name: "Dr. D. S. Thenmozhi", title: "Assistant Professor (Sr)", symbol: "🎓" },
              { name: "Dr. V. Thilagavathe", title: "Assistant Professor", symbol: "🎓" },
              { name: "Dr. R. Kalaivani", title: "Assistant Professor", symbol: "🎓" },
              { name: "Mrs. N. Vasuki", title: "Assistant Professor", symbol: "🎓" },
              { name: "Dr. S. Kalaivani", title: "Assistant Professor", symbol: "🎓" },
              { name: "Mr. S. P. Vijayanand", title: "Assistant Professor", symbol: "🎓" },
              { name: "Mr. K. Narayanan", title: "Assistant Professor", symbol: "🎓" },
              { name: "Mrs. S. Vijayalakshmi", title: "Assistant Professor", symbol: "🎓" }
            ].map((staff, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
                <div className="text-3xl mb-4">{staff.symbol}</div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm">{staff.name}</h3>
                <p className="text-cyan-600 font-medium text-xs">{staff.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOSS & Free Software Philosophy */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">FOSS & Data Science Tools</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 mb-8">
            <h3 className="text-xl font-bold text-cyan-600 mb-4">Free & Open Source Software (FOSS)</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Free Software is a matter of liberty, not price. Think of free as in "free speech", not as in "free cool drink". Users' freedom to run, copy, distribute, study, change and improve the software.
            </p>
            <p className="text-slate-700 leading-relaxed">
              The Data Science program emphasizes open-source tools and frameworks like Python, R, Apache Spark, TensorFlow, scikit-learn, and more, ensuring students gain practical experience with industry-standard, community-driven technologies.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-6">Research & Development Projects</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
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
                  { id: 1, title: "Entrepreneurship promotion programme through training on software technologies and data analytics applications", agency: "DSIR, New Delhi", amount: "Rs. 7,14,000", year: "2011" },
                  { id: 2, title: "Semantic Web and Ontological Engineering with Big Data Integration", agency: "AICTE-Chennai, PSG College of Tech and HP Industries", amount: "Rs. 2,00,000", year: "2010" },
                  { id: 3, title: "Cloud Computing and Data Analytics Seminar", agency: "CSIR", amount: "Rs. 40,000", year: "2009" },
                  { id: 4, title: "Machine Learning Applications in Engineering and Medicine", agency: "AICTE", amount: "Rs. 60,000", year: "2009" },
                  { id: 5, title: "Big Data Processing using Open Source LAMP Stack", agency: "AICTE", amount: "Rs. 60,000", year: "2009" },
                  { id: 6, title: "IBM Community Software and Data Tools", agency: "IBM Software Labs, Bangalore", amount: "--", year: "2008" },
                  { id: 7, title: "Neural Networks and Deep Learning for Pattern Recognition", agency: "AICTE-ISTE", amount: "Rs. 60,000", year: "Ongoing" }
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

      {/* Data Science Specializations */}
      <section className="py-16 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Data Science Specializations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Data Analytics & Business Intelligence",
              "Machine Learning & Artificial Intelligence",
              "Big Data Processing & Analytics",
              "Deep Learning & Neural Networks",
              "Natural Language Processing",
              "Computer Vision & Image Processing",
              "Predictive Modeling & Statistics",
              "Cloud-Based Data Engineering"
            ].map((area, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold flex-shrink-0">
                  ✓
                </div>
                <p className="text-slate-900 font-medium">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratories */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Laboratories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Data Analytics Laboratory",
              "Big Data Processing Laboratory",
              "Machine Learning Laboratory",
              "Deep Learning & AI Laboratory",
              "Data Visualization Laboratory",
              "Statistical Computing Laboratory",
              "Natural Language Processing Laboratory",
              "Cloud Computing & Distributed Systems Lab",
              "Database Systems Laboratory",
              "Data Mining & Knowledge Discovery Lab"
            ].map((lab, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 flex items-center gap-4 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-slate-900 font-medium">{lab}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Tools & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Python (NumPy, Pandas, Scikit-learn)",
              "R & RStudio",
              "Apache Spark & Hadoop",
              "TensorFlow & Keras",
              "PyTorch",
              "SQL & NoSQL Databases",
              "Tableau & Power BI",
              "Jupyter Notebooks",
              "Google Colab",
              "AWS & Azure Cloud",
              "Docker & Kubernetes",
              "Git & GitHub"
            ].map((tool, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 text-center">
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
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-8 border border-cyan-200 text-center">
            <div className="flex justify-center mb-4">{svgMapPin}</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Department of Computer Science & Engineering (Data Science)</h3>
            <p className="text-slate-700">GCEE Campus, Erode</p>
          </div>
        </div>
      </section>
    </div>
  );
}
