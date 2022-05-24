import React from 'react';


const ContactEmail = () => {
    return (
        <div>
            <div className='row'>
                <div className='col'>
                    <p className='text-secondary w-75'>Want To Collaborate??</p>
                    <h6>Work with us</h6>
                    <a href="emailto:info@5thdt.com">info@5thdt.com</a>
                </div>
                <div className='col'>
                    <p className='text-secondary w-75'>Want To Say Hi??</p>
                    <h6>Work with us</h6>
                    <a href="emailto:info@5thdt.com">info@5thdt.com</a>
                </div>
            </div>

            <div className='row mt-3 pt-3'>
                <div className='col'>
                    <p className='text-secondary w-75'>Want To Join Us?</p>
                    <h6>Work with us</h6>
                    <a href="emailto:info@5thdt.com">info@5thdt.com</a>
                </div>
                <div className='col'>
                    <p className='text-secondary w-75'>Want To Learn??</p>
                    <h6>Work with us</h6>
                    <a href="emailto:info@5thdt.com">info@5thdt.com</a>
                </div>
            </div>

        </div>
    );
};

export default ContactEmail;