import React from "react";
import  ServiceLists from "../../Functional/data"
import ServiceList from "./ServiceList";

const OurServices = () => {
  
    return (
        <div className="row justify-content-start px-5 my-5 ">
            <center>
                <h2 className="px-5 my-5 card_head">Our Services</h2>

            </center>
            <ServiceList services = {ServiceLists}/>
        </div>
    );
};

export default OurServices;
