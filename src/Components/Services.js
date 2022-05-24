import React from 'react';
import {Link} from "react-router-dom";

import '../Assets/styles.css';

const Services = () => {
    return (
        <div>
            <div>
                <h3 className='text-center services'>This is Services row</h3>
                <Link className="btn btn-success" to="/home"> Home</Link>
            </div>
        </div>
    );
};

export default Services;