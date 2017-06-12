import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({ iconName, setItem, link }) => {
    const iconClassnames = classNames({
        fa: true,
        [`fa-${iconName}`]: true,
        'icon-set__item': setItem,
    });

    return (
        <div className="icon-set__item-container">
            {link ? 
                <a href={link} target="_blank">
                    <i className={iconClassnames} />
                </a> :
                <i className={iconClassnames} />
            }
        </div>
    );
};

Icon.defaultProps = {
    link: '',
}

Icon.propTypes = {
    iconName: PropTypes.string.Required,
    link: PropTypes.string,
};

export default Icon; 