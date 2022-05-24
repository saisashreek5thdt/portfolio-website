import React from "react";

import ImgSlider from "./ImgSlider";
import NavBar from "../../Common/NavBar";

const Banner = () => {
    return (
        <div className="row">

            <div className="col-lg-11">
                <ImgSlider />
            </div>
            <div className="col-lg-1">
                <NavBar />
            </div>
        </div>
    );
};

export default Banner;
