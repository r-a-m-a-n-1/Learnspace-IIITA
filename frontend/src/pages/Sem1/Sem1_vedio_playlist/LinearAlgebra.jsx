
// import React, { useState } from "react";

// const LinearAlgebra = () => {
//   // Replace these video IDs with your actual YouTube video IDs (one for each of the 50 videos)
//   const videoIDs = [
//     "_6oRqxY6O5w", // Video 1
//     "yzuoyA2EJPA", // Video 2
//     "5LCO26C-ggo", // Video 3
//     "QZi8OqYSLgU", // Video 4
//     "kSyYgXvBpQQ", // Video 5
//     "9WjuLvPT_2A", // Video 6
//     "pG-IAFOiOw4", // Video 7
//     "itCTFw0d4hs", // Video 8
//     "iF7ya80h1Rs", // Video 9
//     "wGiJkeuJDcM", // Video 10
//     "cwIIXBSEFX4", // Video 11
//     "WBvroWQecEI", // Video 12
//     "bJcGmEkiyz8", // Video 13
//     "HZxJtGqkJLM", // Video 14
//     "EL3fXu9FFII", // Video 15
//     "NzuTxGGFcrg", // Video 16
//     "KgZR5L9jTJA", // Video 17
//     "jAH5rcWIyCE", // Video 18
//     "NCsoLIlz_lU", // Video 19
//     "bXeQILCHnVY", // Video 20
//     "HnFFuXDi9p8", // Video 21
//     "qIOCtAR0Qw0", // Video 22
//     "3HoSPQmpzKc", // Video 23
//     "TH2nvOymftc", // Video 24
//     "CDKS5Se6r3Q", // Video 25
//     "X7tLRj8Le-8", // Video 26
//     "qMwnGmEXBpY", // Video 27
//     "OM8zRM5v8U0",  // Video 28
//     "XdmVCN8bCQs",  // Video 29
//     "wmw4pbFIaV4",  // Video 30
//     "DoHj2cPwz8U",  // Video 31
//     "X1vBZcpHDXA",  // Video 32
//     "xnPmAe09KQs",  // Video 33
//     "5ezk6z98wEo",  // Video 34
//     "vzj4E6F1O7M",  // Video 35
//     "L-UcOD04rUQ",  // Video 36
//     "QAawJJDWe5M",  // Video 37
//     "OXMqPo1Spm4",  // Video 38
//     "A0eX8tM0GLE",  // Video 39
//     "MgrJMCzPJHU",  // Video 40
//     "9E51guuulgU",  // Video 41
//     "K0Q-TaQ2ZtA",  // Video 42
//     "XMr7ddjxxr8",  // Video 43
//     "iwLTbgKGuI8",  // Video 44
//     "videoID45",  // Video 45
//     "videoID46",  // Video 46
//     "videoID47",  // Video 47
//     "videoID48",  // Video 48
//     "videoID49",  // Video 49
//     "videoID50"   // Video 50
//   ];

