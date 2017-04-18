import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ linkArray }) => {
    const linkList = (
        linkArray.map((link) =>
            <li><a href={link.route}>{link.title}</a></li>
        )
    );

    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__left">
                    <a className="navbar__logo" href="/"><img alt="" className="navbar__image" src={require('../../images/logo2.png')} width="50" height="50" />STEFAN MCCREADY</a>
                </div>
                <div className="navbar__right">
                    <ul className="navbar-list">
                        {linkList}
                    </ul>
                </div>
            </div>
        </div>
    );
};

NavBar.propTypes = {
    linkArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NavBar;
