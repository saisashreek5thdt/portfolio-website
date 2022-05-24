import React from 'react';
import Header from '../../Common/Header';
import Whatwedo from '../Pages/Whatwedo';
import '../../../Assets/style/base.css';
import Servicesitem from './Servicesitem'
import NavBar from "../../Common/NavBar";
import Footer from '../../Common/Footer';
const Services = (props) => {
    return (
        <div className="container-fluid">
            <Header />
            <div className="row ">
                <div className="col-lg-11  px-3 my-3">
                    <Whatwedo />
                    <Servicesitem />
                </div>
                <div className="col-lg-1">
                    <NavBar />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Services;
