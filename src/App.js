import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./component/Footer";
import { Hero } from "./component/Hero";
import About from "./component/About";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App w-screen h-screen flex flex-col bg-xounity-blue">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
