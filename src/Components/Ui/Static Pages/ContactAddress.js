import React from 'react';

import AddressList from './AddressList';

const ContactAddress = () => {

    const AddressInfoList = [
        {
            id: 'adr1',
            title: 'Hyderabad',
            adress: `5Th Dimension Technologies Deccan Towers-Minar Apartment 8th Floor,808, Basheer Bagh, Hyderabad, Telangana 500001`,
        },
        {
            id: 'adr2',
            title: 'Gurgoan',
            adress: '5Th Dimension Technologies Deccan Towers-Minar Apartment 8th Floor,808, Basheer Bagh, Hyderabad, Telangana 500001',
        }
    ];

    return (
        <div>
            <div className='row mt-3 pt-3'>
                <div className='col'>
                    <h5 className="footer_head">Address Info</h5>
                    <AddressList items={AddressInfoList} />
                </div>
            </div>
        </div>
    );
};

export default ContactAddress;