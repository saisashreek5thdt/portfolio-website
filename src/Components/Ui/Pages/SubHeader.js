import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../../Assets/img/logo/logo.png";

const SubHeader = () => {
    return (
        <div className="row align-items-start">
            <div className="col-12 px-5 my-2 align-self-start">
                <div className="container">
                    <div className="row position-relative align-self-start">
                        <NavLink to="/home">
                            <div className="col-2 position-absolute align-self-start">
                                <img
                                    src={Logo}
                                    className="img-fluid w-5 h-0 order-first"
                                    alt="5thdtlogo"
                                />
                            </div>
                        </NavLink>
                        <div className="col-10 mt-5 position-absolute align-self-center">
                            <h4 className="text-center p-5 mt-5">
                                More Links
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;
