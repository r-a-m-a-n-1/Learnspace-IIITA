import React, { useState } from "react";

const OR = () => {
 const videoIDs = [
 "knZrhVkZ71Q",
"2EvC1v1FI2k",
"01Iy2ZHOmNg",
"NbP4IStg0L0",
"61lkRMXne2U",
"Ow3XWYnPgSM",
"9fL0g_cZX9s",
"UmIUKg4w_9U",
"H0sBZdjuego",
"pnJUzNFn3CA",
"a6bKc4fp3HA",
"qCy8z5tUGiM",
"9vJx6tZgVQs",
"W7z_pbgJzPQ",
"YgqC8_WOZyY",
"MPM_KgaXij0",
"h_GYxpuFVlw",
"ansWipshOe8",
"PIFbx7YmqJM",
"PwpjcUNRG0o",
"qp7Su3aMMJc",
"fKOD0K2d0nI",
"e4n26TXtQeI",
"eiolK-dZDd0",
"JnuVYM3cppo",
"cA5RwZcu-pY",
"kRo4y55HM8c",
"TV4xsyn47ao",
"xBrJNzuQWxw",
"5kMrVGipKms",
"1lt9vimJOog",
"UrfN0xJ1Bvk",

  ];

  const videoDescriptions = [
    "Operation Research | Linear Programming Problem | Overview & ConcORts",
"Operation Research | Linear Programming  Graphical Method | Problems",
"Operation Research | Simplex Method | PART -1 | Linear Programming",
"Operation Research | Simplex Method | PART - 2 | Linear Programming",
"Operation Research | Two Phase Simplex Method | Linear Programming",
"Transportation Problem | North West Corner Method | Least Cost method | Part-1",
"Transportation Problem | VAM Method | Vogel's Approximation method",
"Transportation Problem | UV Method | MODI Method | Optimality Test",
"Duality in Linear Programming | Primal to Dual Conversion | LPP",
"Assignment Problem | Hungarian Method | Example of Assignment Problem",
"Assignment Problem | Hungarian Method | Unbalanced Assignment Problem",
"Assignment Problem | Hungarian Method | Maximization Assignment Problem",
"Assignment Problem | Hungarian Method | Restricted Assignment Problem",
"Traveling Salesman Problem | Assignment Problem | Hungarian Method",
"Game Theory | Saddle Point In Game Theory | Pure Strategy Game Theory | Operation Research",
"Game Theory | Two Person Zero Sum Game | Mixed Strategy Game Theory | Operation Research",
"Game Theory | Game Theory Dominance Rule | Operation Research",
"Game Theory | Graphical Method Game Theory | Operation Research",
"Job Scheduling | n-Jobs, 2-Machine | Johnson Algorithm",
"Linear Programming Problem in hindi (Lecture 1)",
"LPP - Solution by Graphical Method in hindi(Lecture 2)",
"LPP - ExcORtional Cases in Graphical method in Hindi(Lecture 3)",
"Standard form of LPP in Hindi(Lecture 4)",
"Solution of LPP by Simplex Method (Lecture-I)",
"Solution of LPP by Simplex Method (Lecture-II)",
"Transportation Problem - Introduction in Hindi",
"Transportation Problem - Solution by North West Corner Method In Hindi",
"Transportation Problem - Solution by Least Cost Method in Hindi",
"Transportation Problem- Solution by Vogel's Approximation Method In Hindi",
"Transportation Problem - Solve by Northwest Corner l Least Cost l Vogel,s  method in Hindi(Problem)",
"Test for Optimal Solution to a Transportation Problem Using MODI Method",
"Assignment Problem In Operations Research In Hindi",


    "",
  ];

  const videoData = videoIDs.map((id, i) => ({
    id: i + 1,
    title: `OR Video ${i + 1}`,
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
              ["Gajendra Purohit ", "Gajendra Purohit ", 0, 19],
              ["Bhagwan Singh VishwaKarma", "Bhagwan Singh VishwaKarma", 19, 95],
              // ["semiconductor", "Semiconductor", 96, 101],
              // ["problems", "Problems", 102, 115],
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
          <h1 className="text-3xl sm:text-4xl font-bold">Operation Research - Video Lectures</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute right-0 text-3xl sm:text-4xl text-white hover:text-gray-300 transition"
          >
            {sidebarOpen ? '✖' : '⋮'}
          </button>
        </div>

        {selectedSection === null && renderSection("Gajendra Purohit ", "Gajendra Purohit  ", 0, 19)}
        {selectedSection === null && renderSection("Bhagwan Singh VishwaKarma", "Bhagwan Singh VishwaKarma ", 19, 95)}
        {/* {selectedSection === null && renderSection("semiconductor", "Semiconductor ", 96, 101)} */}
        {/* {selectedSection === null && renderSection("problems", "Problem ", 102, 115)} */}

        {selectedSection === "Gajendra Purohit " && renderSection("Gajendra Purohit ", "Gajendra Purohit ", 0, 19)}
        {selectedSection === "Bhagwan Singh VishwaKarma" && renderSection("Bhagwan Singh VishwaKarma", "Bhagwan Singh VishwaKarma ", 19, 95)}
        {/* {selectedSection === "semiconductor" && renderSection("semiconductor", "Semiconductor ", 96, 101)} */}
        {/* {selectedSection === "problems" && renderSection("problems", "Problem ", 102, 115)} */}
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

export default OR;
