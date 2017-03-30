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
                <div>
                    <h1 className="heading-large margin-bottom-small">STEFAN MCCREADY.</h1>
                    <h2 className="heading-small margin-bottom">PROFESSIONAL PIXEL DECORATOR.</h2>
                    <p className="text-normal margin-bottom">I DESIGN AND DEVELOP WEBSITES REALLY, NOTHING ELSE TO IT. </p>
                    <div className="panel__btn-set">
                        <button className="btn btn--standard panel__btn">SCROLL A BIT</button>
                        <span className="margin-left-small margin-right-small">OR</span>
                        <button className="btn btn--standard btn--mail">CONTACT ME</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="panel panel--alternative">
            <div className="panel__container">
                <div className="panel__content">
                    <h1 className="heading-medium margin-bottom-small">WHO AM I....</h1>
                    <p className="text-large panel__description margin-bottom-small">
                        I AM A LEEDS BASED WEB DEVELOPER AND DESIGNER CURRENTLY WORKING FOR A MEDIA COMPANY THAT YOU MAY, OR MAY NOT, HAVE HEARD OF.
                        SPECIALISING IN DESIGN AND ATOMIC DEVELOPMENT I HAVE BUILT EXPERIENCE IN BEING ABLE TO DELIVER SOLUTIONS TO WHAT CAN SEEM LIKE MAMMOTH SIZED PROPOSITIONS.
                    </p>
                    <p className="text-large panel__description margin-bottom-small">
                        IM OBSESSED WITH MOTORSPORT, PIZZA, DEVELOPMENT AND THE ODD CHICKEN WING AS WELL.
                    </p>
                    <button className="btn btn--alternative panel__btn">SCROLL A BIT MORE</button>
                </div>
            </div>
        </div>
        <div className="panel">
            <div className="panel__container">
                <div className="panel__content">
                    <h1 className="heading-medium margin-bottom">WHAT I DO....</h1>
                    <p className="text-large panel__description margin-bottom">
                        BY TRADE I AM A FRONT END DEVELOPER. MY MAIN SKILLS ARE IN THE FOLLOWING AREAS:
                    </p>
                    <ul className="panel-list margin-bottom">
                      <li className="panel-list__item">HTML5</li>
                      <li className="panel-list__item">CSS3</li>
                      <li className="panel-list__item">JAVASCRIPT</li>
                      <li className="panel-list__item">SEO</li>
                      <li className="panel-list__item">WORDPRESS</li>
                      <li className="panel-list__item">PHP</li>
                    </ul>
                    <p className="text-large panel__description margin-bottom">
                        THERE ARE THEN OF COURSE THE MORE DETAILED BITS OF TECH THAT I KNOW:
                    </p>
                    <ul className="panel-list">
                      <li className="panel-list__item">REACT.js</li>
                      <li className="panel-list__item">JQUERY</li>
                      <li className="panel-list__item">SASS</li>
                      <li className="panel-list__item">LESS</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

export default LandingPage;
