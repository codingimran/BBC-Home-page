import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "tachyons";
import Header from "./Header";
import News from "./Components/NEWS/News";
import Footer from "./Footer";
function App() {
  return (
    <div className="">
      <Header></Header>
      <div className="container mt4">
        <News></News>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
