import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Imagespace = ({ background, backgroundColour, children }) => {

    const imagespaceBackground = {
        backgroundImage: `url(${background})`,
    };

    const imagespaceColour = {
        backgroundColor: `#${backgroundColour}`,
    }

    return (
        <div className="imagespace-wrapper">
            <div className="imagespace" style={imagespaceColour}>
                <div className="imagespace__background" style={imagespaceBackground}>
                    <div className="imagespace__content text-center">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

Imagespace.defaultProps = {
    backgroundColour: '000000',
}

Imagespace.propTypes = {
    background: PropTypes.string.isRequired,
    backgroundColour: PropTypes.string,
    children: PropTypes.any,
};

export default Imagespace;
