import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black relative overflow-hidden flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white mb-2">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  Varun Gowda R
                </span>
              </h1>
              <div className="text-lg sm:text-xl lg:text-2xl text-gray-300 h-8">
                <span className="px-2 sm:px-4">
                  <TypeAnimation
                    sequence={[
                      'Problem Solver',
                      1000,
                      'Web Development',
                      1000,
                      'Java & DSA Enthusiast',
                      1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              I'm a student at RV College of Engineering who enjoys coding and
              learning new things. I work on projects in web development, AI,
              and machine learning, focusing on creating useful solutions to
              real problems. I like tackling challenges and working with others
              to build meaningful results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-600 rounded-xl font-semibold text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 hover:bg-cyan-400/5"
                onClick={() =>
                  window.open(
                    'https://drive.google.com/file/d/1zgOhsJ8bFvRZP228yp4aY_rZ9UqrelfT/view?usp=sharing',
                    '_blank'
                  )
                }
              >
                <span className="flex items-center space-x-2">
                  <span>Download CV</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative group">
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full p-1 animate-spin-slow">
                  <div className="w-full h-full bg-gray-900 rounded-full" />
                </div>
                <div className="absolute inset-2 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                    <img
                      src="/profile.jpg"
                      alt="Profile"
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full blur-2xl scale-110 opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
