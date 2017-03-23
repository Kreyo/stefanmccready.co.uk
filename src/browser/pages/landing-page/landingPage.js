import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const LandingPage = () =>
    <div>
        <div className="panel">
            <div className="icon-bar">
                <div className="icon-bar__left">
                    <i className="fa fa-bars icon-bar___icon" aria-hidden="true"></i>
                </div>
                <div className="icon-bar__right">
                    <i className="fa fa-linkedin icon-bar___icon" aria-hidden="true"></i>
                    <i className="fa fa-twitter icon-bar___icon" aria-hidden="true"></i>
                </div>
            </div>
            <div className="panel__content text-center">
                <h1 className="heading-large margin-bottom-small">STEFAN MCCREADY.</h1>
                <h2 className="heading-medium">WEBSITE DESIGNER AND DEVELOPER.</h2>
            </div>
            <button className="panel__button btn btn--standard btn__arrow">EXPLORE</button> 
        </div>
        <div className="panel panel--alternative">
            <div className="panel__content">
                <h1 className="heading-large margin-bottom-small">STEFAN MCCREADY.</h1>
                <h2 className="heading-medium">WEBSITE DESIGNER AND DEVELOPER.</h2>
            </div>
        </div>
        <div className="panel">
            <div className="panel__content text-right">
                <h1 className="heading-large margin-bottom-small">STEFAN MCCREADY.</h1>
                <h2 className="heading-medium">WEBSITE DESIGNER AND DEVELOPER.</h2>
            </div>
        </div>
    </div>


export default LandingPage;
