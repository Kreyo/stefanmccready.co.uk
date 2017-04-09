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
                    <h1 className="panel__heading margin-bottom margin-top-small">STEFAN MCCREADY</h1>
                    <div className="panel__heading-set margin-bottom">
                        <p className="panel__subheading">DESIGNER</p>
                        <p className="panel__subheading">DEVELOPER</p>
                        <p className="panel__subheading">CAR BORE</p>
                    </div>
                    <div className="panel__btn-set margin-top-large">
                        <button className="btn btn--alternative">DOWNLOAD MY RÈSUMÈ</button>
                        <button className="btn btn--alternative">CONTACT ME</button>
                    </div>
                </div>
            </div>
            <button className="btn btn--standard btn--circle panel__btn"><i className="fa fa-chevron-down" aria-hidden="true"></i></button>
        </div>
        <div className="panel text-center">
            <div className="panel__container">
                <div className="panel__content">
                    <h1 className="heading-medium margin-bottom-large">HELLO | BONJOUR | 你好</h1>
                    <img className="panel__image margin-bottom" src={require('../../images/stefan.png')} alt="Stefan McCready" />
                    <p className="text-large panel__description margin-bottom">My name is Stefan and I currently work as a front-end developer at <strong>Sky in Leeds, UK</strong> and will code at every possible oppurtunity. Some say I have an addiction to it.</p>
                </div>
            </div>
            <button className="btn btn--alternative btn--circle panel__btn"><i className="fa fa-chevron-down" aria-hidden="true"></i></button>
        </div>
        <div className="panel panel--alternative text-center">
            <div className="panel__container">
                <div className="panel__content">
                    <h1 className="heading-medium margin-bottom-large">THINGS I DO</h1>
                    <p className="text-large panel__description margin-bottom">5 years as a bedroom coder and working in the industry has taight me a few things, below is the simplest way to show the some of the skills that I do have.</p>
                    <div className="section group">
                        <div className="col span_1_of_3">
                            Hello
                        </div>
                        <div className="col span_1_of_3">
                            Hello
                        </div>
                        <div className="col span_1_of_3">
                            Hello
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn--standard btn--circle panel__btn"><i className="fa fa-chevron-down" aria-hidden="true"></i></button>
        </div>
        <div className="panel panel--stnadard text-center">
            <div className="panel__container">
                <div className="panel__content">
                    <h1 className="heading-medium margin-bottom-large">CONTACT-Y STUFF</h1>
                    <img className="panel__image margin-bottom" src={require('../../images/stefan.png')} alt="Stefan McCready" />
                    <p className="text-large panel__description margin-bottom">My name is Stefan and I currently work as a front-end developer at <strong>Sky in Leeds, UK</strong> and will code at every possible oppurtunity. Some say I have an addiction to it.</p>
                </div>
            </div>
        </div>
    </div>

export default LandingPage;
