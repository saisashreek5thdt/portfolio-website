import React from "react";
import Banner_img from "../../../logo.svg";
import {Link} from "react-router-dom";
const Service = (props) => {
  return (
    <div className="row justify-content-center ">
      <div className="row bg-dark">
        <img src={Banner_img} className="banner-img" alt="brand" />
      </div>
      <div className="row justify-content-around service-content">
        <div className="col-md-4  px-5 my-5">
          <li className="link-light">
          <Link to="">
              Launch Project
              </Link>
          </li>
        </div>
        <div className="col-md-3  px-5 my-5">
          <span className="text-secondary fw-bold">Technologies : </span>
          <span className="text-white">Html5, Css3</span>
        </div>
        <div className="col-md-4  px-5 my-5">
          <span className="text-secondary fw-bold">Deliverables : </span>
          <span className="text-white">Concept, Illustration, Animation</span>
        </div>

        <div className="row justify-content-center px-5 my-5 ">
          <div className="col-md-3  px-5 my-5 ">
            <h1 className="text-light">Education</h1>
          </div>

          <div className="col-md-7  px-5 my-5 ">
            <p className="service-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center px-5 my-5 ">
        <div className="col-md-3">
          <div className="card   px-5 my-5 ">
            <div className="card-body text-center">
              <img
                src={Banner_img}
                className="card-img-top jelly_card   team-img"
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card  px-5 my-5 ">
            <div className="card-body text-center">
              <img
                src={Banner_img}
                className="card-img-top jelly_card   team-img"
                alt="logo"
              />
            </div>
          </div>
        </div>{" "}
        <div className="col-md-3">
          <div className="card px-5 my-5 ">
            <div className="card-body text-center">
              <img
                src={Banner_img}
                className="card-img-top team-img jelly_card  "
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card px-5 my-5 ">
            <div className="card-body text-center">
              <img
                src={Banner_img}
                className="card-img-top team-img  jelly_card "
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
