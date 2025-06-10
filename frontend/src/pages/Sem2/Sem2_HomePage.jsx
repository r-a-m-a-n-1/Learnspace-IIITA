// import React from "react";
// import { Link } from "react-router-dom";

// const Sem2_HomePage = () => {
//   return (
//     <div className="fixed inset-0 bg-black text-white overflow-auto">
//       {/* Logo at Top-Left */}
//       <div className="absolute top-4 left-4 z-[99999] flex items-center space-x-3">
//         <img
//           src="/vedio_lecture.png" // Path to your logo
//           alt="Logo"
//           className="w-12 h-12 rounded-full"
//         />
//         <h2 className="text-3xl font-bold text-gray-300">Video Lecture</h2>
//       </div>

//       {/* Custom Navbar */}
//       <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-800 via-black to-black p-4 shadow-lg z-[99999]">
//         <div className="max-w-screen-xl mx-auto flex items-center justify-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-200">
//             Choose your Branch
//           </h1>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="pt-24 pb-8 max-w-screen-xl mx-auto px-4 flex justify-center items-center min-h-[calc(100vh-6rem)]">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {/* Card 1 - IT */}
//           <Link
//             to="/sem2/it"
//             className="cursor-pointer bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white shadow-xl rounded-xl w-60 h-60 md:w-64 md:h-64 flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:from-gray-600 hover:via-gray-700 hover:to-gray-800"
//           >
//             <img src="/IT_logo.png" alt="IT" className="w-16 h-16 mb-4" />
//             <h2 className="text-xl md:text-2xl font-bold tracking-wide">IT</h2>
//           </Link>

//           {/* Card 2 - IT-BI */}
//           <Link
//             to="/sem2/itbi"
//             className="cursor-pointer bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white shadow-xl rounded-xl w-60 h-60 md:w-64 md:h-64 flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:from-gray-600 hover:via-gray-700 hover:to-gray-800"
//           >
//             <img src="/BI_logo.png" alt="IT-BI" className="w-16 h-16 mb-4" />
//             <h2 className="text-xl md:text-2xl font-bold tracking-wide">IT-BI</h2>
//           </Link>

//           {/* Card 3 - ECE */}
//           <Link
//             to="/sem2/ece"
//             className="cursor-pointer bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white shadow-xl rounded-xl w-60 h-60 md:w-64 md:h-64 flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:from-gray-600 hover:via-gray-700 hover:to-gray-800"
//           >
//             <img src="/Ece_logo.png" alt="ECE" className="w-16 h-16 mb-4" />
//             <h2 className="text-xl md:text-2xl font-bold tracking-wide">ECE</h2>
//           </Link>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Sem2_HomePage;


import React from "react";
import { Link } from "react-router-dom";

const Sem2_HomePage = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-auto">
    

      {/* Custom Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-800 via-black to-black px-4 py-4 shadow-lg z-40">
        <div className="max-w-screen-xl mx-auto flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg">
            🎓 Choose Your Branch
          </h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-28 pb-10 px-4 sm:px-6 max-w-screen-xl mx-auto flex justify-center items-center min-h-[calc(100vh-7rem)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {/* IT Card */}
          <Link
            to="/sem2/it"
            className="bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 rounded-2xl shadow-2xl w-64 h-64 flex flex-col justify-center items-center text-white"
          >
            <img
              src="/it.png"
              alt="IT"
              className="w-16 h-16 mb-3 animate-bounce"
            />
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-center">
              IT
            </h2>
          </Link>

          {/* IT-BI Card */}
          <Link
            to="/sem2/itbi"
            className="bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 rounded-2xl shadow-2xl w-64 h-64 flex flex-col justify-center items-center text-white"
          >
            <img
              src="/itbi.png"
              alt="IT-BI"
              className="w-16 h-16 mb-3 animate-bounce"
            />
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-center">
              IT - BI
            </h2>
          </Link>

          {/* ECE Card */}
          <Link
            to="/sem2/ece"
            className="bg-gradient-to-br from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 rounded-2xl shadow-2xl w-64 h-64 flex flex-col justify-center items-center text-white"
          >
            <img
              src="/ec.png"
              alt="ECE"
              className="w-16 h-16 mb-3 animate-bounce"
            />
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-center">
              ECE
            </h2>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Sem2_HomePage;
