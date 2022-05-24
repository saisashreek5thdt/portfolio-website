import React from "react";
import brand_img from "../../../Assets/img/branding.gif"

const ImgSlider = () => {
  return (
    <div className="row justify-content-center ">
      <div className="col-md-7  slider_center_image">
      <div className="row justify-content-center ">
        <img src={brand_img} className="brand-img" alt="brand" />
      </div>
      </div>
      <center>
        <span className="service_text  px-3 my-3 "></span>
      </center>
    </div>
  );
};

export default ImgSlider;
