import { Footer } from "./component/Footer";
import { Hero } from "./component/Hero";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    <div className="App w-screen h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
