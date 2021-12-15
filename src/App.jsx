import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  return (
    <div className="app" >
      <Navbar />
      <div className="sections">
        <Home/>
        <About />
        <Portfolio/>
      </div>
    </div>
  );
}

export default App;
