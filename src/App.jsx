
import Navbar from "./components/Navbar";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Proyectos from "./components/Proyectos";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/proyect" element={<Proyectos />} />
       </Routes>
       <Footer />
    
    </>
  );
}

export default App;
