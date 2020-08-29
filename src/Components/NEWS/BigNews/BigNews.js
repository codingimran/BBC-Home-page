import React from "react";

const BigNews = (props) => {
  const { img, title, disp, time } = props;
  return (
    <div className="flex justify-center flex-column-m">
      <div className="news_image self-center-m" style={{ width: "100%" }}>
        <img src={img} alt="img" style={{ width: "100%" }} className="grow" />
      </div>
      <div className="news_header mt3-m ml4 gray" style={{ maxWidth: "780px" }}>
        <h3 className="" style={{ fontSize: "1.7rem", fontWeight: "700" }}>
          {title}
        </h3>
        <p className="pt2 pr4" style={{ fontSize: "1.25rem" }}>
          {disp}
        </p>
        <div className="">{time}</div>
      </div>
    </div>
  );
};

export default BigNews;
