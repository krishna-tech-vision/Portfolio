function SkillSection() {
  return (
    <section id="skills" className="w-full flex justify-center mt-15 p-5">
      <div className="w-[95%]">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-100">
          Technical Arsenal
        </h2>
        <div className="w-full flex flex-wrap justify-center gap-5 mt-5">
          {/* Skill Card-1 */}
          <div className="skill-card p-5 min-w-70 bg-gray-900 border-1 border-gray-700 rounded-md">
            <h2 className="text-2xl font-semibold text-indigo-100 flex gap-2 items-center">
              <span className="material-symbols-outlined p-2 bg-gray-800 rounded-md text-green-300">
                terminal
              </span>
              Fontend
            </h2>
            <ul className="text-gray-200 text-lg list-disc p-4">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Next.js</li>
            </ul>
          </div>

          {/* Skill Card-2 */}
          <div className="skill-card p-5 min-w-70 bg-gray-900 border-1 border-gray-700 rounded-md">
            <h2 className="text-2xl font-semibold text-indigo-100 flex gap-2 items-center">
              <span className="material-symbols-outlined p-2 bg-gray-800 rounded-md text-indigo-300">
                dns
              </span>
              Backend
            </h2>
            <ul className="text-gray-200 text-lg list-disc p-4">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>JWT Auth</li>
            </ul>
          </div>

          {/* Skill Card-3 */}
          <div className="skill-card p-5 min-w-70 bg-gray-900 border-1 border-gray-700 rounded-md">
            <h2 className="text-2xl font-semibold text-indigo-100 flex gap-2 items-center">
              <span className="material-symbols-outlined p-2 bg-gray-800 rounded-md text-cyan-300">
                database
              </span>
              Database
            </h2>
            <ul className="text-gray-200 text-lg list-disc p-4">
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Redis</li>
            </ul>
          </div>

          {/* Skill Card-4 */}
          <div className="skill-card p-5 min-w-70 bg-gray-900 border-1 border-gray-700 rounded-md">
            <h2 className="text-2xl font-semibold text-indigo-100 flex gap-2 items-center">
              <span className="material-symbols-outlined p-2 bg-gray-800 rounded-md text-pink-300">
                build
              </span>
              Tools
            </h2>
            <ul className="text-gray-200 text-lg list-disc p-4">
              <li>Git & Github</li>
              <li>Postman</li>
              <li>Vercel</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
