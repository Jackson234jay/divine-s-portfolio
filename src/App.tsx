import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="h-screen  w-full bg-cover bg-fixed ">
      <Navbar />
      <Home />
      <About />
      <Contact />
      <SpeedInsights />
    </div>
  );
}
