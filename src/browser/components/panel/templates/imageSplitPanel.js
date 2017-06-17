import React from 'react';
import PropTypes from 'prop-types';

const ImageSplitPanel = ({ children, imgSrc, imgAlt }) =>
    <div className="container">
        <div className="section group">
            <div className="col span_1_of_2">
                <div className="verticaly-center">
                    {children}
                </div>
            </div>
            <div className="col span_1_of_2">
                <img className="margin-left-large panel__image" src={imgSrc} alt={imgAlt} />
            </div>
        </div>
    </div>;


ImageSplitPanel.defaultProps = {
    children: '',
    imgSrc: '',
    imgAlt: '',
};

ImageSplitPanel.propTypes = {
    children: PropTypes.children,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
};

export default ImageSplitPanel;
