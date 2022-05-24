import React from "react";
import "../../../Assets/style/base.css";
import NavBar from "../../Common/NavBar";
import Header from "../../Common/Header";
import ContactEmail from "./ContactEmail";
import ContactForm from "./ContactForm";
import ContactAddress from "./ContactAddress";
const Contactus = (props) => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row col px-5 my-3 ">
        <font className="service_item_head">Contact Us</font>
        <div className="col-lg-11  ">
          <div className="row">
            <div className="col-lg-6 ">
              <ContactEmail />
            </div>
            <div className="col-lg-6">
              <ContactAddress />
            </div>
            <div className="col-lg-7 px-5 my-5 "></div>
            <div className="col-lg-7 px-2 my-3 ">
              <font className="service_item_head">Contact Us</font>
              <hr />
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="col-lg-1">
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default Contactus;
