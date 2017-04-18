import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ linkArray, logo }) => {
    const linkList = (
        linkArray.map((link, i) =>
            <li><a href={link.route}>{link.title}</a></li>
        )
    );

    return (
        <div className="nav-bar">
            <div className="nav-bar__left">
                <button>
                    SM
                </button>
            </div>
            <div className="nav-bar__right">
                <ul>
                    {linkList}
                </ul>
            </div>
        </div>
    );
};

NavBar.propTypes = {
    linkArray: PropTypes.arrayOf(PropTypes.object).isRequired,
    logo: PropTypes.string.isRequired,
};

export default NavBar;