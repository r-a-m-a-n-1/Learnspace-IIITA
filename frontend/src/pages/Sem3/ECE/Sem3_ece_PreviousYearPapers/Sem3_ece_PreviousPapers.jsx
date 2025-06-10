import React from "react";
import { Link } from "react-router-dom";

const Sem3_ece_Papers = () => {
  return (
    <div className="fixed inset-0 bg-black text-white overflow-auto">
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-center text-indigo-400 drop-shadow-md">
          📄 Semester 3 ECE - Papers
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Analog Electronics And Linear ICs */}
          <Link
            to="/sem3/ece/analog-electronics-papers"
            className="bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/en_py.png" alt="Analog Electronics And Linear ICs" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Analog Electronics And Linear ICs
            </h2>
          </Link>

          {/* Biology For Engineers */}
          <Link
            to="/sem3/ece/biology-engineers-papers"
            className="bg-gradient-to-br from-red-400 to-red-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/fee.png" alt="Biology For Engineers" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Biology For Engineers
            </h2>
          </Link>

          {/* Electromagnetic Field And Waves */}
          <Link
            to="/sem3/ece/em-field-waves-papers"
            className="bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/linear_algebra.png" alt="Electromagnetic Field And Waves" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Electromagnetic Field And Waves
            </h2>
          </Link>

          {/* Indian Economics */}
          <Link
            to="/sem3/ece/indian-economics-papers"
            className="bg-gradient-to-br from-purple-400 to-purple-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/psp.png" alt="Indian Economics" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Indian Economics
            </h2>
          </Link>

          {/* MicroProcessor Interface And Programming */}
          <Link
            to="/sem3/ece/microprocessor-interface-papers"
            className="bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/com_skill.png" alt="MicroProcessor Interface And Programming" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              MicroProcessor Interface & Programming
            </h2>
          </Link>

          {/* Introduction To Finance */}
          <Link
            to="/sem3/ece/finance-intro-papers"
            className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Introduction To Finance" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Introduction To Finance
            </h2>
          </Link>

          {/* Signal And System */}
          <Link
            to="/sem3/ece/signal-systems-papers"
            className="bg-gradient-to-br from-cyan-400 to-cyan-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Signal And System" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Signal And System
            </h2>
          </Link>

          {/* UnnatBharat Abhiyaan */}
          <Link
            to="/sem3/ece/unnat-bharat-papers"
            className="bg-gradient-to-br from-teal-400 to-teal-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="UnnatBharat Abhiyaan" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              UnnatBharat Abhiyaan
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sem3_ece_Papers;
