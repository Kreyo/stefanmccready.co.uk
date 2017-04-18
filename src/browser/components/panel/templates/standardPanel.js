import React from 'react';
import PropTypes from 'prop-types';

const StandardPanel = ({ children }) => {

    return (
        <div className="panel__container">
            <div className="panel__content">
                {children}
            </div>
        </div>
    );
};

StandardPanel.defaultProps = {
    children: '',
};

StandardPanel.propTypes = {
    children: PropTypes.children,
};

export default StandardPanel;
