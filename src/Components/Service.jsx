import React from "react";

const services = [
  {
    icon: "language",
    title: "Full-Stack Web Apps",
    description:
      "End-to-end development of responsive, dynamic applications using MongoDB, Express, React, and Node.js. Focused on performance and user experience.",
  },
  {
    icon: "api",
    title: "REST API Development",
    description:
      "Secure, scalable, and documented RESTful APIs tailored for enterprise systems. Implementing JWT authentication, rate limiting, and robust error handling.",
  },
  {
    icon: "database",
    title: "Database Design",
    description:
      "Optimized NoSQL schema design using MongoDB. Ensuring efficient querying, indexing strategies, and data integrity for high-traffic applications.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative min-h-screen w-full text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-center items-center">
      <div className="relative max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-emerald-400 uppercase">
            EXPERTISE
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
            Specialized Services
          </h2>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#0D1322]/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-800/80 transition-all duration-300 hover:border-slate-700 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
              >
                {/* Subtle Hover Ambient Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Icon Container */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-slate-600 transition-colors duration-300 mb-6 sm:mb-8">
                    {/* <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" /> */}
                    <span className="material-symbols-outlined">
                      {service.icon}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 mb-3 sm:mb-4 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
