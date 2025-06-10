import React from "react";
import { Link } from "react-router-dom";

const Sem4_ece_PreviousPapers = () => {
  return (
    <div className="fixed inset-0 bg-black text-white overflow-auto">
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-center text-indigo-400 drop-shadow-md">
          📄 Semester 4 ECE - Previous Year Papers
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Analog Communication */}
          <Link
            to="/sem4/ece/analog-communication-papers"
            className="bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/en_py.png" alt="Analog Communication" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Analog Communication
            </h2>
          </Link>

          {/* Antenna And Wave Propagation */}
          <Link
            to="/sem4/ece/antenna-wave-propagation-papers"
            className="bg-gradient-to-br from-red-400 to-red-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/fee.png" alt="Antenna And Wave Propagation" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Antenna And Wave Propagation
            </h2>
          </Link>

          {/* CMOS VLSI Design */}
          <Link
            to="/sem4/ece/cmos-vlsi-design-papers"
            className="bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/linear_algebra.png" alt="CMOS VLSI Design" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              CMOS VLSI Design
            </h2>
          </Link>

          {/* Control System */}
          <Link
            to="/sem4/ece/control-system-papers"
            className="bg-gradient-to-br from-purple-400 to-purple-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/psp.png" alt="Control System" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Control System
            </h2>
          </Link>

          {/* Integrated Circuit Technologies */}
          <Link
            to="/sem4/ece/integrated-circuit-tech-papers"
            className="bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/com_skill.png" alt="Integrated Circuit Technologies" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Integrated Circuit Technologies
            </h2>
          </Link>

          {/* Money And Banking */}
          <Link
            to="/sem4/ece/money-and-banking-papers"
            className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Money And Banking" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Money And Banking
            </h2>
          </Link>

          {/* Network Synthesis And Analog Filters */}
          <Link
            to="/sem4/ece/network-synthesis-filters-papers"
            className="bg-gradient-to-br from-pink-400 to-pink-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Network Synthesis And Analog Filters" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Network Synthesis And Analog Filters
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sem4_ece_PreviousPapers;
