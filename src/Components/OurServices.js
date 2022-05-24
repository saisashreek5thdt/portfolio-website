import React from "react";
import logo from '../logo.svg';
const OurServices = () => {
  return (
    <div className="row justify-content-start px-5 my-5 ">
      <center>
  
        <h2 className="px-3 my-3">Our Services</h2>
      </center>
      <div className="col-md-4  px-3 my-3">
        <div className="card">
          <div className="card-body">
          <img src={logo}  className="card-img-top" alt="logo"/>
            <h5 className="card-title">Card title 1</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4  px-3 my-3">
        <div className="card">
        <img src={logo}  className="card-img-top" alt="logo"/>
          <div className="card-body">
            <h5 className="card-title">Card title 2</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4  px-3 my-3">
        <div className="card">
        <img src={logo}  className="card-img-top" alt="logo"/>
          <div className="card-body">
            <h5 className="card-title">Card title 3</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 px-3 my-3">
        <div className="card">
        <img src={logo}  className="card-img-top" alt="logo"/>
          <div className="card-body">
            <h5 className="card-title">Card title 4</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
