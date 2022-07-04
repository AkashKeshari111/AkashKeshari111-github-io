
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Skill from "./Pages/Skill";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import LoadingScreen from "./components/LoadingScreen";
import { FcLike } from "react-icons/fc";

import "../src/components/nav.css";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <div>
      {!loading ? (
        <div>
          <Navbar />
          <div>
            <div className="section1 " id="home">
              <h1>
                <Home />
              </h1>
            </div>

            <div className="section2 bg1" id="about">
              <h1 className="revealUp">
                <About />
              </h1>
            </div>
            <div className="section3 bg2" id="skill">
              <h1 className="revealUp">
                <Skill />
              </h1>
            </div>
            <div className="section4 bg3" id="project">
              <h1 className="revealUp">
                {" "}
                <Project />
              </h1>
            </div>
            <div className="section5 bg4" id="contact">
              <h1 className="revealUp">
                {" "}
                <Contact />
              </h1>
            </div>

            <div className="spacer s1">
              <div>
                <h2>My Website is made with <FcLike/> of you.</h2>
                </div>
            </div>
          </div>{" "}
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}

export default App;
