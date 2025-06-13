







import React, { useState } from "react";

const ITF = () => {
  // RITFlace these video IDs with your actual YouTube video IDs (one for each of the 50 videos)
  const videoIDs = [
    "ZntgzuTCO0c",
    "WiiO5qL0rVI",
    "bVK9x5WTbho",
    "3WgCKpVp0iM",
    "BerxCEUkA40",
    "67dWEV-DHx0",
    "g1UDbH394ho",
    "re9klTQ4NLc",
    "tG_dwIhKgz0",
    "wEa2ZW4t2vM",
    "RKkwiCG9Zrg",
    "L75NPcjl8XE",
    "ET39a5ei3iw",
    "K3_hBUqKdqs",
    "6cBPoy1FkCc",
    "i55opSxgEQ0",
    "WoR9O6wuY18",
    "J45ijF0wFlE",
    "DzEH0qKQXb0",
    "YLv4RaCD3ms",
    "EQVhDilWlgg",
    "k98mv_NYAec",
    "n1QD03xXFGc",
    "DySm_S2n4QE",
    "TZUUgEz4P7Q",
    "G2iyrVic9CU",
    "0GWFF2f4geY",
    "DPb11EGdw9k",
    "KUhwIorhf_s",
    "1djdnBXBHT4",
    "eB4m7Gm_Blk",
    "XPMsEuVHZ4A",
    "Oto2UfsWayI",
    "9hgXBD5dkFA",
    "8OZ9R0R7-qI",
    "nlIWJxgrRVU",
    "EHrxml_EHX0",
    "jcxOud4LI0E",
    "kr_S7WBmbEo",
    "3VeqoTAl7cs",
    "sBvq2GoMD8w",
    "9W9mUJqpR5M",
    "WQGZpITUYug",
    "ft26oU84p0U",
    "zLRIkNxNXiE",
    "cX8fBXs5yco",
    "Msa8HEZ8OdM",
    "GcbgAjmmO38",
    "4c8pDIu9fcQ",
    "TBA8NW98GIQ",
    "73Ww6bDKbLA",
    "VGLOnXQlEdk",
    "NvwllaSWIDE",
    "UHTKqa8FbjY",
    "4VBLLMcAcek",
    "qhnV5hxpBCs",
    "fkDwO7-0mBk",
    "ecgSTmM4jfA",
    "I_dYKnKNoNY",
    "I56qBHMm8io",

  ];

  // Provide a description for each video.
  const videoDescriptions = [
    "Accounts Syllabus Discussion | CBSE   | 2023-24",
    "Introduction to Accounting | Meaning and Objectives of Accounting |   | Chapter 1",
    "Introduction to Accounting | Meaning and objectives | Chapter 1 |   | Part 2",
    "Introduction to Accounting | Meaning and objectives | Chapter 1 |   | Part 3",
    "Basic Accounting Terms | Chapter 2 |   | Accounts",
    "Basic Accounting Terms | Chapter 2 | Part 2 |   | Accounts",
    "Basic Accounting Terms | Chapter 2 | Part 3 |   | Accounts",
    "Accounting Principles | Chapter 3 |   | Accounts | One shot",
    "Process and Basis of Accounting | One shot | Chapter 4 |   | Accounts",
    "Accounting Equation |   | All basics Explained | Part 1",
    "Accounting Equation |   | All basics Explained | Part 2",
    "Accounting Equation |   | All basics Explained | Part 3",
    "Accounting Equation |   | All basics Explained | Part 4",
    "Accounting Equation |   | All basics Explained | Part 5",
    "Journal entries | Rules of Debit and Credit | All Basics covered | Part 1 | Accounts |  ",
    "Journal entries | Rules of Debit and Credit | All Basics covered | Part 2 | Accounts |  ",
    "Journal entries | Rules of Debit and Credit | All Basics covered | Part 3 | Accounts |  ",
    "Journal entries | Rules of Debit and Credit | All Basics covered | Part 4 | Accounts |  ",
    "Journal entries | Rules of Debit and Credit | All Basics covered | Part 5 | Accounts |  ",
    "Journal entries | Rules of Debit and Credit | All Basics covered | Part 6 | Accounts |  ",
    "Journal entries | Rules of Debit and Credit | All Basics covered | Part 7 | Accounts |  ",
    "Journal entries | Rules of Debit and Credit | All Basics covered | Part 8 | Accounts |  ",
    "Cash Book |   | Easiest Explanation of All Basics | Part 1",
    "Double entry system |  Rules of Debit and Credit | ONE SHOT |     |  Accounts",
    "Cash Book |   | Easiest Explanation of All Basics | Part 2",
    "Cash Book | Double Column |   | Easiest Explanation of All Basics | Part 3",
    "Cash Book | Double Column |   | Easiest Explanation of All Basics | Part 4",
    "Source documents |  Accounts | One Shot |  ",
    "GST |   | All Basics | Goods and Services Tax | Journal Entries | Must Watch",
    "GST |   | All Basics | Goods and Services Tax | Journal Entries | Part 2",
    "Ledger and Trial Balance | ONE SHOT |   | Accounts | Must watch",
    "Special Purpose Subsidiary books | One shot | All Basics Covered |   | Accounts",
    "Petty Cash Book | Cash book |   | Easiest Explanation of All Basics | Part 5",
    "Special Purpose Subsidiary books | Questions | One shot Covered |   | Accounts | Part 2",
    "BRS | Bank Reconciliation Statement | One Shot Basics |  ",
    "BRS | Bank Reconciliation Statement | Part 2 |  ",
    "Depreciation |   | All Basics | Must Watch | Part 1",
    "Depreciation | SLM | Must Watch | Easiest Explanation | Part 2 |  ",
    "Depreciation | SLM | Must Watch | Easiest Explanation | Part 3 |  ",
    "Depreciation | SLM | Must Watch | IMP. QUESTION | Part 4 |  ",
    "Depreciation | SLM | Must Watch | IMP. QUESTION | Part 5 |  ",
    "Depreciation | WDV | Must Watch | BASICS | Part 6 |  ",
    "Depreciation | Provision For dep | Must Watch | BASICS | Part 8 |  ",
    "Depreciation | Provision For dep | Must Watch | BASICS | Part 9 |  ",
    "Depreciation | Provision For dep and Asset disposal | Must Watch | BASICS | Part 10 |  ",
    "Rectification of errors | All basics | Easiest way |   | Must watch",
    "Rectification of errors | All basics | Easiest way |   | Part 2",
    "Rectification of errors | All basics | Easiest way |   | Part 3",
    "Rectification of errors | All basics | Easiest way |   | Part 4",
    "Rectification of errors | All basics | Easiest way |   | Part 5",
    "Rectification of errors | All basics | Easiest way |   | Part 6",
    "Financial Statements | Trading account | Easiest way |   | Part 1",
    "Financial Statements | Trading account | Easiest way |   | Part 2",
    "Financial Statements | Profit and loss account | Easiest way |   | Part 3",
    "Financial Statements | Profit and loss account | Easiest way |   | Part 4",
    "Financial Statements | Profit and loss account | Easiest way |   | Part 5",
    "Financial Statements with Adjustments | Easiest way |   | Part 1",
    "Financial Statements with Adjustments | Easiest way |   | Part 2",
    "Day 1 - GnG | Accounts |   | Financial statements with adjustments | All adjustments covered",
    "Day 4 - GnG | Accounts Revision |   | Accounts from incomplete records | One Shot",

  ];



  const videoData = videoIDs.map((id, i) => ({
    id: i + 1,
    title: `ITF Video ${i + 1}`,
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
          <h1 className="text-3xl sm:text-4xl font-bold">Introduction to Finance - Video Lectures</h1>
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

export default ITF;
