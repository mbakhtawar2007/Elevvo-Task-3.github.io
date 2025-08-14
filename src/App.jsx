import "./styles.css";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import TaskGrid from "./components/TaskGrid";
import { sampleTasks } from "./data";

export default function App() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <TaskGrid tasks={sampleTasks} />
      <Pricing />
      <Footer />
    </>
  );
}
