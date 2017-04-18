import React from 'react';
import PropTypes from 'prop-types';

const ImageSplitPanel = ({ children, imgSrc, imgAlt }) => {

    return (
        <div>
            <div className="panel__image">
                <img src={imgSrc} alt={imgAlt} />
            </div>
            <div className="panel__content panel__content--split">
                {children}
            </div>
        </div>
    );
};

ImageSplitPanel.defaultProps = {
    children: '',
    imgSrc: '',
    imageAlt: '',
};

ImageSplitPanel.propTypes = {
    children: PropTypes.children,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
};

export default ImageSplitPanel;
