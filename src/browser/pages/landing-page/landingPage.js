import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const LandingPage = () =>
    <div>
        <div className="panel panel--alternative">
            <div className="icon-bar">
                <div className="icon-bar__left">
                    <button className="icon-bar__icon">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="icon-bar__right">
                    <button className="icon-bar__icon">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <div className="panel__container text-center">
                <div>
                    <h1 className="heading-large margin-bottom-small">STEFAN MCCREADY</h1>
                    <h2 className="heading-small margin-bottom">DEVELOPER | DESIGNER</h2>
                    <button className="btn btn--alternative panel__btn"><i className="fa fa-arrow-down" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
        <div className="panel">
            <div className="panel__container">
                <div className="panel__content">
                    <h1 className="heading-medium">HELLO!</h1>
                </div>
            </div>
        </div>
        <div className="panel panel--alternative">
            <div className="panel__container">
                <div className="panel__content">
                    <h1 className="heading-medium">HELLO!</h1>
                </div>
            </div>
        </div>
    </div>

export default LandingPage;
