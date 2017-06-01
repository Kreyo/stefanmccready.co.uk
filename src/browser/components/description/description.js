import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Description = ({ header, text }) => {
    return (
        <div className="description">
            <h2 className="heading-small description__header">{header}</h2>
            <p className="description__text">{text}</p>
        </div>
    );
};
        
Description.propTypes = {
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Description; 