import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ children, modifier, advanceButton, iconBar }) => {
    let advanceModifier;

    const classNames = (`panel panel--${modifier}`);

    if (modifier === 'alternative') {
        advanceModifier = 'standard';
    } else {
        advanceModifier = 'alternative';
    }

    const advanceClassNames = (`btn btn--${advanceModifier} btn--circle panel__btn`);

    const IconBarComonent = (
        <div className="icon-bar">
            <div className="icon-bar__left">
                <button className="icon-bar__icon">
                    <i className="fa fa-bars" aria-hidden="true" />
                    <span>MENU</span>
                </button>
            </div>
            <div className="icon-bar__right">
                <button className="icon-bar__icon">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                </button>
            </div>
        </div>
    );

    return (
        <article className={classNames}>
            { iconBar ? IconBarComonent : null }
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
    advanceButton: true,
    iconBar: false,
};

Panel.propTypes = {
    children: PropTypes.children,
    modifier: PropTypes.string,
    advanceButton: PropTypes.bool,
    iconBar: PropTypes.bool,
};

export default Panel;
