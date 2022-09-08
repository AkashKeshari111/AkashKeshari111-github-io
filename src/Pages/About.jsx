import React from "react";
import "./About.css";
import { FcHome, FcRating, FcLike, FcLandscape } from "react-icons/fc";
import Education from "./Education";

const About = () => {
  return (
    <div className="upper_divA" >
    <div class="container">
      <h1 className=".h1A">About Myself</h1>
      <br />
      <div class="content v3">
        <p>
          <FcHome />
          <p>I am from Varanasi, UttarPradesh, India.</p>
          <br />
          <FcLandscape />
          <p>
            I like reading & listening hindi poem, listening music, travelling.
          </p>
          <br />
          <FcLike />
          <p>
            I love designing websites and I am looking for more opportunities to
            work in coding.
          </p>
          <br />
          <FcRating />
          <p>I have knowledge of MERN stack technology.</p>
        </p>
      </div>

      
    </div>
    <div>
   
  
    <Education/>
   
  
 

    </div>
    </div>
  );
};

export default About;
