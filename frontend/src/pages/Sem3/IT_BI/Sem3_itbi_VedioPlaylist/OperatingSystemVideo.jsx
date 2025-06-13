import React, { useState } from "react";

const OS = () => {
 const videoIDs = [
  "MPzrvdewflk",
"ejDbToFKYmA",
"ZYnN4wJ5csk",
"nBJDfoUKIj0",
"254eL4pSB_o",
"K7xJ-fV2Exo",
"xA_LmtDOGEA",
"mBKDvmsGd7s",
"zQyZV9fFckk",
"aw3rhnYvhDU",
"QlhTVC9SdFA",
"4e-D5X5Y8bk",
"L0QEyKBCCCo",
"QtZ7PtedIic",
"b34g42BlIZc",
"n7PI_Hi1gpI",
"-vMdHWf4RMQ",
"r6sJvHanfbQ",
"I-LLeRMPsDg",
"AiAGAAGGVas",
"CP2oOPzXjv4",
"dl3n6IQBXOI",
"GBc9MmucWcI",
"R6rRPWQmN40",
"obt0RcjHVtM",
"ZXP9tkuwkEA",
"vBURTt97EkA",
"VjPgYcQqqN0",
"YcRd3WMbXnE",
"F18RiREDkwE",
"So9SR3qpWsM",
"fvN98a_7AT4",
"TQWERtMoKbI",
"psDpbWscPuE",
"lhToWeuWWfw",
"EavqupVh8ls",
"UWDzhz8MVqc",
"t_McsJ1RGQg",
"XXPBl20J22w",
"daDbY2iDmU0",
"wD0PrF3fGSY",
"OrM7nZcxXZU",
"jZ_6PXoaoxo",
"4s2MKuVYKV8",
"2h3eWaPx8SA",
"vTgccrbYHYs",
"pSW9d3Oaie8",
"SFc3jt8t5rU",
"dJuYKfR8vec",
"uHtzOFwgD74",
"LuuSXWkDJOo",
"S3mS8MR7bUY",
"fViAyFLOYxU",
"uagKTbohimU",
"QmhTjsOOrlw",
"jH3RezOHROU",
"LOfGJcVnvAk",
"HW2Wcx-ktsc",
"IFEFVXvjiHY",
"o2Sf0GHWpmk",
"wNns0kIDC68",
"EWkQl0n0w5M",
"pVzb3TUcDLo",
"4DhFmL-6SDA",
"bWHFY8-rL5I",
"7DoP1L9nAAs",
"VSMAjMfJ6KQ",
"8-BUGte27sk",
"t0g9b3SJECg",
"lpM14aWgl3Q",
"ypOnf9mnFYg",
"yKD3pcFvGmY",
"Z2KsfhEJOFA",
"gHKSmz-W0x0",
"YzBBJYfwdi8",
"7TpxxTNrcTg",
"QlCmgBOMjlI",
"wioTortHb_g",
"fvkSXMZaBNY",
"1KLuC0knvs8",
"g6QjVDyGgSE",
"ph2awKa8r5Y",
"UtEORPakw5Y",
"gYCiTtgGR5Q",
"5oZYS5dTrmk",
"XDIOC2EY5JE",
"2cGo2HdA0dM",
"Qx3P2wazwI0",
"p2XDhW5INOo",
"FYUi-u7UWgw",
"ufdQ0GR855M",
"K52NiClfvyE",
"WIj06NCxkWE",
"_yl0qAnsa_8",
"A41_0uRnb2A",
"fWL8HAIrgMw",
"LlnBI2yjvlg",
"7bnpFpYZtVk",
"d9WyerblWQc",
"puobwv1xjqc",
"pQ2coSLQvX4",
"-yNgx1pAa64",
"syq56cLrWdI",
"Y0QiKgzH92U",
"WmTM07JZZ9c",
"roq9rmkB3Sg",
"9c37Ga81zLE",
"UoS3_7_K77s",
"4N0Cvhw2eFU",
"Ad16cMXDbIg",
"SpvULhXEF0I",
"2yIqMvQtYzY",
"JnCUP4I9H48",
"qbSwWbl5Zys",
"zQjry32MjDQ",
"lbSSBIoXNmQ",
"9pcxHcp89nU",
"CM5eJ0DAwJ8",
"ZtKhjexMddg",
"TvulSzjQ93M",
"QmpRf_mEATc",
"7_9ajj9En_Q",
"mB--57TaYlw",
"ckOAHGQA_a8",
"aEytXqw7_sI",
"tvztz-Nu_AI",
"YtH0y6rELbE",
"CaZpPdgfzjs",
"oKaxfREbGaI",
"BLlRzZF_yz0",
"qb7BQEylA34",
"-GvcKVYHZc8",
"D3FV0nJ_2Kg",

  ];

  const videoDescriptions = [
    "Introduction to Operating System |  Operating System Lectures by Dr. Bibhas Ghoshal, IIIT Allahabad",
"Fundamental Concepts in OS - 1 | Operating System Lectures by Dr. Bibhas Ghoshal, IIIT Allahabad",
"Fundamental Concepts in OS - 2  |  Operating System Lectures by Dr. Bibhas Ghoshal, IIIT Allahabad",
"Operating System Tut1 : Introducing Process",
"Process Management  | Operating System Lectures by Dr. Bibhas Ghoshal, IIIT Allahabad",
"Process Operations - fork,exec  |  Operating System Lectures by Dr. Bibhas Ghoshal, IIIT Allahabad",
"Process Scheduling 1 | Operating System Lectures by Dr. Bibhas Ghoshal, IIIT Allahabad",
"Process Scheduling 2 | Operating System Lectures by Dr. Bibhas Ghoshal, IIIT Allahabad",
"Threads | Operating System Lectures by Dr. Bibhas Ghoshal, IIIT Allahabad",
"Inter Process Communication | Operating System Lectures by Dr. Bibhas Ghoshal, IIIT Allahabad",
"Tutorial on UNIX Fundamentals : Operating System Lectures 2021 | Dr. Bibhas Ghoshal IIITA",
"Tutorial on working with xv6 : Operating System Lectures 2021 | Dr. Bibhas Ghoshal IIITA",
"Tutorial on Sys Calls for Process Mgmt.: Operating System Lectures 2021 | Dr. Bibhas Ghoshal IIITA",
"Adding System Calls in xv6 : Operating System Lectures 2021 | Dr. Bibhas Ghoshal IIITA",
"Tutorial on POSIX Threads : Operating System Lectures 2021 | Dr. Bibhas Ghoshal IIITA",
"Process Synchronization I : Operating System Lectures 2021 | Dr. Bibhas Ghoshal IIITA",
"Process Synchronization II : Operating System Lectures 2021 | Dr. Bibhas Ghoshal IIITA",
"Process Synchronization III : Operating System Lectures 2021 | Dr. Bibhas Ghoshal IIITA",
"Process Synchronization IV : Operating System Lectures 2021 | Dr. Bibhas Ghoshal IIITA",
"Memory Management I : Operating System Lectures 2021 | Dr. Bibhas Ghoshal IIITA",
"Memory Management II : Operating System Lectures 2021 | Dr. Bibhas Ghoshal IIITA",
"File System : Devices II | Operating System Lectures 2021 | Dr. Bibhas Ghoshal IIITA",
"File System : Files and Directories | Operating System Lectures 2021 | Dr. Bibhas Ghoshal IIITA",
"File System : File System Design| Operating System Lectures 2021 | Dr. Bibhas Ghoshal IIITA",
"File System : Devices I | Operating System Lectures 2021 | Dr. Bibhas Ghoshal IIITA",
"File System : File System Operations | Operating System Lectures 2021 | Dr. Bibhas Ghoshal IIITA",
"Introduction to Operating Systems",
"Basics of OS (Computer System Operation)",
"Basics of OS (Storage Structure)",
"Basics of OS (I/O Structure)",
"Computer System Architecture",
"Operating System Structure",
"Operating System Services",
"User Operating System Interface",
"System Calls",
"Types of System Calls",
"System Programs",
"Operating System Design & Implementation",
"Structures of Operating System",
"Virtual Machines",
"Operating System Generation and System Boot",
"Process Management (Processes and Threads)",
"Process State",
"Process Control Block",
"Process Scheduling",
"Context Switch",
"Operation on Processes – Process Creation",
"Operation on Processes – Process Termination",
"Interprocess Communication",
"Shared Memory Systems",
"Message Passing Systems (Part 1)",
"Message Passing Systems (Part 2)",
"Message Passing Systems (Part 3)",
"Sockets in Operating System",
"Remote Procedure Calls (RPC)",
"Issues in RPC & How They're Resolved",
"Introduction to Threads",
"Multithreading Models & Hyperthreading",
"fork() and exec() System Calls",
"Threading Issues [fork() & exec() System Calls]",
"Threading Issues (Thread Cancellation)",
"Introduction to CPU Scheduling",
"CPU and I/O Burst Cycles",
"Preemptive and Non-Preemptive Scheduling",
"Scheduling Criteria",
"Scheduling Algorithms - First Come First Served (FCFS)",
"First Come First Served Scheduling (Solved Problem 1)",
"First Come First Served Scheduling (Solved Problem 2)",
"Scheduling Algorithms - Shortest Job First (SJF)",
"Shortest Job First Scheduling (Solved Problem 1)",
"Shortest Job First Scheduling (Solved Problem 2)",
"Scheduling Algorithms - Priority Scheduling",
"Priority Scheduling (Solved Problem 1)",
"Priority Scheduling (Solved Problem 2)",
"Scheduling Algorithms - Round Robin Scheduling",
"Round Robin Scheduling (Turnaround Time & Waiting Time)",
"Round Robin Scheduling - Solved Problem (Part 1)",
"Round Robin Scheduling - Solved Problem (Part 2)",
"Multilevel Queue Scheduling Algorithm",
"Multilevel Feedback-Queue Scheduling Algorithm",
"Scheduling Algorithms – Solved Problems",
"Process Synchronization",
"The Critical-Section Problem",
"Peterson’s Solution",
"Test and Set Lock",
"Semaphores",
"Disadvantages of Semaphores",
"The Bounded Buffer Problem",
"The Readers Writers Problem",
"The Dining Philosophers Problem",
"Monitors",
"Dining Philosophers Solution using Monitors",
"Process Synchronization - Problem 1",
"Process Synchronization - Problem 2",
"Process Synchronization - Problem 3",
"Process Synchronization - Problem 4",
"Process Synchronization - Problem 5",
"Deadlocks | Chapter-7 | Operating System | nesoacademy.org",
"Main Memory | Chapter-8 | Operating System | nesoacademy.org",
"Virtual Memory | Chapter-9 | Operating System | nesoacademy.org",
"File Systems | Chapter-10 | Operating System | nesoacademy.org",
"File System Implementation | Chapter-11 | Operating System | nesoacademy.org",
"Mass Storage Structure | Chapter-12 | Operating System | nesoacademy.org",
"Deadlock and Deadlock Prevention | L16 | Operating System | Hindi | Sankalp 2.0 | Vishvadeep Gothi",
"Deadlock Avoidance Bankers Safety Algorithm | L17 | OS | Hindi | Sankalp 2.0 | Vishvadeep Gothi",
"Bankers Resource Request Algorithm | Lecture 18 | OS | Hindi | Sankalp 2.0 | Vishvadeep Gothi",
"Deadlock Detection & Questions | Lecture 19 | OS | Hindi | Sankalp 2.0 | Vishvadeep Gothi",
"Virtual Memory GATE 1989-2000 | L 1 | Operating System GATE PYQs | GATE 2022 #VishvadeepGothi",
"Virtual Memory GATE 2000-2008 | L 2 | Operating System GATE PYQs | GATE 2022 #VishvadeepGothi",
"Virtual Memory GATE 2008-2021 | L 3 | Operating System GATE PYQs | GATE 2022 #VishvadeepGothi",
"Process Synchronization GATE 1987-2000 | L 4 | Operating System GATE PYQs | GATE 2022",
"Process Synchronization GATE 2000-2010 | L 5 | Operating System GATE PYQs | GATE 2022",
"Process Synchronization GATE 2006-2012 | L 6 | Operating System GATE PYQs | GATE 2022",
"Process Synchronization GATE 2013-2021 | L 7 | Operating System GATE PYQs | GATE 2022",
"Threads All GATE Questions | L 8 | Operating System GATE PYQs | GATE 2022",
"Semaphore All GATE Questions | L 9 | Operating System GATE PYQs | GATE 2022",
"Process Scheduling GATE 1990-2002 | L 10 | Operating System GATE PYQs | GATE 2022",
"Process Scheduling GATE 2003-2007 | L 11 | Operating System GATE PYQs | GATE 2022",
"Process Scheduling GATE 2007-2014 | L 12 | Operating System GATE PYQs | GATE 2022",
"Process Scheduling GATE 2015-2021 | L 13 | Operating System GATE PYQs | GATE 2022",
"Page Replacement 1993 - 1997 | L 14 | Operating System GATE PYQs | GATE 2022 | Vishvadeep Gothi",
"Page Replacement 1993-1997 | L 15 | Operating System GATE PYQs | GATE 2022 | Vishvadeep Gothi",
"Page Replacement 2009-2021 | L 16 | Operating System GATE PYQs | GATE 2022 | Vishvadeep Gothi",
"Disk Scheduling 1989 - 2004 | L 17 | Operating System GATE PYQs | GATE 2022 | Vishvadeep Gothi",
"Disk Scheduling 2007 - 2021 | L 18 | Operating System GATE PYQs | GATE 2022 | Vishvadeep Gothi",
"Resource Allocation 1989-2000 | L 19 | Operating System GATE PYQs | GATE 2022 | Vishvadeep Gothi",
"Resource Allocation 2001-2009 | L 20 | Operating System GATE PYQs | GATE 2022 | Vishvadeep Gothi",
"Resource Allocation 2009-2021 | L 21 | Operating System GATE PYQs | GATE 2022 | Vishvadeep Gothi",
"Process Management & Memory Management | L 22 | Operating System GATE PYQs | GATE 2022",
"File System | L 23 | Operating System GATE PYQs | GATE 2022 | Vishvadeep Gothi",
"File System: File Allocation Method - Indexed Allocation -Example  -Q&A | GATE 2022 #VishvadeepGothi",
"File System: File Allocation Method - Indexed Allocation - Master boot record & Unix Node| GATE 2022",
"Tree Revision Mini-Marathon: (Part-1) | GATE 2022 | Vishvadeep Gothi",
"",


    "",
  ];

  const videoData = videoIDs.map((id, i) => ({
    id: i + 1,
    title: `OS Video ${i + 1}`,
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
              ["Bibhas Sir", "Bibhas Sir", 0, 26],
              ["Neso+Unacademy", "Neso+Unacademy", 26, 107],
              ["Gate Pyq", "Gate Pyq", 107, 200],
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
          <h1 className="text-3xl sm:text-4xl font-bold">Operating System - Video Lectures</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute right-0 text-3xl sm:text-4xl text-white hover:text-gray-300 transition"
          >
            {sidebarOpen ? '✖' : '⋮'}
          </button>
        </div>

        {selectedSection === null && renderSection("Bibhas Sir", "Bibhas Sir ", 0, 26)}
        {selectedSection === null && renderSection("Neso+Unacademy", "Neso+Unacademy ", 26, 107)}
        {selectedSection === null && renderSection("Gate Pyq", "Gate Pyq ", 107, 200)}
        {/* {selectedSection === null && renderSection("problems", "Problem ", 102, 115)} */}

        {selectedSection === "Bibhas Sir" && renderSection("Bibhas Sir", "Bibhas Sir", 0, 26)}
        {selectedSection === "Neso+Unacademy" && renderSection("Neso+Unacademy", "Neso+Unacademy ", 26, 107)}
        {selectedSection === "Gate Pyq" && renderSection("Gate Pyq", "Gate Pyq ", 107, 200)}
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

export default OS;
