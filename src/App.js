import React , { useEffect } from "react";
import './App.css';
import "../src/index.css";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Navbar from "./components/Navbar.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
// import Testimonials from "./components/Testimonials";


export default function App() {
  useEffect(() => {
    console.log('App component is being rendered');
  }, []);
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}