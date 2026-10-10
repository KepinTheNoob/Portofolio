import { Sky } from "./components/Sky";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { TechStack } from "./sections/TechStack";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <>
      <Sky />
      <Nav />
      <main className="page">
        <Hero />
        <Projects />
        <Experience />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;