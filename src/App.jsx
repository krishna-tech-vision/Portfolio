// Hoock
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";
import Herosection from "./Components/Hero";
import AboutSection from "./Components/About";
import SkillSection from "./Components/Skills";
import ServicesSection from "./Components/Service";
import ProcessSection from "./Components/Process";
import ContactSection from "./Components/Contact";

import "./App.css";

function App() {
  return (
    <>
      <main className="dot-matrix relative max-w-[100vw] h-auto bg-gray-900 overflow-x-hidden">
        {/* <div className="w-full h-[100vh] relative"> */}
        {/* <div className="w-full h-20 bg-red-400 fixed"></div>
        <div className="w-full h-20 bg-blue-400"></div> */}
        {/* </div> */}
        <Navbar />
        <Herosection />
        <AboutSection />
        <SkillSection />
        <ServicesSection />
        <ProcessSection />
        <ContactSection />

        {/* Footer */}
        <div className="w-full p-5 flex justify-between mt-15 bg-gray-900 border-t-1 border-gray-700">
          <div className="text-gray-300">
            © 2024 Built with React + Tailwind CSS
          </div>
          <div className="flex gap-5 text-sm text-gray-300">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Github</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
