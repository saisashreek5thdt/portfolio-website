import React from "react";
import logo from '../logo.svg';
const Serviceitemlist = (props) => {
    return (
        <div className="row justify-content-around px-5 my-5 ">
          <div className="col-lg-3 px-5 my-5 " >
          <img src={logo}  className="card-img-top" alt="logo"/>
          </div>

          <div className="col-lg-9 px-5 my-5 ">
              <font className="service_item_head"></font>
              <p  className="service_item_para">We make better products and make products better. From design and innovation 
                  sprints to UX design sprints and marathons, we create things that work for users and brands. Our approach was agile before they called it agile, finding innovation through structured ideation, prototyping and user-testing. Over the past couple of years, we’ve dived deep into machine learning and AI, but always with one question in mind: how does it make life better for humans?</p>
         </div>

        </div>
    );
};

export default Serviceitemlist;
