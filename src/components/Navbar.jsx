import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./nav.css";
import { useState, useEffect } from "react";
import { FcMenu } from "react-icons/fc";
// import './Navbar.css'

const nav = [
  { title: "Home", path: "#home" },
  { title: "About", path: "#about" },
  { title: "Skill", path: "#skill" },
  { title: "Projects", path: "#project" },
  { title: "Contact", path: "#contact" },
  // {
  //   title: "Resume",
  //   path: "//drive.google.com/file/d/1WwUpbHL5YxBY-6FbXSmuHkmbuI_hyTvj/view?usp=sharing",
  // },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className="nav">
      <div className="asd">
        {(toggleMenu || screenWidth > 500) && (
          <div className="list">
            <div className="logo">
              {/* <Link to="#">
     <span class="animate-charcter">
       Let's Ready to Fun with Website !
     </span>
   </Link> */}
            </div>

            {nav.map((el, index) => (
              <Link key={index} to={el.path} className="items">
                {el.title}
              </Link>
            ))}

            <a id="pdf" href="Akash_Resume.pdf" download> </a>
          </div>
        )}

        <button onClick={toggleNav} className="btn">
          <FcMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
