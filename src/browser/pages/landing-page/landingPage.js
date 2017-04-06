import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const LandingPage = () =>
    <div>
        <div className="panel panel--alternative text-center">
            <div className="icon-bar">
                <div className="icon-bar__left">
                    <button className="icon-bar__icon">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                        <span>MENU</span>
                    </button>
                </div>
                <div className="icon-bar__right">
                    <button className="icon-bar__icon">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <div className="panel__container">
                <div>
                    <h1 className="panel__heading margin-bottom-small">STEFAN MCCREADY</h1>
                    <h2 className="panel__subheading margin-bottom">DEVELOPER | DESIGNER | OBSESSED F1 FAN</h2>
                </div>
            </div>
            <button className="btn btn--alternative btn--circle panel__btn"><i className="fa fa-arrow-down" aria-hidden="true"></i></button>
        </div>
        <div className="panel text-center">
            <div className="panel__container">
                <div className="panel__content">
                    <h1 className="heading-medium margin-bottom-large">HELLO | BONJOUR | 你好</h1>
                    <p className="text-large panel__description margin-bottom">My name is Stefan and I currently work as a front-end developer at <strong>Sky in Leeds, UK</strong> and will code at every possible oppurtunity. Some say I have an addiction to it.</p>
                </div>
            </div>
            <button className="btn btn--standard btn--circle panel__btn"><i className="fa fa-arrow-down" aria-hidden="true"></i></button>
        </div>
    </div>

export default LandingPage;
