







import React, { useState } from "react";

const DAA = () => {
  // RDAAlace these video IDs with your actual YouTube video IDs (one for each of the 50 videos)
  const videoIDs = [
    "B6L7hh_H1wo",
    "LPN6P_xkpK4",
    "O7a3inPOd34",
    "P5338HzZX7E",
    "GKJ1XTJVOaA",
    "eR6zxKsK82I",
    "zG_aHVouvN0",
    "mefodP9SQC0",
    "cN51oLeEGJs",
    "HTFG0Lv7-Js",
    "SS0a-5VuyD4",
    "CvDdvVblFZ8",
    "El1YxUdvgp8",
    "K3IJYs6QAg4",
    "oL1gbCnwTj8",
    "4Y47BF8FPZo",
    "e8XT0FW225I",
    "3abFQRxhbac",
    "XlUU1t6u0jk",
    "7zOnak0_GPA",
    "22ti_R7RbEA",
    "B3vAdARJ8LE",
    "H56yafngK1Y",
    "hUsi6JiD4s4",
    "eQUdL3nkZF4",
    "VS8x5ES3WYs",
    "Tr6EFzijaWg",
    "PJc9S7FtBDAA",
    "6hduWZYUhFE",
    "ArnGuSZjwrc",
    "iwZfgdN-DkI",
    "ClMf3Qq4Fl4",
    "578oMqokVJg",
    "VEtQODGjrMc",
    "LJYC1zfkyGw",
    "dnYPCth8paU",
    "CqQ81h5n4Lc",
    "Eqn1cjl09e4",
    "tl87EJby2cs",
    "GVFXYrMRqFw",
    "DS_4My7CGEA",
    "3cCOvAdW7DY",
    "rUHT_Lp3-lg",
    "LTZY2x1UY8w",
    "6vf8oTjpu_s",
    "uUMdTyQ_hP8",
    "aBf9hMEV1DU",
    "F5SDvnJ_xwA",
    "WnG5czuOQOo",
    "nUlEfx-HgII",
    "vStua4YTkQY",
    "wAiNNuf9wA0",
    "oW8e5eBOoeE",
    "lCLcQe1Wgkg",
    "_OrrPKLdFM8",
    "iC5HtRAbN2w",
    "fke7-fEEf6U",
    "JgW5rSq9cWg",
    "Z5B3HJKqzq0",
    "KmSpVxuVNFc",
    "7UTNf3CFJDc",
    "4qW7glZAP5c",
    "gU1M4I-gp8c",
    "k468PClXhs8",
    "Sx4z9bDTNZ8",
    "Ty7r9t-USEs",
    "skBDWOxSDl8",
    "x9rGGunSkC0",
    "zBGVdKJucBw",
    "C-kr17luY2g",
    "2uRDQR2GsGI",
    "NGOjWoYsL9c",
    "XUAJFwCR4yI",
    "zvSVlceW8RY",
    "pJrtMkftNfM",
    "UxoQdSbMkDc",
    "oekAdRwG1B8",
    "NSi75SCWzPs",
    "FhQOmzANbao",
    "3qndrg5IIcQ",
    "vgIwrm8KjNQ",
    "J_x3wcC8ZE0",
    "6dGk2mq-Mhg",
    "WTe1y7I9fsg",
    "GyTHWZB9kSw",
    "y1Am4Fje62E",
    "yr6tvUWqa8g",
    "VirnHKUD8Oc",
    "JDjJXQ7CTj4",
    "gN_VfRd5wU4",
    "FAfw7hY3NKw",
    "OAd6-WCOUfE",
    "yPrz7Bhi46M",
    "Z62R0cZ--tY",
    "QEmmVXHmQiw",
    "6wPKLTY9rSg",
    "8ed2CYaXpws",
    "7Gq47HPAOGQ",
    "aSlbh61T40Q",
    "MtpVNaptvLc",
    "CK-j1pVi8t8",
    "Q1fppFYkP_g",
    "9DLRbTh5KF8",
    "-UoE0M2FSdU",
    "5emt2p3hSNI",
    "ct-gX3gIM7I",
    "Nq5owM1RXSY",
    "OnuQ_7I6Ik0",
    "bbeFPu67gG0",
    "aeO-UYsWW_0",
    "jIoBUts-BLw",
    "a3Wuqq53QyM",
    "FunWLjE9Plw",
    "9AIUTe4IkD0",
    "38p8vyDggrY",

  ];

  // Provide a description for each video.
  const videoDescriptions = [

    "Introduction to Algorithm and Properties | GATECSE | DAA",
    "Analysis of Algorithms || Time Complexity Analysis || DAA",
    "Comparing of various functions to analyze time complexity | DAA",
    "Big O Notation | Asymptotic Notation | GATECSE | DAA",
    "Big Omega Notation | Asymptotic Notation | GATECSE | DAA",
    "Theta Notation | Asymptotic Notation |  GATECSE | DAA",
    "Small o Notation | Asymptotic Notation | GATECSE | DAA",
    "Small omega notation | Asymptotic Notation | GATECSE | DAA",
    "Upper Bound Lower Bound and Average Bound in Asymptotic Notation | GATECSE | DAA",
    "Asymptotic Notation Solved Examples | Part-1 | Big O | Big Ω | Big Θ | GATECSE | DAA",
    "Asymptotic Notation Solved Examples | Part-2 | Big O | Big Ω | Big Θ | GATECSE | DAA",
    "Properties of Asymptotic Notations || GATECSE || DAA",
    "Asymptotic Notation Solved Examples | Part-3 | Big O | Big Ω | Big Θ | GATECSE | DAA",
    "Asymptotic Notation Solved Examples | Part-4  | Big O | Big Ω | Big Θ | GATECSE | DAA",
    "Asymptotic Notation Solved Examples | Part-5  | Big O | Big Ω | Big Θ | GATECSE | DAA",
    "Asymptotic Notation Solved Examples | Part-5 | Big O | Big Ω | Big Θ | GATECSE | DAA",
    "Best Case, Average Case and Worst Case Time Complexity of an Algorithm | GATECSE | DAA",
    "Time complexity Analysis of Iterative Algorithms | Part-1 | GATECSE | DAA",
    "Time complexity Analysis of Iterative Algorithms | Part-2 | GATECSE | DAA",
    "Time complexity Analysis of Iterative Algorithms | Part-3 | GATECSE | DAA",
    "Time complexity Analysis of Iterative Algorithms | Part-4 | GATECSE | DAA",
    "Time complexity Analysis of Iterative Algorithms | Part-5 | GATECSE | DAA",
    "Recurrence Relation T(n)=T(n/2) + C || Substitution Method || GATECSE || DAA",
    "Recurrence Relation T(n) = T(n-1) + C | Substitution Method | Finding Factorial | GATECSE | DAA",
    "Recurrence Relation T(n)=2T(n/2)+n | Substitution Method | GATECSE | DAA",
    "Recurrence Relation T(n)=8T(n/2)+n^2 | Substitution Method | GATECSE | DAA",
    "Recurrence Relation T(n)=2T(n/2)+nlogn | Substitution Method | GATECSE | DAA",
    "Recurrence Relation T(n)=2T(n/2)+n/logn | Substitution Method | GATECSE | DAA",
    "Recurrence Relation T(n)=2T(√n)+C | Substitution Method | GATECSE | DAA",
    "Recurrence Relation T(n)=2T(√n)+log n | Substitution Method | GATECSE | DAA",
    "Recurrence Relation T(n)=√2T(n/2)+√n | Substitution Method | GATECSE | DAA",
    "Master's Theorem || Solving Recurrences || The Master's Methods || GATECSE || DAA",
    "Recurrence Relations T(n)=T(√n)+logn Using Master's Theorem || GATECSE || DAA",
    "Divide and Conquer in Algorithms || GATECSE || DAA",
    "Recurrence Relation T(n)= 2T(n/2) +n | Recursive Tree Method | GATECSE | DAA",
    "Recurrence Relation T(n)= 5T(n/5) +n | Recursive Tree Method | GATECSE | DAA",
    "Recurrence Relation T(n)= 3T(n/4) +n^2 | Recursive Tree Method | GATECSE | DAA",
    "Recurrence Relation T(n)= T(n/3) + T(2n/3) + cn | Recursive Tree Method | GATECSE | DAA",
    "Recurrence Relation T(n)= T(n/10) + T(9n/10) + cn | Recursive Tree Method | GATECSE | DAA",
    "Finding Maximum and Minimum element using Divide and Conquer | GATECSE | DAA",
    "Mergesort Algorithm (Part-1) | Merging  | Merge Procedure  | Sorting Algorithm | GATECSE | DAA",
    "Mergesort Algorithm (Part-2) |  | Divide and Conquer | Sorting Algorithm | GATECSE | DAA",
    "Mergesort Algorithm (Part-3) | Time and Space Complexity | Sorting Algorithm | GATECSE | DAA",
    "Mergesort Solved Example (Part-1) | GATE Solved Examples | GATECSE | DAA",
    "Quick Sort Algorithm | Divide and Conquer | GATECSE | DAA",
    "Quicksort Time and Space Complexity | Quicksort Analysis | Best Case | Worst Case | GATECSE | DAA",
    "Quicksort Solved Example (Part-1) | GATE Solved Examples | GATECSE | DAA",
    "Quicksort Solved Example (Part-2) | GATE Solved Examples | GATECSE | DAA",
    "Quicksort Solved Example (Part-3) | GATE Solved Examples | GATECSE | DAA",
    "Randomized Quicksort Algorithm | Divide and Conquer | GATECSE | DAA",
    "Strassen’s Matrix Multiplication | GATECSE | DAA",
    "Introduction to Heap || Heap Tree with examples || Heapsort || GATECSE || DAA",
    "Max Heap and Min Heap || Heapsort || GATECSE || DAA",
    "Heapify Algorithm || Time Complexity of Heapify Algorithm || GATECSE || DAA",
    "Build Max Heap || Build Max Heap Time Complexity || Heapsort || GATECSE || DAA",
    "Max Heap Operations ||  Insertion || Deletion || Increase Key Operations || GATECSE || DAA",
    "Heapsort Algorithm | Heapsort Time Complexity Analysis | Sorting Algorithm | GATECSE | DAA",
    "Heapsort Solved Examples (Part 1) | Practice Problems | Heapsort | GATECSE | DAA",
    "Heapsort Solved Examples (Part 2)  Practice Problems  Heapsort  GATECSE  DAA",
    "Heapsort Solved Examples (Part 3) | Practice Problems | Heapsort | GATECSE | DAA",
    "Heapsort Solved Examples (Part 4) | Practice Problems | Heapsort | GATECSE | DAA",
    "3 ary Max Heap || K-ary Heap || Heapsort || GATECSE || DAA",
    "Priority Queue | Insertion and Deletion in Priority Queue | GATECSE | DAA",
    "Binomial Heap and Binomial Tree | Properties of Binomial Tree | DAA",
    "Properties of Binomial Heap || Structure of Binomial Heap || DAA",
    "Binomial Heap Union Operation || DAA",
    "Binomial Heap Insertion Operation || DAA",
    "Extract Minimum from Binomial Heap || Delete Minimum element from Binomial Heap || DAA",
    "Binomial Heap Deletion Operation | Deleting a node from Binomial | DAA",
    "Fibonacci Heap || Properties || Memory Representation || DAA",
    "Fibonacci Heap Operations || Create || Insert || Find Min || Union || DAA",
    "Extract min in Fibonacci heap || Delete min in Fibonacci heap || DAA",
    "Fibonacci Heap Deletion Operation || Deleting a node from Fibonacci Heap || DAA",
    "Introduction to Greedy Method | Greedy Algorithms | GATECSE | DAA",
    "Knapsack Problem using Greedy Method || Example-1 || GATECSE || DAA",
    "Knapsack Problem using Greedy Method || Example-2 || GATECSE || DAA",
    "Job Sequencing with Deadline Using Greedy Method | GATECSE | DAA",
    "Huffman Coding Algorithm with Example 1 || Greedy Techniques || GATECSE || DAA",
    "Huffman Coding Algorithm with Example 2 || Greedy Techniques || GATECSE || DAA",
    "Huffman Coding Algorithm with Example 3 || Greedy Techniques || GATECSE || DAA",
    "Optimal Merge Pattern || Greedy Method || GATECSE || DAA",
    "Spanning Tree || Minimum Spanning Tree || GATECSE || DAA",
    "Kruskal Algorithm for Minimum Spanning Tree || GATECSE || DAA",
    "Prim's Algorithm for minimum spanning trees || GATECSE || DAA",
    "Prims Algorithm Time Complexity || GATECSE || DAA",
    "Prims And Kruskal Solved Examples (Part-1) | Minimum Cost Spanning Tree | GATECSE | DAA",
    "Prims And Kruskal Solved Examples (Part-2) | Minimum Cost Spanning Tree | GATECSE | DAA",
    "Prims And Kruskal Solved Examples (Part-3) | Minimum Cost Spanning Tree | GATECSE | DAA",
    "Prims And Kruskal Solved Examples (Part-4) | Minimum Cost Spanning Tree | GATECSE | DAA",
    "Dijkstra Algorithm || Single Source Shortest Path || Greedy Method || GATECSE || DAA",
    "Why does Dijkstra's fail on Negative weights? || GATECSE || DAA",
    "Dijkstra's Algorithm Time Complexity | Dijkstra's Algorithm Analysis | GATECSE | DAA",
    "Dijkstra's Algorithm Solved Examples | Practice Problem |  Greedy Method | GATECSE | DAA",
    "Bellman Ford Algorithm | bellman ford algorithm shortest path | GATECSE | DAA",
    "Bellman Ford Algorithm Solved Example | bellman ford algorithm shortest path | GATECSE | DAA",
    "Bellman Ford Algorithm Time Complexity | GATECSE | DAA",
    "Introduction to Dynamic Programming || GATECSE || DAA",
    "Why 0/1 Knapsack failed using Greedy algorithm || GATECSE || DAA",
    "0/1 Knapsack Problem using Dynamic Programming || GATECSE || DAA",
    "Introduction to All pair Shortest Path || Floyd-Warshall Algorithm || Dynamic Programming || DAA",
    "All Pair Shortest Path || Floyd-Warshall Algorithm || Dynamic Programming || GATECSE || DAA",
    "Floyd-Warshall Algorithm Time Complexity || All Pair Shortest Path || Dynamic Programming || DAA",
    "Multistage Graph using Dynamic Programming || GATECSE || DAA",
    "Longest Common Subsequence Using Dynamic Programming || GATECSE || DAA",
    "Longest Common Sequence Solved Example || Dynamic Programming || GATECSE || DAA",
    "Travelling Salesman Problem using Dynamic Programming || GATECSE || DAA",
    "Sum of Subset Problem using Dynamic Programming | GATECSE | DAA",
    "Matrix Chain Multiplication using Dynamic Programming || GATECSE || DAA",
    "Matrix Chain Multiplication Example | Dynamic Programming || GATECSE || DAA",
    "Introduction to Backtracking || Backtracking  Algorithm || DAA",
    "N Queen Problem Using Backtracking | N Queen Problem | Backtracking Algorithm | DAA",
    "Sum of Subset Problem Using Backtracking || Backtracking Algorithm || DAA",
    "Graph Coloring Problem Using Backtracking || Backtracking Algorithm || DAA",
    "Hamiltonian Cycle Using Backtracking || Backtracking Algorithm || DAA",
    "0/1 Knapsack Problem Using Backtracking || Backtracking Algorithm || DAA",
    "",
  ];



  const videoData = videoIDs.map((id, i) => ({
    id: i + 1,
    title: `DAA Video ${i + 1}`,
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
              ["All Videos", "All Videos", 0, 132]

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
          <h1 className="text-3xl sm:text-4xl font-bold">DAA - Video Lectures</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute right-0 text-3xl sm:text-4xl text-white hover:text-gray-300 transition"
          >
            {sidebarOpen ? '✖' : '⋮'}
          </button>
        </div>

        {selectedSection === null && renderSection("All Videos", "All Videos ", 0, 132)}


        {selectedSection === "All Videos" && renderSection("All Videos", "All Videos ", 0, 132)}

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

export default DAA;
