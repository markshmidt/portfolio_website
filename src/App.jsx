import { useState } from "react";
import { useHeaderScroll } from "./components/Header/headerScroll";
import MatrixPreloader from "./components/MatrixPreloader/MatrixPreloader";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  useHeaderScroll();
  return (
    <>
 
      <Header />
      <Home startAnimations={preloaderDone} />
      <About />
      <Projects />
      <Contact />
      <Footer />

      {/* Matrix is just an overlay */}
      {!preloaderDone && (
        <MatrixPreloader onFinish={() => setPreloaderDone(true)} />
      )}
    </>
  );
}

export default App;
