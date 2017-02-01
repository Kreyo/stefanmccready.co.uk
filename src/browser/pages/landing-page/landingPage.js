import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const LandingPage = () =>
    <div className="text-center">
      <div className="panel">
        <div className="panel__content">
            <h1 className="heading-large margin-bottom">Stefan McCready.</h1>
            <h2 className="heading-medium margin-bottom">Front End Developer.</h2>
        </div>
      </div>
      <div className="panel">
        <div className="panel__content">
            <img src="https://avatars.githubusercontent.com/StefanMcCready?s=200" className="profile-picture" alt="Stefan McCready" />
        </div>
      </div>
      <button className="advance">
          <i className="fa fa-angle-double-down" aria-hidden="true"></i>
      </button>
    </div>


export default LandingPage;