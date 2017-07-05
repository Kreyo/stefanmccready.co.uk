import React from 'react';
import PropTypes from 'prop-types';

const ImageSplitPanel = ({ children, imgSrc, imgAlt, imgAlignment }) =>
    <div className="container">
        <div className="section group">
            { imgAlignment === 'left' ?
                <div>
                    <div className="col span_1_of_2">
                        <img className="margin-right-large panel__image" src={imgSrc} alt={imgAlt} />
                    </div>
                    <div className="col span_1_of_2">
                        <div className="verticaly-center">
                            {children}
                        </div>
                    </div>
                </div> :
                <div>
                    <div className="col span_1_of_2">
                        <div className="verticaly-center">
                            {children}
                        </div>
                    </div>
                    <div className="col span_1_of_2">
                        <img className="margin-left-large panel__image" src={imgSrc} alt={imgAlt} />
                    </div>
                </div>
            }
        </div>
    </div>;


ImageSplitPanel.defaultProps = {
    children: '',
    imgSrc: '',
    imgAlt: '',
    imgAlignment: '',
};

ImageSplitPanel.propTypes = {
    children: PropTypes.children,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    imgAlignment: PropTypes.string,
};

export default ImageSplitPanel;
