import React from 'react';
import '../../../Assets/style/base.css';
import logo from '../../../logo.svg';

const TeamItem = (props) => {
    return (
        <div className="card jelly_card">
            <div className="card-body">
                <img src={logo} className="card-img-top mx-auto d-block text-center team-img" alt="logo" />
                <h5 className="card-title text-center">{props.teamName}</h5>
                <p className="card-text text-center">
                    {props.teamTag}
                </p>
            </div>
        </div>
    );
};

export default TeamItem;