import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

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
                <div
                    className="cd-navigation-wrapper"
                    id="cd-navigation-wrapper"
                >
                    <div className="cd-half-block ">
                        <h2 className="text-white">5thdt.com</h2>
                        <div className="row justify-content-end">
                            <div className="col-md-6">
                                <Nav className="flex-column">
                                    <NavLink
                                        style={({ isActive }) => {
                                            return {
                                                color: isActive
                                                    ? "#FAFAFA"
                                                    : "",
                                            };
                                        }}
                                        to="/home"
                                        onClick={Nav_show}
                                        className="nav_link_a un"
                                    >
                                        <Nav.Link
                                            href="/home"
                                            eventKey="link-0"
                                            className="text-white"
                                        >
                                            Home
                                        </Nav.Link>
                                    </NavLink>
                                    <NavLink
                                        style={({ isActive }) => {
                                            return {
                                                color: isActive
                                                    ? "#FAFAFA"
                                                    : "",
                                            };
                                        }}
                                        to="/about"
                                        onClick={Nav_show}
                                        className="nav_link_a un"
                                    >
                                        <Nav.Link
                                            href="/about"
                                            eventKey="link-1"
                                            className="text-white"
                                        >
                                            About
                                        </Nav.Link>
                                    </NavLink>
                                    <NavLink
                                        style={({ isActive }) => {
                                            return {
                                                color: isActive
                                                    ? "#FAFAFA"
                                                    : "",
                                            };
                                        }}
                                        to="/services"
                                        onClick={Nav_show}
                                        className="nav_link_a un"
                                    >
                                        <Nav.Link
                                            href="/services"
                                            eventKey="link-2"
                                            className="text-white"
                                        >
                                            Our services
                                        </Nav.Link>
                                    </NavLink>
                                    <NavLink
                                        style={({ isActive }) => {
                                            return {
                                                color: isActive
                                                    ? "#FAFAFA"
                                                    : "",
                                            };
                                        }}
                                        to="/contactus"
                                        onClick={Nav_show}
                                        className="nav_link_a un"
                                    >
                                        <Nav.Link
                                            href="/contactus"
                                            eventKey="link-3"
                                            className="text-white"
                                        >
                                            Contact us
                                        </Nav.Link>
                                    </NavLink>
                                </Nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