//   // Provide a description for each video.
//   const videoDescriptions = [
//     "Vector Space-Concept and defintion in Hindi(Lecture-1)",
//     "Vector Space-General Properties in Hindi(Lecture 2)",
//     "Vector Space-Vector Subspace in Hindi (Lecture 3)",
//     "Vector Space-Intersection and Union of Vector Subspaces in Hindi (Lecture 4)",
//     "Vector Space-Concept of Linear sum,Direct Sum & Linear Span in Hindi (Lecture 4)",
//     "Vector Space-Linear Independence and Dependence of Vector in Hindi (Lecture 6).",
//     "Vector Space-Concepts of Basis,Finite dimensional Vector Space in Hindi (Lecture 7)",
//     "Vector Space-Dimension of Sum of Subspace in Hindi (Lecture 8)",
//     "Vector Space-Theorems on linear spac in Hindi (Lecture 9)",
//     "Vector Space-Theorems On Linear Independence & Dependence in Hindi (Lecture 10)",
//     "Vector Space-Existence & dimension theorem in Hindi (Lecture 11)",
//     "Vecor Space-Extension theorem ,dim of subspace ,Exitence of Complementary space in Hindi (Lecture 12)",
//     "Vector Space-Dimension of Sum of subspace(Proof of theorem) in Hindi(Lecture 13)",
//     "Vector Space-Dimension of Ouotient Space(Proof of theorem) in Hindi (Lecture 14)",
//     "Vector Space-Linear Transformation & its Properties in Hindi (Lecture 15)",
//     "Vector Space-Kernal of Vector Space Homomorphism & theorems (Lecture 16)",
//     "Vector Space-Isomorphism of Vector Sapces in Hindi (Lecture 17)",
//     "Vector Space-Fundamental Theorem of Vector Sapce homomorphism in Hindi (Lecture 17)",
//     "Vector Space-Matrix Representation of Linear Transformation in Hindi (Lecture 19)",
//     "Vector Space-Inverse of Linear Transformation in Hindi (Lecture 20)",
//     "Vector Space -Rank Nullity Theorem in Hindi (Lecture 21).",
//     "Vecotor Space-Invertible,Singular & Nonsingular Linear Transformation in Hindi (Lecture 22)",
//     "Vector Space-Numerical Questions on Rank Nullity theorem in Hindi(Lecture 23)",
//     "Vector Space-Eigen Value & Vector of linear Transformation in Hindi (Lecture 24)",
//     "Vector Space-Numerical Problem on Eigen Value & Vectors in Hindi (Lecure 25)",
//     "Vector Space-Numerical Problem on Eigen Value & Eigen Vectors of Matrix in Hindi(Lecture 26)",
//     "Vector Space/Matrix Theory-Diagonalization of Matrix in Hindi (Lecture 27)",
//     "Inner Product Space || Definition",
//     " Examples || Inner product space",
//     "Properties of Inner Product",
//     "Norms, distances, and metrics in vector spaces.",
//     " Norm of a vector || Introduction",
//     "Cauchy schwarz Inequality",
//     "Triangle Inequality || Inner product space",
//     "Inner Product Space is Metric Space.",
//     "Normed Linear Space || Every Inner Product Space is Normed space",
//     "Orthogonal vectors and Orthogonal complement.",
//     "Theorem 1 || Orthogonal set of non zero vector is linearly independent",
//     "Theorem 2 || Orthogonal vectors || Inner product space.",
//     "Theorem 3 || Orthogonal vectors",
//     " Example on Orthogonal Complement.",
//     " Orthonormal set || Theorem.",
//     "Bessel's Inequality |Orthonormal vectors.",
//     " Gram-Schmidt Orthogonalization Process.",
//     "Theorem || Gram Schmidt Orthogonalization",
//     "The concept and applications of dual spaces.",
//     "Introduction to tensor operations and their uses.",
//     "High-dimensional vector space explorations.",
//     "Handling sparsity in large matrices.",
//     "Applying linear algebra in statistical analysis.",
//     "Linking linear systems to differential equations."
//   ];

//   // Map the video IDs to video objects
//   const videoData = videoIDs.map((videoId, index) => ({
//     id: index + 1,
//     title: `Linear Algebra Video ${index + 1}`,
//     // Using the video ID to generate the thumbnail URL
//     thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
//     // Using the video ID to generate the embed URL
//     videoUrl: `https://www.youtube.com/embed/${videoId}`,
//     description: videoDescriptions[index] // Use the corresponding description
//   }));

//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const openVideo = (video) => {
//     setSelectedVideo(video);
//   };

//   const closeVideo = () => {
//     setSelectedVideo(null);
//   };

//   return (
//     <div className="bg-black text-white w-full min-h-screen p-8">
//       <h1 className="text-4xl font-bold text-center mb-8">
//         Linear Algebra - Video Lectures
//       </h1>
//       {/* Updated container: using grid to show 6 cards per row on larger screens */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//         {videoData.map((video) => (
//           <div
//             key={video.id}
//             className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer flex flex-col items-center transform hover:scale-105 transition duration-300"
//             onClick={() => openVideo(video)}
//           >
//             <img
//               src={video.thumbnail}
//               alt={video.title}
//               className="w-full h-32 object-cover rounded mb-2"
//             />
//             <h2 className="text-xl font-semibold text-center">{video.title}</h2>
//             <p className="text-gray-400 text-center text-sm">{video.description}</p>
//           </div>
//         ))}
//       </div>
//       {selectedVideo && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//           <div className="bg-gray-900 p-6 rounded-lg w-4/5 lg:w-3/5 xl:w-2/5">
//             <button
//               onClick={closeVideo}
//               className="text-white text-lg font-bold mb-4"
//             >
//               Close ✖
//             </button>
//             <iframe
//               className="w-full h-64 md:h-96"
//               src={selectedVideo.videoUrl}
//               title={selectedVideo.title}
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//             <h2 className="text-2xl font-semibold mt-4">{selectedVideo.title}</h2>
//             <p className="text-gray-400 mt-2">{selectedVideo.description}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LinearAlgebra;



