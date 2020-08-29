import React from "react";
import footerLogo from "./Components/img/Capture.PNG";
const Footer = () => {
  return (
    <>
      <div className="banner" style={{ backgroundColor: "rgb(184,0,0)" }}>
        <div className="container-fluid py-4 dark-red ph6-l ph3-m">
          <a href="#home">
            <img src={footerLogo} alt="Logo" className="w5" />
          </a>
        </div>
      </div>
      <div
        className="ph4 pt3"
        style={{
          color: "rgb(255,255,255)",
          background: "rgba(0,0,0,.9)",
          fontWeight: "700",
        }}
      >
        <p className="b">
          <a href="#" className="link">
            বিবিসির ওপর কেন আপনি আস্থা রাখতে পারেন
          </a>
        </p>
        <hr className="bg-light-blue"></hr>
        <div className="flex justify-around">
          <div className="div">
            <p>
              <a href="#">ব্যবহারের শর্তাবলী</a>
            </p>
            <p>
              <a href="#">বিবিসি সম্পর্কে</a>
            </p>
          </div>
          <div className="div">
            <p>
              <a href="#">প্রিভেসি নীতি</a>
            </p>
            <p>
              <a href="#">কুকিজ</a>
            </p>
          </div>
          <div className="div">
            <p>
              <a href="#">বিবিসির সঙ্গে যোগাযোগ করুন</a>
            </p>
            <p>
              <a href="#">AdChoices / Do Not Sell My Info</a>
            </p>
          </div>
        </div>
        <hr className="bg-light-blue"></hr>
        <p className="pb-4">
          2020 বিবিসি। বাইরের কোন সাইটের তথ্যের জন্য বিবিসি দায়বদ্ধ নয়।{" "}
          <a href="https://www.bbc.co.uk/help/web/links/">
            বাইরের লিংক সম্পর্কে বিবিসির দৃষ্টিভঙ্গি সম্বন্ধে পড়ুন।
          </a>
        </p>
        <h4 className="tc">
          <a
            href="https://github.com/codingimran"
            target="_blank"
            className="dark-red"
          >
            Imran Khan
          </a>
        </h4>
      </div>
    </>
  );
};

export default Footer;
