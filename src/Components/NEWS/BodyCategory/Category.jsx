import React from "react";
import "./Category.css";
const Category = (props) => {
  return (
    <div className="container mt-5">
      <h3 className="corona_header pb3">{props.nameCorona}</h3>
    </div>
  );
};

export default Category;
