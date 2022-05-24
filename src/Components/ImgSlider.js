import React from "react";
import logo from '../logo.svg';
const ImgSlider = () => {
    return (
        <div className="row justify-content-around">
            <div className="col-md-3 px-5 my-5 bg-dark slider_center_image" >
            <img src={logo}  className="card-img-top" alt="logo"/>
            </div>
        </div>
    );
};

export default ImgSlider;
