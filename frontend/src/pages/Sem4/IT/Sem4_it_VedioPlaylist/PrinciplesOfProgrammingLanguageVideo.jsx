







import React, { useState } from "react";

const PPL = () => {
  // RLAlace these video IDs with your actual YouTube video IDs (one for each of the 50 videos)
  const videoIDs = [
    "Cb46_P12bMY",
    "15_8wKnqj7U",
    "KB1CFp6LUXA",
    "3UCBQbsjIy0",
    "278hcTpBqvA",
    "XMt-KL-xn7k",
    "w7Udqf_Wvw8",
    "4a5k8H8eN6Q",
    "QzsLNzzomNA",
    "wbMxBVcwtX8",
    "pSY6laN6a0o",
    "nuwoySABfVs",
    "lhQqq5FfzMU",
    "T7twzNPspTg",
    "en0Mptigzkw",
    "BZ3VRfjeTT4",
    "hkUCwLOn8FE",
    "HO9WSyevTwA",
    "fmd-tDDPonY",
    "sm_hwNDzc-o",
    "BVUSHWogXiA",
    "eons9sss1xE",
    "2ktkX_9KtpM",
    "94qfTPON5kU",
    "Go4cG3jHnNE",
    "JwStWxFWfzQ",
    "Rs7N94GlqYQ",
    "l29-94pGOWg",
    "WFXVq5tE3VA",
    "155qkb0goHU",
    "rsyZpnGIG2I",
    "bNPX_F0x6Hc",
    "KV01s3r9fLc",
    "IU6eb0S4qw0",
    "gwQScodYdpg",
    "m8z55ZgoOSU",
    "HcVVyiP0_BQ",
    "tGOByZDpF-8",
    "yMUw2MxzNec",
    "O0HCUfGsEK0",
    "OPVMxftWBJc",
    "zibfnC40jmU",
    "XR28e3CaE7Q",
    "sG9ixmxUKeo",
    "avJOhG4ukGo",
    "CFF7Zt_wwX0",
    "2mwE_R40Ci4",
    "2MW4blYXMUc",
    "Kj9nmjvf6wk",
    "IGrHRulR0Uc",
    "fHubDiB89RM",
    "aYMAsAy_lAc",
    "DkdpHtY2kw4",
    "MV0mKgT7PuY",
    "TLmcTXtOBKA",
    "p6ETLr_J4_0",

  ];

  // Provide a description for each video.
  const videoDescriptions = [
    "Introduction to Compiler Design | Language Processing System",
    "Compiler vs Interpreter | Compiler Design",
    "Phases of Compiler | Compiler Design",
    "Lexical Analyzer | Lexical Analysis | Compiler Design",
    "Count number of tokens in compiler design | Lexical Analyzer",
    "Ambiguous Grammar | Introduction to Ambiguous Grammar | Compiler Design",
    "Ambiguous to Unambiguous Grammar | Compiler Design",
    "Elimination of left recursion | Compiler Design",
    "Precedence and Associativity of Operators Examples | Compiler Design",
    "Elimination of left factoring | Compiler Design",
    "Introduction to Parser | Top Down and Bottom Up Parser | Compiler Design",
    "Recursive Descent Parser with solved example | Compiler Design",
    "First and Follow in Compiler Design | Examples",
    "First and Follow Examples  | Compiler Design | GATECS",
    "LL(1) parser | Example 1 | Top Down Parser | Compiler Design",
    "LL(1) parser | Example 2 | Top Down Parser | Compiler Design",
    "How to Check a Grammar is  LL(1) or not |  Compiler Design",
    "LL(1) parser | Example 3 | Top Down Parser | Compiler Design",
    "Bottom Up Parser | Shift Reduce Parsing | Compiler Design",
    "LR(0) parser || Example 1 || LR(0) parsing table || Compiler Design",
    "LR(0) parser || Example 2 || LR(0) parsing table || Compiler Design",
    "SLR (1) Parser Example 1 | Simple LR Parser | SLR Parsing Table Example | Compiler Design",
    "SLR(1) Parser Example 3 | Simple LR Parser | SLR Parsing Table Example | Compiler Design",
    "CLR(1) Parser Example 1 | Canonical LR Parser | Compiler Design",
    "CLR(1) Parser Example 2 |  Canonical LR Parser | Compiler Design",
    "CLR(1) Parser Example 3 | Canonical LR Parser | Compiler Design",
    "LALR(1) Parser Solved Examples | Look-Ahead LR Parser | Compiler Design",
    "Operator Precedence Parser with Solved Examples | Operator Grammar | GATECS | Compiler Design",
    "Relationship between LL(1), SLR(1), LALR(1), CLR(1) and LR(1) Parsers | Compiler Design",
    "Introduction to Syntax Directed Definition (SDD)| Syntax Directed Translation | Compiler Design",
    "S-Attributed and L-Attributed SDD | Types of SDD | Compiler Design",
    "SDD to Convert Binary to Decimal || SDT || Compiler Design",
    "SDD to Binary to Decimal with Fraction | SDT | Compiler Design",
    "SDD to construct syntax tree | SDT | Compiler Design",
    "SDD to store type information in symbol table || SDT || Compiler Design",
    "SDD to generate Three Address Code || SDT || Compiler Design",
    "Run Time Environment | Compiler Design",
    "Activation Record in Compiler Design",
    "Intermediate Code Generation with Examples | Compiler Design",
    "Quadruples,Triples,Indirect Triples | Representation of three address code | Compiler Design",
    "Backpatching Example 1 ( If & Else Case ) | Three Address Code | ICG | Compiler Design",
    "Backpatching Example 2 (Loop & Switch Case ) | Three Address Code | ICG | Compiler Design",
    "Backpatching Example 3 ( 1 D Array ) | Three Address Code | ICG | Compiler Design",
    "Backpatching Example 4 ( 2 D Array ) | Three Address Code | ICG | Compiler Design",
    "Backpatching GATE Solved Example ( 3 D Array ) | Three Address Code | ICG | Compiler Design",
    "Directed Acyclic Graph | DAG Examples 1 | Intermediate Code Generation |  Compiler Design",
    "Directed Acyclic Graph | DAG Examples 2 | Intermediate Code Generation |  Compiler Design",
    "Directed Acyclic Graph | DAG Examples 3 | Intermediate Code Generation | Compiler Design",
    "Introduction to Code Optimization | Compiler Design",
    "Basic Blocks and Flow Graphs  | Code Optimization | Compiler Design",
    "Basic Blocks and Flow Graphs with GATE 2015 Example | Compiler Design",
    "Loop Optimization Techniques | Code Optimization | Compiler Design",
    "Peephole Optimization in Compiler Design | Machine Dependent Code Optimization",
    "Machine Independent Code Optimization | Compiler Design",
    "Liveness Analysis in Compiler Design | Code optimization | Dataflow analysis",
    "Liveness Analysis Solved examples | Dataflow analysis | Compiler Design",

  ];



  const videoData = videoIDs.map((id, i) => ({
    id: i + 1,
    title: `PPL Video ${i + 1}`,
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
              ["All Videos", "All Videos", 0, 56]

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
          <h1 className="text-3xl sm:text-4xl font-bold">PPL - Video Lectures</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute right-0 text-3xl sm:text-4xl text-white hover:text-gray-300 transition"
          >
            {sidebarOpen ? '✖' : '⋮'}
          </button>
        </div>

        {selectedSection === null && renderSection("All Videos", "All Videos ", 0, 56)}


        {selectedSection === "All Videos" && renderSection("All Videos", "All Videos ", 0, 56)}

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

export default PPL;
