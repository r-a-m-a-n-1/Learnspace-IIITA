







import React, { useState } from "react";

const PNS = () => {
  // RPNSlace these video IDs with your actual YouTube video IDs (one for each of the 50 videos)
  const videoIDs = [
    "rtw-tHSQTlc",
    "TxgnIbLifW0",
    "nct_zQdzgbI",
    "2mYQJM3_JsE",
    "Wa_f4zOh_Uc",
    "HPM1tdnK2ss",
    "5789rl3qHeI",
    "H0RNFhfhYJM",
    "YoOejXzgxB0",
    "h0vFYn0JdMc",
    "DyaQDESstwc",
    "Slv1s41cexA",
    "xrPr5YcslEo",
    "EwVvlpKBMgk",
    "cG0ZDe_pUPE",
    "7p8F8SDG3i0",
    "XsuRAYB6O7s",
    "dLGkupJJM9Y",
    "7imoTtuU8FM",
    "2z3Z2-gcr5Q",
    "8Z-11baB3Z0",
    "4nfDyHzLDQY",
    "uEO2NGAdykk",
    "uCXSDT4PdDE",
    "c4SlaIt_QK0",
    "vegK36Z-hvs",
    "0FRz7MZcTno",
    "upNiABuv0fA",
    "Gh_zXtMe7AQ",
    "RYIb1u3C13I",
    "osjPsSiks2M",
    "cH6FidEFiA4",
    "dbC2bNoYyGU",
    "zNZkfZytc_o",
    "lr_UEYqPvPQ",
    "NTx1hyA8uHg",
    "fE5LiC2rQXo",
    "lYTc6xRqLB4",
    "m5u4h0t4ico",
    "Ine66BioeNQ",
    "d4OJ17WnXiU",
    "k-9kgqmSsns",
    "DWdzROYQZrs",
    "bHdR2kVW7Fk",
    "qvWL96fauh4",
    "gZQuxVWyhp8",
    "_NHoDIRn7lQ",
    "dgeBNlPGICg",
    "3jBkdxErVJ8",
    "U_ej58lDUyA",
    "N7yKRvSuaDc",
    "BV2RgizS1jE",
    "aRdrJ181WgY",
    "S9taqCIHEBw",
    "shwYRboRW4k",
    "ABbGOw73nuk",
    "Mn__xWeOkik",
    "F7tn3A-HjBg",
    "5mMgYN89CAA",
    "m8CsxGr53lQ",
    "pc8MiXRNPck",
    "QrcpYoRzRNQ",
    "bMRaVNvE9Js",
    "Z_3JSydFlDI",
    "js01nIMtV-8",
    "uLIql6j25lw",
    "e_sVTkMZoC0",
    "Rd2Chc9zyHk",
    "4mwv5Eu0-AI",
    "ffs4UTkQzoI",
    "qO--KTImNKw",
    "sEG-hMkFgpY",
    "fiWRn53j_TQ",
    "mNXNer-Z44s",
    "RDd4b3Is3vw",
    "fxgZXl1cIFI",
    "W_mgqXDrcdE",
    "nHF53a9Xe4k",
    "QAkaPy0adHg",
    "c3LREszMRno",
    "1W2QVxpsFNU",
    "iHHwNGttVtc",
    "S7AqqDvnuFM",
    "IJh2Wkwx9L0",
    "zDbqqUINaaQ",
    "Pa7Cfdgftwc",
    "cQtbMxkZJ94",
    "ERkBp7hiJMY",
    "4LmpV0yvwmw",
    "6iP7xhc5y-g",
    "B2CgTZPKF-M",
    "-mElXGbFVlA",
    "jMel_Q79YD8",
    "Qeef0P9Vjws",
    "4iiLAADVm64",
    "DTZ6F0Cygf8",
    "n6n2WbpCaIE",
    "WBdjK0MgCpg",
    "ja9hlS6G1L0",
    "HqLPhH-f42c",
    "kJlbRy7DXaI",
    "k_zZ4IgI7_g",
    "Xsuu00YyebY",
    "LjiJUYKbg7U",
    "hB8SUvXlE30",
    "mloxvxXyZ90",
    "fOyt47gom2k",
    "dBx6zp9YWGg",
    "zBxO_7qXdYY",
    "fsgfG9UJi4A",
    "PyzZBQKaj10",
    "4zZhD7vy5w8",
    "gD4IkLRYvlc",
    "CdI4ahGJG58",
    "Y4gSdAsCO2g",
    "xxA0M59mQm4",
    "KvoLI0CCC1Y",
    "IW5xgCQnNn4",
    "kSbPdxrfZSg",
    "OUHoVlJOLF4",
    "_hzcxijfPk8",
    "DhkFWnYnMpM",
    "6YqCR2jARPc",
    "h-Vo9F5k3sU",
    "3zW9m0Fhb3M",
    "2yPd7sybI2M",
    "E5ZJqy40ydc",
    "Ty94V1MqPMM",
    "r8YDDQLXKSs",
    "evhfsQvpxco",
    "pumw5YKAOpg",
    "U1e8CqkSzLI",
    "WT--l-84eQM",
    "4zs6_NiPHcU",
    "fXA0R6PJe5k",
    "MZVrWLa3HgY",
    "k0dz7ncWiMA",
    "vZdCk4L1Igo",
    "5qFt2G7kKeU",
    "qp5EMauPF_o",
    "mgOPfWHV0LU",
    "kkuPSQd9JEY",
    "SQME1N8ouB8",
    "QonO9IGgdME",
    "W5RWqqAV_iY",
    "Js60WOk5w9E",
    "1FiumEdp39w",
    "h1z6p-Z7EpM",
    "M4uXcY6nTp0",
    "TPtKnB1qlhc",
    "G4uTuP24tDU",
    "yFmMyzFQCZY",
    "u2xwF7RSZUo",
    "rAV4iuUVSCk",
    "GdkIT-RFc10",
    "KvOuF21ZI5Y",
    "x2nS81BlUYw",
    "xAt21_RqRRc",
    "DeUvoFUKbsY",
    "nc7UDSToX7M",
    "7sM1k7ffXEU",
    "3N9UtlqvmF4",
    "okCTHubNT1U",
    "RMdlDXmKKyA",
    "zucM8Axz_G8",
    "z9EWlH9t2EU",
    "b_Yb52U3PU8",
    "AC4d8kAHptk",
    "8_EHRDJdsy4",
    "Ro4FGLnSlak",
    "B6lGSu4Nexo",
    "RVZrnBXmWeY",
    "BZ71IWNUUq4",
    "BpCQlkobppY",
    "sb4jo4P4ZLI",
    "arxmRnAdLy4",
    "4s_FiYYnF4U",
    "XgoClgSEN4c",
    "zVCB49HYIxM",
    "TptjhklRnqM",
    "f9UoEaKwGK4",
    "mXq9IZ-D8Vo",
    "vXdXQvoMics",
    "lbTaIjdvnOw",
    "dCBrCfDbK4Y",
    "B_AofmjweY8",
    "QL_hUu47_og",
    "IGxPHLW6Ja4",
    "LGgFpw3vT7I",
    "wIwqsXMa1cY",
    "knsgHVZathg",
    "i2hExvzkuGI",
    "bey1eWqICJE",
    "sJvRbLel4oM",
    "eZP1nFlVejM",
    "USqlzYkAdAM",
    "FaJU-ur9fSI",
    "we4p332VoPQ",
    "AmSfU-dSuKI",
    "waMemqBVjTo",
    "gjVaN6SUAiQ",
    "0Kc9_OC3smE",
    "vPWMZgSAQtQ",
    "Aof1kE3rdXQ",
    "g3Ab4tyE3Hw",
    "jjgN1-kdNOA",
    "nvZSemm_E5c",
    "_ZzQmkJiyrY",
    "-0j4QjKWiwg",
    "3Oh6AFKbiHo",
    "yKpvUYJocZY",
    "2j79EKFTWbA",
    "LzWmlgK0grA",
    "RvNJOABAKqU",
    "lr1fOL5pIs0",
    "bCG4hGceDd0",


  ];

  // Provide a description for each video.
  const videoDescriptions = [
    "Characteristics of Central Tendency: Mean, Median, Mode",
    "MEAN of the Series with Examples",
    "MEDIAN of the series with Examples",
    "MODE of the series with Examples",
    "Grouping Method | MODE of the series",
    "Combined Mean of the Series | Examples",
    "SPSS - Weighted Arithmetic Mean",
    "Mean Deviation | Examples",
    "Standard Deviation | Variance of the Series | Examples",
    "Combined Standard Deviation | Variance of the Series | Examples",
    "SPSS - Combined Mean & Variance",
    "Coefficient of Variation (C.V.) of the Series",
    "SPSS - Compute Coefficient of Variation (CV)",
    "Classical Probability | Examples",
    "Axiomatic Definition of Probability | Examples",
    "Boole's and Bonferroni's Inequality",
    "Conditional Probability  with Solved Examples",
    "Independent Events with Examples",
    "Total Probability with Illustrative Examples",
    "Bayes' Theorem | Concept | Proof In 3 lines",
    "Examples of the Bayes Theorem | Easiest Way | Part 1",
    "Examples of the Bayes Theorem | Easiest Way | Part 2",
    "Random Variable and Discrete Distribution Function",
    "Example of Discrete probability distribution function",
    "Continuous Random Variable  | Distribution Function",
    "Calculate the Probability using CDF and PDF",
    "Cumulative Distribution function (CDF) and its properties",
    "How to write the CDF of a random variable | Easiest Way",
    "Compute Probabilities using CDF and PDF | Two Easiest methods",
    "Two Dimensional Random Variable: Joint Density Functions",
    "Two Dimensional Continuous Random Variables | Marginal & Conditional distributions",
    "Examples of Joint Continuous Random variable | Marginal, Conditional Distribution",
    "Transformation of a Discrete Random Variables",
    "Transformation of a Random variable & Solved Examples",
    "Transformation of Two-Dimensional Random Variables",
    "Transformation of Gamma Variate Distributions",
    "Mathematical Expectation & Its Properties",
    "MCQs on Probability and Distribution functions | Short Cut Tricks | CSIR-UGC-NET|IIT-JAM| GATE",
    "Binomial Distribution",
    "Mean and variance of Binomial Distribution - A simple proof",
    "Part 1 - Examples of Binomial Distribution | 3 Steps rule",
    "Part 2 - Examples of Binomial Distribution | 3 Steps rule",
    "Poisson Distribution | Limiting case of Binomial Distribution",
    "Poisson Distribution Solved Examples",
    "Poisson Distribution",
    "Mean and Variance of Poisson Distribution - A simple proof",
    "Geometric Distribution & Examples",
    "Mean and Variance of Geometric Distribution",
    "Memoryless Property of the Geometric Distribution",
    "Negative Binomial Distribution and Examples| 3-Step Rules",
    "Hypergeometric Distribution",
    "Mean and Variance of Hypergeometric Distribution",
    "Examples of Hypergeometric Distribution | Easiest Way",
    "Relationship between various Discrete Distribution functions",
    "Uniform Distribution",
    "Exponential Distribution | Simplest Way to Compute Probability",
    "Normal Distribution: How to calculate the Probability - 3 Step Rule",
    "Normal Distribution | Mean and Variance | Short Proof",
    "Laplace Distribution | Double Exponential Distribution",
    "Mean and Variance of Weibull Distribution",
    "Pareto Distribution | Mean and Variance",
    "Gamma Distribution",
    "Mean and Variance of Gamma Distribution",
    "Moment Generating function (MGF) of Gamma Distribution - Simple Proof",
    "Additive Property of Gamma Distribution",
    "Relation between Normal and Gamma Distribution",
    "Limiting Form of the Gamma Distribution - A short Proof",
    "Beta Distribution | Interpretation & Concept",
    "Mean and Variance of Beta Distribution of the First Kind",
    "Mean and Variance of Beta Distribution of Second Kind",
    "Erlang Distribution",
    "Mean and Variance of Erlang Distribution",
    "Moment generating function (MGF) of Erlang Distribution",
    "Moment Generating Function for Discrete Random variables",
    "Properties of the Moment Generating Function (M.G.F.)",
    "Moment Generating Function | Continuous Random Variables",
    "MGF of the Negative Binomial  Distribution",
    "Probability Generating Function",
    "Mean and Variance from Probability Generating function",
    "Bivariate Normal Distribution and its PDF",
    "Conditional Distribution of Bivariate Normal Distribution & Examples",
    "Characteristic Function & their Properties",
    "Necessary & Sufficient Conditions for a Characteristic function",
    "Characteristic Functions of Discrete Distributions and Examples",
    "Characteristic Function of the Negative Binomial Distribution",
    "Characteristic function of Cauchy Distribution | Short Proof",
    "MCQs on MGF and Characteristic functions",
    "Multivariate Normal Distribution",
    "Jensen's Inequality - Short Proof & Example",
    "Solved Examples of Jensen's Inequality",
    "Markov Inequality and its Examples",
    "Proof of the Chebyshev's Inequality in 3 lines| Two different Proofs",
    "Chebyshev's Inequality",
    "Solved Examples of Chebyshev's Inequality",
    "Kolmogorov's Maximal Inequality & its Proof",
    "MCQs on Markov and Chebychev's inequalities | Shortcut tricks | CSIR-UGC-NET| GATE| IIT-JAM",
    "Borel-Cantelli Lemma and its Examples",
    "Weak Law of Large Numbers (WLLNs) and Examples",
    "Solved Examples of Weak Law of Large Numbers (WLLNs)",
    "MCQs on Weak Law of Large Numbers",
    "Strong Law of Large Numbers | Almost Sure convergence | Examples",
    "Central Limit Theorem",
    "More Examples on Central Limit Theorem",
    "MCQs on Central Limit Theorem (CLT) - With unique Short Cut Tricks",
    "Covariance | Auto-Covariance Matrix | and Its Properties",
    "Properties of the Covariance",
    "Solved Examples of the Covariance",
    "Correlation Analysis & Coefficient",
    "Examples of Karl Pearson's Correlation Coefficient",
    "Spearman's Rank Correlation Coefficient  | Examples",
    "Regression Analysis, Models, Lines & Coefficients",
    "Regression Coefficients and Examples - A Simplest Way",
    "Properties of Regression Coefficients with Examples",
    "Sampling Distributions Concept",
    "Theory of Estimator| Point and Interval Estimations",
    "Unbiasedness Estimator  - For good Point Estimator",
    "Sample Variance (s^2) is BIASED Estimator | Two Different Proofs",
    "Sample Variance is Unbiased Estimator | Two Different Proofs",
    "Consistent Estimator",
    "Invariant Property of Consistent Property - A short 3 line proof",
    "MVUE | Minimum Variance Unbiased Estimator| 3 step rule",
    "Sufficient Estimator | Factorization Theorem| 2 steps Rule to find the Sufficient estimator",
    "Fisher Neyman Factorization Theorem - Short Proof",
    "Fisher-Neymann Criterion for Sufficient Estimator | 3-steps Rule to solve examples",
    "Cramer Rao Inequality for Inferences & its Proof",
    "Rao-Blackwell Theorem for Estimator",
    "Maximum Likelihood Estimation (MLE) with Examples",
    "MLE of Poisson Distribution in 4 minutes",
    "MLE of Geometric Distribution in 3 minutes",
    "MLE of Exponential Distribution in 2 minutes",
    "Method of Moments | 2 Steps Approach | Examples",
    "How to Write Null and Alternative Hypothesis - A unique way",
    "Simple and Composite Hypothesis",
    "Type I and Type II Errors | Testing of Hypothesis",
    "Solved Examples of Type 1 and Type 2 Errors  | Power of the Test",
    "Neyman-Pearson Lemma | Easiest Proof",
    "Examples of Neyman-Pearson Lemma",
    "Most Powerful Test & its Examples | Neyman - Pearson Lemma",
    "Most Powerful Test for Discrete Random Variables",
    "Monotone Likelihood Ratio | UMP Test | Solved 10 Examples",
    "UMP - Uniformly Most Powerful - One-Sided Test | Solved 10 Examples",
    "Concept of Confidence Interval | Examples",
    "Test for Single Proportion | Easiest Way 10 Examples",
    "Test for Two Samples Proportions | Easiest Examples",
    "Z-test for Single Mean | Examples and Concepts",
    "Z-Test for Difference in the Population Means",
    "One Sample t-Test & its Examples- 3 Steps Rule",
    "Student’s t-test- One-Sample mean - Solved Examples",
    "Examples of Two Samples Independent T-Test | 3 Steps Rule",
    "Student's T-test: Difference of Samples Mean",
    "Paired Sample t-test | Solved Examples",
    "Chi-Square Test: Goodness of Fit",
    "Chi-Square Test: Independence of Attributes",
    "Chi-Square Test for Population Variance | Solved Examples",
    "F-Distribution and its Mean and Variance",
    "Solved Examples of F - Test and Distribution | 3 Steps Rule",
    "Student's t-Distribution and its Mean and Variance",
    "Relation between t and F statistic distributions",
    "Relation between t and Chi-Square statistic Distributions",
    "Relation between F and Chi-Square Distributions",
    "Lecture #1: Time Series & Its Components",
    "Lecture #2: Method of Least Squares | Curve Fitting",
    "Lecture #3: Exponential Curve Fitting | Time Series",
    "Lecture #4: Compute Trend Equations and Values | Time Series",
    "Order Statistics",
    "Joint PDF of Order Statistics & its Examples",
    "MLE Estimator with Order Statistics",
    "Conditional Probability with Order Statistics",
    "Stochastic Random Process and its Examples",
    "Mean, Auto Correlation, Auto Covariance of a Random Processes",
    "Strict-Sense Stationary Process and its Examples",
    "Wide-Sense Stationary (WSS) Process and Examples",
    "Concept of Poisson Process | Pure Birth Model |Inter-arrival Times | Examples",
    "Examples of Poisson Process",
    "Lecture #1: Stochastic process and Markov Chain Model | Transition Probability Matrix (TPM)",
    "Lecture #2: Solved Problems of the Markov Chain using TRANSITION PROBABILITY MATRIX Part 1 of 3",
    "Lecture #3: Solved Problems of the Markov Chain using TPM (Part 2 of 3)",
    "Lecture #4: Solved Examples of Markov Chain using TPM (Part 3 of 3)",
    "Lecture #5: Stationary Probability for a Markov Chain with Examples",
    "Chapman-Kolmogorov Equation & Theorem | Markov Process",
    "PYQs on Markov Chain | Dec 2011 - Dec 2023 | Short Cut tricks",
    "PYQs on Markov Chain | June 2011 - 2023 | Fully Short Cut Tricks",
    "Lecture #1: One-Way ANOVA | Theory & Applications",
    "Lecture #2: Solved Examples of One Way ANOVA",
    "Lecture #3: Two way ANOVA - Theory & Applications - Without Interactions",
    "Lecture #4: Solved Examples of Two Way ANOVA",
    "Lecture 05: Latin Square Design (LSD) -  ANOVA Model",
    "Two-Factor Factorial Design Experiments - ANOVA Model",
    "2^k Factorial Designs Experiment - ANOVA Model",
    "RUN Test - Non Parametric Test for Small and Large Samples",
    "Median Test | Non Parametric test | Examples",
    "SIGN TEST: Non-Parametric test for Small and Large Samples",
    "PAIRED SIGN TEST: Non-Parametric test for Small and Large Samples",
    "Wilcoxon Signed-Rank Test: For Small and Large Samples",
    "Mann Whitney U-Test with Solved Examples",
    "Sample Rank Correlation Coefficient: Non-parameteric Test",
    "Kruskal- Wallis H Test with Solved Examples",
    "Kolmogorov - Smirnov (K-S) test | Non Parametric Test",
    "Some Results of Multivariate Normal Distribution | Easiest Way to Learn",
    "Transformation of Multivariate Normal Distribution | Solved Examples",
    "Independent Random Variables | Uncorrelated Random variables| Solved Examples",
    "Marginal Density of Multivariate Normal Distribution | Numerical Example",
    "Conditional Distribution | Numerical Example | Multivariate Normal Distribution",
    "Examples of Conditional Distribution | Easiest Way | Multivariate Normal Distribution",
    "Moment Generating Function and Its Moments | Multivariate Normal Distribution",
    "Properties of Moment Generating function (M.G.F.) | Numerical Examples",
    "Characteristic Function | Multivariate Normal Distribution",
    "Distribution of Quadratic Form | Easiest Way",
    "MLE of Sample mean and Covariance Matrix | Numerical Examples",
    "Distribution of Sample Mean | Numerical Example | Multivariate Normal Distribution",
    "Distribution of Quadratic Form| Numerical Example | Multivariate Normal Distribution",
    "Unbiased Estimator of Covariance/Dispersion Matrix",
    "Sample Mean and Covariance Matrix are Independent | Short Proof",
    "A concept of Wishart Distribution",
    "Characteristic Function of Wishart Distribution",
    "Properties of Wishart Distribution | Easiest Way",
    "",

  ];



  const videoData = videoIDs.map((id, i) => ({
    id: i + 1,
    title: `PNS Video ${i + 1}`,
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
              ["All Videos", "All Videos", 0, 217]

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
          <h1 className="text-3xl sm:text-4xl font-bold">PNS - Video Lectures</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute right-0 text-3xl sm:text-4xl text-white hover:text-gray-300 transition"
          >
            {sidebarOpen ? '✖' : '⋮'}
          </button>
        </div>

        {selectedSection === null && renderSection("All Videos", "All Videos ", 0, 217)}


        {selectedSection === "All Videos" && renderSection("All Videos", "All Videos ", 0, 217)}

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

export default PNS;
