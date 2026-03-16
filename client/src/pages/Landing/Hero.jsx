import React from "react";
import landing1 from '../../assets/landing1.jpg';
import landing2 from '../../assets/landing2.jpg';
import landing3 from '../../assets/landing3.jpg';

const Hero = () => {
  return (
    <div className="relative min-h-screen font-sans bg-white overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_70%,transparent_100%)] z-0" />

      {/* Abstract floating shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-cyan-200/30 to-purple-200/30 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl z-0" />

      {/* Main content */}
      <div className="relative z-10 min-h-[calc(100vh-82px)] grid grid-cols-1 items-center gap-5 px-10 pb-10 md:grid-cols-2">
        
        {/* Left - dynamic image cluster */}
        <div className="relative h-[600px] w-full">
          {/* Primary image - largest, centered */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[560px] overflow-hidden rounded-3xl shadow-2xl shadow-cyan-500/10 rotate-3">
            <img
              src={landing1}
              alt="landing visual 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent" />
          </div>

          {/* Secondary image - top left, overlapping */}
          <div className="absolute top-0 left-0 w-[280px] h-[320px] overflow-hidden rounded-3xl shadow-xl shadow-purple-500/10 -rotate-6">
            <img
              src={landing2}
              alt="landing visual 2"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent" />
          </div>

          {/* Tertiary image - bottom right, overlapping */}
          <div className="absolute bottom-0 right-0 w-[200px] h-[240px] overflow-hidden rounded-3xl shadow-lg shadow-blue-500/10 rotate-12">
            <img
              src={landing3}
              alt="landing visual 3"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/5 via-transparent to-transparent" />
          </div>
        </div>

        {/* Right - sleek text panel */}
        <div className="pl-0 md:pl-6">
          <div className="max-w-xl">
            <h1 className="mb-6 font-serif text-[72px] font-black leading-[1.1] text-gray-900">
              The smarter
              <br />
              way to connect
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-dark">
                talent & opportunity
              </span>
            </h1>

            <p className="mb-4 text-lg font-medium text-gray-700">
              A modern placement platform built for engineering students, universities, and hiring companies.
            </p>

            <p className="mb-10 text-base leading-relaxed text-gray-500 max-w-lg">
              NexlyLink brings students, companies, and placement administrators into one collaborative workspace.
              Discover opportunities, manage applications, and track hiring progress in real time.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-md">
                Explore Opportunities
              </button>
              <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                Learn How It Works
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;