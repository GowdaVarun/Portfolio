import projects from "../data/Project";
import React from "react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 via-slate-900 to-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 pb-2 text-center bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Projects
        </h2>

        {/* Flex layout for centering last row */}
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl p-7 border border-cyan-700/20 shadow-xl hover:shadow-cyan-400/20 transition-all duration-300 group relative flex flex-col justify-between backdrop-blur-xl animate-fade-in"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl w-full h-44 object-cover mb-4 border-2 border-cyan-400/30 shadow-lg"
                />
                <h3 className="font-bold text-xl sm:text-2xl text-cyan-400 mb-2">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.techStack?.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-600/20 text-cyan-300 px-2 py-1 rounded text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.location && project.duration && (
                  <p className="text-xs text-gray-400 mb-2">
                    {project.location} &bull; {project.duration}
                  </p>
                )}
                <p className="text-sm text-gray-200 mb-2">
                  {project.description}
                </p>
              </div>

              {project.repo && (
                <div className="mt-4 flex justify-end">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded shadow transition-all duration-200"
                  >
                    View Repo
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Animation styling */}
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
