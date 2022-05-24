import React from "react";
import logo from "../../../logo.svg";
import { Link } from "react-router-dom";
import ServiceLists from "../../Functional/data";
const Servicesitem = () => {
  return (
    <>
      {ServiceLists.map((data, i) => (
        <div className="row justify-content-around px-5 my-5  service-card" key={i}>
          <div className="col-lg-3 col-sm-12  px-5 my-5 ">
            <img src={logo} className="card-img-top team-img " alt="logo" />
          </div>

          <div className="col-lg-9  col-sm-12   px-5 my-5 ">
            <font className="service_item_head">{data.serviceTitle}</font>
            <p className="service_item_para">{data.serviceInfo}</p>
            <p>
              <Link to="/seviceinfo" className="link-primary">
                View More
              </Link>
            </p>
            <div className="row justify-content-around px-5 my-5 ">
              <div className="col-lg-5  card jelly_card ">
                <img src={logo} className="card-img-top team-img  " alt="" />
              </div>
              <div className="col-lg-5 card jelly_card">
                <img src={logo} className="card-img-top team-img  " alt="" />
              </div>
            </div>
          </div>
        </div>
      ))}{" "}
    </>
  );
};

export default Servicesitem;
