import React from "react";
import {NavLink} from "react-router-dom";

const Nav_show = () => {
    document.body.classList.toggle("navigation-is-open");
    
};

const NavBar = () => {
    return (
        <div className="col-md-2  navbar">
         
            <NavLink to="" className="cd-nav-trigger" onClick={Nav_show}>
                {" "}
                Menu
                <span className="cd-nav-icon"></span>
                <svg
                    x="0px"
                    y="0px"
                    width="54px"
                    height="54px"
                    viewBox="0 0 54 54"
                >
                    <circle
                        fill="transparent"
                        stroke="#656e79"
                        cx="27"
                        cy="27"
                        r="25"
                    ></circle>
                </svg>
            </NavLink>
          
            <div id="cd-nav" className="cd-nav">
                <div className="cd-navigation-wrapper" id="cd-navigation-wrapper">
                    <div className="cd-half-block ">
                        <h2 className="text-white">5thdt.com</h2>
                        <div className="row justify-content-end  ">
                            <div className="col-md-6 "> 
                            <nav>
                            <ul className="cd-primary-nav">
                                <li>
                                    <NavLink 
                                    style={({ isActive }) => {
                                        return {
                                            color: isActive ? "#FAFAFA" : "",
                                        };
                                      }}
                                    to="/home" onClick={Nav_show} className="nav_link_a un">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                      style={({ isActive }) => {
                                        return {
                                            color: isActive ? "#FAFAFA" : "",
                                        };
                                      }}
                                     to="/about" onClick={Nav_show}  className="nav_link_a un">About</NavLink>
                                </li>
                                <li>
                                    <NavLink
                                      style={({ isActive }) => {
                                        return {
                                            color: isActive ? "#FAFAFA" : "",
                                        };
                                      }}
                                     to="/services" onClick={Nav_show}  className="nav_link_a un">Our services</NavLink>
                                </li>
                                {/* <li>
                                    <NavLink
                                      style={({ isActive }) => {
                                        return {
                                            color: isActive ? "#FAFAFA" : "",
                                        };
                                      }}
                                     to="/" onClick={Nav_show}>Our projects</NavLink>
                                </li> */}
                                <li>
                                    <NavLink
                                      style={({ isActive }) => {
                                        return {
                                            color: isActive ? "#FAFAFA" : "",
                                        };
                                      }}
                                     to="/contactus" onClick={Nav_show}  className="nav_link_a un"> Contact us</NavLink>
                                </li>
                            </ul>
                        </nav>
                            </div>
                       
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
