import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Event from "@/app/components/Events";
import Hero from "@/app/components/Hero";


export default function Home() {
  return (
    <div className="flex-1">
      <Hero />
      <hr />
      <Event />
      <hr />
      <About />
      <hr />
      <Contact />
    </div>
  );
}