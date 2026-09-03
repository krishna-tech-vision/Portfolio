// Custom CSS
// import "./style.css";

function Navbar() {
  return (
    <>
      <nav className="w-full py-2 flex justify-between items-center border-b-2 border-gray-800 shadow-md fixed z-50 opacity-90 top-0 left-0 bg-gray-900">
        <div className="px-3 py-2">
          <h2 className="lg:text-4xl text-3xl text-indigo-100 font-bold">
            MERN.DEV
          </h2>
        </div>
        <div className="flex gap-5 items-center px-2 lg:text-lg text-gray-300 tb:hidden">
          <a className="text-gray-100 underline underline-offset-4" href="#">
            Home
          </a>
          <a className="hover-links" href="#about">
            About
          </a>
          <a className="hover-links" href="#skills">
            Skills
          </a>
          <a className="hover-links" href="#projects">
            Projects
          </a>
          <a className="hover-links" href="#service">
            Service
          </a>
          <a className="hover-links" href="#process">
            Process
          </a>
          <a className="hover-links" href="#contact">
            Contact
          </a>
        </div>
        <div className="px-3 py-2">
          <a
            className="hover-button px-3 py-2 bg-indigo-100 cursor-pointer rounded-md"
            href="#contact"
          >
            Hire me
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
