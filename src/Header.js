import React from "react";
// import { Jumbotron, Button } from "react-bootstrap";
import logo from "./Components/img/Capture.PNG";
const Header = () => {
  return (
    <div className="banner" style={{ backgroundColor: "rgb(184,0,0)" }}>
      <div className="container-fluid py-4 dark-red ph6-l ph3-m">
        <a href="#home">
          <img src={logo} alt="Logo" className="w5" />
        </a>
        <hr />
        <div className="nav-bar ">
          <ul className="flex list ph0 mb0">
            <li className="pr3">
              <a href="#/bengali" className="navy f3 link">
                মূলপাতা
              </a>
            </li>
            <li className="pr3">
              <a href="#/bengali/news-51941294" className="navy f4 link">
                করোনাভাইরাস
              </a>
            </li>
            <li>
              <a href="#/bengali/media/video" className="navy f4 link">
                ভিডিও
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
