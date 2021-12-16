import Navbar from './components/navbar/Navbar'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import "./app.scss";
import {
  ScrollContainer,
  ScrollPage,
  MoveIn,
  batch,
  FadeIn
} from "react-scroll-motion";

export default function App() {

  return (
    <div className="app">
      <Navbar/>
    <ScrollContainer>
      <ScrollPage page={0}>
          <Home/>
      </ScrollPage>
      <ScrollPage page={1}>
          <About/>
      </ScrollPage>   
      <ScrollPage page={2}>
          <Portfolio/>
      </ScrollPage> 
      <ScrollPage animation={batch(FadeIn,MoveIn(0,400))} page={3}>
          <Contact/>
      </ScrollPage>   
    </ScrollContainer>
    </div>
  );
}