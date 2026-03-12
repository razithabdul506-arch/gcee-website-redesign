import React from 'react';

const svgMapPin = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;

export default function ECEEngineering() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Electronics & Communication Engineering</h1>
          <p className="text-purple-100 text-lg">Department of Electronics & Communication Engineering - GCEE</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Overview</h2>
          <div className="prose max-w-none space-y-6">
            <p className="text-slate-700 leading-relaxed text-lg">
              Communication Technology is driving our lives like never before. With IT improving system efficiencies, the demand for quality electrical and communication engineers continues to soar. Major IT corporations are forever on the lookout for qualitative talent.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              A talent that continues to imbibe new technologies and still develop newer ones. A talent that is comfortable with the latest hardware and software. Finally, a talent that has the creative ability to invent and innovate.
            </p>
          </div>
        </div>
      </section>

      {/* Access to Computing */}
      <section className="py-16 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Access to Computing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-purple-600 mb-4">Learning Resources</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>24x7 access to computing facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>Digital library access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>Internet resources and information services</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-purple-600 mb-4">Industry Engagement</h3>
              <p className="text-slate-700 leading-relaxed">
                Our students are programmed to be in sync with the evolving needs of the industry. They regularly visit leading IT Organisations in India and keep themselves updated with the latest in the field.
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
            {[
              "To enable the students to provide solutions to complex problems and to build new products by educating them with strong fundamental and advanced techniques.",
              "To provide solutions to problems identified by giving training to the students related to area of specialization and develop innovative research oriented methods.",
              "To enable the electronics and communication engineering graduates to continue higher studies in reputed institutions, to pursue standard research and to have successful career both in academic and industries."
            ].map((peo, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <div className="flex gap-4">
                  <div className="text-purple-600 text-2xl font-bold flex-shrink-0">{idx + 1}</div>
                  <p className="text-slate-700 leading-relaxed">{peo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Outcomes */}
      <section className="py-16 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Programme Outcomes (POs)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "Fundamental Application", 
                desc: "Apply the fundamental concepts of electronics and communication engineering for analyzing, designing and providing solutions to engineering field." 
              },
              { 
                title: "Product Development", 
                desc: "Apply the knowledge acquired in electronics and communication engineering for developing high standard products for scientific and other engineering applications." 
              },
              { 
                title: "ICT Innovation", 
                desc: "Adapt to thrust areas in information and communication technologies (ICT) to innovate new products and solutions to problems related to new trends." 
              }
            ].map((po, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-3">{po.title}</h4>
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
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 border border-purple-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Mr. M. Raja</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Position:</span> Head of the Department</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Qualification:</span> M.E.</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Experience:</span> 30 Years</p>
                <p className="text-slate-700"><span className="font-semibold">Specialization:</span> Microwave Engineering</p>
              </div>
              <div>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Publications:</span> 2 Conference Papers & 2 Journal Articles</p>
                <p className="text-slate-700 mb-4"><span className="font-semibold">Contact:</span> +91-9842765554</p>
                <p className="text-slate-700"><span className="font-semibold">Email:</span> raja@irttech.ac.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patents & Intellectual Property */}
      <section className="py-16 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Patents & Intellectual Property</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple-600 mb-6">Patents Filed</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-gradient-to-r from-purple-600 to-pink-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Applicant Name</th>
                    <th className="px-6 py-4 text-left font-semibold">Application No.</th>
                    <th className="px-6 py-4 text-left font-semibold">Filed Date</th>
                    <th className="px-6 py-4 text-left font-semibold">Title</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 text-slate-700 font-medium">R. Senthilkumar</td>
                    <td className="px-6 py-4 text-slate-700">201841033876</td>
                    <td className="px-6 py-4 text-slate-700">09/09/2018</td>
                    <td className="px-6 py-4 text-slate-700 text-sm">A Fast Accurate Face Recognition System using Combined Wavelet Decomposition and Correlation Test</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-purple-600 mb-6">Copyrights Registered</h3>
            <div className="space-y-4">
              {[
                { author: "Dr. R. Senthilkumar", regNo: "L-72758/2018", date: "January 2018", title: "A Novel Artificial Neural Network and 2DPCA Based Hybrid Approach for Face Recognition", type: "Literary" },
                { author: "Dr. R. Senthilkumar", regNo: "11876/2018-Co/Sw", date: "September 2018", title: "Automatic Rearrangement of Face Images in Train Set Face Database Based on Correlation Statistics Using Scilab Software", type: "Computer Software" },
                { author: "Dr. R. Senthilkumar", regNo: "L-85333/2019", date: "July 2019", title: "Statistical Measures to Test the Stability of Face Recognition Approach", type: "Literary" },
                { author: "Dr. R. Senthilkumar & Dr. R. Valarmathi", regNo: "L-93372/2020", date: "July 2020", title: "Machine Learning Based Classification of Contaminated Drinking Water using Raspberry PI Embedded System and IoT Device", type: "Literary" },
                { author: "Dr. R. Senthilkumar", regNo: "SW-14014/2020", date: "December 2020", title: "Automatic rearrangement of face images in train set face database based on correlation statistics using Scilab software", type: "Software" }
              ].map((copy, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-slate-900">{copy.title}</h4>
                    <span className="text-xs font-semibold bg-purple-100 text-purple-800 px-3 py-1 rounded-full">{copy.type}</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-2"><span className="font-semibold">Author:</span> {copy.author}</p>
                  <p className="text-slate-600 text-sm"><span className="font-semibold">Reg No:</span> {copy.regNo} | <span className="font-semibold">Date:</span> {copy.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Completed */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Projects Completed</h2>
          <div className="space-y-4">
            {[
              { title: "Lab Migration Communication System Laboratory", pi: "Dr. R. Senthilkumar", duration: "3 Months", completion: "September 2012", sponsor: "IIT Bombay (MHRD)", amount: "Rs. 10,000" },
              { title: "Lab Migration – Digital Signal Processing Laboratory", pi: "Dr. R. Senthilkumar", duration: "3 Months", completion: "September 2012", sponsor: "IIT Bombay (MHRD)", amount: "Rs. 10,000" },
              { title: "Keeping Bridges Safe: New Imaging Program Automatically Detects Irregularities in Bridges", pi: "Dr. R. Senthilkumar", duration: "1 Month", completion: "October 2012", sponsor: "IRT Taramani Chennai", amount: "--" }
            ].map((proj, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3">{proj.title}</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-600"><span className="font-semibold">PI:</span> {proj.pi}</p>
                    <p className="text-slate-600"><span className="font-semibold">Duration:</span> {proj.duration}</p>
                  </div>
                  <div>
                    <p className="text-slate-600"><span className="font-semibold">Completion:</span> {proj.completion}</p>
                    <p className="text-slate-600"><span className="font-semibold">Sponsor:</span> {proj.sponsor} ({proj.amount})</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Publications */}
      <section className="py-16 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Books Publications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Signals and Systems", author: "Dr. R. Senthilkumar", publisher: "Anuradha Publications, Chennai", year: "2012 (2nd Edition)" },
              { title: "Digital Signal Processing and Its Applications (with Scilab Programs)", author: "Dr. R. Senthilkumar", publisher: "Garuda Learning, Chennai", year: "2017 (2nd Edition)" },
              { title: "Electromagnetic Fields", author: "Dr. R. Senthilkumar", publisher: "Garuda Learning, Chennai", year: "2017 (2nd Edition)" },
              { title: "Analog and Digital Communication", author: "Dr. R. Senthilkumar", publisher: "Anuradha Publications, Chennai", year: "2015 (1st Edition)" },
              { title: "Circuit Theory", author: "Dr. R. Senthilkumar", publisher: "YesDee, Chennai", year: "2017" },
              { title: "Electric Circuits Theory and Analysis", author: "Dr. R. Senthilkumar", publisher: "YesDee, Chennai", year: "2018" }
            ].map((book, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">{book.title}</h4>
                <p className="text-slate-600 text-sm mb-2"><span className="font-semibold">Author:</span> {book.author}</p>
                <p className="text-slate-600 text-sm mb-1"><span className="font-semibold">Publisher:</span> {book.publisher}</p>
                <p className="text-slate-600 text-sm"><span className="font-semibold">Year:</span> {book.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops & Training Programs */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Workshops & Training Programs</h2>
          <div className="text-sm">
            <p className="text-slate-700 mb-6 text-base">The department has organized 25+ workshops, seminars, and training programs on various topics including MATLAB, Scilab, LabVIEW, Python, Embedded Systems, and more.</p>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Notable Training Programs</h3>
              <ul className="space-y-3">
                {[
                  "MATLAB for Research Applications",
                  "Open Source Signal Processing Software Scilab",
                  "NI LabVIEW and LabVIEW Integration",
                  "Digital Image Processing using Scilab",
                  "Python for Signal Processing and Data Science",
                  "Embedded and Real Time Systems",
                  "Scientific Computing with Python",
                  "C, C++, Java Programming Workshops",
                  "KiCAD & Circuit Design",
                  "AICTE Sponsored Faculty Development Programme"
                ].map((prog, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span className="text-slate-700">{prog}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Achievements */}
      <section className="py-16 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Awards & Achievements</h2>
          <div className="space-y-4">
            {[
              { faculty: "Dr. G. Balasubramanian & Dr. G. Gowrison", achievement: "IEEE publication in IEEE Signal Processing Letter (Impact factor: 3.268)", year: "October 2015" },
              { faculty: "Dr. P. Kaliram", achievement: "NPTEL Topper Rank 1 - Modern Digital Communication Techniques", year: "January-April 2019" },
              { faculty: "Dr. P. K. Kowsalya", achievement: "Appreciation Certificate from Texas Instruments for NPTEL Course 'Embedded System Design using MSP430 MCU'", year: "June-December 2020" }
            ].map((award, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-bold text-slate-900">{award.faculty}</h4>
                  <span className="text-xs font-semibold bg-purple-100 text-purple-800 px-3 py-1 rounded-full">{award.year}</span>
                </div>
                <p className="text-slate-600">{award.achievement}</p>
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
              "Digital Electronics Laboratory",
              "Analog Electronics Laboratory",
              "Microprocessor Laboratory",
              "Communication Systems Laboratory",
              "Digital Signal Processing Laboratory",
              "Microwave Engineering Laboratory",
              "VLSI Design Laboratory",
              "Embedded Systems Laboratory",
              "RF and Antenna Laboratory",
              "Simulation & Prototyping Laboratory"
            ].map((lab, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 flex items-center gap-4 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-bold flex-shrink-0">
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
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 border border-purple-200 text-center">
            <div className="flex justify-center mb-4">{svgMapPin}</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Department of Electronics & Communication Engineering</h3>
            <p className="text-slate-700">GCEE Campus, Erode</p>
          </div>
        </div>
      </section>
    </div>
  );
}
