







import React, { useState } from "react";

const IE = () => {
  // RIElace these video IDs with your actual YouTube video IDs (one for each of the 50 videos)
  const videoIDs = [
    "25lRR_Lwad8",
    "0qxqDkf7XoQ",
    "Esz6qrcaF8Y",
    "tgl-yB1mCF8",
    "nAL_JNFjARE",
    "htsIh_JUKkE",
    "tJmRkJjHS-c",
    "WxzUQn6Py0s",
    "5kiK7aCbZe0",
    "Ju61iZXuRmQ",
    "R-W7BF_72U0",
    "1qMDqsO1WHI",
    "w5XykjIkJU0",
    "C6U5RW1TKl0",
    "48hohxxvHxw",
    "Fn1tPck5Bj4",
    "fb1h09YVZcE",
    "Ej24c6TafrE",
    "FRnmxcrPPVE",
    "CnzITHnJ1ls",
    "Ar99yPKTYoQ",
    "qoeolaau4HI",
    "veFDVlP0FpI",
    "rAqRlrgUdwo",
    "LFBixhrlruA",

  ];

  // Provide a description for each video.
  const videoDescriptions = [
    "GNG Economics | Day 1 | Chapter 1 | Class 12 | Circular Flow of Income | National Income",
    "GNG Economics | Day 2 | Chapter 3 | Class 12 | Aggregates  | National Income | Numericals.",
    "GNG Economics | Day 3 | Chapter 2 | Class 12  | National Income",
    "GNG Economics | Day 4 | Chapter 4 | Class 12  | National Income - Numericals",
    "GNG Economics | Day 5 | Chapter 4 | Class 12  | National Income - Theory",
    "GNG Economics | Day 6 | Chapter 4 | Class 12  | National Income - Theory",
    "GNG Economics | Day 7 | Chapter 5 | Class 12  | Money",
    "GNG Economics | Day 8 | Chapter 6 | Class 12  | Banking",
    "GNG Economics | Day 9 | Chapter 6 | Class 12  | Banking",
    "GNG Economics | Day 9 | Chapter 1 | Class 12  | Indian Economy on the eve of independence.",
    "GNG Economics | Day 10 | Chapter 12 | Class 12  | Balance of Payment.",
    "GNG Economics | Day 11 | Chapter 11 | Class 12  | Foreign Exchange Rate",
    "GNG Economics | Day 12 | Chapter 10 | Class 12  | Government Budget",
    "GNG Economics | Day 14 | Chapter 7 | Class 12  | Aggregate demand and related concepts",
    "GNG Economics | Day 15 | Chapter 7 | Class 12  | Aggregate demand and related concepts | Part 2",
    "GNG Economics | Day 16 | Chapter 7 | Class 12  | Aggregate demand and related concepts | Part 3",
    "GNG Economics | Day 17 | Chapter 8 | Class 12  | Income determination and Multiplier",
    "GNG Economics | Day 18 | Chapter 9 | Class 12  | Excess demand and Deficient Demand",
    "GNG Economics | Day 19 | Chapter 4 | Human capital Formation | Indian Eco",
    "GNG Economics | Day 19 | Environment and Sustainable development | Indian Eco",
    "GNG Economics | Day 20 | Rural development | Indian Eco",
    "GNG Economics | Day 20 | Employment, Growth, Informalisation and other issues | Indian Eco",
    "GNG Economics | Day 21 | Chapter 2 | Indian economy 1950-1990",
    "GNG Economics | Day 21 | Chapter 3 | New economic policy 1991",
    "GNG Economics | Day 21-Extended | Comparison of India with its neighbours | India,China and Pakistan",

  ];



  const videoData = videoIDs.map((id, i) => ({
    id: i + 1,
    title: `IE Video ${i + 1}`,
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
              ["All Videos", "All Videos", 0, 212]

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
          <h1 className="text-3xl sm:text-4xl font-bold">Indian Economics - Video Lectures</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute right-0 text-3xl sm:text-4xl text-white hover:text-gray-300 transition"
          >
            {sidebarOpen ? '✖' : '⋮'}
          </button>
        </div>

        {selectedSection === null && renderSection("All Videos", "All Videos ", 0, 212)}


        {selectedSection === "All Videos" && renderSection("All Videos", "All Videos ", 0, 212)}

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

export default IE;
