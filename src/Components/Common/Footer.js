import React from 'react';
import {Link} from "react-router-dom";

import ContactEmail from '../Ui/Static Pages/ContactEmail';
import ContactAddress from '../Ui/Static Pages/ContactAddress';
import Logo from '../../Assets/img/logo/logo.png';

const Footer = () => {
    return (
        <div className='row px-3 my-3 '>
            <div className='col'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 p-3 m-3'>
                            <Link to="/home">
                                <img src={Logo} className="img-fluid w-5" alt="5thdtlogo" />
                            </Link>
                        </div>
                        <div className='col-md-7 '>
                            <ContactEmail />
                            <ContactAddress />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;