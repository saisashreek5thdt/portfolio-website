import React from 'react';

import AddressItem from './AddressItem';

const AddressList = (props) => {
    return (
        <div>
            <AddressItem
                title = {props.items[0].title}
                adress = {props.items[0].adress}
             />
             <AddressItem
                title = {props.items[1].title}
                adress = {props.items[1].adress}
             />
        </div>
    );
};

export default AddressList;