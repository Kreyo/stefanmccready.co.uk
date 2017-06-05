import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Imagespace = ({ background, children }) => {

    const imagespaceBackground = {
        backgroundImage: `url(${background})`,
    };

    return (
        <div className="imagespace-wrapper">
            <div className="imagespace">
                <div className="imagespace__background" style={imagespaceBackground}>
                    <div className="imagespace__content text-center">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

Imagespace.propTypes = {
    background: PropTypes.string.isRequired,
    children: PropTypes.any,
};

export default Imagespace; 