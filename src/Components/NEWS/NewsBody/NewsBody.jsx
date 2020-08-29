import React from "react";
import "./NewsBody.css";
const NewsBody = (props) => {
  const { img, title, time } = props;
  return (
    <div className="news_body">
      <div className="news_body_section">
        <img src={img} alt="News Banner" className="news_banner_image grow" />
        <h5 className="mv2">{title}</h5>
        <p className="gray">{time}</p>
      </div>
    </div>
  );
};

export default NewsBody;
