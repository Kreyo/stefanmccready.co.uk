import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({ iconName, setItem }) => {
    const iconClassnames = classNames({
        fa: true,
        [`fa-${iconName}`]: true,
        'icon-set__item': setItem,
    });

    return (
        <div className="icon-set__item-container">
            <i className={iconClassnames} />
        </div>
    );
};

Icon.propTypes = {
    iconName: PropTypes.string.Required,
};

export default Icon; 