

// import React from "react";
// import { Link } from "react-router-dom";

// const Sem1Page = () => {
//   return (
//     <div className="fixed inset-0 bg-black text-white overflow-auto">
//       {/* Logo at Top-Left */}
//       <div className="absolute top-4 left-4 z-[99999] flex items-center space-x-3">
//         <img
//           src="/video_lecture.png" // Path to your logo
//           alt="Logo"
//           className="w-12 h-12 rounded-full" // Adjust size if needed
//         />
//         {/* Optional Logo Name */}
//         <h2 className="text-3xl font-bold text-indigo-400">Video Lecture</h2>
//       </div>

//       {/* Custom Navbar */}
//       <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 p-4 shadow-lg z-[99999]">
//         <div className="max-w-screen-xl mx-auto flex items-center justify-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-white animate-pulse">
//             Sem1 Study Material
//           </h1>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="pt-24 pb-8 max-w-screen-xl mx-auto px-4 flex justify-center items-center min-h-[calc(100vh-6rem)]">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {/* Card 1 - Video Lecture */}
//           <Link
//             to="/video-lecture"
//             className="cursor-pointer bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl rounded-xl w-60 h-60 md:w-64 md:h-64 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
//           >
//             <img
//               src="/video_lecture.png"
//               alt="Video Lecture"
//               className="w-16 h-16 mb-4 animate-bounce"
//             />
//             <h2 className="text-xl md:text-2xl font-bold">Video Lecture</h2>
//           </Link>

//           {/* Card 2 - Study Material / Lecture Notes */}
//           <Link
//             to="/study-material"
//             className="cursor-pointer bg-gradient-to-br from-red-400 to-red-500 text-white shadow-xl rounded-xl w-60 h-60 md:w-64 md:h-64 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
//           >
//             <img
//               src="/stu.png"
//               alt="Study Material"
//               className="w-16 h-16 mb-4 animate-bounce"
//             />
//             <h2 className="text-xl md:text-2xl font-bold">Study Material</h2>
//           </Link>

//           {/* Card 3 - Previous Year Paper */}
//           <Link
//             to="/previous-year-paper"
//             className="cursor-pointer bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-xl rounded-xl w-60 h-60 md:w-64 md:h-64 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
//           >
//             <img
//               src="/pa.png"
//               alt="Previous Year Paper"
//               className="w-16 h-16 mb-4 animate-bounce"
//             />
//             <h2 className="text-xl md:text-2xl font-bold">Previous Year Paper</h2>
//           </Link>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Sem1Page;


import React from "react";
import { Link } from "react-router-dom";

const Sem1Page = () => {
  return (
    <div className="fixed inset-0 bg-black text-white overflow-auto">
      {/* Logo at Top-Left */}
      <div className="absolute top-4 left-4 z-[99999] flex items-center space-x-3">
        <img
          src="/video_lecture.png"
          alt="Logo"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-contain"
        />
        <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          Video Lecture
        </h2>
      </div>

      {/* Custom Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-4 shadow-xl z-[99999]">
        <div className="max-w-screen-xl mx-auto flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white text-center drop-shadow-2xl tracking-wide">
            📚 Sem1 Study Material
          </h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-10 px-4 sm:px-6 max-w-screen-xl mx-auto flex justify-center items-center min-h-[calc(100vh-6rem)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Card 1 - Video Lecture */}
          <Link
            to="/video-lecture"
            className="cursor-pointer bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl rounded-xl w-60 h-60 sm:w-64 sm:h-64 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/video_lecture.png"
              alt="Video Lecture"
              className="w-14 h-14 sm:w-16 sm:h-16 mb-4 animate-bounce object-contain"
            />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center drop-shadow-sm">
               Video Lecture
            </h2>
          </Link>

          {/* Card 2 - Study Material / Lecture Notes */}
          <Link
            to="/study-material"
            className="cursor-pointer bg-gradient-to-br from-red-400 to-red-500 text-white shadow-xl rounded-xl w-60 h-60 sm:w-64 sm:h-64 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/stu.png"
              alt="Study Material"
              className="w-14 h-14 sm:w-16 sm:h-16 mb-4 animate-bounce object-contain"
            />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center drop-shadow-sm">
               Study Material
            </h2>
          </Link>

          {/* Card 3 - Previous Year Paper */}
          <Link
            to="/previous-year-paper"
            className="cursor-pointer bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-xl rounded-xl w-60 h-60 sm:w-64 sm:h-64 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/pa.png"
              alt="Previous Year Paper"
              className="w-14 h-14 sm:w-16 sm:h-16 mb-4 animate-bounce object-contain"
            />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center drop-shadow-sm">
               Previous Year Paper
            </h2>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Sem1Page;