// import React, { useState } from "react";

// const LinearAlgebra = () => {
//   const videoIDs = [
//     "_6oRqxY6O5w", "yzuoyA2EJPA", "5LCO26C-ggo", "QZi8OqYSLgU",
//     "kSyYgXvBpQQ", "9WjuLvPT_2A", "pG-IAFOiOw4", "itCTFw0d4hs",
//     "iF7ya80h1Rs", "wGiJkeuJDcM", "cwIIXBSEFX4", "WBvroWQecEI",
//     "bJcGmEkiyz8", "HZxJtGqkJLM", "EL3fXu9FFII", "NzuTxGGFcrg",
//     "KgZR5L9jTJA", "jAH5rcWIyCE", "NCsoLIlz_lU", "bXeQILCHnVY",
//     "HnFFuXDi9p8", "qIOCtAR0Qw0", "3HoSPQmpzKc", "TH2nvOymftc",
//     "CDKS5Se6r3Q", "X7tLRj8Le-8", "qMwnGmEXBpY", "OM8zRM5v8U0",
//     "XdmVCN8bCQs", "wmw4pbFIaV4", "DoHj2cPwz8U", "X1vBZcpHDXA",
//     "xnPmAe09KQs", "5ezk6z98wEo", "vzj4E6F1O7M", "L-UcOD04rUQ",
//     "QAawJJDWe5M", "OXMqPo1Spm4", "A0eX8tM0GLE", "MgrJMCzPJHU",
//     "9E51guuulgU", "K0Q-TaQ2ZtA", "XMr7ddjxxr8", "iwLTbgKGuI8",
//     "videoID45", "videoID46", "videoID47", "videoID48",
//     "videoID49", "videoID50"
//   ];

