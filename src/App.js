import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";

const Projects = lazy(() => import("./components/Projects"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Skills />
        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
          <Resume />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
