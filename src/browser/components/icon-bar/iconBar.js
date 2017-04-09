import React from 'react';
import PropTypes from 'prop-types';

const IconBar = ({ socialLogo, socialLink, menuText }) =>
    <div className="icon-bar">
        <div className="icon-bar__left">
            <button className="icon-bar__icon">
                <i className="fa fa-bars" aria-hidden="true" />
                <span>{menuText}</span>
            </button>
        </div>
        <div className="icon-bar__right">
            <a href={socialLink} className="icon-bar__icon">
                <i className={`fa fa-${socialLogo}`} aria-hidden="true" />
            </a>
        </div>
    </div>;


IconBar.propTypes = {
    socialLogo: PropTypes.string.isRequired,
    socialLink: PropTypes.string.isRequired,
    menuText: PropTypes.string.isRequired,
};

export default IconBar;
