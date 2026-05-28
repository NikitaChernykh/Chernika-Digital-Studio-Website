import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { CTA } from "./components/CTA";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <CTA />
    </div>
  );
}
