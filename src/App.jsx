
import Navbar from "./components/Navbar";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Proyectos from "./components/Proyectos";
import Referencias from "./components/Referencias";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{minHeight: "100vh"}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/referencias" element={<Referencias />} />
        <Route path="/proyect" element={<Proyectos />} />
       </Routes>
    </Box>
  );
}

export default App;
