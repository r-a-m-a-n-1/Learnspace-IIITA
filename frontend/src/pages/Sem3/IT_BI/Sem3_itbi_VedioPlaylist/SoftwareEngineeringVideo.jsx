







import React, { useState } from "react";

const SE = () => {
  // RSElace these video IDs with your actual YouTube video IDs (one for each of the 50 videos)
  const videoIDs = [
    "uJpQlyT_CK4",
    "kcvEiMFOcoE",
    "kSU2MPeptpM",
    "noE3pnRzQGI",
    "vl-IWe0DkwU",
    "algSKfQ03Sk",
    "nNzH2rlEH6A",
    "yd6uxnBIIQg",
    "SzRs2y1TcSY",
    "y2CnstDLhXM",
    "Xs6E-MAJbfE",
    "xef_bCjoRCk",
    "ASrMUd0p9fE",
    "JNLRXczA9Y0",
    "IBqO6aUkJSE",
    "83-S5Qu6VP8",
    "a2fpi0rbr0c",
    "KN-inGJG540",
    "qtTWBs49BCA",
    "IQFfMb2T2PY",
    "bTv3qCtSR5c",
    "b6mcMkQONic",
    "4SWEX4L2dOc",
    "9GthPTi1Nqc",
    "cOmovzsLIo0",
    "lr0vA_p6T7Q",
    "Us5YtgvfomQ",
    "fxXZf4zDjGQ",
    "T0TynxN77oY",
    "lyEAdt8BPM8",
    "xfjkq0WpRcQ",
    "cEGh6YK_XCs",
    "NweTzHYBgYU",
    "9gu4BsqjQrA",
    "p8vrpGMR3g4",
    "AloUqnD7aPs",
    "NY7k2qoe4OY",
    "IOrAlTY639U",
    "89VOHd8F8Ao",
    "BKsGb4sAsxo",
    "WTOH1PfxA5M",
    "kRVXMVAH5H8",
    "l239yuyq9xQ",
    "nulFv99VBGs",
    "Gp9DhFWGgJQ",
    "eh88vW60-I4",
    "MZk2KQgptts",
    "8SYFrCe4uAI",
    "5496sXljdnQ",
    "3qKKcUZqfQk",
    "Hj6Lkoi_VoM",
    "VnRQ5CNC4Fs",
    "LyhTDsjjjrE",
    "HuL9EMx8NQo",
    "3SHCM114zI8",
    "VIPhgTc5Ss0",
    "sXNGEnZ7Wy4",
    "MvyVR5soJjI",
    "UBIe1kTIJDY",
    "7xBcVtjmGwM",
    "bKwvzXQKBRo",
    "8Nkat4_lDik"
  ];


  // Provide a description for each video.
  const videoDescriptions = [
    "Software Engineering Syllabus Discussion | Imp. for Competitive, College/University & Placements",
    "What is Software Engineering and its Evolution in Hindi with examples",
    "SDLC Life Cycle for Beginners | Software Development Life Cycle with Real life example",
    "Classic Waterfall model in Software Engineering",
    "Iterative Waterfall Model with example in Hindi",
    "V Shaped Model with examples | SDLC | Software Engineering",
    "Prototyping Model in Software Engineering",
    "Incremental Model in Software Engineering | SDLC",
    "Evolutionary Model with real life examples | Software Engineering",
    "Spiral Model in Software Engineering | SDLC",
    "Agile in Software Engineering",
    "SCRUM Model in Software Engineering | Agile Technology",
    "Comparison of All SDLC Models | Waterfall, Iterative, Prototype, Spiral, Increment, RAD, Agile etc.",
    "Software Requirements | Requirement Engineering | Feasibility Study, Elicitation, SRS, Validation",
    "Functional vs Non-functional Requirements | Requirement Engineering | Software Engineering",
    "Software Requirements Specification (SRS) | Software Engineering",
    "User Requirements with real life examples | User Requirement Specification | Software Engineering",
    "What is DFD? How to design DFD, Symbols, examples full explanation",
    "Levels of DFD | 0-Level, 1-Level, 2-Level with examples",
    "Logical vs Physical DFD with example | How Question asked from DFD?",
    "Function Oriented vs Object Oriented Design Approach | Software Design Approaches",
    "SPM(Software Project Management) with real life examples",
    "Risk Identification | Reactive vs Proactive Risk Management |Types of Risks with real life examples",
    "Risk Assessment with examples | Risk Management | Software Engineering",
    "Risk Control vs Risk Mitigation with example | Software engineering",
    "Basic COCOMO & Intermediate COCOMO with Numerical",
    "CPM (Critical Path Method) in Software Engineering | PERT/CPM Numerical",
    "Verification vs Validation in Software Engineering",
    "Types of Testing in Software Engineering | Levels of Testing",
    "Error Seeding in Software Testing | With Numerical Explanation",
    "2 Imp. MCQs on Software Engineering | Must Watch|",
    "Question on Cyclomatic Complexity | Software Engg.",
    "Cohesion and Coupling in Software Engineering",
    "Unit Testing with examples in Software Engineering",
    "Integration Testing with examples | Software Engineering",
    "System Testing with examples | Software Engineering",
    "Types of System Testing | Software Engineering",
    "White box Testing with example | Software Engineering",
    "White Box vs Black Box Testing | Software Engineering",
    "Statement Coverage Technique | White Box Testing | Software Engineering",
    "Condition Coverage in White Box Testing | Software Engineering",
    "Data Flow Testing Technique in White Box Testing | Software Engineering",
    "Boundary Value Testing | Black 📦 Testing | Software Engineering with Real Life examples",
    "Perfective, Preventive, Adaptive, Corrective Maintenance in Software Engineering",
    "MTBF vs MTTR | Mean Time Between Failure | Mean Time to Repair",
    "Reverse◀️ Engineering👷with Real life examples🧐 | Software Engineering",
    "CASE Tools ⚒️ in Software Engineering👷",
    "Performance Testing with Real life examples | Software Engineering",
    "Regression Testing with Real Life Examples | Software Engineering",
    "Introduction to UML (Unified Modelling Language🤟) with examples | Software Engineering👷‍♂️👷‍♀️",
    "Use Case Diagram in UML | Software Engineering",
    "Sequence Diagram in UML | Software Engineering",
    "Activity Diagram in UML | Software Engineering",
    "Class Diagram in UML | Banking System (Real Life example) | Software Engineering",
    "Class Diagram in UML | OTT Platform (Real life example) | Easiest Explanation",
    "Object Diagram in UML | Class vs Object UML diagram with real life examples",
    "RAD Model #sdlc #softwareengineer #agile #software #engineering #shorts #ytshorts",
    "RAD Model in Software Engineering | Rapid Application Development 🛠️ with Example",
    "Function Point(FP) vs Line of Code(LOC) | Project Size Estimation",
    "Function Point Analysis (FPA) | Function Point with Real life examples in Software Engineering",
    "Function Point Calculation | How Project Estimation is Done using FP | Numerical Explanation",
    "Aggregation vs Composition in UML with Examples | Software Engineering",

  ];



  const videoData = videoIDs.map((id, i) => ({
    id: i + 1,
    title: `SE Video ${i + 1}`,
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
              ["All Videos", "All Videos", 0, 62]

            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedSection(key)}
                className={`w-full text-left px-3 py-2 rounded transition-all duration-500 ${selectedSection === key
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
          <h1 className="text-3xl sm:text-4xl font-bold">SE - Video Lectures</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute right-0 text-3xl sm:text-4xl text-white hover:text-gray-300 transition"
          >
            {sidebarOpen ? '✖' : '⋮'}
          </button>
        </div>

        {selectedSection === null && renderSection("All Videos", "All Videos ", 0, 62)}


        {selectedSection === "All Videos" && renderSection("All Videos", "All Videos ", 0, 62)}

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

export default SE;
