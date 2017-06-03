import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import StandardPanel from './templates/standardPanel';
import ImageSplitPanel from './templates/imageSplitPanel';

const Panel = ({ children, modifier, advanceButton, backgroundUrl, isHalf, customBar, imgPanel, imgSrc, imgAlt }) => {
    const panelClassNames = classNames({
        panel: true,
        [`panel--${modifier}`]: true,
        'panel--narrow': isHalf,
    });

    const advanceClassNames = classNames({
        btn: true,
        [`btn--${modifier}`]: true,
        'btn--circle': true,
        panel__btn: true,
    });

    let background;

    if (backgroundUrl) {
        background = {
            backgroundImage: `url(${backgroundUrl})`,
        }
    }

    return (
        <article className={panelClassNames} style={background}>
            {customBar}
            { imgPanel ?
                <ImageSplitPanel imgSrc={imgSrc} imgAlt={imgAlt}>
                    {children}
                </ImageSplitPanel> :
                <StandardPanel>
                    {children}
                </StandardPanel>
            }
            { advanceButton ?
                <button className={advanceClassNames}>
                    <i className="fa fa-chevron-down" aria-hidden="true" />
                </button> : null
            }
        </article>
    );
};

Panel.defaultProps = {
    children: '',
    modifier: 'standard',
    advanceButton: false,
    customBar: '',
    isHalf: false,
    imgPanel: false,
    imgSrc: '',
    imgAlt: '',
    backgroundUrl: '',
};

Panel.propTypes = {
    children: PropTypes.children,
    modifier: PropTypes.string,
    advanceButton: PropTypes.bool,
    customBar: PropTypes.validateDOMElem,
    isHalf: PropTypes.bool,
    imgPanel: PropTypes.bool,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    backgroundUrl: PropTypes.string,
};

export default Panel;
