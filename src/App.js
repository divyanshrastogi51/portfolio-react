import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return !loading ? (
    <main className="text-gray-400 bg-gray-900 body-font bg-mybackground">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  ) : (
    <Loader />
  );
}
