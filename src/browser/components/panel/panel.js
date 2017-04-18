import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ children, modifier, advanceButton, isNarrow, customBar }) => {
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
            <div className="panel__container">
                <div className="panel__content">
                    {children}
                </div>
            </div>
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
};

Panel.propTypes = {
    children: PropTypes.children,
    modifier: PropTypes.string,
    advanceButton: PropTypes.bool,
    customBar: PropTypes.validateDOMElem,
    isNarrow: PropTypes.bool,
};

export default Panel;
