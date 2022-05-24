import React from "react";

const AddressItem = (props) => {
    return (
        <div>
            <h4 className="footer_sub_head">{props.title}</h4>
            <p className="footer_para">{props.adress}</p>
        </div>
    );
};

export default AddressItem;
