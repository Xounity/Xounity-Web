import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "component/Footer";
import Hero from "component/Hero";
import About from "component/About";
import Navbar from "component/Navbar";
import Contact from "component/Contact";

function App() {
  return (
    <div className="App flex flex-col bg-xounity-blue">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <About />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
