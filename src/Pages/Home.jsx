import React from "react";
import { Link } from "react-router-dom";
import "./all.css";
import myPic from "./myPic.jpg";
const Home = () => {
  return (
    <div className="home_div" >
      <div className="div_a">
        <div className="div_b">
          <span className="hii">Hii</span>
          <br />
          <span className="im">I'm</span>

          <div class="content">
            <h2>Akash</h2>
            <h2>Akash</h2>
          </div>
          <p className="job_title">
            Full Stack Web
            <br /> Developer
          </p>

          <div className="creative">
            <h1 className="h1">
              <span className="abe">always be</span>
              <div class="message">
                <div class="word1">Eat</div>
                <div class="word2">Sleep</div>
                <div class="word3">Code &</div>
              </div>
            </h1>
          </div>
        </div>
        <div className="img_div">
          <img src={myPic} />
        </div>
      </div>
    </div>
  );
};

export default Home;
