import React, { useState } from "react";

const PDC = () => {
 const videoIDs = [
 "yNnMJUBZd2w",
"D4RcqsdZi70",
"5RhYvHp-B_4",
"B5ls9H6oUpU",
"kXoA6oKlKpw",
"i39xuoQbIRM",
"fs5-K2LxlcA",
"7wAKiY0MdyY",
"OoUAwI1zpho",
"vZkPUTnfUw8",
"dDPul5mZhS8",
"UtrAhToF3cA",
"yczSI9L3oXo",
"5lVNZZrpOqU",
"iOi9h0OsXdQ",
"AFqA1m6GEok",
"0brAI99jrCg",
"quRMZ35F9BE",
"jltNffi5UNY",
"I7AD4X_-5jM",
"Kw3Q2OfxTt0",
"ua80p_qSN4E",
"1HD7J8TQPuE",
"J7uBimjj4Jo",
"qjB4CeHXzrc",
"6aRMW4p2WEc",
"nuXzddhYiDE",
"wjdBfcLSrEY",
"y0BuvfDNPQ0",
"14uTDBuVnY8",
"yES7YOqK6oA",
"vKoo0HLLE50",
"Z-QGtxlQWak",
"cCtNbaUIex4",
"RhsZg1ns2n8",
"qnaRf1iTss4",
"DM7sYJowN-A",
"oxVauLakNcY",
"mScjm34v4oQ",
"U-SpTfzZwFY",
"icZ5asGMBEY",

  ];

  const videoDescriptions = [
    " Information Theory Coding | Uncertainty, Properties of Information with Proofs | ITC Lectures;https",
" Solved Numerical on Information Content | Information Theory and coding Lectures in Hindi;https",
" Entropy Introduction | Properties with Proofs | Information Theory Coding(ITC) Lectures Hindi;https",
" Entropy Source Efficiency, Redundancy, Information Rate with Solved Problems | ITC Lectures;https",
" Shannon Fano Encoding Algorithm with Solved Problems | Information Theory Coding(ITC) Lectures;https",
" Ambiguity Problem in Shannon Fano Encoding Algorithm | Information Theory Coding(ITC) Lectures;https",
" Huffman Coding Algorithm with solved problems | Information Theory Coding(ITC) Lectures;https",
" Huffman Coding | Solved Problems on Ternary, Quaternary Coding | ITC Lectures Hindi;https",
" Lempel Zip Coding | Solved Problems | Information Theory Lectures(ITC Course) in Hindi;https",
" Communication Channel | Channel Matrix, Joint & Conditional Probability | ITC Lectures Hindi;https",
" Joint Probability Matrix | Properties | Information Theory and Coding Lectures(ITC Course);https",
" Mutual Information | Average Mutual Information | Properties | Solved Problems | ITC Course;https",
" Proofs of Mutual Information Properties | Information Theory Coding(ITC Course) Lectures;https",
" Markoff Statistical Model for Information Sources | Tree Diagram | Information Theory Coding;https",
" Binary Communication | Symmetric Channel, System Entropies | Equivocation, Condition Entropy;https",
" Noiseless, Deterministic, Symmetric Channels | Special Channels | Information Theory Coding;https",
" Binary Symmetric Channel(BSC) | Special Channels | Information Theory Coding Lectures Hindi;https",
" Binary Erasure Channel(BEC) | Special Channels | Information Theory Coding Lectures Hindi;https",
" Cascaded Channels | Special Channels | Information Theory Coding Lectures(ITC Course) Hindi;https",
" Error Control Coding | Block Codes | Introduction, Terms, Formulas | ITC Lectures in Hindi;https",
" Error Control Coding | Single Parity Check Codes | Block Codes | ITC Lectures in Hindi;https",
" Product Codes | Error Coding | Block Codes | Information Theory Coding(ITC) Full Course Hindi;https",
" Repetition Codes, Majority Vote Decoding with Example | Error Coding | ITC Lectures in Hindi;https",
" Linear Codes | Introduction, Properties | Error Control Coding | ITC Lectures in Hindi;https",
" Hamming Codes | Error Control Coding | Hamming Weight, Distance, Minimum Distance | ITC Hindi;https",
" Linear Codes Generator Matrix | Example to Generate Codewords | ITC Lectures in Hindi;https",
" Linear Codes Systematic Generator Matrix | Information Theory Coding(ITC Course) Lectures;https",
" Linear Codes Parity Check Matrices | Information Theory Coding(ITC Course) Lectures;https",
" Linear Codes Error Syndromes | Syndrome Table | Error Detection & Correction | ITC Lectures;https",
" Cyclic Codes, Polynomials Arithmetic with Examples | Information Theory Coding Lectures Hindi;https",
" Cyclic Codes Generator Polynomials | Systematic, Non-Systematic Coding Decoding | ITC Course;https",
" BCH Codes | Error Control Coding | Properties, Generator Polynomial, Example | ITC Lectures;https",
" Reed Solomon Codes | Error Control Coding | Properties, Advantages, Generator Polynomial | ITC;https",
" Convolutional Codes | Introduction, Code Rate, Constraint Length, Code Dimension | ITC Lectures;https",
" Convolutional Codes Encoder State | Code Tree | Information Theory Coding Lectures in Hindi;https",
" Convolutional Codes Code Trellis | State Diagram | Difference between Code Tree & Code Trellis;https",
" Viterbi Algorithm | Decoding Convolutional Code | Information theory coding lectures in Hindi;https",
"L41 | Huffman Coding | Lossless Compression Algorithm || Digital Image Processing (AKTU)",
"L42 | Shannon Fano Coding | Lossless Compression Algorithm || Digital Image Processing (AKTU)",
"SHANNON FANO CODING SOLVED EXAMPLE - with table and calculations - Hindi",
"HUFFMAN CODING SOLVED EXAMPLE in simple way| Electronics Subjectified | In hindi",


    "",
  ];

  const videoData = videoIDs.map((id, i) => ({
    id: i + 1,
    title: `PDC Video ${i + 1}`,
    thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    videoUrl: `https://www.youtube.com/embed/${id}`,
    description: videoDescriptions[i] || ""
  }));

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openVideo = (v) => setSelectedVideo(v);
  const closeVideo = () => setSelectedVideo(null);

  const renderSection = (key, title, start, end) => (
    <section id={key} className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {videoData.slice(start, end).map((video) => (
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
              <h3 className="text-sm sm:text-base font-semibold mb-1 line-clamp-2">
                {video.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 line-clamp-2">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="flex bg-black text-white w-full min-h-screen">
      {/* SIDEBAR */}
      {sidebarOpen && (
        <aside className="fixed top-0 right-0 h-full w-60 bg-gray-900 border-l border-gray-700 p-4 overflow-y-auto z-40">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold leading-none">Sections</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white text-xl font-bold leading-none hover:text-red-500 transition"
            >
              ✖
            </button>
          </div>
          <nav className="space-y-4">
            {[
              ["All Videos", "All Videos", 0, 39],
              // ["problems", "Quantum", 14, 95],
              // ["semiconductor", "Semiconductor", 96, 101],
              ["problems", "Problems", 39, 41],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedSection(key)}
                className={`w-full text-left px-3 py-2 rounded transition-all duration-500 ${
                  selectedSection === key
                    ? 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text'
                    : 'text-white hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:bg-clip-text hover:text-transparent'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </aside>
      )}

      {/* CONTENT */}
      <main className={`flex-1 pt-4 p-4 sm:p-8 ${sidebarOpen ? 'pr-64' : ''}`}>        
        {/* HEADER WITH INLINE TOGGLE */}
        <div className="flex items-center justify-center mb-6 sm:mb-8 relative">
          <h1 className="text-3xl sm:text-4xl font-bold">Principles of Data Communication - Video Lectures</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute right-0 text-3xl sm:text-4xl text-white hover:text-gray-300 transition"
          >
            {sidebarOpen ? '✖' : '⋮'}
          </button>
        </div>

        {selectedSection === null && renderSection("All Videos", "All Videos ", 0, 39)}
        {/* {selectedSection === null && renderSection("quantum", "Quantum ", 14, 95)} */}
        {/* {selectedSection === null && renderSection("semiconductor", "Semiconductor ", 96, 101)} */}
        {selectedSection === null && renderSection("problems", "Problem ", 39, 41)}

        {selectedSection === "All Videos" && renderSection("All Videos", "All Videos", 0, 39)}
        {/* {selectedSection === "quantum" && renderSection("quantum", "Quantum ", 14, 95)} */}
        {/* {selectedSection === "semiconductor" && renderSection("semiconductor", "Semiconductor ", 96, 101)} */}
        {selectedSection === "problems" && renderSection("problems", "Problem ", 39, 41)}
      </main>

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 p-4 sm:p-6 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4 gap-2">
              <h2 className="text-xl sm:text-2xl font-semibold truncate">
                {selectedVideo.title}
              </h2>
              <button
                onClick={closeVideo}
                className="text-white text-lg hover:text-red-500 transition flex-shrink-0"
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

export default PDC;
