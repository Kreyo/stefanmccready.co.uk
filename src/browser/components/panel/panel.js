import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import StandardPanel from './templates/standardPanel';
import ImageSplitPanel from './templates/imageSplitPanel';

const Panel = ({ children, modifier, advanceButton, isNarrow, customBar, imgPanel, imgSrc, imgAlt }) => {
    const panelClassNames = classNames({
        panel: true,
        [`panel--${modifier}`]: true,
        'panel--narrow': isNarrow,
    });

    const advanceClassNames = classNames({
        btn: true,
        [`btn--${modifier}`]: true,
        'btn--circle': true,
        panel__btn: true,
    });

    return (
        <article className={panelClassNames}>
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
    isNarrow: false,
    imgPanel: false,
    imgSrc: '',
    imgAlt: '',
};

Panel.propTypes = {
    children: PropTypes.children,
    modifier: PropTypes.string,
    advanceButton: PropTypes.bool,
    customBar: PropTypes.validateDOMElem,
    isNarrow: PropTypes.bool,
    imgPanel: PropTypes.bool,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
};

export default Panel;
