import "./App.css";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects"
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route index element={<Hero/>}/>
<Route path="/about" element={<About/>}  />
<Route path="/skills" element={<Skills/>}/>
<Route path="/projects" element={<Projects/>}/>
<Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