//   const videoDescriptions = [
//     "Vector Space-Concept and definition in Hindi (Lecture 1)",
//     "Vector Space-General Properties in Hindi (Lecture 2)",
//     "Vector Space-Vector Subspace in Hindi (Lecture 3)",
//     "Vector Space-Intersection and Union of Vector Subspaces in Hindi (Lecture 4)",
//     "Vector Space-Concept of Linear sum, Direct Sum & Linear Span in Hindi (Lecture 5)",
//     "Vector Space-Linear Independence and Dependence of Vector in Hindi (Lecture 6)",
//     "Vector Space-Concepts of Basis, Finite dimensional Vector Space in Hindi (Lecture 7)",
//     "Vector Space-Dimension of Sum of Subspace in Hindi (Lecture 8)",
//     "Vector Space-Theorems on linear spaces in Hindi (Lecture 9)",
//     "Vector Space-Theorems On Linear Independence & Dependence in Hindi (Lecture 10)",
//     "Vector Space-Existence & dimension theorem in Hindi (Lecture 11)",
//     "Vector Space-Extension theorem, dim of subspace, Existence of Complementary space in Hindi (Lecture 12)",
//     "Vector Space-Dimension of Sum of subspace (Proof) in Hindi (Lecture 13)",
//     "Vector Space-Dimension of Quotient Space (Proof) in Hindi (Lecture 14)",
//     "Vector Space-Linear Transformation & its Properties in Hindi (Lecture 15)",
//     "Vector Space-Kernel of Vector Space Homomorphism & theorems (Lecture 16)",
//     "Vector Space-Isomorphism of Vector Spaces in Hindi (Lecture 17)",
//     "Vector Space-Fundamental Theorem of Vector Space homomorphism in Hindi (Lecture 18)",
//     "Vector Space-Matrix Representation of Linear Transformation in Hindi (Lecture 19)",
//     "Vector Space-Inverse of Linear Transformation in Hindi (Lecture 20)",
//     "Vector Space -Rank Nullity Theorem in Hindi (Lecture 21)",
//     "Vector Space-Invertible, Singular & Nonsingular Linear Transformation in Hindi (Lecture 22)",
//     "Vector Space-Numerical Questions on Rank Nullity theorem in Hindi (Lecture 23)",
//     "Vector Space-Eigen Value & Vector of linear Transformation in Hindi (Lecture 24)",
//     "Vector Space-Numerical Problem on Eigen Value & Vectors in Hindi (Lecture 25)",
//     "Vector Space-Numerical Problem on Eigen Value & Eigen Vectors of Matrix in Hindi (Lecture 26)",
//     "Vector Space/Matrix Theory-Diagonalization of Matrix in Hindi (Lecture 27)",
//     "Inner Product Space | Definition",
//     "Inner Product Examples",
//     "Properties of Inner Product",
//     "Norms, distances, and metrics in vector spaces",
//     "Norm of a vector | Introduction",
//     "Cauchy–Schwarz Inequality",
//     "Triangle Inequality in Inner product space",
//     "Inner Product Space is a Metric Space",
//     "Normed Linear Space | Every Inner Product Space is Normed space",
//     "Orthogonal vectors and Orthogonal complement",
//     "Theorem: Orthogonal set of nonzero vectors is linearly independent",
//     "Theorem: Orthogonal vectors in Inner product space",
//     "Theorem: More on Orthogonal vectors",
//     "Example on Orthogonal Complement",
//     "Orthonormal set | Theorem",
//     "Bessel's Inequality | Orthonormal vectors",
//     "Gram–Schmidt Orthogonalization Process",
//     "Theorem: Gram–Schmidt Orthogonalization",
//     "The concept and applications of dual spaces",
//     "Introduction to tensor operations and their uses",
//     "High-dimensional vector space explorations",
//     "Handling sparsity in large matrices",
//     "Applying linear algebra in statistical analysis",
//     "Linking linear systems to differential equations"
//   ];

//   const videoData = videoIDs.map((id, i) => ({
//     id: i + 1,
//     title: `Linear Algebra Video ${i + 1}`,
//     thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
//     videoUrl: `https://www.youtube.com/embed/${id}`,
//     description: videoDescriptions[i] || ""
//   }));

//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const openVideo = (v) => setSelectedVideo(v);
//   const closeVideo = () => setSelectedVideo(null);

//   return (
//     <div className="bg-black text-white w-full min-h-screen p-4 sm:p-8">
//       <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
//         Linear Algebra - Video Lectures
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//         {videoData.map((video) => (
//           <div
//             key={video.id}
//             onClick={() => openVideo(video)}
//             className={`
//               bg-gray-800 rounded-lg shadow-lg cursor-pointer
//               transform hover:scale-[1.02] transition duration-300
//               flex flex-row items-start p-3
//               sm:flex-col sm:p-4
//             `}
//           >
//             {/* Thumbnail container */}
//             <div className="flex-shrink-0 w-2/5 sm:w-full">
//               <img
//                 src={video.thumbnail}
//                 alt={video.title}
//                 className="w-full aspect-video object-cover rounded"
//               />
//             </div>
            
//             {/* Text content container */}
//             <div className="flex-grow min-w-0 pl-3 sm:pl-0 sm:pt-3">
//               <h2 className="text-sm sm:text-base font-semibold mb-1 line-clamp-2 sm:line-clamp-2">
//                 {video.title}
//               </h2>
//               <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 sm:line-clamp-3">
//                 {video.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedVideo && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
//           <div className="bg-gray-900 p-4 sm:p-6 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl sm:text-2xl font-semibold line-clamp-1 mr-4">
//                 {selectedVideo.title}
//               </h2>
//               <button
//                 onClick={closeVideo}
//                 className="text-white text-lg font-bold flex-shrink-0 hover:text-red-500 transition"
//               >
//                 ✖
//               </button>
//             </div>
            
