import React, { useState, useEffect, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("skills");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      category: "Programming Languages",
      items: ["Java", "C & C++", "Python"],
    },
    {
      category: "Web Development",
      items: ["HTML & CSS", "React.js", "Tailwind CSS", "Node.js & Express.js"],
    },
    {
      category: "AI & ML",
      items: ["Flask", "scikit-learn", "Retrieval-Augmented Generation (RAG)"],
    },
  ];
  const education = [
    {
      degree: "Bachelor's in Computer Science and Engineering",
      school: "R V College Of Engineering, Bengaluru",
      year: "2023-2027",
    },
    {
      degree: "Pre-University PCMB",
      school: "Vidyanidhi PU College, Tumakuru",
      year: "2021-2023",
    },
    {
      degree: "Schooling",
      school: "Sri Chaitanya Techno School, Tumakuru",
      year: "2017-2021",
    },
  ];

  const certificates = [
    {
      name: "Data Science for Engineers",
      issuer: "NPTEL",
      year: "2025",
    },
    {
      name: "Programming in Java",
      issuer: "NPTEL",
      year: "2024",
    },
  ];

  const tabContent = { skills, education, certificates };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-b from-black via-slate-900 to-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Side: Skills-related Image
          <div className="flex-shrink-0 w-full lg:w-1/3 flex justify-center lg:justify-start">
            <img
              src="/about.jpg"
              alt="Skills Illustration"
              className="rounded-2xl shadow-xl object-cover w-72 h-72 sm:w-64 sm:h-64 lg:w-72 lg:h-72 border-4 border-cyan-400/40"
            />
          </div> */}

          {/* Right Side: Tabs & Content */}
          <div className="w-full max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
              {/* Tabs */}
              <div className="flex flex-wrap justify-center mb-8 bg-gray-800/30 rounded-2xl p-2">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 min-w-[120px] px-4 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                        : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[300px] sm:min-h-[400px] flex flex-col items-center justify-center">
                {activeTab === "skills" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 animate-fade-in">
                    {skills.map((skill, index) => (
                      <div
                        key={skill.category}
                        className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-2xl p-5 sm:p-7 border border-cyan-700/20 shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 group"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <h3 className="text-lg sm:text-xl font-extrabold text-cyan-400 mb-4 tracking-wide border-b border-cyan-400/30 pb-2 text-center">
                          {skill.category}
                        </h3>
                        <ul className="space-y-2">
                          {skill.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-sm sm:text-base font-semibold text-white mb-1 text-center"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "education" && (
                  <div className="space-y-6 animate-fade-in w-full flex flex-col items-center">
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/40 rounded-xl p-5 sm:p-6 border border-gray-600/20 hover:border-cyan-400/30 transition-all duration-300 group w-full max-w-md mx-auto"
                      >
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">
                          {edu.degree}
                        </h3>
                        <p className="text-cyan-400 font-medium mb-1 text-center">
                          {edu.school}
                        </p>
                        <p className="text-gray-400 text-center">{edu.year}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "certificates" && (
                  <div className="space-y-6 animate-fade-in w-full flex flex-col items-center">
                    {certificates.map((cert, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/40 rounded-xl p-5 sm:p-6 border border-gray-600/20 hover:border-cyan-400/30 transition-all duration-300 group w-full max-w-md mx-auto"
                      >
                        <h3 className="text-sm sm:text-base lg:text-lg text-white font-bold mb-2 text-center">
                          {cert.name}
                        </h3>
                        <p className="text-cyan-400 font-medium mb-1 text-sm sm:text-base text-center">
                          {cert.issuer}
                        </p>
                        <p className="text-gray-400 text-sm sm:text-base text-center">
                          {cert.year}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fade Animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
            filter: blur(2px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
}
