import React from 'react';
import PropTypes from 'prop-types';

import StandardPanel from './templates/standardPanel';
import ImageSplitPanel from './templates/imageSplitPanel';

const Panel = ({ children, modifier, advanceButton, isNarrow, customBar, imgPanel, imgSrc, imgAlt }) => {
    let advanceModifier;
    let narrowClassname;

    if (isNarrow) {
        narrowClassname = 'panel--narrow';
    } else {
        narrowClassname = '';
    }

    const classNames = (`panel panel--${modifier} ${narrowClassname}`);

    if (modifier === 'alternative') {
        advanceModifier = 'standard';
    } else {
        advanceModifier = 'alternative';
    }

    const advanceClassNames = (`btn btn--${advanceModifier} btn--circle panel__btn`);
    
    return (
        <article className={classNames}>
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
