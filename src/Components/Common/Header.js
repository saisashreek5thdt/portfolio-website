import React from "react";
import {Link} from "react-router-dom";
import Logo from '../../Assets/img/logo/logo.png';

const Header = () => {
 
    return (
        
        <div className="row align-items-start">
            <div className="col px-5 my-5 align-self-start ">
                <div className="row position-relative align-items-start ">
                    <Link to="/home">
                        <div className="col position-absolute align-self-start">
                            <img src={Logo} className="img-fluid w-5 order-first" alt="5thdtlogo" />
                        </div>
                    </Link>
                </div>
                 
            </div>
        </div>
    );
};

export default Header;
