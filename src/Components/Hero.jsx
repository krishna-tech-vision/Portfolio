function Herosection() {
  return (
    <section className="w-full tb:mt-30 mt-50">
      <div className="w-full flex tb:flex-col">
        {/* Headings */}
        <div className="w-[50%] tb:w-full px-5 lg:px-10">
          <h4 className="text-green-300 text-sm inline-flex gap-1 items-center px-2 py-1 border-1 border-gray-700 rounded-2xl  bg-gray-950">
            <span
              style={{ fontSize: "18px" }}
              className="material-symbols-outlined"
            >
              terminal
            </span>{" "}
            MERN Stack Specialist
          </h4>
          <h1 className="mt-5 text-2xl md:3xl lg:text-5xl text-indigo-100 font-bold">
            Build Fast, Secure & Scalable Full-Stack Web Applications{" "}
          </h1>
          <p className="text-gray-300 mt-4">
            I help business and entrepreneurs transtorm ideas insto responsive,
            secure and modern web application using the MERN Stack.
          </p>
          <div className="mt-10 flex gap-5">
            <button className="hover-button px-3 mb:px-2 py-3 rounded-md bg-indigo-100 flex justify-center items-center gap-2 font-bold text-gray-700">
              View Projects
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
            <a
              href="#contact"
              className="hover-button2 bg-gray-800 text-gray-300 font-bold px-3 mb:px-2 py-3 rounded-md "
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Code demo */}
        <div className="w-[50%] tb:w-full tb:mt-20 flex justify-center">
          <div className="md:w-[75%] lg:w-[60%] tb:w-[80%] mb:text-sm border-1 border-gray-700 rounded-lg shadow-[0px_0px_40px] shadow-gray-800 relative">
            {/* ========= Code Slide Animation ======= */}
            <div className="code-slide-animation p-3 bg-gray-800 border-1 absolute top-0 left-0 -translate-x-[15%] sm:-translate-x-[20%] md:-translate-x-[30%] lg:-translate-x-[50%]  rounded-xl shadow-[0px_0px_30px] shadow-gray-800 border-gray-800">
              <h2 className="font-bold text-indigo-100 flex justify-between items-center">
                <span className="material-symbols-outlined text-cyan-300">
                  data_object
                </span>
                App.jsx
              </h2>
              <p className="text-gray-400 text-sm mt-3">{"<ThemeProvider>"}</p>
              <p className="text-gray-400 text-sm">{"<AppRouter>"}</p>
              <p className="text-gray-400 text-sm">{"<ThemeProvider>"}</p>
            </div>
            {/* ==================================== */}
            <div className="flex gap-2 items-center px-3 py-3 border-b-1 border-gray-700">
              {/* Three dots */}
              <div className="w-3 h-3 bg-fuchsia-300 rounded-2xl"></div>
              <div className="w-3 h-3 bg-yellow-300 rounded-2xl"></div>
              <div className="w-3 h-3 bg-green-300 rounded-2xl"></div>
              <p className="text-gray-300 ml-auto mr-5">Server.js</p>
            </div>
            <div className="text-gray-300 px-3 py-3">
              {/* express */}
              <p className="flex gap-2">
                <span className="text-green-300">import</span> express
                <span className="text-green-300">from</span>
                <span className="text-indigo-200">"express"</span>
              </p>
              {/* mongoose */}
              <p className="flex gap-2">
                <span className="text-green-300">import</span> mongoose
                <span className="text-green-300">from</span>
                <span className="text-indigo-200">"mongoose"</span>
              </p>
              {/* cors */}
              <p className="flex gap-2">
                <span className="text-green-300">import</span> cors
                <span className="text-green-300">from</span>
                <span className="text-indigo-200">"cors"</span>
              </p>
              <p className="flex gap-2 mt-5">
                const app = <span className="text-indigo-200">express();</span>
              </p>
              <p className="flex gap-2 mt-5 text-gray-200">
                // Connect to MongoDB
              </p>
              <p>
                await mongoose.<span className="text-green-300">connect</span>
                {"(process.evn.URI)"}
              </p>
              <p className="mt-5">
                app.<span className="text-green-300">use</span>(
                <span className="text-green-300">cors</span>())
              </p>
              <p className="opacity-70">
                app.<span className="text-green-300">use</span>(express
                <span className="text-green-300">json</span>())
              </p>
              <p className="mt-5 opacity-60">
                app.<span className="text-green-300">listen</span>
                {"(3000, () => {"}
              </p>
              <p className="opacity-50">
                console.<span className="text-green-300">log</span>
                {"('server running...')"}
              </p>
            </div>

            {/* ========= Code Slide Animation ======= */}
            <div className="code-slide-animation p-3 bg-gray-800 border-1 absolute bottom-0 right-0 translate-x-[15%] sm:translate-x-[20%] md:translate-x-[30%] lg:translate-x-[50%] rounded-xl shadow-[0px_0px_30px] shadow-gray-800 border-gray-800">
              <h2 className="font-bold text-indigo-100 flex justify-between items-center">
                <span className="material-symbols-outlined text-cyan-300">
                  api
                </span>
                API Route
              </h2>
              <p className="text-gray-400 text-sm mt-3">GET /api/v1/users</p>
              <p className="text-gray-400 text-sm mb-2">200 OK - 24ms</p>
            </div>
            {/* ==================================== */}
          </div>
        </div>
      </div>

      {/* Core Competence */}
      <div className="w-full min-h-50 mt-10 flex flex-col justify-center items-center gap-5">
        <h2 className="text-gray-300 font-semibold">Core Competence</h2>
        <div className="flex gap-5 flex-wrap items-center justify-center">
          <div className="competence-card px-3 py-1 bg-gray-900 text-gray-300 flex items-center gap-2 border-1 border-gray-800 hover:border-gray-500 rounded-lg">
            <span className="material-symbols-outlined">devices</span>
            <span>Responsive Design</span>
          </div>

          <div className="competence-card px-3 py-1 bg-gray-900 text-gray-300 flex items-center gap-2 border-1 border-gray-800 hover:border-gray-500 rounded-lg">
            <span class="material-symbols-outlined">lock</span>
            <span>Secure Auth</span>
          </div>

          <div className="competence-card px-3 py-1 bg-gray-900 text-gray-300 flex items-center gap-2 border-1 border-gray-800 hover:border-gray-500 rounded-lg">
            <span class="material-symbols-outlined">swap_horiz</span>
            <span>REST APIs</span>
          </div>

          <div className="competence-card px-3 py-1 bg-gray-900 text-gray-300 flex items-center gap-2 border-1 border-gray-800 hover:border-gray-500 rounded-lg">
            <span className="material-symbols-outlined">web</span>
            <span>Modern UI</span>
          </div>

          <div className="competence-card px-3 py-1 bg-gray-900 text-gray-300 flex items-center gap-2 border-1 border-gray-800 hover:border-gray-500 rounded-lg">
            <span className="material-symbols-outlined text-green-500">
              database
            </span>
            <span>MongoDB</span>
          </div>

          <div className="competence-card px-3 py-1 bg-gray-900 text-gray-300 flex items-center gap-2 border-1 border-gray-800 hover:border-gray-500 rounded-lg">
            <span className="material-symbols-outlined text-cyan-500">
              code
            </span>
            <span>React</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
