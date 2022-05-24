import React from "react";

const AddressItem = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.adress}</p>
        </div>
    );
};

export default AddressItem;
