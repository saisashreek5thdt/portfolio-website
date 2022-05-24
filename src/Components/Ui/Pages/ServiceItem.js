import React from "react";
import logo from "../../../logo.svg";
import '../../../Assets/style/base.css';

const ServiceItem = (props) => {
    return (
        <div className="card jelly_card">
            <div className="card-body text-center">
                <img src={logo} className="card-img-top team-img" alt="logo" />
                <h5 className="card_sub_head">{props.serviceTitle}</h5>
                <p className="card_para">
                    {props.serviceInfo}
                </p>
            </div>
        </div>
    );
};

export default ServiceItem;
