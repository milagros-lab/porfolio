import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/proyect" element={<Experience />} /> 
       </Routes>
       <About />
       <Experience />
       <Footer />
    </>
  );
}

export default App;
