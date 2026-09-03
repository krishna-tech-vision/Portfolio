function AboutSection() {
  return (
    <div id="about" className="flex tb:flex-col mt-10">
      {/* About */}
      <div className="w-[50%] tb:w-full lg:px-10 px-5">
        <h2 className="text-2xl md:3xl lg:text-5xl text-indigo-100 font-bold">
          Architecting Scalable MERN Solutions
        </h2>
        <p className="mt-5 text-gray-300">
          I specialize in building high-performance, full-stack web
          applications. With a deep focus on Node.js backends and React
          frontends, I solve complex architectural problems to deliver seamless,
          enterprise-grade software. My approach prioritizes clean code, robust
          database design, and maintainable systems. mail
        </p>
        <div className="flex gap-5 mt-10">
          <button className="hover-button px-3 py-3 rounded-md bg-indigo-100 flex items-center gap-1 font-bold cursor-pointer text-gray-700">
            <span className="material-symbols-outlined">mail</span>
            Let's Talk
          </button>
          <button className="hover-button2 bg-gray-800 text-gray-300 font-bold px-3 py-3 flex gap-1 rounded-md cursor-pointer">
            <span className="material-symbols-outlined">download</span>
            Resume
          </button>
        </div>
      </div>

      {/* Education */}
      <div className="w-[50%] tb:w-full flex justify-center items-center tb:mt-15">
        <div className="w-[80%] p-3 border-1 border-gray-700 rounded-xl bg-gray-900 shadow-[0px_0px_20px] shadow-gray-800">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-green-500">
              school
            </span>
            <h2 className="text-indigo-100 text-2xl font-bold">
              Education & Journey
            </h2>
          </div>
          <div className="px-9 border-l-3 text-gray-500 ml-3 mt-3 relative tb:mt-10">
            <div className="w-3 h-3 bg-green-400 rounded-2xl absolute left-0 -translate-x-[7px]"></div>
            <h3 className="text-xl text-indigo-100 font-semibold leading-2">
              BTech in CSE
            </h3>
            <p className="text-gray-300 mt-3">Tech Univercity</p>

            <h3 className="text-xl mt-5 text-indigo-100 font-semibold">
              Senior Developer Role
            </h3>
            <p className="text-gray-300">Exploring Developer Role</p>
            <div className="w-3 h-3 bg-green-400 rounded-2xl absolute left-0 bottom-8 -translate-x-[7px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