//             <div className="w-full aspect-video mb-4">
//               <iframe
//                 className="w-full h-full rounded"
//                 src={selectedVideo.videoUrl}
//                 title={selectedVideo.title}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>
            
//             <p className="text-gray-300 text-sm sm:text-base">
//               {selectedVideo.description}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LinearAlgebra;



import React, { useState, useEffect } from "react";

const LinearAlgebra = () => {
  const videoIDs = [
    "_6oRqxY6O5w", "yzuoyA2EJPA", "5LCO26C-ggo", "QZi8OqYSLgU",
    "kSyYgXvBpQQ", "9WjuLvPT_2A", "pG-IAFOiOw4", "itCTFw0d4hs",
    "iF7ya80h1Rs", "wGiJkeuJDcM", "cwIIXBSEFX4", "WBvroWQecEI",
    "bJcGmEkiyz8", "HZxJtGqkJLM", "EL3fXu9FFII", "NzuTxGGFcrg",
    "KgZR5L9jTJA", "jAH5rcWIyCE", "NCsoLIlz_lU", "bXeQILCHnVY",
    "HnFFuXDi9p8", "qIOCtAR0Qw0", "3HoSPQmpzKc", "TH2nvOymftc",
    "CDKS5Se6r3Q", "X7tLRj8Le-8", "qMwnGmEXBpY", "OM8zRM5v8U0",
    "XdmVCN8bCQs", "wmw4pbFIaV4", "DoHj2cPwz8U", "X1vBZcpHDXA",
    "xnPmAe09KQs", "5ezk6z98wEo", "vzj4E6F1O7M", "L-UcOD04rUQ",
    "QAawJJDWe5M", "OXMqPo1Spm4", "A0eX8tM0GLE", "MgrJMCzPJHU",
    "9E51guuulgU", "K0Q-TaQ2ZtA", "XMr7ddjxxr8", "iwLTbgKGuI8",
    "videoID45", "videoID46", "videoID47", "videoID48",
    "videoID49", "videoID50"
  ];

  const videoDescriptions = [
    /* ...same as before... */
  ];

  const videoData = videoIDs.map((id, i) => ({
    id: i + 1,
    title: `Linear Algebra Video ${i + 1}`,
    thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    videoUrl: `https://www.youtube.com/embed/${id}`,
    description: videoDescriptions[i] || ""
  }));

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showNavbar, setShowNavbar] = useState(false);

  const openVideo = (v) => setSelectedVideo(v);
  const closeVideo = () => setSelectedVideo(null);

  useEffect(() => {
    const threshold = 50; // show navbar after scrolling down 50px
    const handleScroll = () => {
      setShowNavbar(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white w-full min-h-screen">
      {/* fixed navbar that slides in/out */}
      <div
        className={`
          fixed top-0 left-0 w-full z-50 bg-gray-900 border-b border-gray-700
          transform transition-transform duration-300
          ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="p-4 text-center text-lg font-bold">
          Linear Algebra Playlist
        </div>
      </div>

      <div className="p-4 sm:p-8 pt-20">
        {/* note: added pt-20 so content isn’t hidden under the fixed navbar */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
          Linear Algebra - Video Lectures
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {videoData.map((video) => (
            <div
              key={video.id}
              onClick={() => openVideo(video)}
              className="bg-gray-800 rounded-lg shadow-lg cursor-pointer transform hover:scale-[1.02] transition duration-300 flex flex-row items-start p-3 sm:flex-col sm:p-4"
            >
              <div className="flex-shrink-0 w-2/5 sm:w-full">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-video object-cover rounded"
                />
              </div>
              <div className="flex-grow min-w-0 pl-3 sm:pl-0 sm:pt-3">
                <h2 className="text-sm sm:text-base font-semibold mb-1 line-clamp-2 sm:line-clamp-2">
                  {video.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 sm:line-clamp-3">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 p-4 sm:p-6 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-semibold line-clamp-1 mr-4">
                {selectedVideo.title}
              </h2>
              <button
                onClick={closeVideo}
                className="text-white text-lg font-bold flex-shrink-0 hover:text-red-500 transition"
              >
                ✖
              </button>
            </div>
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full rounded"
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-gray-300 text-sm sm:text-base">
              {selectedVideo.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinearAlgebra;
