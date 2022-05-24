import React from 'react';
import {Link} from "react-router-dom";

import ContactEmail from './ContactEmail';
import ContactAddress from './ContactAddress';
import Logo from '../Assets/img/logo/logo.png';

const Footer = () => {
    return (
        <div className='row'>
            <div className='col'>
                <div className='container'>
                    <div className='row'>
                        <div className='col p-3 m-4'>
                            <Link to="/home">
                                <img src={Logo} className="img-fluid w-5" alt="5thdtlogo" />
                            </Link>
                        </div>
                        <div className='col'>
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