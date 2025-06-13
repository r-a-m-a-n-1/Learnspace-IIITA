







import React, { useState } from "react";

const DSA = () => {
  // RDSAlace these video IDs with your actual YouTube video IDs (one for each of the 50 videos)
  const videoIDs = [
    "AT14lCXuMKI",
    "Bnjbun-hiBk",
    "CMbpZK_xqoc",
    "4Rll-_e9-0M",
    "KDQXUysHLL8",
    "tw-qWGG8y5g",
    "dmb1i4oN5oE",
    "DWpVGpNfDmM",
    "qauEA64G1Ds",
    "6wXZ_m3SbEs",
    "dq3F3e9o2DM",
    "ClvYytk5Rlg",
    "SbGRuk38MvI",
    "Tk_fi5l8cag",
    "nquQ_fYGGA4",
    "H8-IuKKiQeo",
    "v4szCPs9yEY",
    "7yNUXcOcHwE",
    "_6JI9XdO8nM",
    "fmfx1C4TTxw",
    "jsTybZ5qSNE",
    "ReGglEXEH08",
    "EkE6RHuMx3I",
    "xvAoleV706Q",
    "eBCTtS_sptM",
    "Fa958fGdgx0",
    "ElQxT6hDeNE",
    "bxRVz8zklWM",
    "VmsTAVpz0xo",
    "T_UXDTy23DQ",
    "RY4GkLahbCI",
    "TB7qzDgX-pI",
    "PAceaOSnxQs",
    "YHSj87pgjF8",
    "8QxlrRws9OI",
    "o6vj5l_W2h8",
    "u3paQa8KXu0",
    "1zqgyoZzda4",
    "2Z6g3kNymd0",
    "WHs-wSo33MM",
    "zp6pBNbUB2U",
    "YqrFeU90Coo",
    "RN1wzY_tnYU",
    "dn01XST9-bI",
    "40Ttkii9NPA",
    "EFO7bbFcOMw",
    "pqg0SOPRlJ4",
    "WJres9mgiAk",
    "YAdLFsTG70w",
    "vvey2QCs98o",
    "6vt3PFRC11E",
    "zDlTxrEwxvg",
    "-b2lciNd2L4",
    "e_Wv_pH4Se8",
    "PoBGyrIWisE",
    "s5XRtcud35E",
    "5lWJpTEnyow",
    "cySVml6e_Fc",
    "GW63gMgfeS8",
    "RttBwUVWfV8",
    "YWqla0UX-38",
    "_8qqlVH5NC0",
    "LXdi_4kSd1o",
    "3RQtq7PDHog",
    "qA02XWRTBdw",
    "w5cvkTXY0vQ",
    "qMmqOHr75b8",
    "1HeIZNP3w4A",
    "ewRSYHStdSA",
    "MumJoiP84J0",
    "94ErZ5K8XZg",
    "Ay2AbTk_QEg",
    "c7hXEFs69Jw",
    "asRbo5HWpxc",
    "aNU9XYYCHu8",
    "GKa_t7fF8o0",
    "DqcZLulVJ0M",
    "pGOdeCpuwpI",
    "bJnoBLL8AAg",
    "5hPfm_uqXmw",
    "vf-cxgUXcMk",
    "wm6qRWGjvkA",
    "vNhvBrc02G4",
    "ZtZaR7EcI5Y",
    "EjVHtpWkIho",
    "71SJL5lOOzY",
    "AK7BuT5MgU0",
    "vXrv3kruvwE",
    "dis_c84ejhQ",
    "9esCn0awd5k",
    "CsGP_s_3GWg",
    "smHnz2RHJBY",
    "KudAWAMiQog",
    "Gc4mWrmJBsw",
    "C46QfTjVCNU",
    "V_T5NuccwRA",
    "o4bAoo_gFBU",
    "yCxV0kBpA6M",
    "9oWd4VJOwr0",
    "QN9hnmAgmOc",
    "jlHkDBEumP0",
    "NEtwJASLU8Q",
    "Q_eia3jC9Ts",
    "JMlYkE8hGJM",
    "9crZRd8GPWM",
    "pEJiGC-ObQE",
    "Il45xNUHGp0",
    "zeMa9sg-VJM",
    "dxrLtf-Fybk",
    "AYcsTOeFVas",
    "saofdNsZiYY",
    "u_yLtJCjzb0",
    "IwuAjXyatow",
    "0eK-K-feNzM",

  ];

  // Provide a description for each video.
  const videoDescriptions = [
    "1.1 Arrays in Data Structure | Declaration, Initialization, Memory representation",
    "1.2 Array Operations - Traversal, Insertion | Explanation with C Program | DSA Course",
    "1.3 Array Operations | Deletion from Array | Explanation with Code | Data Structure",
    "1.4 Pointers and Arrays | Data structure Tutorials",
    "1.5 Introduction to Two Dimensional (2D) Arrays | Implementation of 2D Arrays |Memory representation",
    "1.6 Pointers and 2-D Arrays | Two dimensional Array | Data Structures & Algorithm Tutorials",
    "2.1 Introduction to Linked List | Need of Linked List | DSA Tutorials",
    "2.2 Types of Linked List in Data Structures | DSA Full Course",
    "2.3 Arrays vs Linked List | Data structures",
    "2.4 Linked List Implementation in C/C++ | Creation and Display | DSA Tutorials",
    "2.5 Insertion of a Node in Linked List(at Beginning,End,Specified Position)with Code | DSA Tutorials",
    "2.6 Deletion of a node from Linked List (from beginning, end, specified position) | DSA Tutorials",
    "2.7 Find length of Linked List- Iterative approach | DSA Tutorials",
    "2.8 Reverse a Linked List - Iterative Method | Data Structure Tutorials",
    "2.9 Introduction to Doubly Linked List in Data structures | DSA Tutorials",
    "2.10 Implementation of Doubly Linked List - Data Structures",
    "2.11 Insertion in Doubly Linked List(beginning, end, specific position) |  Data Structures",
    "2.12 Deletion from Doubly Linked List (beginning,end,specific position) | Data Structures Tutorials",
    "2.13 Reverse a Doubly Linked List | Data Structures & Algorithm Tutorials",
    "2.14 Circular Linked List in Data Structure | Creation and Display | DSA Course",
    "2.15 Implementation of Circular linked list in C | Data Structure Tutorials",
    "2.16 Insertion in Circular Linked List | Data Structure Tutorials",
    "2.17 Deletion of a Node from Circular Linked List(beginning, end, given position) | DSA Tutorials",
    "2.18 Reverse a Circular Linked List | Data Structure Tutorials",
    "2.19 Implementation of Doubly Circular Linked List|  Creation and Display | Data Structures",
    "2.20 Insertion in Doubly Circular Linked List | Data Structure & Algorithm Tutorials",
    "2.21 Deletion from Doubly Circular Linked List | Data Structure & Algorithm Course",
    "3.1 Stack in Data Structure | Introduction to Stack | Data Structures Tutorials",
    "3.2 Implementation of Stack using Array | Data Structure and Algorithm Tutorials",
    "3.3 Stack implementation using Linked List | Data Structures and Algorithm Tutorials",
    "3.4 Infix Prefix and Postfix expressions | Data Structures Tutorials",
    "3.5 Infix to Postfix Conversion Rules using Stack | Data structures Tutorials",
    "3.6 Infix to Postfix using Stack | Data Structures Tutorials",
    "3.7 Infix to Postfix conversion using Stack | Data structures and algorithms",
    "3.8 Infix to Prefix using Stack | Data Structures Tutorials",
    "3.9 Evaluation of Prefix and Postfix expressions using Stack | Data Structures",
    "3.10 Postfix Expression Evaluation using Stack | Data Structures and Algorithms",
    "3.11 Prefix to Infix Conversion | Postfix to Infix Conversion | Data structure Tutorials",
    "3.12 Expression Trees | Binary Expression Tree | Data Structures Tutorials",
    "3.13 Expression Tree from Postfix | Data Structures Tutorials",
    "4.1 Queue in Data Structure | Introduction to Queue | Data Structures Tutorials",
    "4.2 Implementation of Queue using Arrays | Data Structures & Algorithm Tutorials",
    "4.3 Queue Implementation using Linked List in C | Data Structure Tutorials",
    "4.4 Circular Queue in Data Structure | Circular Queue using Arrays in C | DSA Tutorials",
    "4.5 Circular Queue in Data Structure | Circular Queue using Linked List | DSA Tutorials",
    "4.6 Implement Queue using Stack in C| Data Structures Tutorials",
    "4.7 DEQUE in Data Structure | Introduction to DEQue - Double Ended Queue",
    "4.8 Implementation of DEQUE using Circular Array | Data Structures Tutorials",
    "5.1 Tree in Data Structure | Introduction to Trees | Data Structures Tutorials",
    "5.2 Binary Tree in Data Structure| Types of Binary Tree| Data Structures Tutorials",
    "5.3 Binary Tree Implementation in C Program | Data Structures Tutorials",
    "5.4 Binary Tree Representation |Array representation of Binary Tree | Data Structure",
    "5.5 Binary Tree Traversals (Inorder, Preorder and Postorder) | Data structures and algorithms",
    "5.6 Binary Tree traversal | Preorder, Inorder, Postorder | Data Structures Tutorials",
    "5.7 Construct Binary Tree from Preorder and Inorder Traversal | Example | Data Structures Tutorials",
    "5.8 Construct Binary Tree from Postorder and Inorder with example | Data structures Course",
    "5.9 Construct Binary Tree from Preorder and Postorder traversal | Data Structure Tutorials",
    "5.10 Binary Search Trees (BST) - Insertion and Deletion | DSA Full Course",
    "5.11 Construct Binary Search Tree(BST) from Preorder example |Data Structures & Algorithm",
    "5.12 Construct Binary Search Tree(BST) from Postorder Traversal | Data structures",
    "5.13 AVL Tree - Insertion, Rotations(LL, RR, LR, RL) with Example | Data Structure Tutorials",
    "5.14 AVL Tree Insertion | with Solved Example | Data Structures & Algorithm Tutorials",
    "5.15 AVL Tree Deletion in Data structures | with Example | DSA Tutorials",
    "5.16 Red Black tree | Introduction to Red Black trees | DSA Tutorials",
    "5.17 Red Black Tree Insertion | Insertion Algorithm | Data Structure Tutorials",
    "5.18 Red Black Tree Deletion | DSA Tutorials for Beginners",
    "5.19 Splay Tree Introduction | Data structure & Algorithm",
    "5.20 Splay Tree Insertion | Data structure",
    "5.21 Splay Trees Deletion | Bottom-up Splaying | Data Structure & Algorithm",
    "5.22 Splay Tree Deletion | Top Down Splaying | Data Structure & Algorithm",
    "5.23 Introduction to B-Trees | Data Structures & Algorithm Tutorials",
    "5.24 Insertion in B-tree of Order 3 | B-Tree Example | Data structures and algorithms",
    "5.25 Insertion in B-Tree of Order 5 | Data structures and algorithms Tutorials",
    "5.26 Insertion in B-Tree of Order 5 with Given Alphabets | Data structures and algorithms",
    "5.27 Insertion in B-Tree of Order 4 (Data Structure)",
    "5.28 B-Tree Deletion in Data Structures | DSA Tutorials",
    "5.29 B+ Tree Insertion | B+ Tree Creation example | Data Structure Tutorials",
    "5.30 B+ Tree Deletion| with example |Data structure & Algorithm Tutorials",
    "5.31 B+ Tree Insertion | Create B+ Tree of Order 5 | Data Structures Tutorials",
    "6.1 Graph Representation in Data Structure(Graph Theory)|Adjacency Matrix and Adjacency List",
    "6.2 BFS and DFS Graph Traversals| Breadth First Search and Depth First Search | Data structures",
    "6.3 Types of Edges in DFS | Edge Classification | Data Structures and Algorithms",
    "6.4 Minimum Spanning Tree | Properties of MST | Data Structures Tutorials",
    "6.5 Prim's Algorithm for Minimum Spanning Tree | Data Structures Tutorials",
    "6.6 Kruskals Algorithm for Minimum Spanning Tree- Greedy method | Data structures",
    "6.7 Minimum spanning Tree(MST) | UGC NET(Computer Science) Practice Question with Solution",
    "6.8 Cycle detection in Directed Graph |Data Structures and Algorithms Tutorials",
    "6.9 Detect Cycle in Undirected Graph | Data Structures and Algorithms",
    "6.10 Topological Sorting (with Examples) | How to find all Topological Orderings of a Graph",
    "6.11 Connected Components |How to find Connected Components in Graph | Graph Theory",
    "6.12 Bridges(Cut Edge) in a Graph | Find All Bridges in a Graph | Graph Theory",
    "6.13 Dijkstra Algorithm | Single Source Shortest Path| Greedy Method",
    "6.14 Bellman Ford Algorithm-Single Source Shortest Path | Dynamic Programming",
    "6.15 Floyd Warshall Algorithm All Pair Shortest Path algorithm | Data Structures and Algorithms",
    "7.1 Linear Search Algorithm | Linear Search in C | Data Structures Tutorials",
    "7.2 What is Binary Search | Binary Search Algorithm with example | Data Structures Tutorials",
    "7.3 Bubble Sort Algorithm| Data Structures Tutorials",
    "7.4 Insertion Sort Algorithm |Explanation with C Program| Data Structure Tutorials",
    "7.5 Selection Sort in Data Structure | Selection Sort Algorithm with C Program",
    "7.6 Quick Sort in Data Structure | Sorting Algorithm | DSA Full Course",
    "7.7 Merge Sort in Data Structure | Sorting Algorithms| DSA Full Course",
    "7.8 Max Heap Insertion and Deletion | Heap Tree Insertion and Deletion with example| Data Structure",
    "7.9 Heap Sort | Heapify Method | Build Max Heap Algorithm | Sorting Algorithms",
    "7.10 Radix Sort/Bucket Sort  in Data Structure | Sorting Algorithm",
    "7.11 Shell Sort | Sorting Algorithms | Full explanation with Code | DSA Course",
    "7.12 Counting Sort (Analysis and Code) | Easiest Explanation | Data Structure Tutorials",
    "7.13 Radix Sort - Easiest explanation with Code | Sorting Algorithms | Data Structures Tutorials",
    "8.1 Hashing Techniques to Resolve Collision| Separate Chaining and Linear Probing | Data structure",
    "8.2 Hashing - Quadratic Probing | Collision Resolution Technique | Data structures and algorithms",
    "8.3 Double Hashing | Collision Resolution Technique | Data Structures and algorithms",
    "9.1 Huffman Coding  -Greedy Method |Data Structures Tutorials",
    "9.2 Huffman Coding with Probabilities | UGC NET Previous Year Question",
    "Complete DSA and Java Course for Placement | Early Bird Offer Inside  #coding #java #dsa",
    "Exclusive | Only 3 Days are left !!",
    "",
  ];



  const videoData = videoIDs.map((id, i) => ({
    id: i + 1,
    title: `DSA Video ${i + 1}`,
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
              ["All Videos", "All Videos", 0, 115]

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
          <h1 className="text-3xl sm:text-4xl font-bold">DSA - Video Lectures</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute right-0 text-3xl sm:text-4xl text-white hover:text-gray-300 transition"
          >
            {sidebarOpen ? '✖' : '⋮'}
          </button>
        </div>

        {selectedSection === null && renderSection("All Videos", "All Videos ", 0, 115)}


        {selectedSection === "All Videos" && renderSection("All Videos", "All Videos ", 0, 115)}

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

export default DSA;
