import React, { useState } from "react";

const CGV = () => {
 const videoIDs = [
  "oKXBOK0Rx8o",
"a5O7HM20g08",
"87fz8xzmDTw",
"LPaUUUn_R0M",
"xq7GSiXJIcw",
"LFv3O2mueOw",
"U1qKXpOJOd8",
"cSiOU-hyR40",
"_btKjJ9AFjE",
"10lbv5xhvfE",
"QOTiQkiEMMM",
"lj9WNsTI6-c",
"W6btx1Io1mU",
"0OtmUT5xmpc",
"lar2Tz6KKyg",
"2S7G6iYR7Sg",
"Ah6sFfoPNME",
"xDHhtsRwjgU",
"z0M8BhAnIVI",
"5T2_X07SnlE",
"iENVJS4taIk",
"nD1rPzic4EY",
"8sC43P_euSk",
"TpSSbOhwWeY",
"VH6RE8N5tTg",
"lWF0imtKMUo",
"4tjlEdhfWOU",
"lOxsXQjBlIk",
"CqExSCW94Vw",
"mIljiOmBSds",
"cEFy2QC3rxs",
"RvEiyOsIx6U",
"789TtEEW-QA",
"g3yP6Q3fMmU",
"gp_RLzyjyXw",
"w7oHokhCJ4Q",
"A7vD0owIqkE",
"__9RXWdKiDg",
"C_enDGiNycA",
"emITpFzNd5o",
"9jjGi3JAD_w",
"G0s2MwPIE7o",
"bGeuYdWXoew",
"ICF3-j6nBzo",
"mUVSDNoefB4",
"5NyMSa1WKOg",
"egXLL9ENc_s",
"iy9XCYwOS8c",
"fvuqclbjjwI",
"llJj0Lz4R8o",
"luZjqKdzf98",
"YUVPSUGKKPs",
"34W-4mIHZDM",
"h3C1b2JOIvM",
"e6HoHU700Mc",
"U0LjTZuAgWI",
"8nUxSM_nnBU",
"hsjSwMHYS9g",
"hrPRwkTw7GM",
"ustqEXUXZaA",
"rW8F-dwqY6o",
"ga_76nrC44I",
"Ip2qlz25RwM",
"FjV5DWTJXtY",
"pAZVGJPD5Iw",
"QzcJeDoP5TU",
"Ax19eWQfiNI",
"hnnQdaPdoRE",
"QW9aT6egcHs",
"xfLDj6XB_q0",
"W4xZ1N2mpXA",
"6d2Ksr7AXDk",
"itC5IUrss7Q",
"Tpz7gNPq8wY",
"IsKP2_F3JSY",
"enYfsIHx9k0",
"w14LeHCiMII",
"Jm-1L4rlO6g",
"OAv1SXu7wPk",
"FGCY0z3T2_o",
"nKKOpUSrGj0",
"9j2zpOsG9xw",
"MjB12udrK28",
"kxbnrjMAhLE",
"i4Sj0rjSRSg",
"10_fCoBuM8E",
"DJ3YHqCDVck",
"goh4_FzTGzM",
"1tvrVZlqzeM",

  ];

  const videoDescriptions = [
"Graphics and Visual Computing - Introduction - Development of Computer Technology from 1960 to 2020.",
"Graphics and Visual Computing – Learning from Artists, Introduction – 2",
"Graphics and Visual Computing – Coordinates & Graphical Pipeline. - 3",
"Graphics and Visual Computing (GVC) – The Line Drawing Algorithms. - 4",
"Graphics and Visual Computing – The Anti-Aliasing Algorithms. - 5",
"6. Graphics and Visual Computing – Introduction to Transformations and Classes of Transformations",
"7. Graphics and Visual Computing – Representing and Combining Transformations",
"8. Graphics and Visual Computing – Change of Orthonormal Basis",
"9. Graphics and Visual Computing – Object Hierarchy",
"10. Graphics and Visual Computing – Projection Transformation (Orthonormal and Perspective)",
"11. Graphics and Visual Computing – Viewing Transformation",
"12. Graphics and Visual Computing – Fill Algorithms.",
"13. Graphics and Visual Computing – Polygon Clipping Algorithms",
"14. Graphics and Visual Computing – Line Clipping Algorithms",
"15. Graphics and Visual Computing – Hidden Surface Removal Algorithms",
"16A.- GVC – Spline, Requirements and Constraints, Derivation of Hermite Spline.",
"17. GVC – Spline (Continued), Derivation of Bézier Spline from Hermite Spline and the Other Splines.",
"18. Graphics and Visual Computing – Illuminations Part-1",
"21. Graphics and Visual Computing – GP-GPU: Introduction to GPU (Ajit Singh)",
"19. Graphics and Visual Computing – Illuminations Part-2",
"22. Graphics and Visual Computing – GP-GPU : GPU Architecture (Ajit Singh)",
"23. Graphics and Visual Computing – GP-GPU: GPU and OpenGL (Ajit Singh)",
"24. Graphics and Visual Computing – GP-GPU: Introduction to CUDA (Ajit Singh)",
"20. Graphics and Visual Computing – Fractals",
"Data Visualisation 04A",
"Data Visualisation 04 Coordinates and Transformation 01",

"Introduction of Computer Graphics - lecture 1/ Computer Graphics",
"Applications of Computer Graphics - lecture 2/ computer graphics",
"Display device - CRT ( Cathode Ray Tube) - lecture 3 / computer graphics",
"Raster Scan Display - lecture 4/ computer graphics",
"Random Scan / Vector Scan display - lecture 5/ computer graphics",
"Difference between Raster Scan and Random Scan Display - lecture 6 / computer graphics",
"Techniques for producing colour display - lecture 7/ computer graphics",
"Direct View Storage Tube (DVST)- lecture8/ computer graphics",
"Vector and Character generation - lecture 9/ computer graphics",
"Simple DDA Algorithm - lecture 10/ computer graphics",
"Numericals on simple DDA line drawing algorithm - lecture 11/ computer graphics",
"Bresenham's Line drawing algorithm - lecture 12/ computer graphics",
"Numericals on Bresenham's Line drawing algorithm - lecture 13/ computer graphics",
"Concept of Midpoint Circle drawing algorithm - lecture 14/ computer graphics",
"Mid Point Circle drawing algorithm - lecture 15/ computer graphics",
"Numerical 1 on mid point circle drawing algorithm - lecture 16/ computer graphics",
"Numerical 2 on mid point circle drawing algorithm - lecture 17/ computer graphics",
"Bresenham's circle drawing algorithm - lecture 18/ computer graphics",
"Numerical on Bresenham's circle drawing algorithm - lecture 19/ computer graphics",
"Polygon fill algorithm - boundary fill algorithm - lecture 20/ computer graphics",
"Polygon fill algorithm - flood fill algorithm - lecture 21/ computer graphics",
"2D Transformation - Translation - lecture 22/ computer graphics",
"2D Transformation - Rotation - lecture 23/ computer graphics",
"2D Transformation - Scaling - lecture 24/ computer graphics",
"2D Transformation-Fixed point scaling - lecture 25/ computer graphics",
"2D Transformation - Reflection(also watch lect35 due to sm mistake) - lecture 26/ computer graphics",
"2D Transformation -Shearing - lecture 27/computer graphics",
"Matrix representation and homogeneous coordinates - lecture 28/computer graphics",
"2D Homogeneous Translation/ Rotation/ Scaling - lecture 29/ computer graphics",
"Inverse Transformation - lecture 30/ computer graphics",
"Composite transformation - lecture 31/ computer graphics",
"General pivot point rotation / composite transformation - lecture 32/ computer graphics",
"General fixed point scaling / composite transformation - lecture 33/ computer graphics",
"Scaling with rotation / composite transformation - lecture 34/ computer graphics",
"Reflection about x axis / y axis/ y=x/y=-x / origin - lecture 35/ computer graphics",
"Reflection about vertical line/horizontal line - lecture 36/ computer graphics",
"Reflection about line y = mx + c- lecture 37/computer graphics",
"Numerical on reflection about horizontal/vertical line/y=mx+c - lecture 38/ computer graphics",
"Viewing pipeline/world coordinate system/ window/ viewport - lecture 39/ computer graphics",
"Viewing Transformation - lecture 40/computer graphics",
"Numerical on Viewing Transformation - lecture 41/ computer graphics",
"Clipping and it's types - lecture 42/ computer graphics",
"Line clipping - lecture 43/ computer graphics",
"Cohen Sutherland line clipping algorithm - lecture 44/ computer graphics",
"Numerical 1 on Sutherland line clipping algorithm - lecture 45/ computer graphics",
"Numerical 2 on Cohen Sutherland line clipping algorithm -lecture 46/ computer graphics",
"Numerical 3 on Cohen Sutherland line clipping algorithm - lecture 47/ computer graphics",
"Sutherland Hodgeman polygon clipping - lecture 48/ computer graphics",
"Numerical 1 on Sutherland Hodgeman polygon clipping algorithm - lecture 49/computer graphics",
"Numerical 2 on Sutherland Hodgeman polygon clipping algorithm - lecture 50/ computer graphics",
"3 D Transformation -3D Translation and 3D Scaling - lecture 51/ computer graphics",
"3 D Rotation - lecture 52/ computer graphics",
"3D Reflection and 3D Shearing - lecture 53/ computer graphics",
"Perspective Projection - lecture 54/ computer graphics",
"Types of Perspective Projection - lecture 55/ computer graphics",
"Parallel Projection and it's types - lecture 56/ computer graphics",
"Orthographic Parallel Projection - lecture 57/ computer graphics",
"Difference between perspective projection and parallel projection- lecture 58/computer graphics",
"Hidden surface elimination - lecture 59/ computer graphics",
"Z buffer / depth comparison/depth buffer method  - lecture 60/computer graphics",
"Back face detection algorithm - lecture 61/ computer graphics",
"Painters algorithm ( part 1) - lecture 62/ computer graphics",
"Painter's algorithm ( part 2) - lecture 63/ computer graphics",

    "",
  ];

  const videoData = videoIDs.map((id, i) => ({
    id: i + 1,
    title: `CGV Video ${i + 1}`,
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
              ["PAVAN SIR", "PAVAN SIR", 0, 25],
              ["Asha Khilrani", "Asha Khilrani", 25, 95],
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
          <h1 className="text-3xl sm:text-4xl font-bold">Computer Graphics and Visualization - Video Lectures</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute right-0 text-3xl sm:text-4xl text-white hover:text-gray-300 transition"
          >
            {sidebarOpen ? '✖' : '⋮'}
          </button>
        </div>

        {selectedSection === null && renderSection("PAVAN SIR", "PAVAN SIR ", 0, 25)}
        {selectedSection === null && renderSection("Asha Khilrani", "Asha Khilrani ", 26, 95)}
        {/* {selectedSection === null && renderSection("semiconductor", "Semiconductor ", 96, 101)}
        {selectedSection === null && renderSection("problems", "Problem ", 102, 115)} */}

        {selectedSection === "PAVAN SIR" && renderSection("PAVAN SIR", "PAVAN SIR", 0, 25)}
        {selectedSection === "Asha Khilrani" && renderSection("Asha Khilrani", "Asha Khilrani ", 26, 95)}
        {/* {selectedSection === "semiconductor" && renderSection("semiconductor", "Semiconductor ", 96, 101)}
        {selectedSection === "problems" && renderSection("problems", "Problem ", 102, 115)} */}
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

export default CGV;
