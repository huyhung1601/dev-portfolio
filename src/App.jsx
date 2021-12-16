import {
  Animator,
  ScrollContainer,
  ScrollPage,
  Sticky,
  ZoomInScrollOut,
  batch,
} from "react-scroll-motion";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  return (
    <ScrollContainer>
      <div className="app">
        <Navbar />
        <div className="sections">
          <ScrollPage page={0}>
            <Home />
          </ScrollPage>
          <ScrollPage page={1}>
              <About/>
          </ScrollPage>
          <ScrollPage page={2}>
            <Portfolio />
          </ScrollPage>
          <Contact/>
        </div>
      </div>
    </ScrollContainer>
  );
}

export default App;
