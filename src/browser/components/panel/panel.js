import React from 'react';
import PropTypes from 'prop-types';

import IconBar from '../icon-bar/iconBar';

const Panel = ({ children, modifier, advanceButton, iconBar, isNarrow }) => {
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
            { iconBar ?
                <IconBar menuText="MENU" socialLink="https://www.linkedin.com/in/stefan-mccready-11507297/" socialLogo="linkedin" /> : null
            }
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
    iconBar: false,
    isNarrow: false,
};

Panel.propTypes = {
    children: PropTypes.children,
    modifier: PropTypes.string,
    advanceButton: PropTypes.bool,
    iconBar: PropTypes.bool,
    isNarrow: PropTypes.bool,
};

export default Panel;
