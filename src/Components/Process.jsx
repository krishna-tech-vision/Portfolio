const process = [
  {
    icon: "search",
    title: "Discover",
    meaning: "Requirements",
    color: "green-300",
  },
  {
    icon: "architecture",
    title: "Plan",
    meaning: "Architecture",
    color: "green-300",
  },
  {
    icon: "design_services",
    title: "Design",
    meaning: "UI/UX & Schema",
    color: "green-300",
  },
  {
    icon: "code",
    title: "Developer",
    meaning: "Implementation",
    color: "green-300",
  },
  {
    icon: "bug_report",
    title: "Test",
    meaning: "QA & Automation",
    color: "gray-700",
  },
  {
    icon: "rocket_launch",
    title: "Deploy",
    meaning: "CI/CD Pipeline",
    color: "gray-700",
  },
];

function ProcessSection() {
  return (
    <section id="process" className="w-full h-auto md:mt-5">
      {/* Heading */}
      <div className="w-full px-5 lg:px-10">
        <span className="font-semibold text-green-400">METHODOLOGY</span>
        <h2 className="text-2xl lg:text-4xl font-bold mt-5 text-indigo-100">
          Development Process
        </h2>
        <p className="text-gray-300 mt-3">
          A structured approach to ensure quality, transparency, and timely
          delivery of complex<br></br> technical projects.
        </p>
      </div>

      {/* Progess bar */}
      <div className="w-full flex flex-col items-center px-5 lg:px-10 mt-15 lg:mt-20 overflow-x-auto">
        <div className="w-[1200px] h-[1px] bg-gray-500">
          <div className="w-[70%] h-full bg-green-400"></div>
        </div>
        <div className="w-[1200px] flex justify-between  mt-2">
          {/* Progess point */}
          {process.map((process, index) => (
            <div
              key={index}
              className="progress p-3 flex flex-col items-center"
            >
              <div
                className={`progess-point p-4 w-12 h-12 scale-95 flex justify-center items-center rounded-3xl border-2 border-${process.color}`}
              >
                <span
                  style={{ fontSize: "20px" }}
                  className={`material-symbols-outlined text-${process.color}`}
                >
                  {process.icon}
                </span>
              </div>
              <h2 className="font-bold text-indigo-100 mt-4">Discover</h2>
              <span className="text-gray-300 text-sm">Requirements</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
