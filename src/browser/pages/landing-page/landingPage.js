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
            <div className="panel__container">
                <div className="text-center">
                    <h1 className="heading-large margin-bottom-small">STEFAN MCCREADY.</h1>
                    <h2 className="heading-medium">WEBSITE DESIGNER AND DEVELOPER.</h2>
                </div>
            </div>
            <button className="btn btn--standard panel__button">
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
            </button>
        </div>
        <div className="panel panel--alternative panel--narrow">
            <div className="panel__container">
                <div className="panel__content">
                    <h1 className="heading-medium margin-bottom-small">I MESS AROUND WITH PIXELS.</h1>
                    <p className="text-large panel__description">NOT MUCH ELSE TO IT REALLY. SINCE A YOUNG AGE BUILDING A WEBPAGE HAS ALWAYS BEEN AN INTEREST AND HAS HELPED ME FIND A CAREER THAT I LOVE. I HAVE ALSO FOUND DIFFERENT WAYS TO FIND BEAUTY IN SIMPLICITY.</p>
                </div>
                <div className="panel__icon">
                    <i className="fa fa-desktop panel__icon" aria-hidden="true"></i>
                </div>
            </div>
            <button className="panel__button btn btn--alternative">
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
            </button>
        </div>
        <div className="panel">
            <div className="panel__container">
                <div>
                    <h1 className="heading-large margin-bottom-small">STEFAN MCCREADY.</h1>
                    <h2 className="heading-medium">WEBSITE DESIGNER AND DEVELOPER.</h2>
                </div>
            </div>
            <button className="panel__button btn btn--standard btn__arrow">SCROLL</button>
        </div>
    </div>


export default LandingPage;
