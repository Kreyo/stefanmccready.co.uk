import React from 'react';
import PropTypes from 'prop-types';

const ImageSplitPanel = ({ children, imgSrc, imgAlt }) => {

    return (
        <div>
            <div className="panel__split-container">
                <img className="panel__image" src={imgSrc} alt={imgAlt} />
            </div>
            <div className="panel__split-container">
                <div className="panel__content panel__content--v-aligned">
                    {children}
                </div>
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
